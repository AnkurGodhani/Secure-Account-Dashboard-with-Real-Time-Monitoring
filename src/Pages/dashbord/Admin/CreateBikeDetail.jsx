import React from 'react'
import { useForm } from 'react-hook-form'
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CreateBikeInformation } from '../../../services/opreation/storeAPI';

const CreateBikeDetail = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const {token} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {StoreId} = useParams();

    const onSubmits = (data) =>{
        const formData = new FormData();
        formData.append("Ground_Clearance",data.Ground_Clearance)
        formData.append("Mileage",data.Mileage)
        formData.append("seat",data.seat)
        formData.append("USB_Charger",data.USB_Charger)
        formData.append("storeId",StoreId)
        console.log("Bike Detail is Redring...",data,StoreId)
        dispatch(CreateBikeInformation(formData,token,navigate))
        
    }   
  return (
    <div className=' flex items-center justify-center flex-col'>
        <p className='flex w-15 h-15 items-center flex-col rounded-full bg-yellow-500 text-white justify-center text-sm p-3 font-bold mt-5'>Step <span>2</span></p>
        <div className='text-4xl mt-5 font-bold font-serif'>Craete Bike Information</div>
        <form onSubmit={handleSubmit(onSubmits)} className='  flex flex-col items-start justify-start mt-10  '>
            <label className='flex flex-col w-full '>
                <span className='font-bold text-md'>Ground_Clearance <sup className='text-red-800'>*</sup></span>
                <input type="text" placeholder='the Ground_Clearance' id='Ground_Clearance' {...register("Ground_Clearance",{required:true})} 
                    className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                />
                {
                    errors.Ground_Clearance && (
                        <span className='text-red-500'>Requied Ground_Clearance.</span>
                    )
                }
            </label>
             <div className='flex gap-x-5 w-full items-center justify-center'>
                <label className='flex flex-col mt-2'>
                    <span className='font-bold text-md'>Mileage <sup className='text-red-800'>*</sup></span>
                    <input type="text" placeholder='Enter Bike Mileage' id='Mileage' {...register("Mileage",{required:true})}
                    className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                    />
                    {
                        errors.Mileage && (
                            <span className='text-red-500'>
                                Mileage is Requied
                            </span>
                        )
                    }
                </label>
                <label className='flex flex-col mt-2'>
                    <span className='font-bold text-md'>seat</span>
                    <input type="text" placeholder='Enter Bike seat' id='seat' {...register("seat")}
                    className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'

                    />
                </label>
             </div>
            <label className='flex flex-col w-full mt-2'>
                <span className='font-bold text-md'>USB_Charger <sup className='text-red-800'>*</sup></span>
                <textarea type="text" placeholder='Enter Bike USB_Charger' rows={10} id='USB_Charger' {...register("USB_Charger",{required:true})} 
                    className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                />
                {
                    errors.USB_Charger && (
                        <span className='text-red-500'>
                            USB_Charger is Requied.
                        </span>
                    )
                }
            </label>
            <div className='flex gap-x-5'>
                 <NavLink to={`/dashbord/Admin/cratestore/BikeInformation/Engine/:StoreId`}>
                    <IoIosArrowBack/> Back
                 </NavLink>
                <button type="submit" className='flex items-center justify-center gap-x-1 mt-5 py-2 px-3 text-yellow-50 font-bold rounded-md border border-yellow-600 bg-yellow-700 hover:bg-yellow-800 transition-all duration-200' >
                    Next <MdNavigateNext size={20}/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateBikeDetail