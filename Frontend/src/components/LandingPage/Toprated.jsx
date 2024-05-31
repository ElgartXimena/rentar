import React, { useEffect, useRef, useState } from 'react'
import CarCard from '../Cards/CarCard'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { downarrow } from '../../assets';
const Toprated = () => {
  const topcars = [{id:0, car: <CarCard/>},{id:1, car: <CarCard/>},{id:2, car: <CarCard/>},{id:3, car: <CarCard/>},{id:4, car: <CarCard/>},{id:5, car: <CarCard/>},]
  const listRef = useRef();
  const [scrolling, setScrolling] = useState(0)

  const setScrollIndex = (scrollVal) => {
      let result = scrolling + scrollVal;
      if ( result < 0)
        setScrolling(0)
      else 
        if (result> listRef.current?.scrollWidth-listRef.current?.clientWidth + scrollVal)
          setScrolling(0)
        else
          setScrolling(result)

    }
    
  const move = (value) => {
    if (listRef.current) {
      listRef.current.scrollTo({
          left: value,
          behavior: 'smooth',
        });
    }
  }
  
  useEffect(()=>{
    move(scrolling);
  }, [scrolling])

  return (
    <div id="Toprated" className='flex flex-col lg:items-center mx-10'>
        <span className="bg-gradient-to-r from-color-lightblue to-color-violet text-transparent font-poppins text-5xl font-semibold bg-clip-text py-2">Our top rated vehicles by clients</span>
        <div className='flex lg:flex-row sm:flex-col md:flex-col lg:items-center md:items-start sm:items-start justify-between my-2'>
            <h1 className='font-poppins font-normal text-4xl text-color-stronggray py-2 mx-6'>
                <span className='font-semibold'>+12K </span>Reviews
            </h1>
            <h1 className='font-poppins font-normal text-4xl text-color-stronggray py-2 mx-6'>
                <span className='font-semibold'>+100 </span> Cars with 4.5+ stars
            </h1>
            <h1 className='font-poppins font-normal text-4xl text-color-stronggray py-2 mx-6'>
                <span className='font-semibold'>+50K </span>Rented cars
            </h1>
        </div>
        <div className='flex flex-row items-center justify-center gap-8'>
          <button onClick={()=>{setScrollIndex(-320)}} className='hover:bg-gray-100 transition-all duration-300 hover:scale-125 items-center rounded-3xl p-2 rotate-90 scale-150 left-12 z-20'><img src={downarrow}/></button>
          <div ref={listRef} className='flex flex-row overflow-x-auto  2xl:max-w-[1300px] xl:max-w-[1100px] lg:max-w-[900px] scrollbar-none h-min  px-10'>
            <ul  className='gap-5 flex'>
                {
                  topcars.map((item)=>(
                    <li
                    key={item.id}
                    >
                      {item.car}
                    </li>
                  ))
                }
            </ul>
          </div>
          <button onClick={()=>{setScrollIndex(320)}} className='hover:bg-gray-100 transition-all duration-300 hover:scale-125 items-center rounded-3xl p-2 -rotate-90 scale-150 right-12  z-20'><img src={downarrow}/></button>
        </div>
    </div>
  )
}

export default Toprated
