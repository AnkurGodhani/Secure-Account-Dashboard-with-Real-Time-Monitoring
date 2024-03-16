
const mongoose = require("mongoose")


const EngineMotersSchema = new mongoose.Schema({
    MaxPower:{
      type:String,
      required:true
    },
    Displacement:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    FuleSystem:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("EngineMoters",EngineMotersSchema)