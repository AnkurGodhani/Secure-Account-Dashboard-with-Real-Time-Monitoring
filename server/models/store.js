const  mongoose = require("mongoose");


const stores = new mongoose.Schema({
    BikeName:{
        type:String,
        required:true,
        trim:true
    },
    thambiln:{
        type:String
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    BrandName:{
        type:String,
        required:true
    },
    MoreDetils:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"External"
    }]
})

module.exports = mongoose.model("store",stores)