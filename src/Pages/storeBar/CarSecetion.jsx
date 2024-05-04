
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getAllStoreDetil } from '../../services/opreation/storeAPI'
import { FaCartArrowDown } from "react-icons/fa";
import { addTocart } from '../../Silces/cartSlices';
import {Link} from 'react-router-dom'
import { TbCoinRupeeFilled } from "react-icons/tb";
import toast from 'react-hot-toast';
const CarSecetion = () => {
    const {user} = useSelector((state)=>state.profile)
    const {loading,token} = useSelector((state)=>state.auth)
    const [stores,setstores] = useState([])
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fectchStore = async () =>{
            const result = await getAllStoreDetil(token);
            if(result){
                setstores(result)
                toast.success("GET ALL STORE BIKE")
            }
        }
        fectchStore();
    },[])

 
  return (
    <div>
        
        {
            loading ? (<div className='loader flex justify-center items-center mt-[17%] mx-auto'> </div>) : stores?.length > 0 ? (<>
                <div className='flex flex-col justify-center items-center mt-5'>
                        <h1 className='text-3xl font-bold text-gray-700 p-2 '>WELCOME TO <span className='text-blue-600'>BIKE STORE</span></h1>
                        <p className='w-11/12 text-center text-md opacity-50 font-semibold mt-5'>Welcome to Wecome Bike Rental, where your cycling adventures begin! Nestled in the heart of town, we offer a fleet of top-quality bikes for all ages and terrains. Whether you're craving a leisurely ride along scenic paths or gearing up for a rugged mountain trail, we've got you covered. Our knowledgeable staff is here to ensure you find the perfect bike, with options ranging from cruisers to high-performance mountain bikes</p>
                    </div>
                    <div className=' grid grid-cols-3 gap-x-7 gap-y-14 w-11/12 items-center mx-auto mb-10 mt-10'>
                        {
                           
                           stores.map((store) =>(
                              <div key={store._id} className=' shadow-xl border shadow-pink-200 items-center p-2 rounded-md cursor-pointer'>
                                   <div className='flex items-center justify-center p-2 w-[220px] h-[50%] overflow-hidden mx-auto'>
                                        <Link to={`/dashbord/getstore/MasterDetail/${store._id}`}>
                                             <img src={store.thambiln} alt="Loading..." className='bg-cover object-cover w-fit '/>
                                        </Link>
                                   </div>
                                   <div className='flex flex-col items-center justify-center text-center gap-y-1'>
                                         <h1 className='text-xl font-bold '>{store.BikeName}</h1>
                                         <p className='text-md text-gray-500 font-bold'>{store.description.slice(0,150)}</p>
                                   </div>
                                   <div className='flex justify-between text-green-800 font-semibold mt-2'>
                                        <span className='flex gap-x-2 items-center'>Price :<TbCoinRupeeFilled className='text-green-800'/> {store.price}/Day </span>
                                        <span className='font-bold text-red-500'>{store.BrandName}</span>
                                   </div>
                                   {
                                       user?.accountType === "Customer" && <div className='flex justify-center items-center mt-5 mb-2'>
                                       <button className='flex items-center gap-x-2 bg-gray-700 border border-gray-800 text-yellow-300 p-2 rounded-md font-bold' onClick = {!loading ? ()=>dispatch(addTocart((store))):()=>{}}> 
                                               <FaCartArrowDown/> Add TO Cart
                                              </button>
                                  </div>
                                   }
                                   
                              </div>
                           ))  
                        }
                    </div>            
            </>) : 
            (<div>
                  <span>items is Not Found </span>
            </div>)
        }
    </div>
  )
}

export default CarSecetion