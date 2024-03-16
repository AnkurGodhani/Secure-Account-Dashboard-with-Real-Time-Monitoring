
const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoint = {
    LONIN_API : BASE_URL + "/login" ,//backend no paath aapavo
    SIGNUP_API : BASE_URL + "/signup",
    SENDOTP_API : BASE_URL + "/sendotp",
    CHANGE_PASSWORD_API : BASE_URL + "/ChagePassword",
    RESET_PASSWORD_API : BASE_URL + "/reset-Passworld",
    FORGETPASSWORD_API : BASE_URL + "/resetPasswordsendOTP"
}   

export const AccountDeleting = {
    DELETE_ACCOUNT : BASE_URL + "/deleteAccount"
}

export const profileEndpoint ={
    EDIT_PROFILE : BASE_URL + "/ProfileUpdate"
}

export const storeEndpoint ={
    GET_ALL_DETAIL_STORE : BASE_URL + "/getAllDetail",
    CREATE_STORE_ADMIN : BASE_URL + "/craetestore",
    DELETE_STORE_API : BASE_URL + "/deleteStoreItem",
    CREATE_BIKE_API : BASE_URL + "/craetestore/BikeDetail",
    CREATE_ENGINE_BIKE_API : BASE_URL + "/craetestore/BikeDetail/engineDetail",
    GET_STORE_ITEM_DETAIL_API : BASE_URL + "/getItemDetail",
    GET_TAG : BASE_URL + "/getBikeCatogory"
}

export const BookingEndpoint = {
    BOOKING_CUSTOMER_GOOD_API : BASE_URL + "/booking",
    ALL_BOOKING_INFORMATION_ABOUT_CUSTOMER_API : BASE_URL + "/myBooking",
    BOOKING_INFORMATION_ABOUT_CUSTOMER_API : BASE_URL + "/bookingTiket",
    CANCEL_TIKECT_ADMIN_API : BASE_URL + "/CancelTikect"
}

export const ContactusEndpoint ={
    CONTACT_US_API : BASE_URL + "/contactus"
}