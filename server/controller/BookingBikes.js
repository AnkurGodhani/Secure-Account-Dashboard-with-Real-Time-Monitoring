const Register = require("../models/Booking");
const User = require("../models/User");

exports.BookingNow = async(req,res) =>{
    try {
        
        const {Name,PhoneNo,Liesunce,Date,time,BikeId} =req.body

        const userId = req.user.id;
        if(!Name || !PhoneNo || !Liesunce || !BikeId || !Date || !time ){
            return res.status(400).json({
                sucess:false,
                message:"All Filed are Requied"
            })
        }

        const BikeExit = await Register.findOne({BikeId:BikeId})
        // console.log("Date is This",BikeExit.BikeId)
        // console.log("Booking Date This",BikeExit.Date)
        if(BikeExit){
           for (let index = 0; index < BikeExit.Date.length; index++) {
                const findDate = await Register.findOne({Date:Date})
                console.log("Date OF THE ID:",findDate)
                if(findDate){
                   return res.status(400).json({
                         sucess:false,
                         message:"Bike is AllReady Booking."
                   })
               }
               console.log("looping Bike Date",BikeExit.Date)
           }
        }


        const Booking = await Register.create({
            Name,
            PhoneNo,
            Liesunce,
            Date,
            time,
            BikeId,
        })

        console.log("Booking Time Limit:",Booking)

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {
                $push:{
                    Bookings:Booking._id,
                    expires:`1h`
                }
            },{new:true}
        ).populate("Bookings").exec();

        res.status(200).json({
            sucess:true,
            message:"Bike Booking SucessFully.",
            data:updateUser
        })

    } catch (error) {
        console.log("Not Booking Your Bike...",error)
        return res.status(500).json({
            sucess:false,
            message:"Not Booking Bike , plaze Try Agine...."
        })
    }
}

exports.getAllBookingBike = async (req,res) =>{
     try {

        const getBookingDetail = await Register.find({})

        if(!getBookingDetail){
            return res.status(400).json({
                sucess:false,
                message:"Booking Bike is Not Found."
            })
        }
        
        res.status(200).json({
            sucess:true,
            message:"All Detail Find By Booking User.",
            getBookingDetail,
            // ExtraData:faceingData
        })
     } catch (error) {
        console.log("Not geting All Detail",error)
        res.status(500).json({
            sucess:true,
            message:"Not Items Booking."
        })
     }
}

exports.getBookingDetail = async(req,res) =>{
    try{
        
        const userId = req.user.id

        const Enroll = await User.findById(userId,{Bookings:true}).populate("Bookings");

        if(!Enroll){
            return res.status(400).json({
                sucess:false,
                message:"Not Found Ticket"
            })
        }

        return res.status(200).json({
            sucess:true,
            message:"SucessFully Ticket Find.",
            Enroll
        })

    }catch(error){
        console.log("Not geting All Detail",error)
        res.status(500).json({
            sucess:false,
            message:"Not Items Booking Ticket."
        })
    }
}

exports.DeleteBooking = async(req,res) =>{
    try {
      const {BookingId} = req.body
      const userid = req.user.id
      
      const CancelTicket = await Register.findByIdAndDelete({_id:BookingId});

      if(!CancelTicket){
        return res.status(400).json({
            sucess:false,
            message:"Ticket Already Cancel."
        })
      }

      const userCancelTicket = await User.findByIdAndUpdate(userid,{
        $pull:{
            Bookings:BookingId
        }
      },{new:true}).exec();

     return res.status(200).json({
         sucess:true,
         message:"Ticket is Cancel Withn 2 Min.",
         userCancelTicket
      })
        
    } catch (error) {
        console.log("Internal Ticket Cancel Error",error)
        res.status(501).json({
            sucess:false,
            message:"Internal Error"
        })
    }
}