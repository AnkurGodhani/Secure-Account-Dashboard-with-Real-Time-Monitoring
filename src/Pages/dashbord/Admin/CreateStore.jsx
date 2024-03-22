import React, { useRef, useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {cratestore} from '../../../services/opreation/storeAPI'
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import {MdNavigateNext} from 'react-icons/md'
const CreateStore = () => {

    const {token} = useSelector((state) => state.auth)
    const {store} = useSelector((state)=> state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

 

    const [selectFile,setselectFile] = useState(null)

    const inputRef = useRef(null)

    const {
        register,
        handleSubmit,
        setValue,
        formState:{errors}
    } = useForm();

    const onDrop = (acceptedFiles) =>{
        const file = acceptedFiles[0]
        if(file){
            setselectFile(file)
        }
    }

    const { getRootProps,getInputProps,isDragActive} = useDropzone({
        accept : {"image/*":[".jpeg",".jpg",".png"]},
        onDrop,
    })

    useEffect(()=>{
        setValue("thambilnPhoto",selectFile)
    },[selectFile,setValue])

      const onsumbit = (data) =>{
          const forData = new FormData();
          forData.append("BikeName",data.BikeName)
          forData.append("description",data.description)
          forData.append("price",data.price)
          forData.append("BrandName",data.BrandName)
          forData.append("thambilnPhoto",data.thambilnPhoto)

          dispatch(cratestore(forData,token,navigate))

      }
  return (
    <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit(onsumbit)} className='flex flex-col justify-center items-center shadow-md border p-8 mt-10 shadow-blue-300'>
        <div className={`flex flex-col gap-y-3 gap-x-2 ${isDragActive ? "bg-richblack-600" : "bg-richblack-700"}`} >
            <label htmlFor="BikeName" className='flex flex-col'>
                <span className='mx-1.5 text-lg font-semibold'>BikeName <span className='text-red-500'>*</span></span>
                <input type="text" 
                id='BikeName'
                placeholder='Enter The BikeName'
                {...register("BikeName",{required:true})}
                className='w-[350px] border-2 border-gray-500 outline-none p-1.5 rounded-md'
                />
                {
                    errors.BikeName && (
                        <span>BikeName Is Required.</span>
                    )
                }
            </label>
            <label htmlFor="description" className='flex flex-col'>
                <span className='mx-1.5 text-lg font-semibold'>description <sup className='text-red-500'>*</sup></span>
                <textarea type="text"
                  id='description'
                  placeholder='Enter Your description'
                  {...register("description",{required:true})}
                  className='w-[350px] border-2 border-gray-500 outline-none p-1.5 rounded-md'
                />
                {
                    errors.description && (
                        <span>description is Requied</span>
                    )
                }
            </label>
            <label htmlFor="price" className='flex flex-col'>
                <span className='mx-1.5 text-lg font-semibold'>price <sup className='text-red-500'>*</sup></span>
                <input type="Number"
                  id='price'
                  placeholder='Enter Your Bike Price'
                  {...register("price",{required:true})}
                  className='w-[350px] border-2 border-gray-500 outline-none p-1.5 rounded-md'
                />
                {
                    errors.price && (
                        <span>price is Requied</span>
                    )
                }
            </label>
            <label htmlFor="BrandName" className='flex flex-col'>
                <span className='mx-1.5 text-lg font-semibold'>BrandName <sup className='text-red-500'>*</sup></span>
                <input type="text"
                 id='BrandName'
                 placeholder='Enter Your Bike BrandName'
                 {...register("BrandName",{required:true})}
                 className='w-[350px] border-2 border-gray-500 outline-none p-1.5 rounded-md'
                />
                {
                    errors.BrandName && (
                        <span>BrandName is Requied </span>
                    )
                }
            </label>
            <div {...getRootProps()} className='flex flex-col'>
                <input {...getInputProps()} ref={inputRef} id='thambilnPhoto'
                //   {...register("thambilnPhoto",{required:true})}
                />
                <div className='mx-1.5 text-lg font-semibold border-2 uppercase select-none cursor-pointer p-2 rounded-lg w-fit'>
                    Uplading Your Files
                </div>
            </div>
            {
              errors.thambilnPhoto && (
                <span>thambilnPhoto Is Requied.</span>
              )   
            }
            <button type="submit" className='flex items-center justify-center mx-auto gap-x-3 text-center w-fit py-2 px-3 rounded-md  text-white bg-gray-700 hover:bg-gray-800 transition-all duration-150 ease-in '>
                Next <MdNavigateNext size={20}/>
            </button>
            </div>
        </form>
    </div>
  )
}

export default CreateStore