
const mongoose = require('mongoose')
const mailSender = require('../utils/mailSender')
const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default: Date.now(),
        expires: 5 * 60
    }
})


async function sendVerificationEmail(email,otp){
    try {
        const mailResponse =await mailSender(
            email,
            "Verification Email",
            `Email OTP ia ${otp}`
        )
        console.log("Email Respoces:",mailResponse)
    } catch (error) {
        console.log("Error Occured while sending the Email.")
        throw error;
    }   
}

otpSchema.pre('save',async function(next){
    if(this.isNew){
        await sendVerificationEmail(this.email,this.otp)
    }
    next();
})

module.exports = mongoose.model("OTP",otpSchema);