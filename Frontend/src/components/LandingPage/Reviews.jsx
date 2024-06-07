import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import ReviewCard from '../Cards/ReviewCard';
import { volante } from '../../assets';
import { Link } from 'react-router-dom';
const Reviews = () => {
    
  return (
    <div id="Reviews" className='flex flex-col mx-10 my-6 items-center'>
        <div className='p-10'>
            <span className="bg-gradient-to-r from-color-lightblue to-color-violet 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                Thousands of clients trust in us, join them!
            </span>
        </div>
        <div className='flex flex-row w-full pb-10 px-10 pt-2 gap-4 overflow-x-auto scrollbar scrollbar-thumb-color-middlegray'>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
        <Link to='/rent' className='blue-btn mt-10 justify-start'>Start renting now</Link>
    </div>
  )
}

export default Reviews
