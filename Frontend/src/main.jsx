import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import App from './App.jsx'
import Header from './components/LandingPage/Header.jsx'
import Footer from './components/LandingPage/Footer.jsx'
import Rentpage from './components/CarRent/Rentpage.jsx'
import { useState } from 'react'

function AppRouter() {
  const [linkScroll, setLinkScroll] = useState(true)
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header linkScroll={linkScroll}/>
        <Routes>
          <Route path="/" element={<App setLinkScroll={()=>{setLinkScroll(true)}}/>} />
          <Route path="/rent" element={<Rentpage setLinkScroll={()=>{setLinkScroll(false)}}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRouter />
);