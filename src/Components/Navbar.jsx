import React from 'react'
import Logo from "../assets/Logo.png"
export const Navbar = () => {
  return (
    <div className="flex justify-center">
    <nav className='max-w-full fixed top-5 w-3/4 bg-black/90 rounded-2xl'>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex w-full items-center">
            <div className="flex items-center mr-auto">
            <img className="w-24 h-24" src={Logo}  alt="" />
            </div>
             <div className='flex gap-3'>
              <button className='bg-red-600 px-4 py-2 text-white font-semibold rounded-xl'>Sign In</button>
              </div>
        </div>
    </div>
    </nav>
    </div>
  )
}
