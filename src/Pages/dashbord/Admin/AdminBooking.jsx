import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetAllDetailBooking} from "../../../services/opreation/BookingsAPI"
import { MdOutlineMoreTime } from "react-icons/md";
import { CancelTicket } from '../../../services/opreation/BookingsAPI';
import {Link} from "react-router-dom"
 const AdminBooking = () => {
    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.auth)

    const [Booking,setBooking] = useState([])
    const [loading,setloading] = useState(false)


    useEffect(()=>{
        const factcingData = async() =>{
            setloading(true)
            const result = await GetAllDetailBooking(token);
            if(result){
                setBooking(result)
            }
           setloading(false)
        }
        factcingData();
    },[])
   return (
    <div className='flex w-full justify-center items-center mt-10 p-5'>
    {
        loading ? (<div className='loader mt-[13%]'></div>) : Booking.length > 0 ? (
            <div className=' flex flex-col w-full justify-center items-center gap-y-10 overflow-y-scroll h-[80.5vh] overscroll-y-contain'>
                {
                    Booking.map((bike,index)=>(
                        <div className='w-11/12 flex flex-col justify-center items-center p-3 gap-y-5 bg-gray-800 text-blue-300 rounded-lg'>
                            <h1 className='text-3xl font-mono font-bold'>Booking Bike</h1>
                            <div key={index} className='flex justify-between items-center w-full'>
                                <span>Your-Name : {bike.Name}</span>
                                <span className='font-bold'>ID:{bike.BikeId}</span>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p>Branch Number: <span>+91 6355434799</span></p>
                                <span>Register Phone-No: {bike.PhoneNo}</span>
                            </div>
                            <span className='font-bold'>Liesunce-No :{bike.Liesunce}</span>
                            <button className='flex justify-center w-full text-start'>
                               
                                <span className='flex items-center text-center'>
                                    <div className='flex items-center gap-x-5'>
                                        <button type="button" className=' p-2 rounded-md bg-black font-bold text-yellow-700 gap-x-2 mx-2'>
                                                <Link to={`/dashbord/getstore/MasterDetail/${bike.BikeId}`} className='flex items-center gap-x-1'>
                                                         More Detail <MdOutlineMoreTime />
                                                </Link>
                                        </button>
                                        <button type="button" className=' p-2 rounded-md bg-red-400 font-bold text-white gap-x-2 mx-2' onClick={()=>dispatch(CancelTicket(bike._id,token))}>
                                            Cancel Booking
                                        </button>
                                    </div>
                                </span>
                               
                            </button>
                        </div>
                    ))
                }
            </div>
        ) : (
            <div className='flex flex-col '>
                Not Booking A Bike
            </div>
        )
    }
</div>
   )
 }
 
 export default AdminBooking