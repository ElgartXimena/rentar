import React, { useState, useEffect }from 'react'
import { herobg } from '../../constants'
import { Link } from 'react-router-dom';
import SelectorsPanel from '../selector/SelectorsPanel';
const Hero = () => {

  return (
    <div className='flex flex-col sm:flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-4 mx-10 h-svh pt-20 pb-10'>
        <div 
        className="bg-white/30 text-white items-start
        px-4 py-5 drop-shadow-2xl border-2 border-white rounded-3xl 
        flex-col flex-1 flex justify-between "
        >
        <h1 className='flex mb-10 p-2'>
          <span className="bg-gradient-to-br from-color-violet from-40% to-color-blue 
            text-transparent font-poppins text-7xl font-semibold bg-clip-text">
                Start your journey today
          </span>
        </h1>
          <SelectorsPanel showLabel={true}/>
          {/* <Link to="/rent" className='blue-btn w-full mt-4'>Choose your car</Link> */}
        </div>
        <div className="flex-1 rounded-3xl overflow-hidden">
            <img src={herobg} className="w-full h-full object-cover" alt="Hero Image"/>
        </div>

    </div>
  )
}

export default Hero
