import React from 'react'
import {downarrow} from '../../constants'
import DatePicker from './DatePicker'
import cn from '../../Utils/Datepickerutils/cn'
import CityPicker from './CityPicker'
const Selector = ({closeOther, label, sampleText, icon, type, setShowSelector, showSelector, setDay, dateValidation, setCity, showLabel}) => {
    //type == 0 is date, 1 is location
    return (
    <div className='flex flex-col flex-grow min-w-80'>
        {showLabel ? <label className='font-poppins text-base font-semibold text-color-black/70 ml-4'>{label}</label> : null}
        <div 
            className={`flex w-full justify-between flex-row rounded-[20px] bg-white 
            text-color-middlegray font-poppins items-center 
            ${dateValidation ? 'inner-border-2 inner-border-red-500' : ''}
            mt-1  p-5 hover:cursor-text
            inner-border-[1px] hover:inner-border-color-black transition-all duration-300`}
            onClick={()=>{setShowSelector(!showSelector); closeOther()}}
        >
            <div className='flex-row w-full flex gap-2 items-center'>
                <img src={icon}/>
                <input readOnly={true} className='placeholder:font-medium  pr-auto border-none bg-white outline-none text-color-black font-medium w-full' placeholder={sampleText}/>
            </div>
            <img src={downarrow} className='hover:scale-[1.05] hover:cursor-pointer'/>
        </div>
        <div className='absolute top-32 w-[300px]'>       
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
