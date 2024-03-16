import React, { useState } from 'react'
// import { GiBackwardTime } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { PopularBike } from '../../../data/BIkeInFormation';
import { IoMdArrowForward } from "react-icons/io";

const PopularBike = () => {
  const {token} = useSelector((state)=>state.auth)
    const [ShowMore,setShowMore] = useState(false);
  return (
    <div className=' mt-5'>
               <div className=' grid lg:grid-cols-3 gap-x-5 w-full gap-y-5 grid-cols-1'>
                    <div className='box-shadow1 p-5 rounded-md w-full '>
                        <div>
                            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/155737/duke-250-right-front-three-quarter-5.png?isig=0&q=80" alt="loa" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-3  p-2'>
                            <h1 className=' text-xl font-bold '>KTM 200 Duke</h1>
                            <p className=' text-lg font-normal text-gray-600 p-3.5'>We have already told you everything you need to know about the all-new KTM 390 Duke, having tested it on the track and out on the road as well. And I came back extremely impressed with that motorcycle. Today, we have with us its smaller sibling, the 250 Duke...</p>
                            <span className='font-bold '>Price : <span className='text-red-500'>1500/Day</span></span>
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
                            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/126519/g-310-gs-right-front-three-quarter.png?isig=0&q=80" alt="" />
                        </div>
                        <div  className='flex flex-col justify-center items-center gap-y-3  p-2'>
                            <h1 className=' text-xl font-bold '>BMW G 310 GS</h1>
                            <p className=' text-lg font-normal text-gray-600'>The feature list continues to pack an LCD instrument cluster, full-LED lighting, adjustable levers, dual-channel ABS, and an assist and slipper clutch. The 2022 version also retains the BS6-compliant 313cc, liquid-cooled, single-cylinder engine that makes 33.5bhp and 28Nm of peak torque..</p>
                            <span className='font-bold '>Price : <span className='text-red-500'>1500/Day</span></span>
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
                            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/kawasaki-ninja-400-standard1676981365444.jpg?q=80" alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-3  p-2'>
                            <h1 className=' text-xl font-bold '>Honda Shine 100</h1>
                            <p className=' text-lg font-normal text-gray-600'>Kawasaki Ninja 400 is a sports bike available in only 1 variant and 2 colours. The Kawasaki Ninja 400 is powered by 399cc BS6 engine which develops a power of 44.7 bhp and a torque of 37 Nm. With both front and rear disc brakes, Kawasaki Ninja 400 comes up with anti-locking braking system.</p>
                            <span className='font-bold '>Price : <span className='text-red-500'>1000/Day</span></span>
                        </div>
                        <button type="button" className=' bg-orange-600 w-full rounded-md p-2 font-bold text-white hover:bg-orange-700 transition-all duration-200'>
                            <Link to={`${token ? "" : "/login"}`}>
                            Buy Now
                            </Link>
                        </button>
                    </div>
                    {/* Read More Div  */}
                    {/* <button onClick={() =>setShowMore(true)} className={`${ShowMore && " hidden"} flex items-center text-lg gap-x-3 font-semibold hover:text-blue-500 delay-150 mx-auto `}>
                        Show More Bikes <IoMdArrowForward size={24} /> */}
                    {/* </button> */}
                    {/* {
                        ShowMore ? (
                            PopularBike.map((itmes,index) =>(
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
                    } */}
                     {/* <button onClick={()=>setShowMore(false)} className={`${!ShowMore && "hidden"} flex items-center gap-x-3 text-lg hover:text-blue-500 delay-500`}>
                                Less Bike Button <GiBackwardTime size={20}/>
                            </button> */}
               </div>
          
    </div>
  )
}

export default PopularBike