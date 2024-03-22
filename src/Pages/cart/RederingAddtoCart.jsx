
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTocart } from '../../Silces/cartSlices'
import { CiBookmarkRemove } from "react-icons/ci";
import { LuBadgeDollarSign } from 'react-icons/lu';
import { AiFillShopping } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const RederingAddtoCart = () => {
    const {cart} = useSelector((state) => state.cart)
    // const {store} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col p-2 mx-auto items-center justify-between w-[50%]'>
           {
              cart.map((store)=>(
                     <div className='flex flex-row gap-x-10 justify-between ' key={store._id}>
                    <div className=' p-3 rounded-md w-[50%] '>
                        <img src={store.thambiln} width={300}/>
                    </div>
                    <div className='flex flex-col mt-3 gap-y-5 w-[50%]'>
                        <h1 className='text-3xl font-black text-white '>{store.BikeName}</h1>
                        <p className='text-lg text-gray-400'>{store.description.split("",100)}</p>
                        <div className='flex items-center text-red-400 justify-between '>
                             <span className='flex items-center gap-x-2'><LuBadgeDollarSign /> {store.price}</span>
                            <span className='text-green-400 font-bold'>{store.BrandName}</span>
                        </div>
                        <div className='flex  items-center justify-center w-full border border-red-600 text-white font-bold  bg-red-700 rounded-md hover:bg-red-800 transition-all p-2 duration-200 cursor-pointer'>
                            <button type="button" onClick={ () => dispatch(removeTocart(store._id)) }>
                                 <span className='flex items-center gap-x-2 '><CiBookmarkRemove /> Remove to Cart</span>
                            </button>
                        </div>
                        <div className='flex  items-center justify-center w-full border border-green-600 text-yellow-50 font-bold  bg-green-700 rounded-md hover:bg-green-800 transition-all p-2 duration-200 cursor-pointer'>
                        <button type="button">
                                <span className='flex items-center gap-x-2'><AiFillShopping/> <Link to={`/dashbord/getstore/MasterDetail/${store._id}`}>Rent Now</Link><IoIosArrowRoundForward/> </span>
                            </button>
                        </div>
                    </div>

                 </div>
              ))
           }
        </div>
    </div>
  )
}

export default RederingAddtoCart