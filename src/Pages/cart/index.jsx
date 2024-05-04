import React from 'react'
import { useSelector } from 'react-redux'
import RederingAddtoCart from './RederingAddtoCart'
import RederingTotalAmount from './RederingTotalAmount'

const Cart = () => {
     const {total,totalItems} = useSelector((state)=>state.cart)

  return (
    <div className='-mt-1 flex flex-col justify-center items-center'>
        <h1 className='text-gray-600 text-4xl font-bold mt-10'>Ca<span className='text-red-500'>r</span>t Item`<span className='text-red-500'>s</span></h1>
        <div className=' border-b-2 w-11/12 mt-5 border-b-red-800'></div>
        <div>
            <p className='text-gray-600 text-lg font-bold mt-5'> <span className='text-blue-800'>{totalItems}</span> Bike in Carts</p>
            <p>
                {
                    totalItems > 0 ? (
                        <div>
                            <RederingAddtoCart/>
                            {/* <RederingTotalAmount/> */}
                        </div>
                    ) : (
                        <p className=' text-white'>Cart`s is Empty</p>
                    )
                }
            </p>
        </div>
    </div>
  )
}

export default Cart