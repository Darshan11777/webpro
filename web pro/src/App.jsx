import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home'
import Navbar from './component/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className=''>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />

        {/* Add more routes as needed */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}
