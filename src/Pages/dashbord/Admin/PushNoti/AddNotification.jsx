import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { FaNoteSticky } from "react-icons/fa6";
import { UpadateInfo } from '../../../../services/opreation/authAPI';

const AddNotification = () => {
    const {
        handleSubmit,
        register,
        formState :{errors}
    } = useForm();
    const {token} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()
    const onsumbit = (data) =>{
        const forData = new FormData();
        forData.append("title",data.title)
        forData.append("time",data.time)
        forData.append("description",data.description)
        dispatch(UpadateInfo(forData,token))
    }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
       <div className='flex flex-col justify-center items-center mt-10 gap-y-16'>
        <div className='flex items-center gap-x-3 text-4xl font-bold font-mono tracking-wide uppercase hover:underline'>Push Notification <FaNoteSticky/></div>
            <form onSubmit={handleSubmit(onsumbit)} className='flex justify-center items-center flex-col w-full drop-shadow-md border outline-none p-8 gap-y-5 select-none'>
                <label className='flex flex-col '> 
                    <span className='font-semibold text-lg mx-1.5'>Title <span className='text-red-500'>*</span></span>
                    <input type="text" placeholder='Enter The Title' {...register("title",{required:true,minLength:10})} className='border-2 border-gray-500 p-2 rounded-md outline-none w-[300px]'/>
                    {
                        errors.title && <span className='text-red-500 mx-1.5 font-semibold mt-1'>Title is Requied.</span>
                    }
                </label>
                <label className='flex flex-col '>
                    <span className='font-semibold text-lg mx-1.5'>Time<span className='text-red-500'>*</span></span>
                    <input type="time" placeholder='Enter The Title' {...register("time",{required:true})} className='border-2 border-gray-500 p-2 rounded-md outline-none w-[300px]'/>
                    {
                        errors.time && <span className='text-red-500 mx-1.5 font-semibold mt-1'>Time is Requied.</span>
                    }
                </label>
                <label className='flex flex-col'>
                    <span className='font-semibold text-lg mx-1.5'>Description<span className='text-red-500'>*</span></span>
                    <input type="text" placeholder='Enter The Title' {...register("description",{required:true,minLength:20})} className='border-2 border-gray-500 p-2 rounded-md outline-none w-[300px]'/>
                    {
                        errors.description && <span className='text-red-500 mx-1.5 font-semibold mt-1'>Minium 20 letter is Requied.</span>
                    }
                </label>
                <button type="submit" className='py-2 px-3 rounded-md uppercase text-white bg-gray-700 hover:bg-gray-800 transition-all duration-150 ease-in '>
                    Push Notification
                </button>
            </form>
       </div>
    </div>
  )
}

export default AddNotification