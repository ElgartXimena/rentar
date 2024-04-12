import React from 'react'
import { logo } from '../constants'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-auto px-10 py-3 z-50 top-0 left-0 w-full
        text-color-black font-poppins font-normal text-lg drop-shadow-md backdrop-blur-lg backdrop-brightness-120 fixed
        bg-white/60'>
            <img src={logo} className='h-7'/>
            <ul className='flex'>
                <li className='py-1 px-4 hover:cursor-pointer'>Cars</li>
                <li className='py-1 px-4 hover:cursor-pointer'>Top picks</li>
                <li className='py-1 px-4 hover:cursor-pointer'>Reviews</li>
                <li className='py-1 px-4 hover:cursor-pointer'>Contact</li>
            </ul>
            <div className='flex-row flex items-center'>
                <h1 className='mx-2'>Log in</h1>
                <h1 className='blue-btn mx-2'>Get started</h1>
            </div>
        </div>
    )
}

export default Header
