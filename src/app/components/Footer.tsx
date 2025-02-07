import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="shadow-[0px_4px_16px_rgba(17,_17,_26,_0.1),_0px_8px_32px_rgba(17,_17,_26,_0.05)] py-10 px-10 font-sans tracking-wide">
  <div className="max-w-screen-xl mx-auto">
    <div className="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6">
    <Link href="/" className="text-3xl text-blue-500 font-sans font-bold flex items-center space-x-2">
         
          <span>Auto_Prime_Zone</span>
        </Link>

      <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
        <li><a href="/" className="text-black font-sans font-bold  hover:underline hover:text-blue-500 text-base">Home</a></li>
        <li><a href="/components/AboutUs" className="text-black  font-sans font-bold hover:underline text-base hover:text-blue-500">About </a></li>
        <li><a href="/components/ContactUs" className="text-black font-sans font-bold hover:underline text-base hover:text-blue-500">Contact</a></li>
      </ul>
    </div>

    <hr className="my-6 border-black" />

    <p className='text-center text-black font-semibold font-sans text-base'>
      © 2025 Auto_Prime_Zone. All rights reserved.
    </p>
  </div>
</footer>

    </div> 
  )
}

export default Footer
