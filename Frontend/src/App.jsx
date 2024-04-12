import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Partnership from './components/Partnership';
import Categories from './components/Categories';
import Toprated from './components/Toprated';

function App() {

  return ( 
    <>  
      <Header/>
      <Hero/>
      <Partnership/>
      <Categories/>
      <Toprated/>
    </>
  )
}

export default App
