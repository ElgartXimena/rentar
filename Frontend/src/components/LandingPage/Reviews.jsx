import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import ReviewCard from '../Cards/ReviewCard';
import { volante } from '../../assets';
const Reviews = () => {
  return (
    <div className='flex lg:flex-row mx-10 my-6 lg:items-center  md:flex-col md:items-start sm:flex-col sm:items-start'>
        <Swiper
            freeMode={true}
            breakpoints={{
                1100: {
                    slidesPerView: 1,
                },
                1800: {
                    slidesPerView: 2,
                },

            }}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="justify-center p-10 pb-14 lg:flex-1 md:w-full sm:w-full"
        >
            <SwiperSlide>
                <ReviewCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ReviewCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ReviewCard/>
            </SwiperSlide>
        </Swiper>
        <div className='lg:flex-1  flex-col p-10 bg-white max-w-[600px]'>
            <span className="bg-gradient-to-r from-color-lightblue to-color-violet 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                Thousands of clients trust in us, join them now!
            </span>
            <div className='blue-btn mt-10 justify-start'>Start renting</div>
        </div>
    </div>
  )
}

export default Reviews
