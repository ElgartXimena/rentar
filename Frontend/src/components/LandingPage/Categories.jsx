import React from 'react'
import { sedan, suv, van, pickup, sport } from '../../assets'
const Categories = () => {
  return (
    <div className='flex flex-col my-3 items-center mx-10 ' >
        <div className='flex flex-col items-center'>
            <span className="bg-gradient-to-r from-color-lightblue to-color-violet text-transparent font-poppins text-5xl font-semibold bg-clip-text py-2">Your adventure, your choice</span>
            <h1 className='font-poppins font-normal text-2xl text-color-stronggray py-2'>Find the one that best suits you</h1>
        </div>
        <div className='lg:flex-row flex w-full justify-center my-8'>
            <CategoryCard catName={'Sedan'} catPhoto={sedan} catPrice={'$39/day'}/>
            <CategoryCard catName={'SUV'} catPhoto={suv} catPrice={'$50/day'}/>
            <CategoryCard catName={'Pickup'} catPhoto={pickup} catPrice={'$69/day'}/>
            <CategoryCard catName={'Sport'} catPhoto={sport} catPrice={'$89/day'}/>
            <CategoryCard catName={'Van'} catPhoto={van} catPrice={'$79/day'}/>
        </div>
    </div>
  )
}

export default Categories

function CategoryCard({catName, catPhoto, catPrice}) {
    return (
    <div className='category-card group items-end bg-cover bg-center' 
    style={{backgroundImage: `url(${catPhoto})`}}>
        <div className='flex flex-row justify-between w-full p-4 items-end'>
            <div className='flex-col flex'>
                <h1 className='font-poppins font-bold text-3xl text-white'>{catName}</h1>
                <h1 className='font-poppins font-normal text-xl text-white group-hover:flex hidden'>Starts from {catPrice}</h1>
            </div>
            <div className='blue-btn group-hover:scale-100 scale-0 bg-white/20 hover:bg-white hover:text-color-black border-white text-white'>View all</div>
        </div>
    </div>);
}
  