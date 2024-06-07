import React from 'react'
import { emptystar, quotes, userphoto } from '../../assets'

const ReviewCard = ({}) => {
const userReview = {photo:userphoto, username:'Leonel', rating:4.8, review:"Renting from Rent.ar was an absolute pleasure! The customer service was impeccable, the rental process was smooth and efficient, and the vehicle itself was clean and reliable. I'll definitely be returning for my future car rental needs!"}
return (
    <div className="hover:cursor-pointer transition-all hover:scale-[1.01] p-[30px] bg-white rounded-3xl drop-shadow-2xl border-2 border-color-lightblue flex-col justify-start items-start gap-[30px] flex max-w-[600px] min-w-[400px]">
        <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className=" text-color-stronggray/90 text-lg  font-poppins">{userReview.review}</div>
        </div>
        <div className="justify-start items-center gap-[15px] flex flex-row">    
            <img className="w-[70px] h-[70px] rounded-full object-cover" src={userReview.photo}/>
            <div className='flex flex-col'>
                <div className="text-color-violet text-2xl font-semibold font-poppins">{userReview.username}</div>
                <div className="items-center gap-1 flex flex-row ">
                    <img src={emptystar} className='h-[24px]'/>
                    <div><span className="text-color-stronggray text-xl font-bold font-poppins">{userReview.rating}</span><span className="text-color-middlegray text-xl font-normal font-poppins"> Avg. ratings</span></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ReviewCard
     