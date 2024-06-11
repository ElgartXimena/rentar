import React, { useEffect, useState } from 'react'
import { logo, navigation } from '../../constants'
import { Link } from 'react-scroll'
import { Link as LinkRouter} from 'react-router-dom'
import { car, downarrow, exit, user } from '../../assets'
import Cookies from 'js-cookie'
const Header = ({linkScroll}) => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='flex justify-between items-center mx-auto px-10 py-3 z-50 top-0 left-0 w-full
        text-color-black font-poppins font-normal text-lg backdrop-blur-lg backdrop-brightness-140 fixed
        bg-white/50'>
            <div>
            {
                linkScroll ? (
                    <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                        <img src={logo} className='h-7 hover:cursor-pointer'/>
                    </Link>
                ) : (
                    <LinkRouter to='/'>
                        <img src={logo} className='h-7 hover:cursor-pointer'/>
                    </LinkRouter>
                )
            }
                
            </div>
            <ul className='flex'>
                {navigation.map((item)=>(
                    <li key={item.id} className='py-1 px-4 hover:cursor-pointer hover:scale-[0.95] hover:opacity-85 transition-all'>
                        {
                            linkScroll ? 
                                <Link to={item.url} spy={true} smooth={true} offset={-70} duration={500}>{item.title}</Link>
                                :
                                <LinkRouter to='/'>{item.title}</LinkRouter>
                        }
                    </li>
                ))}
                
            </ul>
            <div className='flex flex-col items-center'>
                <div onClick={()=>{setMenuOpen(!menuOpen)}} className='hover:inner-border-2 hover:cursor-pointer inner-border-0 inner-border-color-blue flex flex-row items-center gap-2 p-2 bg-color-lightgray/20 rounded-3xl group transition-all'>
                    <img src={user} className='h-6'/>
                    {/* <h1 className='text-color-blue'>Hi, Leonel!</h1> */}
                </div>
                {
                    menuOpen ? (
                        <div className='flex flex-col absolute top-16 right-10 items-center w-fit rounded-xl overflow-clip drop-shadow-2xl'>
                            <div className='flex flex-row items-center py-3 px-6 bg-white hover:bg-color-lightgray hover:cursor-pointer gap-2 w-full'>
                                <img src={car} className='h-5'/>
                                <LinkRouter to='/bookings' className='flex  text-base font-medium text-color-blue '>My bookings</LinkRouter>
                            </div>
                            <div className='flex flex-row items-center py-3 px-6 bg-white hover:bg-color-lightgray gap-2 w-full hover:cursor-pointer'>
                                <img src={exit} className='h-5'/>
                                <LinkRouter onClick={()=>{Cookies.remove('token')}} to='/login' className='flex  text-base font-medium text-red-700'>Log out</LinkRouter>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            {//<Link to='/login' className='blue-btn mx-2 px-8'>Log in</Link>
            }
        </div>
    )
}

export default Header
