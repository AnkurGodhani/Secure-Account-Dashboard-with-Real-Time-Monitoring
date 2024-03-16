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
    <div>
        <form onSubmit={handleSubmit(onsumbit)} >
        <div className={`flex flex-col gap-y-8 gap-x-2 ${isDragActive ? "bg-richblack-600" : "bg-richblack-700"}`} >
            <label htmlFor="BikeName">
                <span>BikeName</span>
                <input type="text" 
                id='BikeName'
                placeholder='Enter The BikeName'
                {...register("BikeName",{required:true})}
                />
                {
                    errors.BikeName && (
                        <span>BikeName Is Required.</span>
                    )
                }
            </label>
            <label htmlFor="description">
                <span>description <sup>*</sup></span>
                <textarea type="text"
                  id='description'
                  placeholder='Enter Your description'
                  {...register("description",{required:true})}
                />
                {
                    errors.description && (
                        <span>description is Requied</span>
                    )
                }
            </label>
            <label htmlFor="price">
                <span>price <sup>*</sup></span>
                <input type="Number"
                  id='price'
                  placeholder='Enter Your Bike Price'
                  {...register("price",{required:true})}
                />
                {
                    errors.price && (
                        <span>price is Requied</span>
                    )
                }
            </label>
            <label htmlFor="BrandName">
                <span>BrandName <sup>*</sup></span>
                <input type="text"
                 id='BrandName'
                 placeholder='Enter Your Bike BrandName'
                 {...register("BrandName",{required:true})}
                />
                {
                    errors.BrandName && (
                        <span>BrandName is Requied </span>
                    )
                }
            </label>
            <div {...getRootProps()}>
                <input {...getInputProps()} ref={inputRef} id='thambilnPhoto'
                //   {...register("thambilnPhoto",{required:true})}
                />
                <div>
                    Uplading Your Files
                </div>
            </div>
            {
              errors.thambilnPhoto && (
                <span>thambilnPhoto Is Requied.</span>
              )   
            }
            <button type="submit">
                Next <MdNavigateNext/>
            </button>
            </div>
        </form>
    </div>
  )
}

export default CreateStore