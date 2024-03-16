const profile = require('../models/Profile')
const User = require('../models/User')

exports.ProfileUpdate = async(req,res) =>{
    try {
       const {
         firstName = "",
         lastName = "",
         gender ="",
         age ="",
         dateOfBirth="",
       } = req.body
       console.log(firstName)
       console.log("User id",req.user.id)
       const id = req.user.id
       const UserExist = await User.findById(id)
       const UserProfile = await profile.findById(UserExist.additionalDetails)
       console.log(UserProfile);
       const user = await User.findByIdAndUpdate(id,
            {
               firstName,
               lastName
            }
         )
         await user.save()

         UserProfile.dateOfBirth = dateOfBirth,
         UserProfile.gender = gender
         UserProfile.age = age,

       await UserProfile.save()

       const upadteUserDetail = await User.findById(id).populate("additionalDetails").exec()

       res.status(200).json({
           success : true,
           message: "User Profile SucessFully Update.",
           upadteUserDetail
       })

    } catch (error) {
        console.log("Error For :",error)
        res.status(500).json({
            message : "Intetrnal DB Error.",
            success :false,
            error:error.message
        })
    }

}

exports.deleteProfile = async(req,res) =>{
     try {
      
       const id = req.user.id
       console.log(id)
       const DeletingAccount = await User.findByIdAndDelete({_id:id})
       console.log("account:",DeletingAccount)
       
       if(!DeletingAccount){
          return res.status(400).json({
             sucess:false,
             message:"Not Maching Your Email"
          })
       }

      return res.status(200).json({
          success:true,
          message:"USer Account Successfully Deleting.",
          DeletingAccount,
                 })

     } catch (error) {
      console.log("DataBase me Error Aagaya je",error)
      res.status(500).json({
         success:false,
         message:"Intetrnal Server Error",
         error:error.message
      })
      
     }
}