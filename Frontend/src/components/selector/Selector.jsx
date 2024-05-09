import React from 'react'
import {downarrow} from '../../constants'
import DatePicker from './DatePicker'
import cn from '../../Utils/Datepickerutils/cn'
import CityPicker from './CityPicker'
const Selector = ({closeOther, label, sampleText, icon, type, setShowSelector, showSelector, setDay, dateValidation, setCity, showLabel}) => {
    //type == 0 is date, 1 is location
    return (
    <div className='flex flex-col min-w-[300px]'>
        {showLabel ? <label className='font-poppins text-base font-semibold text-white'>{label}</label> : null}
        <div 
            className={`flex flex-row rounded-[20px] bg-white 
            text-color-middlegray font-poppins items-center 
            ${dateValidation ? 'inner-border-2 inner-border-red-500' : ''}
            mt-1 justify-between p-5 hover:cursor-text inner-border-color-black
            inner-border-[1px] hover:inner-border-2 transition-all duration-100`}
            onClick={()=>{setShowSelector(!showSelector); closeOther()}}
        >
            <div className='flex-row flex gap-2 items-center'>
                <img src={icon}/>
                <input className='placeholder:font-medium  pr-auto border-none bg-white outline-none text-color-black font-medium' placeholder={sampleText}/>
            </div>
            <img src={downarrow} className='hover:scale-125 hover:drop-shadow-lg'/>
        </div>
        <div className='absolute lg:top-36 sm:top-56 w-[300px]'>       
        {
            showSelector ? (
                type === 0 ? <DatePicker setPickDay={setDay} setShowSelector={setShowSelector}/> : <CityPicker setPickedCity={setCity} setShowSelector={setShowSelector}/>
            ) : null
        }
        </div>
    </div>
  )
}

export default Selector
