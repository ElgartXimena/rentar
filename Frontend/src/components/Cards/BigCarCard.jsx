import React from 'react'
import { filledstar, whiteGear, whiteLuggage, whiteSeat, whiteStar } from '../../assets'
import { Link, useNavigate } from 'react-router-dom'

const BigCarCard = ({finalize, carItem}) => {
//const carItem = {carImg: 'https://i.postimg.cc/ZngDYKnP/fiat-cronos.jpg', make:'Fiat', model:'Cronos', year:'2024', seats:'4', luggage:'2', gear:'Manual', rating:4.3, price:'$19' }
console.log(carItem)
const navigate = useNavigate()
const handleRentNow = () => {
    navigate('/finalize', { state: { car: carItem } });
}
return (
    <div 
        className={`
        ${finalize ? 'flex-1 ' : 'flex flex-grow min-w-96 max-w-[800px] max-h-[700px] min-h-[400px]'}
        rounded-[32px]
        relative items-start overflow-hidden bg-cover 
        bg-center hover:drop-shadow-2xl hover:scale-[1.005] transition-all duration-300 
        hover:cursor-pointer bg-color-lightgray`
        }
        style={{ backgroundImage: `url(${carItem.url})` }}
    >   
        
        <div className='bg-gradient-to-b from-neutral-800/30 via-neutral-900/10 from-10% via-50% to-100% to-black/80
        flex flex-col justify-between h-full w-full p-6
        '>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-4'>
                    <h1 className='font-poppins text-2xl font-normal text-color-lightgray'>
                        {carItem.make} 
                        <span className='font-semibold'> {carItem.model}</span>
                    </h1>
                    <div className='flex flex-row items-baseline gap-1'>
                        <img src={whiteStar} className='h-4' />
                        <h1 className='font-poppins font-semibold text-color-lightgray'>{carItem.rating}</h1>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='backdrop-blur-lg flex gap-1 w-fit px-4 py-1 bg-color-black/20 hover:bg-color-black/40 transition-all duration-300 rounded-2xl items-center'>
                        <img src={whiteSeat} className='h-4' />
                        <h1 className='font-poppins text-color-lightgray'>{carItem.seats}</h1>
                    </div>
                    <div className='backdrop-blur-lg flex gap-1 w-fit px-4 py-1 bg-color-black/20 hover:bg-color-black/40 transition-all duration-300 rounded-2xl items-center'>
                        <img src={whiteLuggage} className='h-4' />
                        <h1 className='font-poppins text-color-lightgray'>{carItem.luggage}</h1>
                    </div>
                    <div className='backdrop-blur-lg flex gap-1 w-fit px-4 py-1 bg-color-black/20 hover:bg-color-black/40 transition-all duration-300 rounded-2xl items-center'>
                        <img src={whiteGear} className='h-4' />
                        <h1 className='font-poppins text-color-lightgray'>{carItem.gear}</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 items-baseline'>
                    <h1 className='font-poppins font-bold text-3xl text-color-lightgray'>${carItem.price}</h1>
                    <h1 className='font-poppins font-light text-sm text-color-lightgray'>USD/per day</h1>
                </div>
                {finalize ? null : 
                    <button onClick={handleRentNow}
                    className='blue-btn bg-white/10 backdrop-blur-lg hover:bg-white hover:text-color-black border-white text-white'>>
                        Rent now
                    </button>
                }
            </div>
        </div>
    </div>
)
}

export default BigCarCard
