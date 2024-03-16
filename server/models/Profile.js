const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    gender:{
        type:String
    },
    age:{
        type:Number
    },
    dateOfBirth:{
        type:String,
    },
    
})

module.exports = mongoose.model("Profile",ProfileSchema)