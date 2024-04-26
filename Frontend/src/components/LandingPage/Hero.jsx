import React, { useState, useEffect }from 'react'
import dayjs from "dayjs";
import { herobg } from '../../constants'
import Selector from '../selector/Selector'
import { location, checkin, checkout } from '../../constants'
import DatePicker from '../selector/DatePicker'
const Hero = () => {
  const [showSelectorPick, setshowSelectorPick] = useState(false)
  const [showSelectorRet, setshowSelectorRet] = useState(false)
  const [showSelectorCity, setShowSelectorCity] = useState(false)
  const [today, setToday] = useState(dayjs())
  const [pickedCity, setPickedCity] = useState("Selecciona una ciudad...")
  const [pickupDay, setPickupDay] = useState(today)
  const [returnDay, setReturnDay] = useState(today.add(7, 'day'))

  const [invalidDates, setInvalidDates] = useState(false)
  useEffect(()=>{
    pickupDay.isAfter(returnDay) ? setInvalidDates(true) : setInvalidDates(false) ;
  },[pickupDay, returnDay])
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
          <Selector type={1} label={'Departure city'} sampleText={pickedCity} icon={location} setShowSelector={setShowSelectorCity} showSelector={showSelectorCity} setCity={setPickedCity}/>
          <Selector type={0} label={'Pickup date'} sampleText={pickupDay.format('MMMM D, YYYY')} icon={checkin} setShowSelector={setshowSelectorPick} showSelector={showSelectorPick} setDay={setPickupDay} closeOther={()=>{setshowSelectorRet(false)}}/>
          <Selector type={0} label={'Return date'} sampleText={returnDay.format('MMMM D, YYYY')} icon={checkout} setShowSelector={setshowSelectorRet} showSelector={showSelectorRet} setDay={setReturnDay} dateValidation={invalidDates} closeOther={()=>{setshowSelectorPick(false)}}/>
          <div className='blue-btn sm:mx-2 sm:my-3' onClick={()=>{console.warn(pickupDay, returnDay)}}>Choose your car</div>
        </div>
    </div>
  )
}

export default Hero
