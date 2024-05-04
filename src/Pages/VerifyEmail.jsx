import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/opreation/authAPI';


function VerifyEmail() {
    const [otp,setOtp] = useState("")
    const {loading,signupData} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("SIGNUP DATA FOR AUTH SILICES.....",signupData)
        if(!signupData){
            navigate("/singup")
        }
        
    }, [])

    const handleonverfiyEmail = (e) =>{
        e.preventDefault()

        const {
        firstName,
        lastName,
        password,
        cpassword,
        email,
        } = signupData

        dispatch(signup(firstName,lastName,password,cpassword,email,otp,navigate))
    }

  return (
    <div className='flex flex-col justify-center items-center mt-[150px]'>
        {
            loading ? (<div className='loader'>Loading....</div>) : (
                <div className='flex flex-col justify-center items-center shadow-current p-10 shadow-lg '>
                    <h1 className='text-3xl font-bold text-green-800 select-none uppercase'>Wecome Otp Page</h1>
                    <form onSubmit={handleonverfiyEmail} className='m-5'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props) => <input {...props} placeholder='-' style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }} className="w-[48px] lg:w-[60px] border-0 bg-gray-500 rounded-[0.5rem] text-white aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-500 mx-2"  containerStyle={{
                            justifyContent: "space-between",
                            gap: "0 6px",
                          }} />}
                        />
                        <button type="submit"
                        className="w-full bg-yellow-500 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900" >
                                 Verify Email
                        </button>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail