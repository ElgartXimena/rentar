import React from 'react'

const BigCarCard = () => {
const carItem = {carImg: 'https://i.postimg.cc/ZngDYKnP/fiat-cronos.jpg', make:'Fiat', model:'Cronos', year:'2024', seats:'4', luggage:'2', gear:'Manual', rating:4.3, price:'$19' }
return (
    <div 
        className='flex  rounded-[32px] max-w-[600px] min-w-[400px]
        relative items-start overflow-hidden bg-cover max-h-[500px] bg-center hover:scale-[0.99] transition-all hover:cursor-pointer'
        style={{ backgroundImage: `url(${carItem.carImg})` }}
    >   
        
        <div className='bg-gradient-to-b from-neutral-800/30 via-neutral-900/10 from-10% via-50% to-100% to-black/80
        flex flex-col justify-between h-full w-full
        '>
            <div>
            {
                //flex col
            }
                <div>
                {
                    //nombre y puntaje
                }
                <h1>{carItem.make} {carItem.model}</h1>
                </div>
                <div>
                    {
                        //asientos, valija, cambios
                    }
                </div>
            </div>
            <div>
                <div>
                    {
                        //precio
                    }
                </div>
                <div>
                    {
                        //rent now btn
                    }
                </div>
            </div>
        </div>
    </div>
)
}

export default BigCarCard
