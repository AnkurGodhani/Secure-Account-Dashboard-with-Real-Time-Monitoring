import toast from "react-hot-toast"
import { apiConnector } from "../apiConneter"
import { BookingEndpoint } from "../api"

export function Booking(data,token,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Booking....")
        try {
            const response = await apiConnector("POST",BookingEndpoint.BOOKING_CUSTOMER_GOOD_API,data,{
                Authorization:`Bearer ${token}`
            })

            console.log("BOOKING COMPLIED...",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            
            toast.success("Booking is SucessFully.")
            navigate("/dashbord/myBookingbike")

        } catch (error) {
            console.log("BOOKING API ERROR....",error)
            toast.error("Bike is AllReady Booking.")
        }
        toast.dismiss(toastId)
    }
}

export const GetAllDetailBooking = async(token) =>{
    let result = []
    const toastId = toast.loading("Find Booking Bike")
    try {
        const response = await apiConnector("GET",BookingEndpoint.ALL_BOOKING_INFORMATION_ABOUT_CUSTOMER_API,null,{
            Authorization:`Bearer ${token}`
        })

        console.log("All Geting Information About Bike Booking",response)
        
        if(!response.data.sucess){
            throw new Error(response.data.message)
        }
        result = response?.data?.getBookingDetail
        toast.success("Booking Bike")

    } catch (error) {
        console.log("GETING BOOKING API ERROR....",error)
        toast.error("NOT BOOKING BIKE")
    }
    toast.dismiss(toastId)
    return result;
}

export const GetDetailBooking = async(token)=>{
    let result = []
    const toastId = toast.loading("Find Booking Bike")
    try {
        const response = await apiConnector("GET",BookingEndpoint.BOOKING_INFORMATION_ABOUT_CUSTOMER_API,null,{
            Authorization:`Bearer ${token}`
        })

        console.log("All Geting Information About Bike Booking",response)
        
        if(!response.data.sucess){
            throw new Error(response.data.message)
        }
        result = response?.data?.Enroll?.Bookings

        toast.success("Booking Bike")

    } catch (error) {
        console.log("GETING BOOKING API ERROR....",error)
        toast.error("NOT BOOKING BIKE")
    }
    toast.dismiss(toastId)
    return result;
}

export function CancelTicket(BookingId,token){
    return async(dispatch) =>{
        const toastId = toast.loading("Loading")
        try {
            const response = await apiConnector("DELETE",BookingEndpoint.CANCEL_TIKECT_ADMIN_API,{BookingId},{
                 Authorization:`Bearer ${token}`
            })

            console.log("Cancel Ticket Responce api....",response)

            if(!response.data.sucess){
                throw new Error(response.data.message)
            }

            toast.success("Cancel Tikect")
        } catch (error) {
            console.log("TIKECT CANCEL API ERROR...",error)
            toast.error("Not Cancel Tikect")
        }
        toast.dismiss(toastId)
    }
}