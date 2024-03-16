import React from 'react'
import Footer from './home/Footer'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import myImage from "../image/WhatsApp Image 2024-02-16 at 16.46.06_cb327739.jpg"
import myImage1 from "../image/WhatsApp Image 2024-02-17 at 09.13.28_fefeb6cf.jpg"
import myImage2 from "../image/WhatsApp Image 2024-02-17 at 09.46.38_736143a8.jpg"

import { Autoplay,Pagination } from 'swiper/modules';

const About = () => {
  return (
    <div className='flex flex-col'>
        <div className='About h-[200px] flex flex-col justify-center items-center font-bold gap-y-2 mb-10'>
            <h1 className='text-3xl text-white font-mono'>About Us</h1>
            <p className='font-mono'>Home {"> "}<span className='text-yellow-400'>About</span></p>
        </div>
        <div className='flex flex-col justify-center items-center p-10 gap-y-8'>
            <h1 className='text-4xl font-bold'>About Us</h1>
            <p className='items-center text-center w-[90%] text-xl opacity-60 font-medium'>
                <span className='text-red-500'>WE ARE THE BIKE RENTAL MANAGER.</span>
                The only 100% dedicated bike rental booking website. The first Bike Rental Manager (BRM) shop was our own bike shop. Ever Since it has been our aim to make bike rental easier for everyone, everywhere.We focus on making bike rentals easier for you.Your rental business has a unique set of challenges. We are the only dedicated bike rental site and will be able to offer you a solution to match your needs.Get in touch with us today! We provide affordable bike rates, we hae lost of Satiisfied customers feedback, you can have a look at our home page too!!
            </p>
        </div>
        {/* Devloper Details  */}
        <div className='flex flex-col mt-10 mb-10'>
            <h1 className='text-5xl font-bold text-gray-800  flex justify-center items-center mb-[70px] drop-shadow'>Information About Group Member`s</h1>
            <Swiper pagination={true}  modules={[Autoplay,Pagination]} autoplay={{delay:3000,disableOnInteraction:false}} className="mySwiper"  >
            <SwiperSlide>
                <div className='flex justify-center items-center w-full gap-5'>
                    <div className='overflow-hidden  w-[23%] p-7'>
                        <img src={myImage} alt=""/>
                    </div>
                    <div className='flex flex-col text-start w-[50%] p-2 gap-y-10 justify-start items-start'>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-3xl font-bold'>MERN-Devloper</h1>
                            <span className='text-md text-gray-400 font-medium'>Devloper: Ankur Godhani</span>
                            <div className='flex flex-row gap-x-2 mt-1'>
                                <div><a href="https://www.facebook.com/ankur.godhani.330?mibextid=ZbWKwL"><FaFacebookF size={18} className='hover:text-blue-500'/></a></div>
                                <div><a href="#"><RiTwitterXLine size={18} className='hover:text-black'/></a></div>
                                <div><a href="https://www.linkedin.com/in/ankur-godhani-743386267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn size={18} className='hover:text-blue-800'/></a></div>
                                <div><a href="https://www.instagram.com/ankur_godhani0890?igsh=a2RnbzRxank5OXZz"><FaInstagram size={18} className='hover:text-red-500' /></a></div>
                             </div>
                        </div>
                        <p className='w-[98%] text-md opacity-60 font-medium mb-3'>The MERN stack has become increasingly popular among web developers in recent years. It is an open-source stack that allows developers to build robust, scalable, and high-performance web applications. MERN stands for MongoDB, Express.js, React.js, and Node.js.This stack is particularly attractive for web developers because it enables them to build modern, dynamic web applications quickly and easily. In this blog post, we’ll look at some examples of MERN stack applications that you can draw inspiration from.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex justify-center items-center w-full gap-5'>
                    <div className='overflow-hidden w-[23%]'>
                        <img src={myImage2} alt=""/>
                    </div>
                    <div className='flex flex-col text-start w-[50%] p-2 gap-y-10 justify-start items-start'>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-3xl font-bold'>FrontEnd-Devloper</h1>
                            <span className='text-md text-gray-400 font-medium'>Devloper: Nikunj Kodavala</span>
                            <div className='flex flex-row gap-x-2 mt-1'>
                                <div><a href="#"><FaFacebookF size={18} className='hover:text-blue-500'/></a></div>
                                <div><a href="#"><RiTwitterXLine size={18} className='hover:text-black'/></a></div>
                                <div><a href="#"><FaLinkedinIn size={18} className='hover:text-blue-800'/></a></div>
                                <div><a href="https://www.instagram.com/nikunj_._09?igsh=azV4NjhmNzlkbjhr"><FaInstagram size={18} className='hover:text-red-500' /></a></div>
                             </div>
                        </div>
                        <p className='w-[98%] text-md opacity-60 font-medium mb-3'>A React.js developer is a proficient software engineer specializing in creating dynamic user interfaces for web applications using the React.js library. They possess expertise in JavaScript, HTML, and CSS, along with a deep understanding of React.js concepts such as components, state management, and lifecycle methods. React.js developers build reusable UI components, manage application state, handle data fetching, implement routing, and optimize performance. Proficiency in debugging, testing, version control, and continuous learning is crucial.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex lg:flex-row flex-col justify-center items-center w-full gap-x-10'>
                    <div className='overflow-hidden  lg:w-[23%] w-[50%] '>
                        <img src={myImage1} alt=""/>
                    </div>
                    <div className='flex flex-col text-start w-[50%] p-2 gap-y-10 justify-start items-start'>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='text-3xl font-bold'>BackEnd-Devloper</h1>
                            <span className='text-md text-gray-400 font-medium'>Devloper: Meet Gohel</span>
                            <div className='flex flex-row gap-x-2 mt-1'>
                                <div><a href="#"><FaFacebookF size={18} className='hover:text-blue-500'/></a></div>
                                <div><a href="#"><RiTwitterXLine size={18} className='hover:text-black'/></a></div>
                                <div><a href="#"><FaLinkedinIn size={18} className='hover:text-blue-800'/></a></div>
                                <div><a href="https://www.instagram.com/meets_ahir_21?igsh=MWttbHdld2Q3dnVubg=="><FaInstagram size={18} className='hover:text-red-500' /></a></div>
                             </div>
                        </div>
                        <p className='w-[98%] text-md opacity-60 font-medium'>A Node.js developer is a skilled software engineer proficient in using Node.js, a runtime environment that allows JavaScript to be executed server-side. Node.js developers leverage their expertise in JavaScript, along with knowledge of Node.js modules and libraries, to build scalable and efficient server-side applications. They handle tasks such as server-side scripting, building APIs, interacting with databases, and implementing real-time communication. Node.js developers often work with frameworks like Express.js to streamline development.</p>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
        </div>
        <Footer/>
    </div>
  )
}

export default About