import React, { useEffect, useState } from 'react'
import Selector from '../selector/Selector'
import { checkin, checkout, location } from '../../assets'
import SelectorsPanel from '../selector/SelectorsPanel'
import CarCard from '../Cards/CarCard'
import BigCarCard from '../Cards/BigCarCard'
import Header from '../LandingPage/Header'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import useFetch from '../../Hooks/useFetch'
import Cookies from 'js-cookie'
import { ThreeDot } from 'react-loading-indicators'

const FinalizeRental = () => {
  const locationParam = useLocation();
  const { car, rentData } = locationParam.state || {}

  const datein = dayjs(rentData.dateIn)
  const dateout = dayjs(rentData.dateOut)
  const dif = dateout.diff(datein, 'day')
  const finalPrice = dif * car.price
  const {data, loading, error, fetchdata} = useFetch()
  const [done, setDone] = useState(false)

  const userid = Cookies.get('token')
  async function handleFinalize(){
      const body = {
        user: userid,
        car: car._id,
        city: rentData.city._id,
        dateIn: rentData.dateIn,
        dateOut: rentData.dateOut,
        totalPrice: finalPrice,
      }
      console.log(done)
      if (!done){
        console.log(body)
        fetchdata(body, 'createBooking', null)
        .then(()=>{
            setDone(true)
        })
      }
  }


  return (
    <>
    <Header linkScroll={false}/>
    <div className='flex flex-row gap-3 w-full h-full p-10 mt-14'>
      <BigCarCard finalize={true} carItem={car}/>
      <div className='flex-[0.4] flex-col justify-between p-5'>{/*dataa*/}
          <div className='flex flex-col gap-10 w-full'>
            <span className="bg-gradient-to-br from-color-violet from-40% to-color-blue 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                It's almost yours
            </span>
            {/* Rent data */}
            <div className='flex flex-col gap-2'> 
                <div className='flex flex-col gap-1'>
                  <h1 className='font-poppins font-semibold text-color-stronggray ml-2 '>Departure city</h1>
                  <div className='flex flex-row gap-2 p-5 border-2 border-color-middlegray rounded-2xl items-center'>
                    <img src={location} className='h-5'/>
                    <h1 className='font-poppins font-normal text-color-stronggray'>{rentData.city.name}, {rentData.city.address}</h1>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='font-poppins font-semibold text-color-stronggray ml-2'>Pick up date</h1>
                  <div className='flex flex-row gap-2 p-5 border-2 border-color-middlegray rounded-2xl items-center'>
                    <img src={checkin} className='h-5'/>
                    <h1 className='font-poppins font-normal text-color-stronggray'>{datein.format('dddd D, MMMM')}</h1>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='font-poppins font-semibold text-color-stronggray ml-2'>Return date</h1>
                  <div className='flex flex-row gap-2 p-5 border-2 border-color-middlegray rounded-2xl items-center'>
                    <img src={checkout} className='h-5'/>
                    <h1 className='font-poppins font-normal text-color-stronggray'>{dateout.format('dddd D, MMMM')}</h1>
                  </div>
                </div>
            </div>
          </div>
          <div className='mt-4 flex flex-col w-full p-2'>
            <div className='flex flex-row justify-between font-poppins text-sm text-color-stronggray'>
              <h1>Cost per day</h1>
              <h1>${car.price}</h1>
            </div>
            <div className='flex flex-row justify-between font-poppins text-sm text-color-stronggray'>
              <h1>Number of days</h1>
              <h1>{dif}</h1>
            </div>
            <div className='mt-2 border-b-2 items-baseline flex flex-row justify-between font-poppins font-semibold  text-color-black/80'>
              <h1>Final price</h1>
              <h1 className='text-xl'>${finalPrice}</h1>
            </div>
          </div>
          <h1 className='font-poppins font-light text-xs text-color-stronggray px-2'>There may be additional taxes depending on the country</h1>
          <button 
            onClick={
              handleFinalize
            }
            className={`blue-btn ${done ? 'border-green-600 bg-green-600/10 text-green-600 hover:text-green-600' : null} rounded-xl p-4 hover:rounded-sm mt-4 w-full`}>
              {
                loading ? <ThreeDot variant="pulsate" color="#16a34a" size="small" text="" textColor="" /> :
                done ? 'Succesfully rented!' : 
                  userid == null ? 'Log in to finalize' : 'Finish rent'}
          </button>
      </div>
    </div>
    </>
  )
}

export default FinalizeRental
