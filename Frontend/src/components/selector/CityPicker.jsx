import React, { useEffect, useState } from 'react'
import useFetch from '../../Hooks/useFetch'

const CityPicker = ({setPickedCity, setShowSelector}) => {
    const [cities, setCities] = useState([])
    const { data, loading, error, fetchdata } = useFetch()

    useEffect(()=>{
      async function fetch(){
        await fetchdata(null, 'findCities', null)
      }
      fetch()
    }, [])

    useEffect(()=>{
      if (data){
        setCities(data)
      }
    }, [data])

    useEffect(()=>{
      console.log(cities)
    }, [cities])
    return (
    <div 
    className='flex-col bg-white rounded-2xl hover:cursor-pointer drop-shadow-2xl z-100 font-poppins text-color-stronggray 
    overflow-y-auto scrollbar scrollbar-thumb-color-middlegray  scrollbar-w-2 scrollbar-thumb-rounded max-h-[120px]'>
      <ul>
        {cities.map((item, index) => (
          <li key={index} className='hover:cursor-pointer hover:bg-color-lightgray p-6 hover:text-color-black' onClick={()=>{setPickedCity(item); setShowSelector(false)}}>{item.name}, {item.address}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityPicker
