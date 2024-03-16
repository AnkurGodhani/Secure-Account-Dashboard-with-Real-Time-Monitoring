
const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config();

exports.auth = async(req,res,next)=>{
    try {
        
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");

        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token Messing."
            })
        }

        try {
            const decode = await jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user = decode;
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:"token invild."
            })
        }
        next();

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
            
        })
    }
}

exports.isCustomer = async(req,res,next) =>{
   
     try {
        const userDetail = await User.findOne({email:req.user.email})

        if((userDetail.accountType) !== "Customer"){
            return res.status(401).json({
                success:false,
                message:"Onely Customer Is Success."
            })
        }
        next();
     } catch (error) {

        console.log("User Not Verify.",error)
        res.status(500).json({
            success:false,
            message:"User Not Verfiy."
        })
     }

}

exports.isAdmin = async(req,res,next) =>{
    try {
        const USerDetil = await User.findOne({email:req.user.email})
        console.log(USerDetil)

        if((USerDetil.accountType) !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"The a Proteced Router only Acepect Admin."
            })
        }
        next();

    } catch (error) {

        console.log("User Not Verify.",error)
        res.status(500).json({
            success:false,
            message:"User Not Verfiy."
        })
     }
        
    
}