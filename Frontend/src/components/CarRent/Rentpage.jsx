import React, { useEffect, useState } from 'react'
import Selector from '../selector/Selector'
import SelectorsPanel from '../selector/SelectorsPanel'
import { downarrow, search } from '../../assets'
import Filter from '../Filters/Filter'
import BigCarCard from '../Cards/BigCarCard'

const Rentpage = ({setLinkScroll}) => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const orderOptions = [{id:0, name:'Price high to low'}, {id:1, name:'Price low to high'}, {id:2, name:'Top rated first'}]
  const [orderFilter, setOrderFilter] = useState(null)
  
  const vehicleType = [{id:0, name:'Sedán'}, {id:1, name:'SUV'}, {id:2, name:'Pickup'}, {id:3, name:'Sport'}, {id:4, name:'Van'}]
  const [typeFilter, setTypeFilter] = useState(null)
  
  const makeOptions = [{id:0, name:'Chevrolet'}, {id:1, name:'Toyota'}, {id:2, name:'Renault'},{id:3, name:'Volkswagen'}, {id:4, name:'Audi'}]
  const [makeFilter, setMakeFilter] = useState(null)
  
  useEffect(()=>{
    setLinkScroll()
  },[])

  useEffect(()=>{
    console.log(orderFilter)
    console.log(makeFilter)
    console.log(typeFilter)
  },[orderFilter, makeFilter, typeFilter])
  

  return (
    <div id='rentpage' className='h-lvh mt-20 gap-4 flex flex-col mx-8'>
      <div className='flex flex-row h-min items-center gap-2'>
        <SelectorsPanel showLabel={false}/>
        <div className='bg-color-blue rounded-2xl flex p-4 items-center hover:scale-95 hover:cursor-pointer hover:opacity-90 transition-all'>
          <img src={search} className='h-[24px]'/>
        </div>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <Filter selectedFilter={setOrderFilter} placeholder={'Order by'} options={orderOptions}/>
        <Filter selectedFilter={setTypeFilter} placeholder={'Vehicle type'} options={vehicleType}/>
        <Filter selectedFilter={setMakeFilter} placeholder={'Make'} options={makeOptions}/>
        <button className='py-3 px-6 bg-color-blue hover:scale-95 hover:opacity-95 transition-all font-poppins font-medium text-white rounded-3xl'>Apply</button>
      </div>
      <div className='flex flex-wrap w-full h-full gap-4 '>
        <BigCarCard/>
        <BigCarCard/>
        <BigCarCard/>
      </div>
    </div>
  )
}

export default Rentpage
