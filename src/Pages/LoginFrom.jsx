import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../services/opreation/authAPI';
import ForgetPassword from './ForgetPassword';
import { Link } from 'react-router-dom';

function LoginFrom() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [fromData,setFromData] = useState({
        email:"",
        password: "",
    })

    const {email,password} = fromData

    const handleOnChange = (e) =>{
        setFromData((prevData) =>({
            ...prevData,
            [e.target.name] : e.target.value
        }))
    }

    const handleOnSumit = (e) =>{
        e.preventDefault();
        dispatch(login(email,password,navigate))
    }
  return (
    <div className='flex items-center bike -mt-1'>
        <form onSubmit={handleOnSumit} className='flex flex-col gap-y-4 bottom-10 ml-[340px]'>
            <label className='flex flex-col gap-y-1'>
                <p className=' font-serif font-bold text-white ml-2'>E-mail Address <sup className='text-red-500'>*</sup></p>
                <input type="text" onChange={handleOnChange} placeholder='Email-Address' id='email' name='email' value={email} required className='py-1 px-2 border rounded-md border-yellow-600 outline-none text-white font-bold font-serif   w-[250px] bg-transparent'/>
            </label>
            <label>
                <p className=' font-serif font-bold text-white ml-2'>Password <sup className='text-red-500'>*</sup></p>
                <input type="password" id='password' onChange={handleOnChange} name='password' value={password} placeholder='Enter Your Password' required className='py-1 px-2 border rounded-md border-yellow-600 outline-none text-white font-bold font-serif   w-[250px] bg-transparent'/>
            </label>
            <div className='flex justify-end items-end text-blue-600 text-sm'>
                <Link to="/forget-password">
                    ForgetPassword
                </Link>
            </div>
            <button type="submit" className='p-2 bg-yellow-500 rounded-md text-white font-serif font-bold'> 
                Login 
            </button>
        <div>
            <h1 className='text-sm font-serif text-white'>Don't have an account?<span className='text-green-500 font-bold'> <Link to="/signup">Signup Here</Link> </span></h1>
        </div>
        </form> 

    </div>
  )
}

export default LoginFrom