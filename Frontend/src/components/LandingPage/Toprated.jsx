import React from 'react'
import CarCard from '../Cards/CarCard'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
const Toprated = () => {

  return (
    <div className='flex flex-col lg:items-center mx-10'>
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
        <Swiper
            freeMode={true}
            breakpoints={{
                600: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 3,
                },
                1250: {
                    slidesPerView: 4,
                },

            }}
            spaceBetween={16}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="justify-start max-w-[1300px] w-full p-10"
        >
          <SwiperSlide >
            <CarCard/>
          </SwiperSlide>
          <SwiperSlide >
            <CarCard/>
          </SwiperSlide>
          <SwiperSlide >
            <CarCard/>
          </SwiperSlide>
          <SwiperSlide >
            <CarCard/>
          </SwiperSlide>
          <SwiperSlide >
            <CarCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CarCard/>
          </SwiperSlide>
          
      </Swiper>
    </div>
  )
}

export default Toprated
