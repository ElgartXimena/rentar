import React from 'react'
import { herobg } from '../constants'
import Selector from './selector/Selector'
import { location, checkin, checkout } from '../constants'
import DatePicker from './selector/DatePicker'
const Hero = () => {
  return (
    <div
    className="h-[500px] mx-10 my-5 bg-cover bg-center flex items-center justify-center rounded-3xl"
    style={{ backgroundImage: `url(${herobg})` }}
    >
        <div 
        className="bg-white/30 text-white 
        px-4 py-5 backdrop-blur-md drop-shadow-2xl border-2 border-white rounded-3xl absolute top-[500px]
        flex-row flex"
        >
        {/* Absolute positioned div */}
          <Selector label={'Departure city'} sampleText={'Bariloche, Rio Negro'} icon={location}/>
          <Selector label={'Pickup date'} sampleText={'9th April, 2024'} icon={location}/>
          <Selector label={'Return date'} sampleText={'14th April,2024'} icon={location}/>
          <div className='blue-btn'>Select a car</div>
        </div>
        <DatePicker/>
    </div>
  )
}

export default Hero
