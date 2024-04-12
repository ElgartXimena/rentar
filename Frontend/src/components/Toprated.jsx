import React from 'react'

const Toprated = () => {
  return (
    <div className='flex flex-col items-center'>
        <span class="bg-gradient-to-r from-color-lightblue to-color-violet text-transparent font-poppins text-5xl font-semibold bg-clip-text py-2">Our top rated vehicles by clients</span>
        <div className='flex flex-row items-center justify-between my-2'>
            <h1 className='font-poppins font-normal text-4xl text-color-stronggray py-2 mx-6'>
                <span className='font-semibold'>+12K </span>Reviews
            </h1>
            <h1 className='font-poppins font-normal text-4xl text-color-stronggray py-2 mx-6'>
                <span className='font-semibold'>+100 </span> Cars with 4.5+ stars
            </h1>
            <h1 className='font-poppins font-normal text-4xl text-color-stronggray py-2 mx-6'>
                <span className='font-semibold'>+50K </span>Rented cars
            </h1>
        </div>
    </div>
  )
}

export default Toprated
