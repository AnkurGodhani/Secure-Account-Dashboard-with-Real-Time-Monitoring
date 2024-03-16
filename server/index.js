
const express = require('express');
const router = require('./router/routers');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const { cloudinaryConnect } = require('./config/cloudinary');
const fileUpload = require('express-fileupload')
const app = express();

 require('dotenv').config();

 let PORT = process.env.PORT || 4000;

 app.use(express.json())
 app.use(cookieParser())

 app.use(cors({
       origin:"http://localhost:3000",
       credentials:true
 }))

 app.use(
   fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
 )

 cloudinaryConnect();

//middleWare
 app.use("/api/v1",router)

 app.get("/",(req,res)=>{
    res.send("HELLO EVERY ONE....");
 })
 


 require('./config/database').DBconnetion();


 app.listen(PORT, () =>{
    console.log(`Sever is Starting For port Number ${PORT}`);
 })