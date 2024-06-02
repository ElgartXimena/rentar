import React from 'react'
import { useState, useEffect } from 'react'
import Selector from './Selector'
import { Link, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { checkin, checkout, location, search } from '../../assets'

const SelectorsPanel = ({showLabel, preselected}) => {
  const [showSelectorPick, setshowSelectorPick] = useState(false)
  const [showSelectorRet, setshowSelectorRet] = useState(false)
  const [showSelectorCity, setShowSelectorCity] = useState(false)
  const [today, setToday] = useState(dayjs())

  const [pickedCity, setPickedCity] = useState("Selecciona una ciudad...")
  const [fullCity, setFullCity] = useState("")

  const [pickupDay, setPickupDay] = useState(today)
  const [returnDay, setReturnDay] = useState(today.add(7, 'day'))
//  console.log(preselected)
  const [invalidDates, setInvalidDates] = useState(false)
  useEffect(()=>{
    pickupDay.isAfter(returnDay) ? setInvalidDates(true) : setInvalidDates(false) ;
  },[pickupDay, returnDay])

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/rent', { state: { city: fullCity, dateIn: pickupDay, dateOut: returnDay } });
  }

  const setCity = (city) => {
    console.log(city)
    setPickedCity(city.name + ', ' +city.address)
    setFullCity(city)
  }

  return (
    <div className='flex flex-wrap gap-2 w-full'>
        <Selector type={1} label={'Departure city'} showLabel={showLabel} sampleText={pickedCity} icon={location} setShowSelector={setShowSelectorCity} showSelector={showSelectorCity} setCity={setCity} closeOther={()=>{}}/>
        <Selector type={0} label={'Pickup date'} showLabel={showLabel} sampleText={pickupDay.format('MMMM D, YYYY')} icon={checkin} setShowSelector={setshowSelectorPick} showSelector={showSelectorPick} setDay={setPickupDay} closeOther={()=>{setshowSelectorRet(false)}}/>
        <div className='flex flex-row items-end flex-grow h-min gap-2'>
          <Selector type={0} label={'Return date'} showLabel={showLabel} sampleText={returnDay.format('MMMM D, YYYY')} icon={checkout} setShowSelector={setshowSelectorRet} showSelector={showSelectorRet} setDay={setReturnDay} dateValidation={invalidDates} closeOther={()=>{setshowSelectorPick(false)}}/>
          <button
          onClick={handleNavigate}
          className='bg-color-blue rounded-2xl flex p-[18px] w-fit h-fit items-center hover:scale-95 hover:cursor-pointer hover:opacity-90 transition-all'>
            <img src={search} className='h-6'/>
          </button>
        </div>
    </div>
  )
}

export default SelectorsPanel
