
import React, { useEffect, useState } from 'react'
import { MdSaveAs } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { changePassword, profileUpdate } from '../../services/opreation/profileAPI';
import {DeletingAccount} from '../../services/opreation/profileAPI'

const Setting = () => {
    
    const {user} = useSelector((state) => state.profile)
    const {token} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData,setFromeData] = useState(
        {
            firstName: `${user?.firstName}`,
            lastName:`${user?.lastName}`,
            gender: `${user?.gender}`,
            age:`${user?.age}`,
            dateOfBirth:`${user?.dateOfBirth}`
        }
    )

    const {firstName,gender,dateOfBirth,age,lastName} = formData

    // console.log(formData)

    const handleOnChange = (e) =>{
        setFromeData((perData)=>({
            ...perData,
            [e.target.name] : e.target.value
        }))
    }

    
    const handleonSumbit = (e) =>{
        e.preventDefault();
        dispatch(profileUpdate(firstName,lastName,gender,age,dateOfBirth,token))
    }

    const handleonDeleting = (e) =>{
        e.preventDefault();
        dispatch(DeletingAccount(token,navigate))
    }

    // change passworld mate model

    const [fromData1,setFromeData1] = useState({
        oldpassword :"",
        newpassword:""
    })

    const {oldpassword,newpassword} = fromData1

    const handleOnChangePassworld = (e) =>{
        setFromeData1((perData) =>({
            ...perData,
            [e.target.name] : e.target.value
        }))
    }

    const handleonSumbitPassworld = (e) =>{
        e.preventDefault();
        dispatch(changePassword(oldpassword,newpassword,token))
        setFromeData1({
            oldpassword:"",
            newpassword:""
        })
    }


  return (
    <div className='flex justify-center items-center gap-y-3 flex-col w-full p-2.5'>
        {/* <div className='flex justify-start items-start'>
            <button className='flex items-center gap-2' onClick={
                () =>{
                    navigate("/dashbord/myprofile")
                }
            }>
              <IoChevronBackSharp/>
               <p>back</p>
            </button>
        </div> */}
        <div className='flex flex-col justify-center w-10/12 shadow-md shadow-orange-100 border'>
            <h1 className=' relative text-center text-xl top-5 text-green-900 font-bold'>Profile Information</h1>
            <form onSubmit={handleonSumbit} className='flex flex-col justify-center items-center w-full p-7'>
                <div className='flex items-center  justify-between px-10 w-full'>
                    <label className='w-[50%]'>
                        <p className=' text-md font-semibold text-gray-900'>Display FirstName</p>
                        <input type="text" placeholder={`${user?.firstName}`} name='firstName' value={firstName ? firstName : `${user?.firstName}`}  onChange={handleOnChange} readOnly disabled className='px-9'/>
                    </label>
                    <label>
                        <p className=' text-md font-semibold text-gray-900'>Diaplay LastName</p>
                        <input type="text" placeholder={`${user?.lastName}`} name='lastName' value={lastName ? lastName : `${user?.lastName}`} onChange={handleOnChange} readOnly disabled className='px-9' />
                    </label>
                </div>
                <div className='flex justify-between px-10 items-center w-full gap-x-[450px]'>
                    <label className='w-[50%]'>
                        <p className=' text-md font-semibold text-gray-900'>Date OF Birth</p>
                        <input type="date" name="dateOfBirth" placeholder='dd/mm/yy' value={dateOfBirth ? dateOfBirth : `${user?.additionalDetails?.dateOfBirth}`} onChange={handleOnChange} className='w-full border border-gray-600 outline-none rounded-md p-1 mt-1 '/>
                    </label>
                    <label className='w-[50%]'>
                        <p className=' text-md font-semibold text-gray-900'>Gender</p>
                         <div onChange={handleOnChange} className=' relative -left-16 flex justify-between mt-0.5 font-semibold opacity-70'>
                            Male <input type="radio" name="gender" value={ gender ? "male" : `${user?.additionalDetails?.gender}`}/>
                            Female <input type='radio' name='gender' value={ gender ??  `${user?.additionalDetails?.gender}` } />
                            Other <input type='radio' name='gender' value={ gender ??  `${user?.additionalDetails?.gender}`} />
                         </div>
                    </label>
                </div>
                <label className='w-full px-10'>
                    <p>age</p>
                    <input type="number" placeholder={`${user?.additionalDetails?.age}`} value={age ? age : `${user?.additionalDetails?.age}`} name='age' onChange={handleOnChange}  className='w-[220px] border border-gray-600 outline-none rounded-md p-1 mt-1 '/>
                </label>
                <button type='submit' className='bg-green-500 flex items-center gap-x-2 text-white font-bold uppercase py-2 px-3 mt-3 rounded-lg'>
                     Save <MdSaveAs/>
                </button>
            </form>
        </div>
        {/* change Passworld Selection  */}
        <div className='flex items-center justify-center shadow-md shadow-orange-100 border w-10/12 p-3 flex-col'>
            <h1 className='text-blue-500 font-bold text-xl'>Change Passworld Selection</h1>
            <form onSubmit={handleonSumbitPassworld} className='flex items-center justify-center gap-x-16 w-full px-16 mt-2'>
                <label className='w-[50%] text-md font-semibold'>
                    <p>NewPassworld</p>
                    <input type="password" name='newpassword' value={newpassword} onChange={handleOnChangePassworld} required className='border w-full py-1 rounded-md border-gray-700 outline-none px-1 '/>
                </label>
                <label className='w-[50%] text-md font-semibold'>
                    <p>OldPassword</p>
                    <input type="password" name='oldpassword' value={oldpassword} onChange={handleOnChangePassworld} required className='border w-full py-1 rounded-md border-gray-700 outline-none px-1 ' />
                </label>
                <button type="submit" className='bg-green-500 flex items-center gap-x-2 text-white font-bold uppercase py-2 px-3 mt-3 rounded-lg'>
                    Save <MdSaveAs/>
                </button>
            </form>
        </div>
        {/* Deleteing Account Karvamate  */}
        <div className=' relative flex flex-col shadow-md shadow-orange-100 border w-10/12 gap-y-5 p-3 bg-red-100 text-gray-500  justify-center items-center select-none'>
            <h1 className='text-xl text-red-800 font-bold select-none'>ACCOUNT DELETEING SELECTION</h1>
            <p className='w-[98%] text-center mx-auto font-semibold text-lg'>"Account deleted. Thank you for being part of our community. Your data has been removed for privacy. For any questions, reach out to support. Farewell and all the best for your future endeavors. We appreciate your time with us."</p>
            <button onClick={handleonDeleting} className='bg-red-500 flex items-center gap-x-2 text-white px-3 py-2 rounded-lg hover:opacity-0.8'>
                DELETE <MdDeleteForever/>
            </button>
        </div>
    </div>
  )
}

export default Setting