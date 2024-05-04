
import React from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
   
   const {user} = useSelector((state) => state.profile)
   const navigate = useNavigate()

  return (
   <div className='w-full'>
       <span className=' relative top-6 left-10 text-green-900 font-semibold text-lg'>Home {">"} dashbord {">"} <span className='text-blue-800 font-bold'>Profile</span></span>
    <div className='flex flex-col justify-center items-center mt-24'>

<div className='flex items-center justify-center text-center mx-auto Porfile-shadow p-5 w-[520px] rounded-md'>
    <div className='flex justify-between items-center w-full gap-x-5 p-2'>
       <div className='flex gap-x-3 justify-center items-center text-blue-700 text-xl'>
          <h2>{user.firstName}</h2>
          <p>{user.lastName}</p>
       </div>
       <div className='flex items-center text-center bg-green-700 text-white rounded-md py-2 px-8'>
          <button onClick={ 
            () =>{
                navigate("/dashbord/setting")
            }
          }>
              Edit
          </button>
       </div>
    </div>
   </div>
   <div className='flex items-center text-center my-8 justify-center gap-x-32 Porfile-shadow mx-auto p-10 rounded-md'>
       <div className='flex flex-col'>
            <div>
               <strong>FirstName</strong>
               <p>{user?.firstName}</p>
            </div>
            <div>
               <strong>LastName</strong>
               <p>{user?.lastName}</p>
            </div>
            <div>
               <strong>Email</strong>
               <p>{user?.email}</p>
            </div>

       </div>
       <div className='flex flex-col'>
         <div>
                  <strong>gender</strong>
                  <p>{user?.additionalDetails?.gender ?? "-"}</p>
               </div>
            <div>
               <strong>Age</strong>
               <p>{user?.additionalDetails?.age ?? "-"}</p>
            </div>
            <div>
               <strong>Date OF Birth</strong>
               <p>{user?.additionalDetails?.dateOfBirth ?? "-"}</p>
            </div>
       </div>
   </div>
</div>
    
</div>
  )
}

export default Profile