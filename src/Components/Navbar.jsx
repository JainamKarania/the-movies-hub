import React from 'react'
import Logo from "../assets/Logo.png"
export const Navbar = () => {
  return (
    <div className='flex z-10 bg-zinc-950'>
        <div className="container mx-auto max-xl px-4">
          <div className="flex items-center">
            <div className="w-24 flex items-center mr-auto">
            <img src={Logo}  alt="" />
            </div>
             <ul className='flex gap-4'>
               <li className='px-4 py-2 text-white'>Login/Register</li>
              </ul>
              <div className="rounded-full"> 
               <img className="w-12 max-w-full h-12" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="" />
               </div>
        </div>
    </div>
    </div>
  )
}
