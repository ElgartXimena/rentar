import React, { useEffect, useState } from 'react';
import { cronos, emptystar, filledstar, gear, halfstar, luggage, seat } from '../../assets';
import { getStarArray } from '../../Utils/starsCalculator';
import { Link, useNavigate } from 'react-router-dom';

const CarCard = ({ carItem }) => {
    const navigate = useNavigate()

    
    //const color = `${colors[carItem.category]}`
    const handleRentNow = () => {
        navigate('/finalize', { state: { car: carItem } });
    }
    return (
        <div className='flex flex-col rounded-[28px] drop-shadow-md hover:drop-shadow-2xl bg-white transition-all ease-in-out min-w-72 duration-350 my-12'>
            <div
                className="h-[180px] bg-cover bg-center flex items-center justify-center rounded-t-[28px]"
                style={{ backgroundImage: `url(${carItem.url})` }}
            />
            <div className='flex flex-col p-7'>
                <div className='flex flex-row gap-2 items-center justify-between'>
                    <h1 className='font-poppins font-light text-lg text-color-blue whitespace-nowrap overflow-hidden text-ellipsis'>{carItem.make} 
                        <br/>
                    </h1>
                    <span className={`font-poppins font-medium text-color-stronggray text-sm px-2 py-[2px] rounded-lg h-fit border-[2px] border-color-stronggray bg-color-middlegray/10`}> {carItem.category}</span>
                </div>
                <span className='font-poppins text-color-blue font-semibold text-3xl'>{carItem.model}</span>
                <span className='font-poppins font-medium text-color-middlegray text-sm mb-5'> {carItem.year}</span>
                <div className='flex flex-col text-color-stronggray font-poppins font-medium text-lg mb-4'>
                    <div className='flex flex-row items-center mb-4'>
                        <img src={seat} alt="seat"/>
                        <h1 className='mr-4 ml-1'>{carItem.seats}</h1>
                        <img src={luggage} alt="luggage"/>
                        <h1 className='mr-4 ml-1'>{carItem.luggage}</h1>
                        <img src={gear} alt="gear"/>
                        <h1 className='mr-4 ml-1'>{carItem.transmission}</h1>
                    </div>
                    <div className='flex flex-row items-center'>
                        {
                            getStarArray({ carItem }).map((srcImg, index) => {
                                return (
                                    <img
                                        key={index}
                                        src={srcImg}
                                        alt={`star-${index}`}
                                        className='mx-[1px] hover:scale-[1.05] h-5'
                                    />
                                );
                            })
                        }
                        <h1 className='ml-2'>{carItem.rating}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarCard;
