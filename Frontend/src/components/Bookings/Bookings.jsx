import React, { useEffect, useState } from 'react'
import Header from '../LandingPage/Header'
import BookingRow from './BookingRow'
import useFetch from '../../Hooks/useFetch'
import Cookies from 'js-cookie'
const Bookings = () => {
  
  const [bookings, setBookings] = useState([])
  const {data, loading, error, fetchdata } = useFetch();

  useEffect(()=>{
    async function fetch(){
      const params = '/' + Cookies.get('token')
      await fetchdata(null, 'getBookings', params)
    }
    fetch()
  }, [])

  useEffect(()=>{
    if (data){
      setBookings(data)
    }
  }, [data])

  useEffect(()=>{

  }, [bookings])

  //getUser from cookies
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
