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
  
  const hasCity = preselected ? (preselected.city ? true : false) : false
  const [pickedCity, setPickedCity] = useState(hasCity ? preselected.city.name + ', ' + preselected.city.address : null)
  const [fullCity, setFullCity] = useState("")

  const hasDates = preselected ? (preselected.dateIn ? true : false) : false
  const [pickupDay, setPickupDay] = useState(hasDates ? dayjs(preselected.dateIn) : today)
  const [returnDay, setReturnDay] = useState(hasDates ? dayjs(preselected.dateOut) : today.add(7, 'day'))

  const [invalidDates, setInvalidDates] = useState(false)
  useEffect(()=>{
    pickupDay.isAfter(returnDay) ? setInvalidDates(true) : setInvalidDates(false) ;
  },[pickupDay, returnDay])

  const navigate = useNavigate()

  function formatCity(city){
    const name = city.split(',')[0].trim();

// Reemplazar los espacios con guiones y convertir a formato de título
    const formattedCity = name.split(' ')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                          .join('-');
    return formattedCity
  }

  const handleNavigate = () => {
    //must provide a city
    let path = '/rent'
    let city = '/'
    let dateIn ='/'
    let dateOut ='/'
    if (pickedCity){
      city = city + formatCity(pickedCity)
      
    }
    if (pickupDay){
      dateIn = dateIn + pickupDay.format('YYYY-MM-DD')
      dateOut = dateOut + returnDay.format('YYYY-MM-DD')
    }
    path = path + city + dateIn + dateOut
    
    navigate(path, { state: { city: fullCity, dateIn: pickupDay.format('YYYY-MM-DD'), dateOut: returnDay.format('YYYY-MM-DD') } });
    
  }

  const setCity = (city) => {
    
    setPickedCity(city.name + ', ' +city.address)
    setFullCity(city)
  }

  return (
    <div className='flex flex-wrap gap-2 w-full z-10'>
        <Selector type={1} label={'Departure city'} showLabel={showLabel} sampleText={pickedCity ? pickedCity : "Selecciona una ciudad..."} icon={location} setShowSelector={setShowSelectorCity} showSelector={showSelectorCity} setCity={setCity} closeOther={()=>{}}/>
        <Selector type={0} label={'Pickup date'} showLabel={showLabel} sampleText={pickupDay.format('MMMM D, YYYY')} icon={checkin} setShowSelector={setshowSelectorPick} showSelector={showSelectorPick} setDay={setPickupDay} closeOther={()=>{setshowSelectorRet(false)}}/>
        <div className='flex flex-row items-end flex-grow h-min gap-2'>
          <Selector type={0} label={'Return date'} showLabel={showLabel} sampleText={returnDay.format('MMMM D, YYYY')} icon={checkout} setShowSelector={setshowSelectorRet} showSelector={showSelectorRet} setDay={setReturnDay} dateValidation={invalidDates} closeOther={()=>{setshowSelectorPick(false)}}/>
          <button
          onClick={pickedCity ? handleNavigate : ()=>{}}
          className={`${pickedCity ? 'bg-color-blue' : 'bg-color-stronggray'} rounded-2xl flex p-[18px] w-fit h-fit items-center hover:scale-95 hover:cursor-pointer hover:opacity-90 transition-all`}>
            <img src={search} className='h-6'/>
          </button>
        </div>
    </div>
  )
}

export default SelectorsPanel
