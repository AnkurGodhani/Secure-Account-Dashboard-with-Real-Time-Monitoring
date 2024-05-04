const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otpGenerator = require('otp-generator')
const OTP = require('../models/OTP')
const mailSender = require('../utils/mailSender')
const Profile = require('../models/Profile')
const Notification = require('../models/Notification')
const { MdTurnedIn } = require('react-icons/md')
require('dotenv').config()

exports.singup = async (req,res) =>{
   try{

    const {firstName,lastName,email,password,cpassword,otp,image} = req.body

    if(!firstName || !lastName  || !password || !cpassword || !email || !otp){
        return res.status(400).json({
            sucess :false,
            message :"All Filed are Requied.."
        })
    }

    if(password !== cpassword){
        return res.status(400).json({
            sucess:false,
            message: "passworld and Cpassworld is Difernt palce Enter Some Password."
        })
    }

    const ExistEmail = await User.findOne({email})
    if(ExistEmail){
        return res.status(400).json({
            sucess:false,
            message:"Email is Already Exist"
        })
    }


    const response = await OTP.find({email}).sort({createAt:-1}).limit(1)
    console.log(response)

    if(response.length === 0){
        return res.status(400).json({
            sucess:false,
            message:"The OTP is not vaild"
        })
    }else if(otp !== response[0].otp){
        return res.status(400).json({
            sucess:false,
            message:"The OTp is not vaild."
        })
    }

    const hashpassword = await bcrypt.hash(password,10)
    const hashcpassword = await bcrypt.hash(password,10)

    const profileDetail = await Profile.create({
        gender:null,
        age:null,
        dateOfBirth:null
    })

    const user = await User.create({
        firstName,
        lastName,
        password:hashpassword,
        cpassword:hashcpassword,
        email,
        otp,
        additionalDetails:profileDetail._id,
        image,
    })

     res.status(200).json({
        user,
        sucess:true,
        message : "Regsister Sucessfully."
    })

   }catch(error){
       console.log("internal Error OF DataBase:",error)
       return res.status(500).json({
            sucess:false,
            message : "Internal DataBase Error"
       })
   }
    
}

exports.login = async (req,res) =>{
    try {
        const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            sucess:false,
            message:"Requied all Filed."
        })
    }

    const user = await User.findOne( {email} ).populate("additionalDetails")

    if(!user){
        return res.status(400).json({
            sucess:false,
            message:"Email is Not Resister."
        })
    }

    if(await bcrypt.compare(password ,user.password)) {
         const token = jwt.sign({
            email:user.email,
            id:user._id,
            accountType:user.accountType
         },process.env.JWT_SECRET,{
            expiresIn:"24h"
         })

         user.token = token
         user.password = undefined
         user.cpassword = undefined

        const options ={
           expires: new Date(Date.now() + 3 * 60 * 60 * 1000),
           httpOnly: true,
        }

        res.cookie("token",token,options).status(200).json({
            sucess:true,
            user,
            token,
            message:"User Login sucssfully."
        })
        
    }
    else{
        return res.status(400).json({
            sucess:false,
            message:"invild passworld."
        })
    }
    } catch (error) {
        console.log("Login Failed Plaze Try Agin.",error)
        return res.status(500).json({
            sucess:false,
            message:"Try Login Failed Plaze Try Agin"
    })
    }
}

exports.sendotp = async (req,res) =>{
    try {
        const {email} = req.body

        const checkUserPresent = await User.findOne({email})

        if(checkUserPresent){
            return res.status(400).json({
                sucess:false,
                message:"User is Already Present."
            })
        }

        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets : false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        // var result = await OTP.findOne({otp:otp})
        console.log("Result is Generate OTP funce")
        console.log("OTP",otp)
   
        
          const otpPayload = {email,otp}
          const otpBody = await OTP.create(otpPayload)
          console.log("OTP Body",otpBody)

          res.status(200).json({
             sucess:true,
             message:"OTP Sent Sucessfully",
             otp
          })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ success: false, error: error.message })
    }
}

