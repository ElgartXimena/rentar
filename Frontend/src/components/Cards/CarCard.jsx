import React from 'react'
import { cronos, emptystar, filledstar, gear, halfstar, luggage, seat } from '../../assets'

const CarCard = ({}) => {
    const carItem = {carImg: cronos, make:'Fiat', model:'Cronos', year:'2024', seats:'4', luggage:'2', gear:'Manual', rating:4.3, price:'$39' }
    function getStarArray(){
        let rate = 1;
        let stars = [];
        while (rate < carItem.rating){
            stars.push(filledstar);
            rate++;
        }
        let emptystars = 5 - carItem.rating;
        carItem.rating !== Math.trunc(carItem.rating) ? (stars.push(halfstar), emptystars--) : null;
        while (emptystars > 0){
            stars.push(emptystar);
            emptystars--;
        }
        return stars;
    }
    return (
    <div className='flex flex-col rounded-[28px] drop-shadow-lg hover:drop-shadow-2xl bg-white transition-all ease-in-out duration-350 w-auto'>
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
                        getStarArray().map((srcImg, index) => {
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
