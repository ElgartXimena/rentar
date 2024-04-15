import React from 'react'
import { emptystar, quotes, userphoto } from '../../assets'

const ReviewCard = ({}) => {
const userReview = {photo:userphoto, username:'Leonel', rating:4.8, review:"Renting from Rent.ar was an absolute pleasure! The customer service was impeccable, the rental process was smooth and efficient, and the vehicle itself was clean and reliable. I'll definitely be returning for my future car rental needs!"}
return (
    <div className="p-[30px] bg-white rounded-[40px] drop-shadow-2xl border-2 border-color-lightblue flex-col justify-start items-start gap-[30px] flex max-w-[800px]">
        <div className="justify-start items-start gap-[15px] flex">    
            <img className="w-[70px] h-[70px]" src={quotes}/>
            <img className="w-[70px] h-[70px] rounded-full object-cover" src={userReview.photo}/>
        </div>
        <div className="justify-center items-center gap-5 flex">
            <div className="text-color-violet text-4xl font-semibold font-poppins">{userReview.username}</div>
            <div className="items-center gap-2.5 flex">
                <div className="text-color-middlegray text-2xl font-medium font-poppins">|</div>
                <img src={emptystar} className='h-[24px]'/>
                <div><span className="text-color-stronggray text-xl font-bold font-poppins">{userReview.rating}</span><span className="text-color-middlegray text-xl font-normal font-poppins"> Avg. ratings</span></div>
            </div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className=" text-color-black/70 text-2xl font-normal font-poppins">{userReview.review}</div>
        </div>
    </div>
  )
}

export default ReviewCard
     