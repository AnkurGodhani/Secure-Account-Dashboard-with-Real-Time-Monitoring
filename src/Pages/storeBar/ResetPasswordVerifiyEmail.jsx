import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/opreation/authAPI';


function ResetPasswordVerifiyEmail() {
    const [otp,setOtp] = useState("")
    const {loading,resetPasswords} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("RESET PASSWORD DATA FOR AUTH SILICES.....",resetPasswords)
        if(!resetPassword){
            navigate("/singup")
        }
    }, [])

    const handleonverfiyEmail = (e) =>{
        e.preventDefault()

        const {
        email,
        password
        } = resetPasswords

        dispatch(resetPassword(email,password,otp,navigate))
    }

  return (
    <div>
        {
            loading ? (<div>Loading....</div>) : (
                <div>
                    <h1>Wecome Reset-Password Otp Page</h1>
                    <form onSubmit={handleonverfiyEmail}>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        
                        renderInput={(props) => <input {...props} placeholder='-' />}
                        />
                        <button type='sumbit'>
                            Reset
                        </button>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default ResetPasswordVerifiyEmail