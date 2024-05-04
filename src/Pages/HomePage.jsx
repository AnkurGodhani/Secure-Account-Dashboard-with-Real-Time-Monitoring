import React  from 'react'
import { LuMailOpen } from "react-icons/lu";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Footer from './home/Footer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewOFCustomer from './ReviewOFCustomer';
import Bike from './home/Bike_Secetion/Bike';
const HomePage = () => {

  const {token} = useSelector((state)=>state.auth)
  const {user} = useSelector((state)=>state.profile)



  return (
      <div className='relative -mt-1'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex bg-gray-900 w-full items-center justify-center'>
               <div className='flex h-20 justify-between items-center w-11/12 bg-gray-900 text-white font-bold p-10 '>
                    <div className='flex items-center gap-x-2'>
                        <span className='flex h-14 w-14 border border-white rounded-full items-center justify-center hover:bg-red-600 transition-all duration-200'><LuMailOpen size={24}/></span>
                        <div className='flex flex-col items-center'>
                          <span className=' text-orange-500'>FOR SUPPORT MAIL US :</span> 
                          <a href="mailto:ankurgodhani07@gmail.com"><span>ankurgodhani07@gmail.com</span></a>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='flex h-14 w-14 border border-white rounded-full items-center justify-center hover:bg-green-600 transition-all duration-200'><VscCallOutgoing size={24}/></span>
                            <div className='flex flex-col'>
                              <span className=' text-orange-500'>SERVICE HELPLINE CALL US:</span> 
                              <a href="tel:6355434799"><span>+91 6355434799</span></a> 
      
                            </div>  
                    </div>
                    <div className='flex flex-row gap-x-5 items-end justify-center'>
                        <div><a href="https://www.facebook.com/ankur.godhani.330?mibextid=ZbWKwL"><FaFacebookF size={24} className='hover:text-blue-500'/></a></div>
                        <div><a href="https://twitter.com/KodavalaNi55766?t=QQ0tT6XER8jbxHy9g1WKXA&s=08"><RiTwitterXLine size={24} className='hover:text-black'/></a></div>
                        <div><a href="https://www.linkedin.com/in/ankur-godhani-743386267/"><FaLinkedinIn size={24} className='hover:text-blue-800'/></a></div>
                        <div><a href="https://www.instagram.com/meets_ahir_21?igsh=MzRlODBiNWFlZA=="><FaInstagram size={24} className='hover:text-red-500' /></a></div>
                    </div>
              </div>
               </div>
              <div className='background h-[600px] flex justify-center items-center overflow-hidden'>
                  <div className='flex text-white flex-col justify-center items-start w-fit -mr-[900px] p-2'>
                     <h1 className='text-5xl font-extrabold w-[55%]'>FIND YOUR PERFECT BIKE</h1>
                     <span className='w-[45%] font-bold'>We have more than a thousand bikes for you to choose.</span>
                     <button className='flex items-center gap-x-3 bg-green-700 text-xl font-bold p-2 rounded-md mt-3'>
                        {
                           token === null ? (<Link to="/login"><span className='flex items-center gap-x-2'>Read more <IoArrowForwardCircleSharp/></span></Link>):  user?.accountType === "Customer" ? (<Link to="/dashbord/getstoreDetail"><span className='flex items-center gap-x-2'>Rent Now<IoArrowForwardCircleSharp/></span></Link>) : (<Link to="/dashbord/Admin/Bike/Information"><span className='flex items-center gap-x-2'>BIKE INFORMATION<IoArrowForwardCircleSharp/></span></Link>)
                        }
                          
                     </button>
                  </div>
              </div>
              {/* bike Information  */}
              <div className='flex items-center justify-center w-11/12 mt-20'>
                  <div className='flex flex-col items-center justify-center text-center gap-8'>
                       <p className='text-5xl'><span className='text-gray-900 font-bold'>Find The Best </span>Bike For You</p>
                       <p className='w-[80%]  text-gray-600'>You will be able to fully enjoy your holiday and your ride! Any problems? Our passionate team will be happy to help you!! No waste of time during your holidays to find a rental point on the spot! No language barrier, thanks to our multilingual team! At the same price you would pay on the spot! We have best bikes with best deals</p>
                  </div>
              </div>
              <Bike/>
              <ReviewOFCustomer/>
              <Footer/>
        </div>
      </div>
  )
}

export default HomePage