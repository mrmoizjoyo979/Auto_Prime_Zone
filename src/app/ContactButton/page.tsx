import React from 'react'
import car from '@/sanity/schemaTypes/car'
import { Car } from '@/sanity/lib/types'

const ContactSButton = ({ car }: { car: Car }) => {
  return (
    
    <div>
      <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
      <h1 className="text-2xl text-gray-800 font-bold text-center">Contact to Seller</h1>
      <form className="mt-8 space-y-4">
        <input type='text' placeholder='Name'
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-blue-500 focus:bg-transparent text-sm outline-none transition-all" />
        <input type='email' placeholder='Email'
          className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-blue-500 focus:bg-transparent text-sm outline-none transition-all" />
        <textarea placeholder='Message'
          className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-blue-500 focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
        <button type='button'
          className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide text-sm px-4 py-2.5 w-full outline-none">Send</button>
      </form>
    </div>
    </div>
    
  )
}

export default ContactSButton
