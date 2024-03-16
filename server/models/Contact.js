const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender')

const Contactus = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    messages:{
        type:String,
        required:true
    },
    CrateAt:{
        type:Date,
        default: Date.now(),
        expires: "24h"
    }
})



Contactus.post('save', async function(doc,next){
    try {
        const mailResponses = await mailSender(
            doc.email,
            "Problem Solving Mail",
            `message : ${doc.messages} in 24h`
        )
        console.log("Email Respoces:",mailResponses)
     } catch (error) {
        console.log("Error Occured while sending the Email.")
        throw error;
     }
     next();
})


module.exports = mongoose.model("Contact",Contactus)