import React, { useEffect, useState } from 'react'
import logo from "./logo1.jpg"
import { useSelector } from 'react-redux';
import { Notifications } from '../../../../services/opreation/authAPI';
const UserShowNotie = () => {
     const [result,setResult] = useState([]);
     const {token} = useSelector((state)=>state.auth)
    useEffect(()=>{
        const Noties = async() =>{
           const result1 = await Notifications(token)
           if(result1){
               setResult(result1)
           }
        } 
        Noties();
    },[])
  return (
    <div className=' absolute z-[99999] text-black bg-red-500 w-[500px] max-h-[220px] overflow-hidden right-8 top-14  hover:overflow-y-scroll '>
      <h1 className=' fixed bg-blue-300 w-[485px]'>Notifications</h1>
      {
        result?.map((items,index)=>(
        <div className='flex p-5 items-center w-full mt-5 '>
            <div className='flex overflow-hidden w-[23%]'>
                <img src={logo} alt="loadinf" />
            </div>
            <div className='flex flex-col w-[77%] text-white'>
                    
                      <div key={index}>
                        <h1>{items.title}title</h1>
                          <span>{items.Date}</span>
                          <div>
                              <p>{items.description}</p>
                          </div>
                    </div>
                    <div>{items.time}</div>
            </div>
        </div>
                  ))
              }
             
    </div>
  )
}

export default UserShowNotie