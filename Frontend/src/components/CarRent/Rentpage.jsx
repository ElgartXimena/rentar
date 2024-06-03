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
  const state = location.state || {}
  
  const type = state.category;
  const city = state.city
  const dateIn = state.dateIn
  const dateOut = state.dateOut

  const [cars, setCars] = useState([])
  const {data, loading, error, fetchdata} = useFetch()

  useEffect(()=>{
    const endpoint = city ? 'findCars' : 'findByCategory'

    async function fetch(){
      if (endpoint === 'findCars'){
        console.log(dateIn)
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
  }, [])

  useEffect(()=>{
    if (data){
      setCars(data)
    }
  }, [data])

  useEffect(()=>{
  }, [cars])

  //si viene por categoria y quita el filtro pedir que seleccione lugar y fechas
  //si viene por el buscador y quita todos los filtros entonces muestra el rtdo original.
  //En cualquier caso los filtros son aplicados sobre la busqueda original. En el ultimo caso simplemente verificar que haya una busqueda original
  
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
  
  //const makeOptions = [{id:0, name:'Chevrolet'}, {id:1, name:'Toyota'}, {id:2, name:'Renault'},{id:3, name:'Volkswagen'}, {id:4, name:'Audi'}]
  const makeOptions = [
    {id:0, filter: new FilterMake('Chevrolet')}, 
    {id:1, filter: new FilterMake('Toyota')}, 
    {id:2, filter: new FilterMake('Renault')}, 
    {id:3, filter: new FilterMake('Volkswagen')}, 
    {id:4, filter: new FilterMake('Audi')},
    {id:5, filter: new FilterMake('Fiat')},
    {id:6, filter: new FilterMake('Ford')},
  ]
  const [makeFilter, setMakeFilter] = useState(null)
  
  const [apply, setApply] = useState(false)

  useEffect(()=>{

    const filters = [orderFilter?.filter, makeFilter?.filter, typeFilter?.filter]
    let result = data
    filters.forEach(filter => {
        if (filter != null){
          result = filter.applyFilter(result)
        }
    });
    setCars(result)
  },[apply])
  
  return (
    <section>
    <Header linkScroll={false}/>
    <div id='rentpage' className='h-full gap-4 mt-14 flex flex-col mx-8'>
      <div className='flex flex-col my-4 justify-center items-center gap-3'>
      <div className='flex lg:flex-row xl:flex-row flex-col gap-2'>
        <SelectorsPanel showLabel={false} preselected={[city, dateIn, dateOut]}/>
        
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
          <OrbitProgress variant="track-disc" color="#32cd32" size="medium" text="" textColor="" />
        ) : cars ? (
          <div className='flex flex-wrap w-full h-full gap-4 justify-start z-0'>
              {cars.map((car, index)=>(
                  <BigCarCard finalize={false} carItem={car}/>
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
