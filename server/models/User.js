
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {
         type:String,
         required : true,
         trim:true
     },
     lastName:{
        type:String,
        required:true,
        trim:true
     },
     image:{
         type:String
     }
     ,
     email:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     cpassword :{
        type:String,
        required:true
     },
     accountType:{
        type:String,
        required:true,
        default:"Customer",
        enum:["Admin","Customer"]
     },
     otp:{
       type:String,
       required:true,
       
     },
     additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
     },
     Store:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"store",
         required:true,
     }],
     Bookings:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"userBooking",
       
     }],
})



module.exports = mongoose.model("user",userSchema)