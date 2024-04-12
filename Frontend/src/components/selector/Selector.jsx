import React from 'react'
import {downarrow} from '../../constants'
const Selector = ({label, sampleText, icon, type}) => {
    //type == 0 is date, 1 is location
    return (
    <div className='flex flex-col mx-2 min-w-[300px]'>
        <label className='font-poppins text-base font-semibold text-white'>{label}</label>
        <div 
            className='flex flex-row rounded-2xl bg-color-lightgray 
            text-color-stronggray font-poppins font-regular items-center 
            mt-1 justify-between p-4 hover:cursor-text hover:border-color-black 
            hover:border-2 transition-all duration-100' 
            onClick={()=>{}}
        >
            <div className='flex-row flex'>
                <img src={icon}/>
                <input className='pr-4 pl-1 border-none bg-color-lightgray outline-none' placeholder={sampleText} />
            </div>
            <img src={downarrow}/>
        </div>
    </div>
  )
}

export default Selector
