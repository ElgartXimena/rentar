import { useEffect, useState } from 'react'
import Header from './components/LandingPage/Header';
import Hero from './components/LandingPage/Hero';
import Partnership from './components/LandingPage/Partnership';
import Categories from './components/LandingPage/Categories';
import Toprated from './components/LandingPage/Toprated';
import Reviews from './components/LandingPage/Reviews';
import Footer from './components/LandingPage/Footer';

function App() {
  return ( 
    <>
      <Header linkScroll={true}/>
      <Hero/>
      <Partnership/>
      <Categories/>
      <Toprated/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
