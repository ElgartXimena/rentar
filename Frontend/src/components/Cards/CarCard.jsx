import React from 'react'
import { cronos, emptystar, filledstar, gear, halfstar, luggage, seat } from '../../assets'
import { getStarArray } from '../../Utils/starsCalculator'
const CarCard = ({}) => {
    const carItem = {carImg: 'https://i.postimg.cc/ZngDYKnP/fiat-cronos.jpg', make:'Fiat', model:'Cronos', year:'2024', seats:'4', luggage:'2', gear:'Manual', rating:3.6, price:'$19' }
    
    return (
    <div className='flex flex-col rounded-[28px] drop-shadow-lg hover:drop-shadow-2xl bg-white transition-all ease-in-out duration-350 w-auto my-12 min-w-[300px]'>
        <div
            className="h-[180px] bg-cover bg-center flex items-center justify-center rounded-t-[28px]"
            style={{ backgroundImage: `url(${carItem.carImg})` }}
        />
        <div className='flex flex-col p-7'>
            <h1 className='font-poppins font-bold text-2xl text-color-blue mb-7'>{carItem.make} {carItem.model} <span className='font-normal'> {carItem.year}</span></h1>
            <div className='flex flex-col text-color-stronggray font-poppins font-medium text-lg mb-4'>
                <div className='flex flex-row items-center mb-4'>
                    <img src={seat}/>
                    <h1 className='mr-4 ml-1'>{carItem.seats}</h1>
                    <img src={luggage}/>
                    <h1 className='mr-4 ml-1'>{carItem.luggage}</h1>
                    <img src={gear}/>
                    <h1 className='mr-4 ml-1'>{carItem.gear}</h1>
                </div>
                <div className='flex flex-row items-center'>
                    {
                        getStarArray({carItem}).map((srcImg, index) => {
						return (
							<img
								key={index}
								src={srcImg}
							/>
						);
					})}
                    <h1 className='ml-2 text-xl'>{carItem.rating}</h1>
                </div>
            </div>
            <div className='blue-btn'>Rent now for {carItem.price}/day</div>
        </div>

    </div>
  )
}

export default CarCard
