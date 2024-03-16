import React from 'react'
import { useForm } from 'react-hook-form'
import bg1 from '../../image/contct-us_Image.jpg'
import bike from '../../image/contct-us_Image1.jpg'
import Footer from '../home/Footer'
import { useDispatch } from 'react-redux'
import { Contactus } from '../../services/opreation/authAPI'

const Contact = () => {
    const {
        handleSubmit,
        register,
        formState:{errors}
    } = useForm();

    const dispatch = useDispatch();

    const isSubmit = (data) =>{
        const formData = new FormData();
        formData.append("FirstName",data.FirstName);
        formData.append("LastName",data.LastName);
        formData.append("Email",data.Email);
        formData.append("messages",data.messages);
        console.log("Data is console log",data)

        dispatch(Contactus(formData))
    }
  return (
    <div className='-mt-1 w-full flex flex-col items-center justify-center'>
            <div className='w-full'>
                <div className='About h-[200px] flex flex-col justify-center items-center font-bold gap-y-2 mb-10'>
                    <h1 className='text-3xl text-white font-mono'>Contact Us</h1>
                    <p className='font-mono'>Home {"> "}<span className='text-yellow-400'>contact-us</span></p>
                </div>
                    <h1 className='text-5xl flex justify-center items-center'>Contact To Branch</h1>
                <div className='flex w-11/12 items-center justify-center mx-auto mb-20'>
                    <form onSubmit={handleSubmit(isSubmit)} className='w-[40%] flex justify-center items-start flex-col mt-10 gap-y-5 px-16 py-8'>
                        <label className='w-full'>
                            <p className='font-bold mx-2'>FirstName <span>*</span></p>
                            <input type="text" name="FirstName" {...register("FirstName",{required:true})} className='w-full border rounded-md py-1.5 mt-1 p-2 bg-yellow-400 outline-none text-blue-900 font-normal' placeholder='Enter the FirstName'/>
                            {
                                errors.FirstName && (
                                    <span className='text-red-500 mx-2'>FirstName is Required</span>
                                )
                            } 
                        </label>
                        <label className='w-full'>
                            <p className='font-bold mx-2'>LastName <span>*</span></p>
                            <input type="text" name="LasttName" {...register("LastName",{required:true})} className='w-full border rounded-md py-1.5 mt-1 p-2 bg-yellow-400 outline-none text-blue-900 font-normal' placeholder='Enter The LastName'/>
                            {
                                errors.LastName && (
                                    <span className='text-red-500 mx-2'>LastName is Required</span>
                                )
                            }
                        </label> 
                        <label className='w-full'>
                            <p className='font-bold mx-2'>E-mail <span>*</span></p>
                            <input type="email" name="Email" {...register("Email",{required:true})} className='w-full border rounded-md py-1.5 mt-1 p-2 bg-yellow-400 outline-none text-blue-900 font-normal' placeholder='Enter The E-mail'/>
                            {
                                errors.Email && (
                                    <span className='text-red-500 mx-2'>Email is Required</span>
                                )
                            }
                        </label>
                         <label className='w-full'>
                             <p className='font-bold mx-2'>Message <span>*</span></p>
                             <textarea name="messages" cols={23} placeholder='Message....' {...register("messages",{required:true})} className='w-full border rounded-md py-1.5 p-2 mt-1  bg-yellow-400 outline-none text-blue-900 font-normal'/>
                             {
                                 errors.message && (
                                    <span className='text-red-500 mx-2'>message is Required</span>
                                )
                             }
                         </label>
                        <button className='button1' type='submit'>
                            Submit 
                        </button>
                    </form>
                    {/* Selection2 is Start  */}
                    <div className=' relative w-[50%] '>
                         <img src={bg1} alt="" />
                         <img src={bike} alt="" className=' absolute top-16 left-16'/>
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Contact