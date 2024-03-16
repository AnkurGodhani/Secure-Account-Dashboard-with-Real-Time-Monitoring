import React from 'react'
import { useSelector } from 'react-redux'
import RederingAddtoCart from './RederingAddtoCart'
import RederingTotalAmount from './RederingTotalAmount'

const Cart = () => {
     const {total,totalItems} = useSelector((state)=>state.cart)

  return (
    <div className='  bg-image -mt-1 flex flex-col justify-center items-center'>
        <h1 className='text-white'>Cart</h1>
        <div>
            <p className='text-white'>{totalItems} Bike in Carts</p>
            <p>
                {
                    totalItems > 0 ? (
                        <div>
                            <RederingAddtoCart/>
                            <RederingTotalAmount/>
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