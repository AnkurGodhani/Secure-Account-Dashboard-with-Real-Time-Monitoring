const mongoose = require("mongoose");

const ExternalModel = new mongoose.Schema({
    Engine:{
        // TODO:EngineMoters nu Model Baki che Plaze Impalimat.
        type:mongoose.Schema.Types.ObjectId,
        ref:"EngineMoters",
    },
    Ground_Clearance:{
        type:String,
        required:true
    },
    Mileage:{
        type:String,
        required:true
    },
    seat:{
        type:String,
        default:"Comfortable seat"
    },
    USB_Charger:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("External",ExternalModel)