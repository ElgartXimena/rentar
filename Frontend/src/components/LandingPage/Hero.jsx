import React, { useState, useEffect }from 'react'
import dayjs from "dayjs";
import { herobg } from '../../constants'
import Selector from '../selector/Selector'
import { location, checkin, checkout } from '../../constants'
import DatePicker from '../selector/DatePicker'
import { Link } from 'react-router-dom';
import SelectorsPanel from '../selector/SelectorsPanel';
const Hero = () => {

  return (
    <div
    id="Home"
    className="h-[500px] mx-10 my-5 mt-24 bg-cover bg-center flex items-center justify-center rounded-3xl"
    style={{ backgroundImage: `url(${herobg})` }}
    
    >
        <div 
        className="bg-white/30 text-white items-end
        px-4 py-5 backdrop-blur-md drop-shadow-2xl border-2 border-white rounded-3xl mt-[500px]
        flex-row flex "
        >
        {/* Absolute positioned div */}
          <SelectorsPanel showLabel={true}/>
          <Link to="/rent" className='blue-btn sm:mx-2 sm:my-3'>Choose your car</Link>
        </div>
    </div>
  )
}

export default Hero
