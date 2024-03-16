import React from 'react'

const LogOutConformationModel = ({logoutButton,CancelButton}) => {
  return (
    <div className=' fixed flex justify-center items-center top-[35%] z-[9999] left-[43%] bg-white shodow-2 p-8 rounded-md'>
        <div className='flex flex-col gap-y-5'>
            <div className='text-2xl text-center'>Confirm Logout</div>
            <div>Are You Sure You Want to logout ?</div>
            <div className='flex justify-end gap-x-5 '>
                <button type="button" onClick={CancelButton} className='bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-in rounded-md px-5 py-2 font-bold text-white'>
                    cancel
                </button>
                <button type="button" onClick={logoutButton} className='bg-red-500 hover:bg-red-600 transition-all duration-200 ease-in rounded-md px-5 py-2 font-bold text-white'>
                    Logout
                </button>
            </div>
        </div>
    </div>
  )
}

export default LogOutConformationModel