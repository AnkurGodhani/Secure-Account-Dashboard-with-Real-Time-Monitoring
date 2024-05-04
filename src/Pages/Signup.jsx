import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { sendOTP, signup } from '../services/opreation/authAPI';
import { setSignupData } from '../Silces/authSlices';
import backgrounImage from '../image/signup-image.jpg'
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData,setFromData] = useState({
     firstName:"",
     lastName:"",
     password:"",
     cpassword:"",
     email:"",
  })

  const {firstName,lastName,password,cpassword,email} = formData;

  const onChangehadler = (e) =>{
     setFromData((prevData)=>({
        ...prevData,
        [e.target.name] : e.target.value
     }))

    
  }
  const onSumbithadler = (e) =>{
    e.preventDefault()
    console.log("Pache Gau Bahio")

    if(password !== cpassword){
       toast.error("Some chareter enter...")
       return
    }
    const singupData = {
       ...formData
    }


    dispatch(setSignupData(singupData))
    dispatch(sendOTP(formData.email,navigate))
  


    setFromData({
     firstName:"",
     lastName:"",
     password:"",
     cpassword:"",
     email:"",
    })
  }
  return (
    <div className=' flex justify-center items-center w-full -mt-1 signup'>
          
        <form onSubmit={onSumbithadler} className=' flex lg:flex-col justify-center gap-y-3 mt-[10%] mb-[13.5%]'>
            <div className='flex gap-x-5 w-full'>
              <label className='flex flex-col gap-y-1'>
                  <p className='flex items-center text-xl  font-medium text-gray-800 mx-2'>FirstName <sup className='text-red-500'>*</sup></p>
                  <input type="text" name="firstName" id="firstName" placeholder='Enter The FirstName' value={firstName} onChange={onChangehadler} required className=' outline-none bg-red-200 text-yellow-900 p-2 rounded-md font-bold'/>
              </label>
              <label className='flex flex-col gap-y-1'>
                  <p className='flex items-center text-xl  font-medium text-gray-800 mx-2'>lastName<sup className='text-red-500'>*</sup></p>
                  <input type="text" name="lastName" id="lastName" placeholder='Enter The LastName' value={lastName} onChange={onChangehadler} required className=' outline-none bg-red-200 text-yellow-900 p-2 rounded-md font-bold'/>
              </label>
            </div>
            <label className='flex flex-col gap-y-1'>
               <p className='flex items-center text-xl  font-medium text-gray-800 mx-2'>Email<sup className='text-red-500'>*</sup></p>
                <input type="email" name="email" value={email} placeholder='Enter Your Email' onChange={onChangehadler} required className=' outline-none bg-red-200 text-yellow-900 p-2 rounded-md font-bold'/>
            </label>
            <div div className='flex gap-x-5 w-full'>
                 <label className='flex flex-col gap-y-1'>
                     <p className='flex items-center text-xl  font-medium text-gray-800 mx-2'>Password<sup className='text-red-500'>*</sup></p>
                     <input type="password" name="password" placeholder='Enter Your Password' value={password} onChange={onChangehadler} required className='outline-none bg-red-200 text-yellow-900 p-2 rounded-md font-bold'/>
                 </label> 
                 <label className='flex flex-col gap-y-1'>
                     <p className='flex items-center text-xl  font-medium text-gray-800 mx-2'>Confirm Password<sup className='text-red-500'>*</sup></p>
                     <input type="password" name="cpassword" placeholder='Enter Your Password' value={cpassword} onChange={onChangehadler} required className=' outline-none bg-red-200 text-yellow-900 p-2 rounded-md font-bold'/>
                 </label>
            </div>
            <button type="submit" className='button-9'>
               Signup
            </button>
        </form>
    </div>
  )
}

export default Signup