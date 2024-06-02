import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from './App.jsx';
import Header from './components/LandingPage/Header.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import Rentpage from './components/CarRent/Rentpage.jsx';
import FinalizeRental from './components/CarRent/FinalizeRental.jsx';
import Login from './components/Login/Login.jsx';
import Bookings from './components/Bookings/Bookings.jsx';

function AppRouter() {
  const [linkScroll, setLinkScroll] = useState(true);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.pathname);
  }, [window.location.pathname]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App/>} />
          <Route path="/rent/:city?/:dateIn?/:dateOut?/:type?" element={<Rentpage />} />
          <Route path='/finalize' element={<FinalizeRental />} />
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </BrowserRouter>
  );
}

// Ensure the root is created only once
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
