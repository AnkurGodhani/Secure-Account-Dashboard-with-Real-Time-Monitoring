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
    <div>
        {
            loading ? (<div>Loading....</div>) : (
                <div>
                    <h1>Wecome Otp Page</h1>
                    <form onSubmit={handleonverfiyEmail}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        
                        renderInput={(props) => <input {...props} placeholder='-' />}
                        />
                        <button type='sumbit'>
                            Signup
                        </button>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail