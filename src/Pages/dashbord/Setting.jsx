
import React, { useState } from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword, profileUpdate } from '../../services/opreation/profileAPI';
import {DeletingAccount} from '../../services/opreation/profileAPI'

const Setting = () => {
    
    const {user} = useSelector((state) => state.profile)
    const {token} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData,setFromeData] = useState(
        {
            firstName: "",
            lastName:"",
            gender: "",
            age:"",
            dateOfBirth:""
        }
    )

    const {firstName,gender,dateOfBirth,age,lastName} = formData

    // console.log(formData)

    const handleOnChange = (e) =>{
        setFromeData((perData)=>({
            ...perData,
            [e.target.name] : e.target.value
        }))
    }

    const handleonSumbit = (e) =>{
        e.preventDefault();
        dispatch(profileUpdate(firstName,lastName,gender,age,dateOfBirth,token))
    }

    const handleonDeleting = (e) =>{
        e.preventDefault();
        dispatch(DeletingAccount(token,navigate))
    }

    // change passworld mate model

    const [fromData1,setFromeData1] = useState({
        oldpassword :"",
        newpassword:""
    })

    const {oldpassword,newpassword} = fromData1

    const handleOnChangePassworld = (e) =>{
        setFromeData1((perData) =>({
            ...perData,
            [e.target.name] : e.target.value
        }))
    }

    const handleonSumbitPassworld = (e) =>{
        e.preventDefault();
        dispatch(changePassword(oldpassword,newpassword,token))
        setFromeData1({
            oldpassword:"",
            newpassword:""
        })
    }


  return (
    <div>
        <div className='flex mx-5 my-10'>
            <button className='flex items-center gap-2' onClick={
                () =>{
                    navigate("/dashbord/myprofile")
                }
            }>
              <IoChevronBackSharp/>
               <p>back</p>
            </button>
        </div>
        <div>
            <h1>Profile Information</h1>
            <form onSubmit={handleonSumbit}>
                <div className='flex items-center gap-x-5'>
                    <label>
                        <p>Display FirstName</p>
                        <input type="text" placeholder={`${user?.firstName}`} name='firstName' value={firstName ? firstName : `${user?.firstName}`}  onChange={handleOnChange}/>
                    </label>
                    <label>
                        <p>Diaplay LastName</p>
                        <input type="text" placeholder={`${user?.lastName}`} name='lastName' value={lastName ? lastName : `${user?.lastName}`} onChange={handleOnChange}  />
                    </label>
                </div>
                <div>
                    <label>
                        <p>Date OF Birth</p>
                        <input type="date" name="dateOfBirth" placeholder='dd/mm/yy' value={dateOfBirth ? dateOfBirth : `${user?.additionalDetails?.dateOfBirth}`} onChange={handleOnChange}/>
                    </label>
                    <label>
                        <p>Gender</p>
                         <div onChange={handleOnChange}>
                            Male <input type="radio" name="gender" value={ gender ? "male" : `${user?.additionalDetails?.gender}`}/>
                            Female <input type='radio' name='gender' value={ gender ??  `${user?.additionalDetails?.gender}` } />
                            Other <input type='radio' name='gender' value={ gender ??  `${user?.additionalDetails?.gender}`} />
                         </div>
                    </label>
                </div>
                <label>
                    <p>age</p>
                    <input type="number" placeholder={`${user?.additionalDetails?.age}`} value={age ? age : `${user?.additionalDetails?.age}`} name='age' onChange={handleOnChange}/>
                </label>
                <button type='submit'>
                     Save
                </button>
            </form>
        </div>
        {/* change Passworld Selection  */}
        <div>
            <form onSubmit={handleonSumbitPassworld}>
                <label>
                    <p>NewPassworld</p>
                    <input type="password" name='newpassword' value={newpassword} onChange={handleOnChangePassworld} required/>
                </label>
                <label>
                    <p>OldPassword</p>
                    <input type="password" name='oldpassword' value={oldpassword} onChange={handleOnChangePassworld} required />
                </label>
                <button type="submit">
                    Save
                </button>
            </form>
        </div>
        {/* Deleteing Account Karvamate  */}
        <div className='flex flex-col'>
            <h1 className='text-xl text-red-500'>ACCOUNT DELETEING SELECTION</h1>
            <p className='w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nesciunt quia assumenda asperiores corporis vel et nostrum labore, recusandae repellendus sunt voluptatem, eligendi illo vitae velit fugit magni debitis aspernatur quidem iure!</p>
            <button onClick={handleonDeleting}>
                DELETE
            </button>
        </div>
    </div>
  )
}

export default Setting