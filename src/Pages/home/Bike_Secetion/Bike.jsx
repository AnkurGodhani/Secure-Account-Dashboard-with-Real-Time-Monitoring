import React, { useState } from 'react'
import New from './New'
import PopularBike from './PopularBike'

const Bike = () => {
     const [news,setnews] = useState(true)
  return (
    <div className='flex w-full items-center justify-center mt-10 mb-10'> 
        <div className='w-11/12 flex flex-col items-center justify-center '>
            <h1 className='text-5xl font-bold'>Show Bike</h1>
            <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex gap-x-5 w-full items-center justify-center mt-4 cursor-pointer'>   
                    <span className={`hover:border-b-2 border-yellow-400 ${news ? "border-b-2 border-yellow-400" : ""}`} onClick={()=>setnews(true)}>
                        New
                     </span>
                    <span className={`hover:border-b-2 border-yellow-400 ${news ? "" : "border-b-2 border-yellow-400"}`}  onClick={()=>setnews(false)}>
                        Popular Bike
                    </span>
                </div>
            </div>
            {/* Information About New Bike  */}
            <div>
                {
                    news ? <New/> : <PopularBike/>
                }
            </div>
        </div>
    </div>
  )
}

export default Bike