
import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { DeletingStore, getAllStoreDetil } from '../../services/opreation/storeAPI'
import { FaCartArrowDown } from "react-icons/fa";
import { addTocart } from '../../Silces/cartSlices';
import {Link} from 'react-router-dom'
import { setLoading } from '../../Silces/authSlices';
import { TbCoinRupeeFilled } from "react-icons/tb";
const CarSecetion = () => {
    const {loading,token} = useSelector((state)=>state.auth)
    const [stores,setstores] = useState([])
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const fectchStore = async () =>{
            dispatch(setLoading(true))
            const result = await getAllStoreDetil(token);
            if(result){
                setstores(result)
            }
            dispatch(setLoading(false))
        }
        fectchStore();
    },[])

    // const handleDelete =async (storeId) =>{
    //      dispatch(DeletingStore({storeId:storeId},token))
    //      const result = await getAllStoreDetil(token)
    //      if(result){
    //           setstores(result)
    //      }
    // }
 
  return (
    <div>
        
        {
            loading ? (<div className='loader flex justify-center items-center mt-[17%] mx-auto'> </div>) : stores?.length > 0 ? (<>
                <div>
                        <h1>WELCOME TO <span>BIKE STORE</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos alias deserunt voluptatem quibusdam commodi animi quas accusamus minima. Error blanditiis nihil aspernatur obcaecati distinctio, hic non harum, libero at veniam maxime totam!</p>
                    </div>
                    <div className=' grid grid-cols-3 gap-2 w-11/12 items-center mx-auto mb-10 mt-10'>
                        {
                           
                           stores.map((store) =>(
                              <div key={store._id} className=' shadows  items-center p-2 rounded-md cursor-pointer'>
                                   <div className='flex items-center justify-center p-2 w-[220px] h-[50%s] overflow-hidden mx-auto'>
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
                                   <div className='flex justify-center items-center mt-5 mb-2'>
                                        <button className='flex items-center gap-x-2 bg-gray-700 border border-gray-800 text-yellow-300 p-2 rounded-md font-bold' onClick = {!loading ? ()=>dispatch(addTocart((store))):()=>{}}> 
                                                <FaCartArrowDown/> Add TO Cart
                                               </button>
                                   </div>
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