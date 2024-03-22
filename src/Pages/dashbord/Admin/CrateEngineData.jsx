import React from 'react'
import {useForm} from 'react-hook-form'
import {MdNavigateNext} from  'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CrateEngineOfBike } from '../../../services/opreation/storeAPI';

const CrateEngineData = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();

    const {token} = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {BikeId} = useParams();

    const onSubmits = (data) =>{
        const formData = new FormData();
        formData.append("MaxPower",data.MaxPower)
        formData.append("Displacement",data.Displacement)
        formData.append("Type",data.Type)
        formData.append("FuleSystem",data.FuleSystem)
        formData.append("EngineMotersId",BikeId)

        console.log("Bike Detail is Redring...",data,BikeId)
        dispatch(CrateEngineOfBike(formData,token,navigate))
    }   

  return (
    <div className=' flex items-center justify-center flex-col'>
        <p className='flex w-15 h-15 items-center flex-col rounded-full bg-yellow-500 text-white justify-center text-sm p-3 font-bold mt-5'>Step <span>3</span></p>
        <div className='text-4xl mt-5 font-bold font-serif'>Craete Engine Information</div>
        <form onSubmit={handleSubmit(onSubmits)} className='flex flex-col items-start justify-start mt-10 gap-y-2'>
            <label className='flex flex-col w-full '>
                    <span className='font-bold text-md'>MaxPower<sup className='text-red-800'>*</sup></span>
                    <input type="text" placeholder='the MaxPower' id='MaxPower' {...register("MaxPower",{required:true})} 
                        className='border-2 border-gray-600 rounded-md w-[340px] px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                    />
                    {
                        errors.MaxPower && (
                            <span className='text-red-500'>Requied MaxPower.</span>
                        )
                    }
                </label>
                <label className='flex flex-col w-full '>
                    <span className='font-bold text-md'>Displacement<sup className='text-red-800'>*</sup></span>
                    <input type="text" placeholder='the Displacement' id='MaxPower' {...register("Displacement",{required:true})} 
                        className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                    />
                    {
                        errors.Displacement && (
                            <span className='text-red-500'>Requied Displacement.</span>
                        )
                    }
                </label>
                <label className='flex flex-col w-full '>
                    <span className='font-bold text-md'>Type<sup className='text-red-800'>*</sup></span>
                    <input type="text" placeholder='the Displacement' id='Type' {...register("Type",{required:true})} 
                        className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                    />
                    {
                        errors.Type && (
                            <span className='text-red-500'>Requied Type.</span>
                        )
                    }
                </label>
                <label className='flex flex-col w-full '>
                    <span className='font-bold text-md'>Fule Type<sup className='text-red-800'>*</sup></span>
                    <input type="text" placeholder='the FuleSystem' id='Type' {...register("FuleSystem",{required:true})} 
                        className='border-2 border-gray-600 rounded-md w-full px-3 mt-1 bg-gray-900 text-yellow-300 font-bold p-[5px]'
                    />
                    {
                        errors.FuleSystem && (
                            <span className='text-red-500'>Requied Fule Type.</span>
                        )
                    }
                </label>
                <button type="submit" className='flex items-center justify-center gap-x-1 mx-auto mt-5 py-2 px-3 text-yellow-50 font-bold rounded-md border border-yellow-600 bg-yellow-700 hover:bg-yellow-800 transition-all duration-200' >
                    Save <MdNavigateNext size={20}/>
                </button>
        </form>
    </div>
  )
}

export default CrateEngineData