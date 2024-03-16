
const mongoose = require('mongoose');
require('dotenv').config();

exports.DBconnetion = () =>{
    mongoose.connect(process.env.MOONGOOSE_URL).then(console.log("DBCOnnetion Sucessfull..")).catch((error)=>{
            console.error(error)
            console.log("Dbconncetion Error aagaya ge...")
            process.exit(1);
        })
}

