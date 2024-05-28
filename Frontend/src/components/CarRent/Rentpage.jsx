import React, { useEffect, useState } from 'react'
import Selector from '../selector/Selector'
import SelectorsPanel from '../selector/SelectorsPanel'
import { downarrow, search as searchIcon } from '../../assets'
import Filter from '../Filters/Filter'
import BigCarCard from '../Cards/BigCarCard'
import { useLocation, useParams } from 'react-router-dom'

const Rentpage = ({setLinkScroll}) => {
  const {search} = useLocation()
  const queryParams = new URLSearchParams(search)
  const type = queryParams.get('type');
  const city = queryParams.get('city');
  const dateIn = queryParams.get('dateIn');
  const dateOut = queryParams.get('dateOut');
  
  const [selectedFilters, setSelectedFilters] = useState([])
  const orderOptions = [{id:0, name:'Price high to low'}, {id:1, name:'Price low to high'}, {id:2, name:'Top rated first'}]
  const [orderFilter, setOrderFilter] = useState(null)
  
  const vehicleType = [{id:0, name:'Sedán'}, {id:1, name:'SUV'}, {id:2, name:'Pickup'}, {id:3, name:'Sport'}, {id:4, name:'Van'}]
  const [typeFilter, setTypeFilter] = useState(type ? type : null)
  
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
  
console.log(type)
  return (
    <div id='rentpage' className='h-full mt-20 gap-4 flex flex-col mx-8'>
      <div className='flex flex-col my-4 justify-center items-center gap-3'>
        <div className='flex flex-row items-center gap-2 z-10'>
          <SelectorsPanel showLabel={false} preselected={[city, dateIn, dateOut]}/>
          <div className='bg-color-blue rounded-2xl flex p-4 items-center hover:scale-95 hover:cursor-pointer hover:opacity-90 transition-all'>
            <img src={searchIcon} className='h-[24px]'/>
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <Filter selectedFilter={setOrderFilter} placeholder={'Order by'} options={orderOptions}/>
          <Filter selectedFilter={setTypeFilter} placeholder={'Vehicle type'} options={vehicleType} hasFilter={type ? true : false} prefilter={type}/>
          <Filter selectedFilter={setMakeFilter} placeholder={'Make'} options={makeOptions}/>
          <button className='py-3 px-6 bg-color-blue hover:scale-95 hover:opacity-95 transition-all font-poppins font-medium text-white rounded-3xl'>Apply</button>
        </div>
      </div>
      <div className='flex flex-wrap w-full h-full gap-4 justify-center z-0'>
        <BigCarCard finalize={false}/>
        <BigCarCard finalize={false}/>
        <BigCarCard finalize={false}/>
        <BigCarCard finalize={false}/>
      </div>
    </div>
  )
}

export default Rentpage
