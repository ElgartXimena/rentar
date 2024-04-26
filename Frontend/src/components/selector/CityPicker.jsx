import React from 'react'

const CityPicker = ({setPickedCity, setShowSelector}) => {
    const cities = [{id:0, name:'Tandil, Buenos Aires'}, {id:1, name:'Mar del Plata, Buenos Aires'}]
    return (
    <div 
    className='flex-col bg-white rounded-2xl drop-shadow-2xl z-100 font-poppins text-color-stronggray 
    overflow-y-auto scrollbar scrollbar-thumb-color-middlegray  scrollbar-w-2 scrollbar-thumb-rounded max-h-[120px]'>
      <ul>
        {cities.map((item) => (
          <li key={item.id} className='hover:bg-color-lightgray p-6 hover:text-color-black' onClick={()=>{setPickedCity(item.name); setShowSelector(false)}}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityPicker
