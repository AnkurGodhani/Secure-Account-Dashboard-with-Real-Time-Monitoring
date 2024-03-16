
const express = require('express')

const router = express.Router();

const { singup,login,sendotp,changePassword,resetPassword,resetPasswordsendOTP} = require('../controller/Auth')
const {ProfileUpdate,deleteProfile} = require('../controller/Profile')
const {StoreDetil, getAllDetail, deleteStore,bikeDetails,EngineDetail,getDetailStore,} = require('../controller/storeDetil')
const {auth, isAdmin,isCustomer} = require('../middleware/auth')
const {Quarey} = require('../controller/Quari_Page')
const {BookingNow,getAllBookingBike,getBookingDetail, DeleteBooking} = require("../controller/BookingBikes")


router.post("/signup",singup)
router.post("/login",login)
router.post("/sendotp",sendotp)
router.put("/ChagePassword",auth,changePassword)
router.delete("/deleteAccount",auth,deleteProfile)
// TODO : THE API TESTING IS PENDDING....
router.put("/reset-Passworld",resetPassword)
router.post("/resetPasswordsendOTP",resetPasswordsendOTP)

router.put("/ProfileUpdate",auth,ProfileUpdate)

router.post("/craetestore",auth,isAdmin,StoreDetil)
router.get("/getAllDetail",auth,getAllDetail)
router.post("/getItemDetail",auth,getDetailStore)
router.delete("/deleteStoreItem",auth,deleteStore)
router.post("/craetestore/BikeDetail",auth,isAdmin,bikeDetails)
router.post("/craetestore/BikeDetail/engineDetail",auth,isAdmin,EngineDetail)


router.post("/contactus",Quarey)
router.get("/bookingTiket",auth,isCustomer,getBookingDetail)

router.post("/booking",auth,isCustomer,BookingNow)
router.get("/myBooking",auth,isAdmin,getAllBookingBike)
router.delete("/CancelTikect",auth,isAdmin,DeleteBooking)


module.exports = router