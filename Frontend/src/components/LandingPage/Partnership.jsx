import React from 'react'
import { chevrolet, fiat, ford, renault, toyota, vw } from '../../assets'

const Partnership = () => {
  return (
    <div className='flex flex-col items-center mt-10 py-10 mx-10'>
        <h1 className='font-poppins font-semibold text-color-stronggray text-2xl mb-4'>
            In partnership with
        </h1>
        <div className='flex flex-wrap items-center w-full lg:justify-between md:justify-center sm:justify-center max-w-[1400px]'>
            <img src={renault} className='hover:scale-90 ease-in-out duration-200'/>
            <img src={ford} className='hover:scale-90 ease-in-out duration-200'/>
            <img src={fiat} className=' hover:scale-90 ease-in-out duration-200'/>
            <img src={toyota} className=' hover:scale-90 ease-in-out duration-200'/>
            <img src={chevrolet} className=' hover:scale-90 ease-in-out duration-200'/>
            <img src={vw} className=' hover:scale-90 ease-in-out duration-200'/>
        </div>
    </div>
  )
}

export default Partnership
