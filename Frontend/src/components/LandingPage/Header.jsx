import React from 'react'
import { logo, navigation } from '../../constants'
import { Link } from 'react-scroll'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-auto px-10 py-3 z-50 top-0 left-0 w-full
        text-color-black font-poppins font-normal text-lg backdrop-blur-lg backdrop-brightness-140 fixed
        bg-white/50'>
            <div>
                <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                <img src={logo} className='h-7 hover:cursor-pointer'/>
                </Link>
            </div>
            <ul className='flex'>
                {navigation.map((item)=>(
                    <li className='py-1 px-4 hover:cursor-pointer hover:scale-110 transition-all'>
                        <Link to={item.url} spy={true} smooth={true} offset={-70} duration={500}>{item.title}</Link>
                    </li>
                ))}
                
            </ul>
            <div className='flex-row flex items-center'>
                <h1 className='mx-2 hover:scale-110 transition-all hover:cursor-pointer'>Log in</h1>
                <h1 className='blue-btn mx-2'>Get started</h1>
            </div>
        </div>
    )
}

export default Header
