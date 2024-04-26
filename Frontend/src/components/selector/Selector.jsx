import React from 'react'
import {downarrow} from '../../constants'
import DatePicker from './DatePicker'
import cn from '../../Utils/Datepickerutils/cn'
import CityPicker from './CityPicker'
const Selector = ({closeOther, label, sampleText, icon, type, setShowSelector, showSelector, setDay, dateValidation, setCity}) => {
    //type == 0 is date, 1 is location
    return (
    <div className='flex flex-col mx-2 min-w-[300px] sm:my-2'>
        <label className='font-poppins text-base font-semibold text-white'>{label}</label>
        <div 
            className={`flex flex-row rounded-2xl bg-color-lightgray 
            text-color-stronggray font-poppins font-regular items-center 
            ${dateValidation ? 'inner-border-2 inner-border-red-500' : ''}
            mt-1 justify-between p-4 hover:cursor-text hover:inner-border-color-black
            hover:inner-border-2 transition-all duration-100`}
            onClick={()=>{setShowSelector(!showSelector); closeOther()}}
        >
            <div className='flex-row flex'>
                <img src={icon}/>
                <input className='pr-auto pl-1 border-none bg-color-lightgray outline-none text-color-black font-medium' placeholder={sampleText}/>
            </div>
            <img src={downarrow} className='hover:scale-125 hover:drop-shadow-lg'/>
        </div>
        <div className='absolute lg:top-32 sm:top-56 w-[300px]'>       
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
