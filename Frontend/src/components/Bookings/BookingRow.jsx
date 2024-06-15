import React from 'react'
import BookingState from './BookingState'

const BookingRow = ({booking}) => {
    
  return (
    <div className='flex flex-row gap-2 p-5 w-full hover:drop-shadow-xl drop-shadow-md  bg-white rounded-2xl items-center hover:scale-[1.001] hover:cursor-pointer transition-all scrollbar scrollbar-thumb-rounded- scrollbar-thumb-color-middlegray/50 overflow-x-auto'>
        <img src={booking.car.url} className='h-12 w-16 object-cover rounded-md '/>
        <h1 className='font-poppins text-xl text-color-blue flex-grow'>
            {booking.car.make} 
            <span className='font-semibold ml-1'> {booking.car.model}</span>
            <span className='font-extralight ml-2'> {booking.car.year}</span>
        </h1>
        <h1 className='font-poppins text-xl text-color-blue text-center flex-grow'>
            {booking.car.category}
        </h1>
        <h1 className='font-poppins text-xl text-color-blue flex-grow'>
            {booking.city.name}, {booking.city.address}
        </h1>
        <h1 className='font-poppins text-xl text-color-blue flex-grow text-center '>
           {booking.dateIn}
        </h1>
        <h1 className='font-poppins text-xl text-color-blue flex-grow text-center '>
            {booking.dateOut}
        </h1>
        <BookingState datein={booking.dateIn} dateout={booking.dateOut}/>
        <h1 className='font-poppins text-xl font-bold text-color-blue flex-grow text-right'>
            ${booking.totalPrice}
        </h1>
    </div>
  )
}

export default BookingRow
