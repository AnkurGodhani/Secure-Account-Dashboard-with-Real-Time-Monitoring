import toast from "react-hot-toast"
import { setToken, setLoading } from "../../Silces/authSlices"
import {apiConnector} from '../apiConneter'
import {ContactusEndpoint, endpoint} from '../api'
import { setUser } from "../../Silces/profileSlices"


export function login(email,password,navigate){
    
    return async (dispatch) =>{
        const toastId = toast.loading("Loading....")
        dispatch(setLoading(true))
        try {

            const response = await apiConnector("POST",endpoint.LONIN_API,{ 
                email,
                password
            })
            console.log("Login Responces.......",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success("Login SuccessFully.")
            dispatch(setToken(response.data.token))
            const userImage = response.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            dispatch(setUser({ ...response.data.user, image:userImage}))
            localStorage.setItem("token",JSON.stringify(response.data.token))
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/dashbord/myprofile")
        } catch (error) {
            console.log("LONGIN API ERROR.....",error)
            toast.error("Logoin Faild")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function signup(firstName,lastName,password,cpassword,email,otp,navigate){
    
    return async(dispatch) =>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        try{
            console.log("OTP AHE......",otp)
            const response = await apiConnector("POST",endpoint.SIGNUP_API,{
                firstName,
                lastName,
                email,
                password,
                cpassword,
                otp,
            })
           

            console.log("SIGNUP APT RESPONCE.....",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success("Singup SucessFully.")
            navigate("/login")

        }catch(error){
            console.log("SINGUP API ERROR.....",error)
            toast.error("Singup Faild.")
            navigate("/signup")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function sendOTP(email,navigate){
    return async(dispatch) =>{
        dispatch(setLoading(true))
        try{

            const response = await apiConnector("POST",endpoint.SENDOTP_API,{email,checkUserPresent:true})

            console.log("SEND OTP SUCFULLY.....",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success("SendOtp SucessFully.")
            navigate("/verifiye-Email")
        }
        catch(error){
            console.log("SENDOTP API ERROR....",error)
            toast.error("User is Alraedy Existings")
        }
        dispatch(setLoading(false));
    }
}

export function resetPasswordsendOTP(email,navigate){
    return async(dispatch) =>{
        dispatch(setLoading(true))
        try{

            const response = await apiConnector("POST",endpoint.FORGETPASSWORD_API,{email,checkUserPresent:true})

            console.log("SEND OTP SUCFULLY.....",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success("SendOtp SucessFully.")
            navigate("/ResetPasswordverifiye-Email")
        }
        catch(error){
            console.log("SENDOTP API ERROR....",error)
            toast.error("User Not Existings")
        }
        dispatch(setLoading(false));
    }
}

export function Logout(navigate){
    return (dispatch) =>{
        dispatch(setToken(null))
        dispatch(setUser(null))
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("SucessFully Logout")
        navigate("/")
    }
}

export function resetPassword(emails,nowpassword,otp,navigate){
    return async(dispatch) =>{
        dispatch(setLoading(true))
        try {

            const response = await apiConnector("PUT",endpoint.RESET_PASSWORD_API,{emails,nowpassword,otp})

            console.log("RESPONCE OF CHANGE-PASSWORD API..",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success("Reset-password SucessFully")
            navigate("/login")

        } catch (error) {
            console.log("RESET-PASSWORD API ERROR.....",error)
            toast.error("Reset-password is Failed")
        }
        dispatch(setLoading(false))
    }
}

export function Contactus(data){
    return async() =>{
        const toastId = toast.loading("Loading...")
       try {
            const Responce = await apiConnector("POST",ContactusEndpoint.CONTACT_US_API,data);
            console.log("Responce Aaviyo che....",Responce);

            if(!Responce.data.sucess){
                throw new Error(Responce.data.message)
            }
            toast.success("SucessFully Sent.")
       } catch (error) {
            console.log("CONTACT_US API ERROR.....",error);
            toast.error("Internet Problem.")
       }
       toast.dismiss(toastId)
    }
}

export function UpadateInfo(data,token){
    return async() =>{
        const toastId = toast.loading("Loading...")
       try {
            const Responce = await apiConnector("POST",endpoint.UPDATE_WEBSIT_INFO,data,{
                 Authorization:`Bearer ${token}`
            });
            console.log("Responce Aaviyo che....",Responce);

            // if(!Responce.data.success){
            //     throw new Error(Responce.data.message)
            // }
            toast.success("SucessFully Sent.")
       } catch (error) {
            console.log("UPADTE_APP NOTIFICATION API ERROR.....",error);
            toast.error("Not Upadteing user Message.")
       }
       toast.dismiss(toastId)
    }
}

export const Notifications = async(token) =>{
    let result = [];
    try {
        const response = await apiConnector("POST",endpoint.SHOW_NOTIFICATIONS,null,{
            Authorization:`Bearer ${token}`
        })

        console.log("Responce aaya...",response)

        if(!response.data.success){
            throw new Error(response.data.message)
        }

        result = response?.data?.data
        console.log("result",result)
    } catch (error) {
        console.log("UPADTE_APP NOT SHOW NOTIFICATION API ERROR.....",error);
    }
    return result;
}