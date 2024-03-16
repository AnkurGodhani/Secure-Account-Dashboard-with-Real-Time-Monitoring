const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    PhoneNo:{
        type:Number,
        required:true
    },
    Liesunce:{
        type:String,
        required:true
    },
    BikeId:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default: Date.now(),
    } 
})  

module.exports = mongoose.model("userBooking",BookingSchema)