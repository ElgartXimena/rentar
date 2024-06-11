import React from 'react'
import { emptystar, quotes, userphoto } from '../../assets'

const ReviewCard = ({review}) => {
return (
    <div className="hover:cursor-pointer transition-all hover:scale-[1.01] p-[30px] bg-white rounded-3xl drop-shadow-sm hover:drop-shadow-xl border-2  flex-col justify-start items-start gap-[30px] flex max-w-[600px] min-w-[400px]">
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className=" text-color-stronggray/90 text-lg  font-poppins">{review.text}</div>
        </div>
        <div className="justify-start items-center gap-3 flex flex-row">    
            <img className="w-[48px] h-[48px] rounded-full object-cover" src={userphoto}/>
            <div className='flex flex-col'>
                <div className="text-color-violet text-xl font-semibold font-poppins">{review.user}</div>
                <div className="items-center gap-1 flex flex-row ">
                    <img src={emptystar} className='h-[16px]'/>
                    <div><span className="text-color-stronggray  font-bold font-poppins">{review.rating}</span><span className="text-color-middlegray font-normal font-poppins"> Avg. ratings</span></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ReviewCard
     