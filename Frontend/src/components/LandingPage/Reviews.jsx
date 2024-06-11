import React, { useEffect, useState } from 'react'
import ReviewCard from '../Cards/ReviewCard';
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch'
const Reviews = () => {
  const {data, loading, error, fetchdata} = useFetch()
  const [reviews, setReviews] = useState([])
  useEffect(()=>{
    async function fetch(){
      await fetchdata(null, 'getReviews', null)
    }
    fetch()
  }, [])

  useEffect(()=>{
    if (data){
      setReviews(data)
    }
  }, [data])

  useEffect(()=>{},[reviews])

  return (
    <div id="Reviews" className='flex flex-col mx-10 my-6 items-center'>
        <div className='p-10'>
            <span className="bg-gradient-to-r from-color-lightblue to-color-violet 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                Thousands of clients trust in us, join them!
            </span>
        </div>
        <div className='flex flex-row w-full pb-10 px-10 pt-2 gap-4 overflow-x-auto scrollbar scrollbar-thumb-color-middlegray'>
        {
          reviews ? (
            reviews.map((item)=>(
              <ReviewCard review={item}/>
            ))
          ) : null
        }
        </div>
        <Link to='/rent' className='blue-btn mt-10 justify-start'>Start renting now</Link>
    </div>
  )
}

export default Reviews
