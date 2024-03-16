import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='flex flex-row relative items-center text-center justify-center mt-[17%] my-auto '>
       <div className='flex flex-col text-4xl gap-x-10'>
          <p className='mb-10'> 404 - Page Not <span className='text-blue-500' >Found</span></p>
          <button className='flex bg-blue-800 border border-blue-700 rounded-md text-white text-xl items-center text-center justify-center p-[10px]'>
                <Link to="/">
                    Back To Home
                </Link>
          </button> 
        </div> 
        <div className='ml-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUWxRHXyZ6b2mooimhKRe1u-YsOPmIvUUoQ&usqp=CAU" alt="Loding" loading='loding' />
        </div>
    </div>
  )
}

export default Error