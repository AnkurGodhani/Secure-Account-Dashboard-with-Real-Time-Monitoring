
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total : localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
    totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0
}

const cartSilce = createSlice({
     name:"cart",
     initialState:initialState,
     reducers:{
        addTocart:(state,action) =>{
            const store = action.payload
            console.log("store id",store)
            const index = state.cart.findIndex((item)=> item._id === store._id)
            console.log("index",index)

            if(index >=0){
                toast.error("The Bike Items In already In Cart")
                return
            }

            state.cart.push(store)
            
            state.totalItems++
            state.total += store.price

            localStorage.setItem("cart",JSON.stringify(state.cart))
            localStorage.setItem("total",JSON.stringify(state.total))
            localStorage.setItem("totalItems",JSON.stringify(state.totalItems))

            toast.success("Bike is AddtoCart")
        },
        resetTocart:(state) =>{
                state.cart =[]
                state.total = 0
                state.totalItems = 0

                localStorage.removeItem("cart")
                localStorage.removeItem("total")
                localStorage.removeItem("totalItems")
        },
        removeTocart : (state,action) =>{
            const storeId = action.payload
            const index = state.cart.findIndex((item)=> item._id === storeId)

            if(index >=0){
                state.totalItems--
                state.total -= state.cart[index].price
                state.cart.splice(index,1)

                localStorage.setItem("cart", JSON.stringify(state.cart))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
                // show toast
                toast.success("Course removed from cart")
            }
        }
     }
})

export const {addTocart,removeTocart,resetTocart} =cartSilce.actions

export default cartSilce.reducer