import { setLoading } from "../../Silces/authSlices"
import { endpoint, profileEndpoint } from "../api"
import { apiConnector } from "../apiConneter"
import toast from "react-hot-toast"
import {AccountDeleting} from '../api'

// const {
//     EDIT_PROFILE
// } = profileEndpoint

export function profileUpdate(firstName,lastName,gender,age,dateOfBirth,token){
      return async(dispatch) =>{
         dispatch(setLoading(true))
         console.log("AAgaya ge..",gender)
         
         try {
            const response = await apiConnector("PUT",profileEndpoint.EDIT_PROFILE,{
                firstName,
                lastName,
                gender,
                age,
                dateOfBirth
            },{ Authorization: `Bearer ${token}`})

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Profile Upadate SucessFully")

         } catch (error) {
             console.log("EDIT PROFILE API ERROR......",error)
             toast.error("Profile Not Updateing")
         }
         dispatch(setLoading(false))
      }
}

export function DeletingAccount(token,navigate){
    return async(dispatch) =>{
        dispatch(setLoading(true))
        console.log("Delete Account ye pochegayo")
        try {
            const response = await apiConnector("DELETE",AccountDeleting.DELETE_ACCOUNT,null,{
                 Authorization:`Bearer ${token}`
            })

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success(
                "Delete Account SucessFully"
            )
            navigate("/")
        } catch (error) {
            console.log("ACCOUNT DELETE API ERROR....",error)
            toast.error("Delete Account Process Failed")
        }
        dispatch(setLoading(false))
    }
}

export function changePassword(oldpassword,newpassword,token){
    return async(dispatch) =>{
        dispatch(setLoading(true))
        try {

            const response = await apiConnector("PUT",endpoint.CHANGE_PASSWORD_API,{newpassword,oldpassword},{
                Authorization : `Bearer ${token}`
            })

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("Change-Password SucessFully")
            
        } catch (error) {
            console.log("CHANGE PASSWORD API ERROR.....",error)
            toast.error("Change-password Failed")
        }
        dispatch(setLoading(false))
    }
}