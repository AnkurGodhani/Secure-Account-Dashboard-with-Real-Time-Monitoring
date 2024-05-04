
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { resetPasswordsendOTP } from '../services/opreation/authAPI';
import Footer from './home/Footer';
import {  setresetPasswords } from '../Silces/authSlices';
import toast from 'react-hot-toast';
const ForgetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fromData,setFromData] = useState({
        email:"",
        password:"",
    })

    const {email,password} = fromData

    const handleonChange = (e) =>{
        setFromData((perData) =>({
            ...perData,
            [e.target.name] : e.target.value
        }))
    }

    const handleonSubmit = (e) =>{

        e.preventDefault();
        const resetPasswordData ={
            ...fromData
        }

        dispatch(setresetPasswords(resetPasswordData))
        dispatch(resetPasswordsendOTP(fromData.email,navigate))
    }
  return (
    <div className=' relative flex flex-col items-center justify-center top-[120px] gap-4'>
        {/* Forget-Password Paths  */}
        <div>
            
        </div>
        <div className='flex flex-col items-center gap-y-5'>
            <h1 className='text-2xl'>Forget Password</h1>
            <form onSubmit={handleonSubmit} className='flex flex-col justify-center items-center gap-y-2 '>
                <label>
                    <p className=' font-serif font-bold '>Email <sup className='text-red-500'>*</sup></p>
                    <input type="email" value={email} placeholder='Enter Your Email' name='email' onChange={handleonChange} required className='  px-2 py-1 rounded-md  text-black border border-red-500 w-[260px]' />
                </label>
                <label>
                    <p className=' font-serif font-bold'>New Password<sup className='text-red-500'>*</sup></p>
                    <input type="password" name="password" value={password} placeholder='Enter Your new Password' onChange={handleonChange} className='rounded-md px-2 py-1 text-black border border-red-500 w-[260px]' />
                </label>
                <button type="submit" className='mb-10 button-56 mt-3' role="button">
                    Reset
                </button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default ForgetPassword