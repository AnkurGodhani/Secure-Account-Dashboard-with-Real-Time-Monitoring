import toast from "react-hot-toast"
import { apiConnector } from "../apiConneter"
import { storeEndpoint } from "../api"
import { setLoading } from "../../Silces/authSlices"

export const getAllStoreDetil = async(token) =>{
   
        let result = []

        const toastId = toast.loading("loading....")
        
        try {
            const responce = await apiConnector("GET",storeEndpoint.GET_ALL_DETAIL_STORE,null,
                {
                    Authorization: `Bearer ${token}`
                }
            )

            console.log("API GETALLSTROE GETAIL.....",responce)

            if(!responce.data.success){
                throw new Error(responce.data.message)
            }
            result = responce?.data?.storeDetil
            toast.success("Get All detail perjenct.")

        } catch (error) {
            console.log("ALL CAR STROGE DETAIL API ERROR....",error)
            toast.error("Not Acess The Store")
        }
        toast.dismiss(toastId)
        return result
    
}

export function cratestore(data,token,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Colleting Information")
        dispatch(setLoading(true))
        try {
            
            const responce = await apiConnector("POST",storeEndpoint.CREATE_STORE_ADMIN,data,
            {
                "content-type":"multipart/form-data",
                Authorization: `Bearer ${token}`
            }
            )

            console.log("CRAETE STORE API RESPONCE......",responce)

            
            if(!responce.data.success){
                throw new Error(responce.data.message)
            }

            toast.success("Colleting Information SucessFully")
            console.log(responce.data.data.Store.slice(-1)[0])
            navigate(`/dashbord/Admin/cratestore/BikeInformation/${responce.data.data.Store.slice(-1)[0]}`)

        } catch (error) {
            console.log("CRIATE STORE API ERROR....",error)
            toast.error("Not Crating Store")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function DeletingStore(storeId,token){
    return async(dispatch) =>{
       const toatId = toast.loading("Loading....")
       dispatch(setLoading(true))
       try {
        const responce = await apiConnector("DELETE",storeEndpoint.DELETE_STORE_API,storeId,{
            Authorization: `Bearer ${token}`
        })

         if(!responce.data.success){
             throw new Error(responce.data.message)
         }

         toast.success("Deleting Items SucessFully in store")

       } catch (error) {
            console.log("DELETE STORE ITEMS API ERROR....",error)
            toast.error("Can`t Not Deleting the Items in Store.")
       }
        dispatch(setLoading(false))
        toast.dismiss(toatId)
    }
}

export function CreateBikeInformation(data,token,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Bike-Information Colleting..")
        dispatch(setLoading(true))
        
         try {

            const responce = await apiConnector("POST",storeEndpoint.CREATE_BIKE_API,data,{
                "content-type":"multipart/form-data",
                Authorization: `Bearer ${token}`
            })

            console.log("Create Bike Responce.....",responce)

            if(!responce.data.success){
                throw new Error(responce.data.message)
            }

            toast.success("Bike-Information Colleting SucessFully")
            navigate(`/dashbord/Admin/cratestore/BikeInformation/Engine/${responce.data.data.MoreDetils.slice(-1)[0]._id}`)
            
         } catch (error) {
            console.log("CREATE BIKE INFORMATION DETAIL API ERROR...",error)
            toast.error("Not Crating Bike Informatipon.")
         }
         dispatch(setLoading(false))
         toast.dismiss(toastId)

    }
}

export function CrateEngineOfBike(data,token,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Creating Store..")
        dispatch(setLoading(true))
        try {
            const responce = await apiConnector("POST",storeEndpoint.CREATE_ENGINE_BIKE_API,data,{
                "content-type":"multipart/form-data",
                 Authorization: `Bearer ${token}`
            })

            if(!responce.data.success){
                throw new Error(responce.data.message)
            }

            toast.success("Crating Store SucessFully.")
            navigate("/")
        } catch (error) {
            console.log("CREATE BIKE ENGINE INFORMATION DETAIL API ERROR...",error)
            toast.error("Not Crating Store.")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export const getStoreItemDetail = async(data,token) =>{
    
    const toastId = toast.loading("Loading..")
    let result = []
     console.log("itms",data)
     try {
        const responce = await apiConnector("POST",storeEndpoint.GET_STORE_ITEM_DETAIL_API,data,{
            Authorization: `Bearer ${token}`
        })

        console.log("ITEM GETING DETAIL IN API......",responce)

        if(!responce.data.success){
            throw new Error(responce.data.message)
        }


        result = responce?.data?.data
        toast.success("GETING STORE ITEM DETAIL")
     } catch (error) {
        console.log("CAR STROGE ITEM DETAIL API ERROR....",error)
        toast.error("Not Acess The Store-Item")
     }
     toast.dismiss(toastId)
     return result
}

