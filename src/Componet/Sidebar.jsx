import React, { useState } from 'react'
import { Outlet, matchPath, useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ImProfile } from "react-icons/im";
import { MdAppSettingsAlt } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../services/opreation/authAPI';
import LogOutConformationModel from '../conformationModels/LogOutConformationModel';

const Sidebar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.profile)
    const matchRouter = (router) =>{
        return matchPath({path:router},location.pathname)
    }

    const [logout,setlogout] = useState(false)

    const handleonLogout = () =>{
        dispatch(Logout(navigate));
    }

    const handleonCancel = () =>{
        setlogout(false);
    }
  return (
    <div className='flex -mt-0.5 w-full '>
        <div className=' w-[20%] h-[91.5vh] flex flex-col bg-gray-200 items-center'>
            <div className=' w-full mt-10 text-center gap-y-5'>
                   <div>
                        
                            <figure className='w-20 h-20 rounded-full border border-lime-700 overflow-hidden mx-auto'>
                                <img src={user?.image} alt="Trulli"/>
                            </figure>
                            <h1 className='flex justify-center mb-5 mt-1 font-serif text-rose-500 font-bold'>{user?.email}</h1>
                   </div>
                    <strong className={`${matchRouter("/dashbord/myprofile") &&'text-yellow-500 bg-yellow-800'} flex items-center gap-x-4 justify-center p-3 hover:bg-yellow-800`}> <ImProfile/><Link to="myprofile">Profile</Link></strong>

                    {
                        user?.accountType === "Customer" ? ( <strong className={`${matchRouter("/dashbord/myBookingbike") &&'text-yellow-500 bg-yellow-800'} flex items-center gap-x-3 justify-center p-3 hover:bg-yellow-800`}><FaRegCreditCard/><Link to="myBookingbike">Booking</Link></strong>
                        ) : ( 
                        <div>
                            <strong className={`${matchRouter("/dashbord/Bookingbike") &&'text-yellow-500 bg-yellow-800'} flex items-center gap-x-3 justify-center p-3 hover:bg-yellow-800`}><FaRegCreditCard/><Link to="Bookingbike">Total Booking</Link></strong>
                            
                            <strong className={`${matchRouter("/dashbord/Admin/cratestore") &&'text-yellow-500 bg-yellow-800'} flex items-center gap-x-3 justify-center p-3 hover:bg-yellow-800`}><IoStorefrontSharp/><Link to="Admin/cratestore">Crate Store</Link></strong>
                            
                            <strong className={`${matchRouter("/dashbord/Notifications") &&'text-yellow-500 bg-yellow-800'} flex items-center gap-x-3 justify-center p-3 hover:bg-yellow-800`}><MdOutlineBrowserUpdated/><Link to="/dashbord/Notifications">push Update</Link></strong>
                        </div>
                        )
                    }
                   
                    
            </div>
            <div className='flex items-center justify-center border w-[95%]  border-blue-800 mt-5 mb-5'></div>
            <div className='flex flex-col items-center w-full'>

                    <strong className={`${matchRouter("/dashbord/setting") &&'text-yellow-500 bg-yellow-800'} flex items-center gap-x-4 justify-center p-3 hover:bg-yellow-800 w-full`}><MdAppSettingsAlt /><Link to="setting">Setting</Link></strong>
                    <strong className='flex items-center gap-x-2 w-full justify-center mt-4 hover:bg-yellow-800 p-3 cursor-pointer' onClick={ () => setlogout(true)}> <IoLogOutOutline/>LogOut</strong>
            </div>

        </div>
            <div className='w-[85%] '>
                <Outlet/>
            </div>
            {
                logout && <LogOutConformationModel logoutButton={handleonLogout} CancelButton={handleonCancel}/>
            }
    </div>
  )
}

export default Sidebar