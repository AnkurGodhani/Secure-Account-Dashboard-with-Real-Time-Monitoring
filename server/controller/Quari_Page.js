
const Contact = require('../models/Contact')
const mailSender = require('../utils/mailSender')


exports.Quarey = async(req,res) =>{
   try {
    const {FirstName,LastName,Email,messages} = req.body

    if(!FirstName || !LastName || !Email || !messages){
        return res.status(400).json({
            sucess:false,
            message:"All Filed are Requied."
        })
    }

    const CreateConact = await Contact.create({
       FirstName,
       LastName,
       Email,
       messages 
    })

     await mailSender(
        Email,
        "Problem Sloving",
        `FirstName:${FirstName},lastName:${LastName},And Your Message is a ${messages}`
    )
    

    return res.status(200).json({
        sucess:true,
        messages:"Your Message Queri SucessFully Sending Email About Instaters.",
        CreateConact
    })
  
   
   } catch (error) {

    console.log(error)
    res.status(500).json({
        sucess:false,
        message:"Not Sending For Quriye Email."
    })
    
   }
}


