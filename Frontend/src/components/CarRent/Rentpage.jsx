import React, { useEffect, useState } from 'react'
import Selector from '../selector/Selector'
import SelectorsPanel from '../selector/SelectorsPanel'
import { downarrow, search as searchIcon } from '../../assets'
import Filter from '../Filters/Filter'
import BigCarCard from '../Cards/BigCarCard'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../LandingPage/Header'
import Footer from '../LandingPage/Footer'
import dayjs from 'dayjs'
import useFetch from '../../Hooks/useFetch'
import {OrbitProgress} from 'react-loading-indicators'
import FilterMake from '../../Utils/Filters/FilterMake'
import HighToLow from '../../Utils/Filters/HighToLow'
import FilterCategory from '../../Utils/Filters/FilterCategory'
import LowToHigh from '../../Utils/Filters/LowToHigh'
import TopRatedFirst from '../../Utils/Filters/TopRatedFirst'
const Rentpage = () => {
  const location = useLocation()
  const state = location.state
  
  const type = state?.category
  const city = state?.city
  const dateIn = state?.dateIn
  const dateOut =state?.dateOut

  

  const [cars, setCars] = useState([])
  const {data, loading, error, fetchdata} = useFetch()

  useEffect(()=>{
    const endpoint = city ? 'findCars' : 'findByCategory'
    async function fetch(){
      if (endpoint === 'findCars'){
        
        const body = {
          city: city._id,
          startDate: dateIn,
          endDate: dateOut
        }
        await fetchdata(body, endpoint, null)
      } else {
        await fetchdata(null, endpoint, type)
      }
    }
    fetch()
  }, [window.location.pathname])

  useEffect(()=>{
    if (data){
      setCars(data)
    }
  }, [data])

  useEffect(()=>{
  }, [cars, type])
  
  const orderOptions = [
    {id:0, filter: new HighToLow()},
    {id:1, filter: new LowToHigh()},
    {id:2, filter: new TopRatedFirst()},
  ]
  const [orderFilter, setOrderFilter] = useState(null)
  
  const vehicleType = [
    {id:0, filter: new FilterCategory('Sedan')}, 
    {id:1, filter: new FilterCategory('SUV')}, 
    {id:2, filter: new FilterCategory('Pickup')}, 
    {id:3, filter: new FilterCategory('Sport')}, 
    {id:4, filter: new FilterCategory('Van')}]
  const [typeFilter, setTypeFilter] = useState(type ? type : null)
  
  const makeOptions = [
    {id:0, filter: new FilterMake('Chevrolet')}, 
    {id:1, filter: new FilterMake('Toyota')}, 
    {id:2, filter: new FilterMake('Renault')}, 
    {id:3, filter: new FilterMake('Volkswagen')}, 
    {id:4, filter: new FilterMake('Audi')},
    {id:5, filter: new FilterMake('Fiat')},
    {id:6, filter: new FilterMake('Ford')},
    {id:7, filter: new FilterMake('Jeep')},
  ]
  const [makeFilter, setMakeFilter] = useState(null)
  
  const [apply, setApply] = useState(false)

  useEffect(()=>{

    const filters = [orderFilter?.filter, makeFilter?.filter, typeFilter?.filter]
    let result = data
    if ((typeFilter == null) && (city == null)) { 
      //significa que vino desde las categorias y quito el filtro de la categoria. 
        setCars(null)
    } else {
      filters.forEach(filter => {
          if (filter != null){
            result = filter.applyFilter(result)
          }
      });
      setCars(result)
    }

  },[apply, data])
  
  return (
    <section className='flex flex-col justify-between h-full'>
    <Header linkScroll={false}/>
    <div id='rentpage' className='h-full gap-4 mt-14 flex flex-col mx-8'>
      <div className='flex flex-col my-4 justify-center items-center gap-3'>
      <div className='flex lg:flex-row xl:flex-row flex-col gap-2'>
        <SelectorsPanel showLabel={false} preselected={{city: city, dateIn: dateIn, dateOut: dateOut} }/>
        
      </div>
        <div className='flex flex-wrap gap-2 items-center'>
          <Filter selectedFilter={setOrderFilter} placeholder={'Order by'} options={orderOptions}/>
          <Filter selectedFilter={setTypeFilter} placeholder={'Vehicle type'} options={vehicleType} hasFilter={type ? true : false} prefilter={type}/>
          <Filter selectedFilter={setMakeFilter} placeholder={'Make'} options={makeOptions}/>
          <button 
          onClick={()=>{setApply(!apply)}}
          className='py-3 px-6 bg-color-blue hover:scale-95 hover:opacity-95 transition-all font-poppins font-medium text-white rounded-3xl'>
            Apply
          </button>
        </div>
      </div>
      {
        loading ? (
          <OrbitProgress variant="track-disc" color="#emptyFilters" size="small" text="" textColor="" />
        ) : cars ? (
          <div className='flex flex-wrap w-full h-full gap-4 justify-start z-0'>
              {cars.map((car, index)=>(
                  <BigCarCard finalize={false} carItem={car} rentData={{city: city, dateIn: dateIn, dateOut: dateOut} }/>
              ))}
          </div>
        ) : null
      }
    </div>
    <Footer/>
    </section>
  )
}

export default Rentpage
