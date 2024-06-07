import React from 'react'
import Header from '../LandingPage/Header'
import BookingRow from './BookingRow'

const Bookings = () => {
  const bookings = [
    {
         _id : "665e11834beee7caf1bc0706",
         user : "665e11394beee7caf1bc06ff", //para que?
         car : {
            _id : "665a08573838926b512202d8",
            make: "Toyota",
            model: "Corolla",
            url: "https://i.postimg.cc/8zGx7cww/corolla.png",
            year: 2019,
            seats: 5,
            luggage: 3,
            category: "Sedan",
            price: 39,
            rating: 4.2,
            city: "Mar del Plata"
        }, //necesito el object
        city: {
          _id: "665a170f724f762d62f532cd",
          name: "Tandil",
          address: "Buenos Aires",
          __v: 0
        }, //necesito el name
        dateIn : "2024-06-08", //solo la fecha
        dateOut: "2024-06-10",
        totalPrice: 78,
        __v: 0
    },
    {
         _id : "665e11834beee7caf1bc0706",
         user : "665e11394beee7caf1bc06ff", //para que?
         car : {
            _id : "665a08573838926b512202d8",
            make: "Toyota",
            model: "Corolla",
            url: "https://i.postimg.cc/8zGx7cww/corolla.png",
            year: 2019,
            seats: 5,
            luggage: 3,
            category: "Sedan",
            price: 39,
            rating: 4.2,
            city: "Mar del Plata"
        }, //necesito el object
        city: {
          _id: "665a170f724f762d62f532cd",
          name: "Tandil",
          address: "Buenos Aires",
          __v: 0
        }, //necesito el name
        dateIn : "2024-06-08", //solo la fecha
        dateOut: "2024-06-10",
        totalPrice: 78,
        __v: 0
    },
    {
         _id : "665e11834beee7caf1bc0706",
         user : "665e11394beee7caf1bc06ff", //para que?
         car : {
            _id : "665a08573838926b512202d8",
            make: "Toyota",
            model: "Corolla",
            url: "https://i.postimg.cc/8zGx7cww/corolla.png",
            year: 2019,
            seats: 5,
            luggage: 3,
            category: "Sedan",
            price: 39,
            rating: 4.2,
            city: "Mar del Plata"
        }, //necesito el object
        city: {
          _id: "665a170f724f762d62f532cd",
          name: "Tandil",
          address: "Buenos Aires",
          __v: 0
        }, //necesito el name
        dateIn : "2024-06-01", //solo la fecha
        dateOut: "2024-06-02",
        totalPrice: 178,
        __v: 0
    },
    {
         _id : "665e11834beee7caf1bc0706",
         user : "665e11394beee7caf1bc06ff", //para que?
         car : {
            _id : "665a08573838926b512202d8",
            make: "Toyota",
            model: "Corolla",
            url: "https://i.postimg.cc/8zGx7cww/corolla.png",
            year: 2019,
            seats: 5,
            luggage: 3,
            category: "Sedan",
            price: 39,
            rating: 4.2,
            city: "Mar del Plata"
        }, //necesito el object
        city: {
          _id: "665a170f724f762d62f532cd",
          name: "Tandil",
          address: "Buenos Aires",
          __v: 0
        }, //necesito el name
        dateIn : "2024-06-01", //solo la fecha
        dateOut: "2024-06-02",
        totalPrice: 178,
        __v: 0
    },
    {
         _id : "665e11834beee7caf1bc0706",
         user : "665e11394beee7caf1bc06ff", //para que?
         car : {
            _id : "665a08573838926b512202d8",
            make: "Toyota",
            model: "Corolla",
            url: "https://i.postimg.cc/8zGx7cww/corolla.png",
            year: 2019,
            seats: 5,
            luggage: 3,
            category: "Sedan",
            price: 39,
            rating: 4.2,
            city: "Mar del Plata"
        }, //necesito el object
        city: {
          _id: "665a170f724f762d62f532cd",
          name: "Tandil",
          address: "Buenos Aires",
          __v: 0
        }, //necesito el name
        dateIn : "2024-06-01", //solo la fecha
        dateOut: "2024-06-04",
        totalPrice: 728,
        __v: 0
    },
    {
         _id : "665e11834beee7caf1bc0706",
         user : "665e11394beee7caf1bc06ff", //para que?
         car : {
            _id : "665a08573838926b512202d8",
            make: "Toyota",
            model: "Corolla",
            url: "https://i.postimg.cc/8zGx7cww/corolla.png",
            year: 2019,
            seats: 5,
            luggage: 3,
            category: "Sedan",
            price: 39,
            rating: 4.2,
            city: "Mar del Plata"
        }, //necesito el object
        city: {
          _id: "665a170f724f762d62f532cd",
          name: "Tandil",
          address: "Buenos Aires",
          __v: 0
        }, //necesito el name
        dateIn : "2024-06-01", //solo la fecha
        dateOut: "2024-06-04",
        totalPrice: 728,
        __v: 0
    },
  ]
  return (
    <section className='pb-4'>
        <Header linkScroll={false}/>
        <div className='flex flex-col gap-2 mx-10'>
          <h1 className='mt-20 mb-4 py-6 border-b-2 border-color-middlegray/70'>
            <span className="bg-gradient-to-br from-color-violet from-40% to-color-blue 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                Here are your bookings
            </span>
          </h1>
          {
            bookings ? (
              bookings.map((booking)=>(
                <BookingRow booking={booking}/>
              ))
            ) : null
          }
        </div>
    </section>
  )
}

export default Bookings
