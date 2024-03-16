import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    signupData: null,
    resetPasswords:null,
    loading:false,
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    store : localStorage.getItem("Store") ? JSON.parse(localStorage.getItem("Store")) : null
}

const authSlices = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,value){  
            state.token = value.payload
        },
        setLoading(state,value){
            state.loading = value.payload
        },
        setSignupData(state,value){
            state.signupData = value.payload
        },
        setStore(state,value){
            state.store = value.payload
        },
        setresetPasswords(state,value){
            state.resetPasswords = value.payload
        }
    }
})

export const {setToken,setLoading,setSignupData,setStore,setresetPasswords} =authSlices.actions;

export default authSlices.reducer;