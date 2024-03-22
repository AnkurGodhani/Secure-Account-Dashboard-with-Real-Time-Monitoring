import React, { useState } from 'react'
import {navLinks} from '../../data/homeLink'
import { useSelector } from 'react-redux'
import { Link, matchPath, useLocation } from 'react-router-dom'
import ProfileDropdwon from '../profile/ProfileDropdwon'
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import mainlogo from "../../image/WhatsApp Image 2024-02-18 at 21.33.21_aa56f8e6.jpg"
import UserShowNotie from '../dashbord/Admin/PushNoti/UserShowNotie'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const {token} = useSelector((state) => state.auth)
    const {user} = useSelector((state)=>state.profile)
    const {totalItems} = useSelector((state)=>state.cart)
    const location = useLocation();

    const mathroute = (router) =>{
        return matchPath({path:router},location.pathname)
    }


  return (
    <div className='flex h-16 border-b-2 bg-black text-red-50 '>
        <div className='flex justify-between items-center text-center w-11/12 mx-auto'>
             <div>
                  <Link to="/">
                         <img src={mainlogo} alt="Loading..." className='w-24 h-14' />
                  </Link>
             </div>
             <div>
                <nav>
                    <ul className='flex gap-x-5'>
                {
                    navLinks.map((titles,index)=>(
                        <li key={index} >
                            {
                                titles.title === "My Booking" ? (
                                     <div className={`relative group flex gap-x-5 `}>
                                        {
                                            user?.accountType === "Customer" ? ( <Link to="/myBookingbike">  <span className={`flex items-center gap-x-1 hover:text-yellow-500 ${mathroute("/myBookingbike")? "text-yellow-500" : ""}`}>
                                            My Booking </span></Link>) : token !== null &&  (
                                                <Link to="/dashbord/Admin/cratestore">
                                                    <span className={`flex items-center gap-x-1 hover:text-yellow-500 ${mathroute("/dashbord/Admin/cratestore")? "text-yellow-500" : ""}`}>
                                                        Create Store
                                                    </span>
                                                </Link>
                                            ) 
                                        }
                                    {
                                        <div>
                                            {
                                                user?.accountType === "Admin" && (
                                                    <Link to="/Admin/SuperPower/Booking">
                                                        <span className={`hover:text-yellow-500 ${mathroute("/Admin/SuperPower/Booking")? "text-yellow-500" : ""}`}>Booking Time</span>
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    }
                                     </div>
                                ) : (
                                  <div className={`hover:text-yellow-500 ${mathroute(titles.link)? "text-yellow-500" : ""}`}>
                                    <Link to={titles.link}>
                                        <span>{titles.title}</span>
                                    </Link>
                                  </div>
                                )
                            }
                        </li>
                    ))
                }
                    </ul>
                </nav>
                
            </div>
            {/* buttton propertices lavani che bhaio */}
            <div className='flex gap-x-5'>
               <button >
                    {
                        token === null && (<div>
                            <Link to="/login">
                                <span className='px-2 py-1 hover:bg-yellow-300 transition-all duration-200 rounded-md text-center items-center text-md font-bold text-blue-300 border border-red-300'>Login</span>
                            </Link>
                        </div>)
                    }
               </button>
               <button>
                    {
                        token === null && (
                            <div>
                                <Link to="/signup">
                                    <span className='px-2 py-1  rounded-md text-center items-center text-md font-bold text-blue-300 border border-blue-300 hover:bg-yellow-300'>Signup</span>
                                </Link>
                            </div>
                        )
                    }
               </button>
               {token !==null && (
                   user.accountType === "Customer" && (
                    <div className=' relative flex items-center text-xl group'>
                         <FaRegBell />
                         <div className=' invisible group-hover:visible transition-all duration-200 ease-out'>
                            <UserShowNotie/>
                         </div>
                     </div>
                   )
               )}
               {token !==null && (
                   user.accountType === "Customer" && (
                    <div className=' relative flex items-center text-xl'>
                    <Link to="/addTocart">
                         <BsCartCheckFill/>
                    </Link>
                    <div className='absolute flex w-5 h-5 rounded-full bg-green-950 -top-0 left-2 text-sm text-white items-center justify-center'>
                        {totalItems}
                    </div>
                     </div>
                   )
               )}
               {token !== null && 
                   <div className='flex gap-x-2  items-center group'>
                        <ProfileDropdwon/>
                        <MdOutlineArrowDropDown className='text-xl group-hover:rotate-180 transition-all duration-200 ' />
                   </div>
               }
            </div>
        </div>
       
    </div>
    
  )
}

export default Navbar

