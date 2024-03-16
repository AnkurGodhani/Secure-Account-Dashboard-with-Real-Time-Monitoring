import React from 'react'
import { LiaMicrophoneAltSlashSolid } from "react-icons/lia";
import bg1 from "../image/LoginBike.jpg"

const AdsModels = ({btn1Click,models}) => {
  return (
    <div className=' fixed flex justify-center items-center top-[30px] left-[28%] text-white'>
       
        <div className='flex flex-col justify-center items-end'>
            <button onClick={() => btn1Click(false)}>
                <LiaMicrophoneAltSlashSolid size={25}/>
            </button>
            <div className='ads h-[610px] w-[690px]  border border-white'>
            </div>
        </div>
    </div>
  )
}

export default AdsModels