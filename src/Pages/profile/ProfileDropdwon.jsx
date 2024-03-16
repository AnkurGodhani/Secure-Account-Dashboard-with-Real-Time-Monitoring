import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import {IoLogOutOutline} from 'react-icons/io5'
import { Logout } from '../../services/opreation/authAPI'
import { Link } from 'react-router-dom'

const ProfileDropdwon = () => {

    const {user} = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleOnLogout = (e) =>{
         e.preventDefault();
         dispatch(Logout(navigate))
    }

  return (
    <div className=' relative flex group'>
        <div className='flex  h-8 w-8 rounded-full border border-gray-700 overflow-hidden'>
                 <img src={user.image} alt="" className='' />
               <div className=' absolute flex flex-col w-fit p-5 gap-y-5 rounded-md z-[9999] border border-gary-500 bg-white text-black mt-12 right-0 invisible group-hover:visible transition-all duration-150'>
                    <p >
                      <Link to="/dashbord/myprofile" className='flex items-center gap-x-2'>
                         <RxDashboard/> DashBorad
                      </Link>
                     
                      </p>
                    <button onClick={handleOnLogout} className='flex items-center gap-x-2'>
                       <IoLogOutOutline/> LogOut
                    </button>
               </div>
               
        </div>
    </div>
  )
}

export default ProfileDropdwon