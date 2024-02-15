import React from 'react'
import Banner from "../assets/Banner.jpg"

export const Hero = () => {
  return (
    <div>
        <div className='w-full opacity-50 relative -z-10'>
        <img className ="w-full h-screen object-cover" src={Banner} alt="" />
        </div>
        <div className="flex flex-col items-center text-white text-6xl absolute w-full top-1/2">
           <h1>High Rated Movies, Web Series & TV Shows</h1>
        </div>
    </div>
  )
}
