import React from 'react'
import { RiMotorbikeFill } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { PiUserFocusFill } from "react-icons/pi";
import CountUp from 'react-countup';

import { FaCalendarCheck } from "react-icons/fa";

const ReviewOFCustomer = () => {
  return (
    <div className='flex justify-center items-center bg-gray-600 w-full mt-14'>
        <div className='w-11/12 flex justify-between items-center gap-5 mt-8 mb-8 lg:p-20 lg:flex-row flex-col'>
            <div className='w-[180px] h-[180px] flex flex-col rounded-full bg-green-700 text-white font-bold items-center justify-center'>
                <span><FaCalendarCheck size={35}/></span>
                 <CountUp start={0} end={20} prefix={""} suffix={"+"} delay={0.5} duration={7} className='text-3xl'/>  
                 <span>Years In Business</span>
            </div>
            <div className='w-[180px] h-[180px] flex flex-col rounded-full bg-green-700 text-white font-bold items-center justify-center'>
                <span><RiMotorbikeFill size={35}/></span>
                 <CountUp start={0} end={100} prefix={""} suffix={"+"} delay={0.5} duration={5} className='text-3xl'/>  
                 <span>New Bikes For Rent</span>
            </div>
            <div className='w-[180px] h-[180px] flex flex-col rounded-full bg-green-700 text-white font-bold items-center justify-center'>
                <span><FcSalesPerformance size={35}/></span>
                 <CountUp start={0} end={999} prefix={""} suffix={"+"} delay={0.3} duration={4} className='text-3xl'/>  
                 <span>Used Bikes For Rent</span>
            </div>
            <div className='w-[180px] h-[180px] flex flex-col rounded-full bg-green-700 text-white font-bold items-center justify-center'>
                <span><PiUserFocusFill size={35}/></span>
                 <CountUp start={0} end={999} prefix={""} suffix={"+"} delay={0.2} duration={3} className='text-3xl'/>  
                 <span>Satisfied Customers</span>
            </div>
        </div>
    </div>
  )
}

export default ReviewOFCustomer