import React, { useState } from 'react'
import { GiBackwardTime } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NewBikeDetail } from '../../../data/BIkeInFormation';
import { IoMdArrowForward } from "react-icons/io";

const New = () => {
    const {token} = useSelector((state)=>state.auth)
    const [ShowMore,setShowMore] = useState(false);
  return (
    <div className=' mt-5'>
               <div className=' grid lg:grid-cols-3 gap-x-5 w-full gap-y-5 grid-cols-1'>
                    <div className='box-shadow1 p-5 rounded-md w-full '>
                        <div>
                            <img src="https://imgd.aeplcdn.com/1280x720/bw/ec/39024/Hero-Glamour-Front-threequarter-152345.jpg?wm=0" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-3  p-2'>
                            <h1 className=' text-xl font-bold '>Hero Glamour 125</h1>
                            <p className=' text-lg font-normal text-gray-600 p-3.5'>Owners club. Nestled deep inside farm and forest land about an hour and a half away from Buenos Aires, it is a sensational place. As the name suggests, it's a sort of owner only thing with 'owned' bits are mostly classic cars. But the highlight of the place is a small but challenging track it houses. </p>
                            <span className='font-bold '>Price : <span className='text-red-500'>1200/Day</span></span>
                        </div>
                        <button type="button" className=' bg-orange-600 w-full rounded-md p-2 font-bold text-white hover:bg-orange-700 transition-all duration-200'>
                            <Link to={`${token ? "" : "/login"}`}>

                            Buy Now
                            </Link>
                        </button>
                    </div>
                    {/* 2  */}
                    <div className='box-shadow1 p-5 rounded-md'>
                        <div>
                            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/127607/splendor-plus-xtec-right-front-three-quarter.png?isig=0&q=80" alt="" />
                        </div>
                        <div  className='flex flex-col justify-center items-center gap-y-3  p-2'>
                            <h1 className=' text-xl font-bold '>Hero Splendor Plus Xtec</h1>
                            <p className=' text-lg font-normal text-gray-600'>Owners club. Nestled deep inside farm and forest land about an hour and a half away from Buenos Aires, it is a sensational place. As the name suggests, it's a sort of owner only thing with 'owned' bits are mostly classic cars. But the highlight of the place is a small but challenging track it houses. We, however, haven't come here for the classic cars.</p>
                            <span className='font-bold '>Price : <span className='text-red-500'>1200/Day</span></span>
                        </div>
                        <button type="button" className=' bg-orange-600 w-full rounded-md p-2 font-bold text-white hover:bg-orange-700 transition-all duration-200'>
                            <Link to={`${token ? "" : "/login"}`}>

                            Buy Now
                            </Link>
                        </button>
                    </div>
                    {/* 3  */}
                    <div className='box-shadow1 p-5 rounded-md '>
                        <div>
                            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-shine-100-standard1678865728388.jpg?q=80" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-3  p-2'>
                            <h1 className=' text-xl font-bold '>Honda Shine 100</h1>
                            <p className=' text-lg font-normal text-gray-600'>Honda has entered the 100cc commuter motorcycle segment in the country with its first offering, the Shine 100. The Japanese bikemaker is using the existing Shine brand for its new product, owing to the success of the Shine 125 so far. To find how much it succeeds, we spent a few hours with the new Honda Shine 100 and put it through the paces as much as we could.</p>
                            <span className='font-bold '>Price : <span className='text-red-500'>1000/Day</span></span>
                        </div>
                        <button type="button" className=' bg-orange-600 w-full rounded-md p-2 font-bold text-white hover:bg-orange-700 transition-all duration-200'>
                            <Link to={`${token ? "" : "/login"}`}>
                            Buy Now
                            </Link>
                        </button>
                    </div>
                    {/* Read More Div  */}
                    <button onClick={() =>setShowMore(true)} className={`${ShowMore && " hidden"} flex items-center text-lg gap-x-3 font-semibold hover:text-blue-500 delay-150 mx-auto `}>
                        Show More Bikes <IoMdArrowForward size={24} />
                    </button>
                    {
                        ShowMore ? (
                        NewBikeDetail.map((itmes,index) =>(
                            <div className='box-shadow1 p-5 rounded-md w-full flex flex-col justify-center items-center ' key={index}>
                            <div>
                                <img src={itmes.image} alt={itmes.Name}/>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-y-3  p-2'>
                                <h1 className=' text-xl font-bold '>{itmes.Name}</h1>
                                <p className=' text-lg font-normal text-gray-600'>{itmes.information.split(0,2)}</p>
                                <span className='font-bold '>Price : <span className='text-red-500'>{itmes.price}/Day</span></span>
                            </div>
                            <button type="button" className=' bg-orange-600 w-full rounded-md p-2 font-bold text-white hover:bg-orange-700 transition-all duration-200'>
                                <Link to={`${token ? "" : "/login"}`}>
                                Buy Now
                                </Link>
                            </button>
                        </div>
                        
                        ))) : (
                           ""
                        )
                    }
                     <button onClick={()=>setShowMore(false)} className={`${!ShowMore && "hidden"} flex items-center gap-x-3 text-lg hover:text-blue-500 delay-500`}>
                                Less Bike Button <GiBackwardTime size={20}/>
                            </button>
               </div>
          
    </div>
  )
}

export default New