exports.resetPasswordsendOTP = async(req,res) =>{
        try {
        
        const {email} = req.body

        const checkUserPresent = await User.findOne({email})

        if(!checkUserPresent){
            return res.status(400).json({
                sucess:false,
                message:"User is Not Present."
            })
        }

        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets : false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        console.log("Result is Generate OTP funce")
        console.log("OTP",otp)
        
          const otpPayload = {email,otp}
          const otpBody = await OTP.create(otpPayload)
          console.log("OTP Body",otpBody)

          res.status(200).json({
             sucess:true,
             message:"OTP Sent Sucessfully",
             otp
          })
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ success: false, error: error.message }) 
        }
}

exports.changePassword = async (req,res)=>{
   try {
    
    const userDetail = await User.findById(req.user.id)

    const {oldpassword,newpassword} = req.body

    

    const updatepassworld = await bcrypt.compare(oldpassword,userDetail.password)

    if(!updatepassworld){
       return res.status(400).json({
           success:false,
           message:"Incorrect Passworld."
       })
    }   

    const Hashingnewpassword = await bcrypt.hash(newpassword,10)

    const UpdateUserDetail = await User.findByIdAndUpdate(req.user.id,{password:Hashingnewpassword},{new:true})

     try {
        const EmailSend = await mailSender(
           UpdateUserDetail.email,
           "Change Passworld",
           `Your Passswold is Sucessfully Change.`
        )
       console.log("Sending the Email",EmailSend)
     } catch (error) {
       console.log("Sending Email Error...",error)
       console.log(error)
       
     }

     return res.status(200).json({
        success:true,
        message:"Change Password Sucessfully..."
     })

   } catch (error) {

    console.log("Upadate Password Ocuured Error",error)
    return res.status(501).json({
        sucess:false,
        message:"DeatBase Error"
    })
    
   }
}

exports.resetPassword = async (req,res) =>{
    try {

        const {emails,nowpassword,otp} = req.body

        if(!emails || !nowpassword || !otp){
            return res.status(400).json({
                sucess:false,
                message:"All Filed are Requied"
            })
        }
        const user1 = await User.findOne({email:emails})

        if(!user1){
            return res.status(400).json({
                    sucess:false,
                    message:"User is Not Resister."
                })
            }

            const response = await OTP.find({email:emails}).sort({createAt:-1}).limit(1)
            console.log(response)

        if(response.length === 0){
            return res.status(400).json({
                sucess:false,
                message:"The OTP is not vaild"
            })
        }else if(otp !== response[0].otp){
            return res.status(400).json({
                sucess:false,
                message:"The OTp is not vaild."
            })
    }
        
      

        const nowpasswordBycpt = await bcrypt.hash(nowpassword,10)

        const updatepassworld = await User.findOneAndUpdate({email:emails},{
                    password:nowpasswordBycpt,
                    cpassword:nowpasswordBycpt,
                    otp:otp

        },{new:true})
        return res.status(200).json({
            sucess:true,
            message:"Reset-Passworld SucessFully..",
            updatepassworld
        })
        
    } catch (error) {
        console.log("ERROR IN FORGET PASSWORLD...",error)
        res.status(500).json({
            sucess:false,
            message:"Passworld Is Not Change Becomes Internal Error"
        })
    }
}

exports.userNotification = async(req,res) =>{
    try {
        const {title,time,description} = req.body

        if(!title || !time || !description){
            return res.status(400).json({
                success:false,
                message:"All Filed are Requied."
            })
        }

        const Info=await Notification.create({title,time,description});

        res.status(200).json({
            success:true,
            message:"SucessFully Sending Notification",
            notifiacation:Info
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"not Sending Notification."
        })
    }
}

exports.getNotifications = async(req,res) =>{
    try {
        const Notifications = await Notification.find({},{title:true,description:true,Date:true,time:true})
        if(!Notifications){
            return res.status(400).json({
                success:false,
                message:"Not Droup Your Message"
            })
        }

        res.status(200).json({
            success:true,
            message:"Getting a Notifications.",
            data:Notifications
        })
    } catch (error) {
        console.log("NOTIFICATION SERVER ERROR...",error)
        res.status(500).json({
            success:false,
            message:"Get all Notifiacation Not Allow."
        })
    }
}