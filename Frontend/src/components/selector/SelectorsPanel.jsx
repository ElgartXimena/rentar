import React from 'react'
import { useState, useEffect } from 'react'
import Selector from './Selector'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { checkin, checkout, location } from '../../assets'

const SelectorsPanel = ({showLabel, preselected}) => {
  const [showSelectorPick, setshowSelectorPick] = useState(false)
  const [showSelectorRet, setshowSelectorRet] = useState(false)
  const [showSelectorCity, setShowSelectorCity] = useState(false)
  const [today, setToday] = useState(dayjs())
  const [pickedCity, setPickedCity] = useState("Selecciona una ciudad...")
  const [pickupDay, setPickupDay] = useState(today)
  const [returnDay, setReturnDay] = useState(today.add(7, 'day'))
  console.log(preselected)
  const [invalidDates, setInvalidDates] = useState(false)
  useEffect(()=>{
    pickupDay.isAfter(returnDay) ? setInvalidDates(true) : setInvalidDates(false) ;
  },[pickupDay, returnDay])

  return (
    <div className='flex flex-col gap-2 w-full'>
        <Selector type={1} label={'Departure city'} showLabel={showLabel} sampleText={pickedCity} icon={location} setShowSelector={setShowSelectorCity} showSelector={showSelectorCity} setCity={setPickedCity}/>
        <Selector type={0} label={'Pickup date'} showLabel={showLabel} sampleText={pickupDay.format('MMMM D, YYYY')} icon={checkin} setShowSelector={setshowSelectorPick} showSelector={showSelectorPick} setDay={setPickupDay} closeOther={()=>{setshowSelectorRet(false)}}/>
        <Selector type={0} label={'Return date'} showLabel={showLabel} sampleText={returnDay.format('MMMM D, YYYY')} icon={checkout} setShowSelector={setshowSelectorRet} showSelector={showSelectorRet} setDay={setReturnDay} dateValidation={invalidDates} closeOther={()=>{setshowSelectorPick(false)}}/>
    </div>
  )
}

export default SelectorsPanel
