import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
import toast from 'react-hot-toast';


const Footer = () => {
    const onhandle = () =>{
        toast.success("Bike Rider Channel Subscribed ")
    }
  return (
    <div className='flex flex-col justify-center items-center w-full bg-gray-900 text-white'>
        <div className='w-11/12 flex flex-col justify-between items-center px-[60px] py-20 lg:flex-row'>
            <div className='flex flex-col mb-10 mt-10'>
                <h1 className='font-bold mb-5'>ABOUT US</h1>
                <div className='flex flex-col gap-3'>
                    <span className='flex items-center gap-x-1'><MdOutlineDoubleArrow/>About Us</span>
                    <span className='flex items-center gap-x-1' ><MdOutlineDoubleArrow/>FAQs</span>
                    <span className='flex items-center gap-x-1'><MdOutlineDoubleArrow/> <a href='#'>Privacy</a></span>
                    <span className='flex items-center gap-x-1'><MdOutlineDoubleArrow/>Terms of use</span>
                    <span className='flex items-center gap-x-1'><MdOutlineDoubleArrow/>Admin Login</span>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                    <h1 className='font-bold mb-5'>SUBSCRIBE NEWSLETTER</h1>
                    <div className='flex flex-col justify-center items-center'>
                        <input type="text" placeholder='Enter Email Adderss' className='px-2 py-2 rounded-sm bg-gray-900 border border-gray-700 ' required/>
                        <button className='flex items-center gap-x-3 bg-green-700 text-xl font-bold px-3 py-2 rounded-md mt-3 mb-1' type='submit' onClick={onhandle}>
                            Subscribe <IoArrowForwardCircleSharp/>
                        </button>
                        <p className='w-[60%] text-gray-700 text-sm'>*We send great deals and latest auto news to our subscribed users very week.</p>
                    </div>
            </div>
        </div>
        <div className='w-full flex justify-between items-center px-32 py-8 bg-gray-600 lg:flex-row flex-col gap-2'>
            <span>Bike Rental</span>
            <div className='flex items-center gap-x-3'> 
                <span>Connect with Us: </span>
                <div className='flex flex-row gap-x-2 items-end justify-center'>
                        <div><a href="#"><FaFacebookF size={12} className='hover:text-blue-500'/></a></div>
                        <div><a href="#"><RiTwitterXLine size={12} className='hover:text-black'/></a></div>
                        <div><a href="#"><FaLinkedinIn size={12} className='hover:text-blue-800'/></a></div>
                        <div><a href="#"><FaGooglePlusG size={12} className='hover:text-gray-500'/></a></div>
                        <div><a href="#"><FaInstagram size={12} className='hover:text-red-500' /></a></div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer