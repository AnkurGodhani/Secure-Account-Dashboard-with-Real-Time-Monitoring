import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GetDetailBooking } from '../../services/opreation/BookingsAPI'
import { MdOutlineMoreTime } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from 'react-router-dom'

const MyBookingBike = () => {
    const {token} = useSelector((state)=>state.auth)
    const {user} = useSelector((state)=>state.auth)

    const [Booking,setBooking] = useState([])
    const [loading,setloading] = useState(false)

    useEffect(()=>{
        const factcingData = async() =>{
            setloading(true)
            const result = await GetDetailBooking(token);
            if(result){
                setBooking(result)
            }
           setloading(false)
        }
        factcingData();
    },[])
  const [moreDetail,setmoreDetail] = useState(false)
  return (
    <div className='flex w-full justify-center items-center mt-10'>
        {
            loading ? (<div className='loader mt-[13%]'></div>) : Booking.length > 0 ? (
                <div className=' flex flex-col w-full justify-center items-center gap-y-10 overflow-y-scroll scroll-m-2 h-[98vh] '>
                    {
                        Booking.map((bike,index)=>(
                            <div className='w-11/12 flex flex-col justify-center items-center p-3 gap-y-5 bg-gray-800 text-blue-300 rounded-lg'>
                                <h1 className='text-3xl font-mono font-bold mt-2'>Booking Bike</h1>
                                <div key={index} className='flex justify-between items-center w-full'>
                                    <span>Your-Name : {bike.Name}</span>
                                    <span className='font-bold'>ID:{bike.BikeId}</span>
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p>Phone Number - Branch: <span>+91 6355434799</span></p>
                                    <span>Register Phone-No: {bike.PhoneNo}</span>
                                </div>
                                <span className='font-bold'>License-No :{bike.Liesunce}</span>
                                <button className='flex justify-between w-full text-start'>
                                    <span>
                                    </span>
                                    <span className='flex items-center text-center p-2 rounded-md bg-black font-bold text-yellow-950 gap-x-2 mx-2'>
                                        
                                            <Link  to={`/dashbord/getstore/MasterDetail/${bike.BikeId}`} className='flex items-center gap-x-1'>
                                            More Detail <MdOutlineMoreTime />
                                        </Link>
                                        
                                    </span>
                                    <span className='flex text-start items-center gap-x-1 text-yellow-100'>Active <IoIosCheckmarkCircle/></span>
                                </button>
                               
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className='flex flex-col '>
                    Not Booking A Bike
                    <button type="button">
                        <Link to="/dashbord/getstoreDetail">
                            Booking Bike 
                        </Link>
                    </button>
                </div>
            )
        }
    </div>
  )
}

export default MyBookingBike