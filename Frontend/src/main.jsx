import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.jsx'
import Header from './components/LandingPage/Header.jsx'
import Footer from './components/LandingPage/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>
)
