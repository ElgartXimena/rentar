import React, { useState, useEffect }from 'react'
import { herobg } from '../../constants'
import { Link } from 'react-router-dom';
import SelectorsPanel from '../selector/SelectorsPanel';
const Hero = () => {

  return (
    <div className='flex flex-row gap-4 mx-10 mt-20'>
        <div 
        className="bg-white/30 text-white items-end
        px-4 py-5 drop-shadow-2xl border-2 border-white rounded-3xl 
        flex-col flex w-full justify-between"
        >
          <SelectorsPanel showLabel={true}/>
          <Link to="/rent" className='blue-btn w-full mt-4'>Choose your car</Link>
        </div>
        <div className="flex h-full rounded-3xl overflow-hidden">
            <img src={herobg} className="w-full h-full object-fill" alt="Hero Image"/>
        </div>

    </div>
  )
}

export default Hero
