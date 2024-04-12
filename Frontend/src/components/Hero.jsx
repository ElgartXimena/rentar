import React, { useState, useEffect }from 'react'
import dayjs from "dayjs";
import { herobg } from '../constants'
import Selector from './selector/Selector'
import { location, checkin, checkout } from '../constants'
import DatePicker from './selector/DatePicker'
const Hero = () => {
  const [showSelector, setShowSelector] = useState(false)
  const [showSelector2, setShowSelector2] = useState(false)
  const [today, setToday] = useState(dayjs())

  const [pickupDay, setPickupDay] = useState(today)
  const [returnDay, setReturnDay] = useState(today.add(7, 'day'))

  const [invalidDates, setInvalidDates] = useState(false)
  useEffect(()=>{
    pickupDay.isAfter(returnDay) ? setInvalidDates(true) : setInvalidDates(false) ;
  },[pickupDay, returnDay])
  return (
    <div
    className="h-[500px] mx-10 my-5 mt-24 bg-cover bg-center flex items-center justify-center rounded-3xl"
    style={{ backgroundImage: `url(${herobg})` }}
    >
        <div 
        className="bg-white/30 text-white items-end
        px-4 py-5 backdrop-blur-md drop-shadow-2xl border-2 border-white rounded-3xl mt-[500px]
        lg:flex-row flex sm:flex-col"
        >
        {/* Absolute positioned div */}
          <Selector label={'Departure city'} sampleText={'Bariloche, Rio Negro'} icon={location}/>
          <Selector label={'Pickup date'} sampleText={pickupDay.format('MMMM D, YYYY')} icon={checkin} setShowSelector={setShowSelector} showSelector={showSelector} setDay={setPickupDay}/>
          <Selector label={'Return date'} sampleText={returnDay.format('MMMM D, YYYY')} icon={checkout} setShowSelector={setShowSelector2} showSelector={showSelector2} setDay={setReturnDay} dateValidation={invalidDates}/>
          <div className='blue-btn sm:mx-2 sm:my-3' onClick={()=>{console.warn(pickupDay, returnDay)}}>Choose your car</div>
        </div>
    </div>
  )
}

export default Hero
