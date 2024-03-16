import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getStoreItemDetail } from '../../../services/opreation/storeAPI';
import { AiTwotoneDollar } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { PiStarThin } from "react-icons/pi";
import { SiGoogleearthengine } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { IoMdBatteryFull } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiLuggageDepositLine } from "react-icons/ri";
import { GiDamagedHouse } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import BookingModels from '../../../conformationModels/BookingModels';
import Footer from '../../home/Footer'
const Master = () => {
   
    const {token} = useSelector((state)=>state.auth)
    const {user} = useSelector((state)=>state.profile)
    const {StoreId} = useParams();
    const [items,setitems] = useState("")
    const [Loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const FacingData = async () =>{
            console.log("StoreId",StoreId)
            const result = await getStoreItemDetail({StoreId},token);
            if(result){
                console.log("result",result)
                setitems(result)
            }
        }
        setLoading(false)
        FacingData();
    },[])

    const [conformationModel,setconformationModel] = useState(false)

    const handleonHidden = () =>{
        setconformationModel(false);
    }
  return (
    <div className={`relative flex flex-col items-center justify-center text-center`}>
        {
            Loading ? (<div className='loader'></div>) :
            setitems.length >= 0 ? ( <div className='w-11/12 flex items-start gap-x-5  p-10'>
            <div className='flex flex-col w-[50%] items-center justify-center'>
                    <img src={items.thambiln} alt="loading"/>
                    <div className='w-full'>
                       { 
                            user?.accountType === "Customer" && (<button type="button" className='flex items-center justify-center mt-10 bg-slate-600 font-bold text-xl text-blue-200 rounded-md w-full p-2 gap-x-2' 
                                onClick={()=>setconformationModel(true)}
                            >
                                Retal Now <IoIosArrowDropright/>
                            </button>)
                        }
                    </div>
                    {/* Pickup &&  Drop Point Details  */}
                    <div className='shadows mt-10 p-8 w-full rounded-md '>
                        <div>
                            <h1 className='flex items-center gap-x-2 text-xl font-bold mb-2'><CiLocationOn size={20}/>Pickup & Drop Point</h1>
                            <a href="https://www.google.com/maps/place/Sector+15,+Gandhinagar,+Gujarat+382016/@23.2346438,72.6333382,15.95z/data=!4m6!3m5!1s0x395c2b94d4bec8db:0xcf868c45758f3428!8m2!3d23.2355469!4d72.6372917!16s%2Fg%2F1tdhk6y_?entry=ttu" className=' hover:bg-yellow-500 hover:underline flex mx-4 w-fit'>BIKE REATAL SHOP , SECTOR-15 GANDHINAGAR , GUJARAT 382016</a>
                        </div>
                        <div className='flex mt-5 mx-2 text-red-800 font-semibold '>
                             PICKUP AND DROPING TIME : 9:00 Am TO 9:00 Pm
                        </div>
                    </div>
                    {/* Security Deposit Selection  */}
                    <div className='shadows flex flex-col gap-y-8 p-8 w-full mt-10'>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col'>
                                <h1 className='flex items-center gap-x-2 text-xl font-bold mb-2'><RiLuggageDepositLine/>Security Deposit</h1>
                                 <span className='flex items-center gap-x-1'><BiRupee/>200</span>
                                 <span className='flex text-green-500 font-bold'>(Refundable)</span>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex items-center gap-x-2 text-xl font-bold mb-2'><GiDamagedHouse/>Damage</h1>
                                <span>{"< "}50% Damage :<span className=' text-red-500 font-semibold'>(5000 penalty)</span></span>
                                <span>{">"}60% Damage :<span className='text-red-500 font-semibold'>(10000 penalty)</span></span>
                            </div>
                        </div>
                        <div className='flex font-bold bg-green-700 text-white p-2 rounded-md'>   
                            Refundable Security Deposit to be directly given to the vendor at the time of Pickup.
                        </div>
                    </div>
            </div>
            <div className='flex flex-col justify-start items-start ml-10 w-[50%] gap-y-5'>
                <span className=' border-b-2 p-5 w-full text-start text-xl font-bold text-gray-900'>{items.BikeName}</span>
                <div className='flex flex-col items-start border-b-2 p-5 w-full text-start'>
                    <p className='text-xl font-bold'> Per day price</p>
                    <span className='flex items-center gap-x-2 font-bold'><AiTwotoneDollar/>{items.price}</span>
                    <p className='text-sm'>including Tax</p>
                    
                </div>
                <div className='flex border-b-2 p-5 w-full text-start items-center'>
                     <p className='text-xl font-bold'> {items.BrandName}</p>
                </div>
                <div className='flex bg-gray-800 border border-gray-900 gap-x-5 text-yellow-100 hover:bg-gray-900 transition-all duration-200 p-2 w-full rounded-lg'>
                    <details className='flex items-center justify-center text-center mx-auto p-4 cursor-pointer rounded-md'>
                            <summary>description About OverBike</summary>
                            <div className='flex justify-start text-white font-semibold mt-5 items-start text-start'>
                                {items.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat soluta quibusdam consequatur incidunt iusto quod, voluptatem adipisci sit nostrum quia pariatur corporis sint. Accusantium iure vitae asperiores blanditiis exercitationem?
                            </div>
                        </details>
                </div>
                {/* Deveri Time  */}
                <div className='flex flex-col gap-y-5 w-full mt-5'>
                    <span className='flex items-center gap-x-5 font-bold text-red-400'> 
                        <FaPeopleCarry size={24}/> SELLER DETAILS
                    </span>
                    <div className='flex gap-x-5 bg-blue-300 p-4 items-center justify-center rounded-lg w-full font-bold'>
                        <span className='border-r-2 pr-10'> <FaPeopleCarry size={30} color='green'/></span>
                        <div className='flex flex-col'>
                            Pick up the product from the selected seller on or before
                            <span className='text-green-800'>Within 2 HOUERS</span>
                        </div>
                    </div>
                </div>
                {/* HIGHLIGHTS  */}
                <div className='flex flex-col w-full'>
                    <span className='flex items-center gap-x-2 text-orange-600 font-bold'><PiStarThin/>HIGHLIGHTS</span>
                    <div className='flex flex-row w-full justify-between mt-5'>
                        <div className='flex flex-col items-center gap-y-1'>
                            <SiGoogleearthengine size={24} color='gray'/>
                            <span className='font-bold text-xl'>Engine</span>
                            <span className='font-bold text-blue-400'>{items.MoreDetils?.slice(-1)[0].Engine?.MaxPower}</span>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <BsFillFuelPumpFill size={24} color='gray'/>
                            <span className='font-bold text-xl'>Fuel System</span>
                            <span className='font-bold text-blue-400'>{items?.MoreDetils?.slice(-1)[0].Engine?.FuleSystem}</span>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <GiSpeedometer size={24} color='gray'/>
                            <span className='font-bold text-xl'>Mileage</span>
                            <span className='font-bold text-blue-400'>{items?.MoreDetils?.slice(-1)[0].Mileage}</span>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <IoMdBatteryFull size={24} color='gray'/>
                            <span className='font-bold text-xl'>USB_Charger</span>
                            <span className='font-bold text-blue-400'>{items?.MoreDetils?.slice(-1)[0].USB_Charger}</span>
                        </div>
                        {/* TODO: NOT ENDING THE WORK PLAZE COMPLETE YOUR WORK  */}
                    </div>
                </div>
            </div>
            {
                conformationModel && <BookingModels btn={handleonHidden} BikeId={StoreId} masterToken={token}/>
            }
       </div>
            
       ) : (
            <div>
                Item`s is Not Found
            </div>
       )
        }
        <Footer/>
    </div>
  )
}

export default Master