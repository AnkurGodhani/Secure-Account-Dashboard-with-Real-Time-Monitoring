const mongoose = require("mongoose")
const Notications = new mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default: Date.now()
    },
    time:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default: Date.now(),
        expires:"2d"
    }
})

module.exports = mongoose.model("notication",Notications)