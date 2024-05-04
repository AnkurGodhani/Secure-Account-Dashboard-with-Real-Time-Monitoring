import React from 'react'
import Footer from './Footer'
const Faqs = () => {
  return (
    <div className='-mt-1'>
    <div className='About h-[200px] flex flex-col justify-center items-center font-bold gap-y-2 mb-10'>
        <h1 className='text-3xl text-white font-mono'>FAQs</h1>
        <p className='font-mono'>Home {"> "}<span className='text-yellow-400'>FAQs</span></p>
    </div>
    <div className='flex flex-col justify-center items-center p-10 gap-y-8'>
        <h1 className='text-4xl font-bold uppercase'>FAQs</h1>
        <p className='items-center text-center w-[90%] text-md opacity-60 font-medium'>
        How do I use discounts coupons? Except for promotion codes, Our discounts are applied automatically if your reservation meets any of the criteria mentioned above. To use a promotion code, simply enter the code on the homepage widget as you start your reservation. You can do this by selecting the "Have a promotion code?" prompt. Promotion codes can also be entered on the checkout page, under Reservation Total. Please note that the promotion code prompt does not appear for certain types of reservations, such as reservations made on the Deals page.
        </p>
        <p className='items-center text-center w-[90%] text-md opacity-60 font-medium'>
        Our Discounts Terms & Conditions We no longer offer or accept returning customer discounts. All discounts are non-transferable and cannot be combined with additional promotions or discounts.
        </p>
        <p className='items-center text-center w-[90%] text-md opacity-60 text-red-800 font-medium'>
            * Liability in case accident: The hirer should have coverage through his own accident and liability insurance. The renting company is not responsible under any circumstances for accidents or damages caused to the hirer or which the hirer causes to any third party or cases of liability
        </p>
    </div>
    <Footer/>
</div>
  )
}

export default Faqs