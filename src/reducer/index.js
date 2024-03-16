import { combineReducers } from '@reduxjs/toolkit'
import authSlices from '../Silces/authSlices'
import profileSlices from '../Silces/profileSlices'
import cartSlices from '../Silces/cartSlices'

const rootReducer = combineReducers({
    auth:authSlices,
    profile:profileSlices,
    cart:cartSlices
})

export default rootReducer