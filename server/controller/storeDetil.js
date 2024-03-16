const EngineMoters = require("../models/EngineMoters");
const External = require("../models/External");
const User = require("../models/User");
const store = require("../models/store");
const { imageUploderCloudinary } = require("../utils/imageUploder");
require('dotenv').config();


exports.StoreDetil = async (req,res) =>{
     try {
        
      const id = req.user.id
        
      let {BikeName,description,price,BrandName} =req.body;

      console.log(BikeName,description,price,BrandName)
      
      const thambiln = req.files.thambilnPhoto

      console.log("thambiln",thambiln)

     if(!BikeName || !thambiln || !description || !price || !BrandName){
        return res.status(400).json({
            success:false,
            message:"All Filed are requierd."
        })
     }

     const thambilnPhoto = await imageUploderCloudinary(
         thambiln,
         process.env.FOLDER_NAME
     )

     console.log(thambilnPhoto)
     
     const StoreInfo = await store.create({
        BikeName,
        thambiln:thambilnPhoto.secure_url,
        description,
        price,
        BrandName
     })

     console.log("Crate Coure Detil",StoreInfo);

     const UpdateStoreDetail = await User.findByIdAndUpdate({_id:id},{
          $push:{   
            Store:StoreInfo._id
          }
        },
        {new:true}
         )

         console.log("UPDATE YOUR USERID",UpdateStoreDetail)
        
      res.status(200).json({
         success:true,
         message:"BIKE IS SUCESSFULLY UPADTED IN STORE.",
         data:UpdateStoreDetail
      })
     } catch (error) {
        console.log(error),
        res.status(500).json({
            success:false,
            message:"NOT UPADTED YOUR BIKE IN STORE."
        })
        
     }

}

exports.getAllDetail = async(req,res) =>{
    try {
        
      const storeDetil = await store.find({},{
          BikeName:true,
          price:true,
          description:true,
          thambiln:true,
          BrandName:true
      }).populate({
           path:"MoreDetils",
           populate:{
               path:"Engine"
           }
      }).exec();

      if(!storeDetil){
         return res.status(400).json({
            success:false,
            message:"Not Crating Store."
         })
      }

      return res.status(200).json({
         success:true,
         message:"Getinng All Detail SucessFully.",
         storeDetil
      })
    } catch (error) {

      console.log(error)
      return res.status(501).json({
         success:false,
         message:error.message
      })
      
    }
}

exports.deleteStore = async (req,res) =>{
    try{
      const {storeId} = req.body
      const userId = req.user.id;
      const deleteStore = await store.findByIdAndDelete({_id:storeId})
      console.log(deleteStore)
      
      if(!deleteStore){
         return res.status(400).json({
            success:false,
            message:"Invild Your user."
         })
      }

      const UdateUser = await User.findByIdAndUpdate(userId,{
         $pull:{
            Store:deleteStore._id
         },
         
      },{new:true})

      return res.status(200).json({
         success:true,
         message:"Sucssfully Deleting Store Item.",
         UdateUser,
         deleteStore
      })


    }catch(error){
      console.log(error)
      return res.status(501).json({
         success:false,
         message:"Not Deleting the item."
      })

    }
}

exports.bikeDetails = async(req,res) =>{
   try {

    const {Ground_Clearance,Mileage,seat,USB_Charger,storeId} = req.body

    if(!Ground_Clearance || !Mileage || !USB_Charger || !storeId){
         return res.status(400).json({
             success:false,
             message:"All Filed are Requied"
         })
    }
    
    const createBike = await External.create({Ground_Clearance,Mileage,seat,USB_Charger})

    const upadateBike = await store.findByIdAndUpdate(
       storeId,
       {
           $push:{
              MoreDetils:createBike._id
           }
       },
       {new:true}
    ).populate({
        path:"MoreDetils",
        populate:{
            path:"Engine"
        }
    }).exec()

    res.status(200).json({
       success:true,
       message:"BikeDetails is sucessfully Crating.",
       data:upadateBike
    })
      
   } catch (error) {
      console.log("Store Detail is Not Found...",error)
      res.status(500).json({
         success:false,
         message:"Internal Server Error"
      })
   }
}

exports.EngineDetail = async(req,res) =>{
    try {

      const {MaxPower,Displacement,Type,FuleSystem,EngineMotersId} = req.body

      if(!MaxPower || !Displacement || !Type || !FuleSystem || !EngineMotersId){
         return res.status(400).json({
             success:false,
             message:"all Fileld are Requied."
         })
      }

      const CreateEngine = await EngineMoters.create({MaxPower,Displacement,Type,FuleSystem})
      console.log("CrateEngine Store Sucessfully",CreateEngine)

      const updateEngine = await External.findByIdAndUpdate(
         EngineMotersId,
         {
            $push:{
               Engine:CreateEngine._id
            }
         },
         {new:true}
      ).populate("Engine").exec()

      res.status(200).json({
         success:true,
         message:"EngineDetail Crating SucessFully.",
         updateEngine
      })
      
    } catch (error) {
      console.log("Not Crating a Engine Detail...",error)
      return res.status(500).json({
         success:false,
         message:"Not Crating Engining Store."
      })
    }
}

exports.getDetailStore = async(req,res) =>{
    try {
        const {StoreId} = req.body
        console.log(StoreId)
        if(!StoreId){
            return res.status(400).json({
               success:false,
               message:"All Filed Are Requied."
            }) 
        }

        const getItem = await store.findById(StoreId).populate({
            path:"MoreDetils",
            populate:{
               path:"Engine"
            }
        }).exec();

        if(!getItem){
           return res.status(404).json({
               success:false,
               message:"Items Is Not Found"
           })
        }

        return res.status(200).json({
             success:true,
             message:"Items Detail Sucessfully Faceing",
             data:getItem
        })

    } catch (error) {
       console.log("Not Geting A Store Item Details..",error)
       res.status(500).json({
         success:false,
         message:"Not Geting A Store Item Details.."
       })
    }
}


