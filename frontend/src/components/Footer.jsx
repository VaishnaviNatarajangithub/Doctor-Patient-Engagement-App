import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*---------L------*/}
        <div>
        <img className='mb-5 w-40' src={assets.logo} alt="" />
           <p className='w-full md:w-2/3 text-gray-600 leading-6'>Located in the heart of Coimbatore at 123 MG Road, our hospital offers world-class medical care in a patient-friendly environment.With advanced technology and compassionate service, we are committed to improving health and saving lives.</p>
        </div>

        {/*---------C------*/}
        <div>
            <p className='text-xl font-medium mb-5'> COMPANY </p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li> Home </li>
                <li> About us </li>
                <li> Contact us </li>
                <li> Privacy policy </li>
            </ul>
        </div>

        {/*---------R------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li> +1-212-456-7890 </li>
                <li> docare@care.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/*----copy------*/}
        <hr/>
        <p className='py-5 text-sm text-center'> Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
