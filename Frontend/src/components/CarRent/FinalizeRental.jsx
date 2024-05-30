import React, { useEffect } from 'react'
import Selector from '../selector/Selector'
import { location } from '../../assets'
import SelectorsPanel from '../selector/SelectorsPanel'
import CarCard from '../Cards/CarCard'
import BigCarCard from '../Cards/BigCarCard'
import Header from '../LandingPage/Header'

const FinalizeRental = () => {

  return (
    <>
    <Header linkScroll={true}/>
    <div className='flex flex-row gap-3 w-full h-full p-10 mt-14'>
      <BigCarCard finalize={true}/>
      <div className='flex-[0.4] flex-col justify-between p-5'>{/*dataa*/}
          <div className='flex flex-col gap-10 w-full'>
            <span className="bg-gradient-to-br from-color-violet from-40% to-color-blue 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                It's almost yours
            </span>
            <SelectorsPanel showLabel={false} preselected={["", "", ""]}/>
          </div>
          <div className='mt-4 flex flex-col w-full p-2'>
            <div className='flex flex-row justify-between font-poppins text-sm text-color-stronggray'>
              <h1>Cost per day</h1>
              <h1>$19</h1>
            </div>
            <div className='flex flex-row justify-between font-poppins text-sm text-color-stronggray'>
              <h1>Number of days</h1>
              <h1>5</h1>
            </div>
            <div className='mt-2 border-b-2 items-baseline flex flex-row justify-between font-poppins font-semibold  text-color-black/80'>
              <h1>Final price</h1>
              <h1 className='text-xl'>$180</h1>
            </div>
          </div>
          <h1 className='font-poppins font-light text-xs text-color-stronggray px-2'>There may be additional taxes depending on the country</h1>
          <div className='blue-btn rounded-lg hover:rounded-sm mt-4'>Finish</div>
      </div>
    </div>
    </>
  )
}

export default FinalizeRental
