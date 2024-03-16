import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : null
}

const profileSlices = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user = value.payload
        },
        setLoading(state,value){
            state.loading = value.payload
        }
    }
})

export const {setLoading,setUser} = profileSlices.actions

export default profileSlices.reducer
