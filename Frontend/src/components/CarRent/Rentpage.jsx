import React, { useEffect, useState } from 'react'
import Selector from '../selector/Selector'
import SelectorsPanel from '../selector/SelectorsPanel'
import { downarrow, search as searchIcon } from '../../assets'
import Filter from '../Filters/Filter'
import BigCarCard from '../Cards/BigCarCard'
import { useLocation, useParams } from 'react-router-dom'
import Header from '../LandingPage/Header'
import Footer from '../LandingPage/Footer'

const Rentpage = () => {
  const type = null;
  const city = ''
  const dateIn = ''
  const dateOut = ''
  const location = useLocation()
  const state = location.state || {}
  const endpoint = state.city ? 'findCars' : 'findByCategory'
  //si viene por categoria y quita el filtro pedir que seleccione lugar y fechas
  //si viene por el buscador y quita todos los filtros entonces muestra el rtdo original.
  //En cualquier caso los filtros son aplicados sobre la busqueda original. En el ultimo caso simplemente verificar que haya una busqueda original
  const [selectedFilters, setSelectedFilters] = useState([])
  const orderOptions = [{id:0, name:'Price high to low'}, {id:1, name:'Price low to high'}, {id:2, name:'Top rated first'}]
  const [orderFilter, setOrderFilter] = useState(null)
  
  const vehicleType = [{id:0, name:'Sedán'}, {id:1, name:'SUV'}, {id:2, name:'Pickup'}, {id:3, name:'Sport'}, {id:4, name:'Van'}]
  const [typeFilter, setTypeFilter] = useState(type ? type : null)
  
  const makeOptions = [{id:0, name:'Chevrolet'}, {id:1, name:'Toyota'}, {id:2, name:'Renault'},{id:3, name:'Volkswagen'}, {id:4, name:'Audi'}]
  const [makeFilter, setMakeFilter] = useState(null)


  useEffect(()=>{
    console.log(orderFilter)
    console.log(makeFilter)
    console.log(typeFilter)
  },[orderFilter, makeFilter, typeFilter])
  
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
          <button className='py-3 px-6 bg-color-blue hover:scale-95 hover:opacity-95 transition-all font-poppins font-medium text-white rounded-3xl'>Apply</button>
        </div>
      </div>
      <div className='flex flex-wrap w-full h-full gap-4 justify-start z-0'>
        {/* <BigCarCard finalize={false}/>
        <BigCarCard finalize={false}/>
        <BigCarCard finalize={false}/>
        <BigCarCard finalize={false}/> */}
      </div>
    </div>
    <Footer/>
    </section>
  )
}

export default Rentpage
