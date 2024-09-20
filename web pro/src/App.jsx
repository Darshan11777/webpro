import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home'
import Navbar from './component/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';
import AdminPanel from './pages/AdminPanel/src/App';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className=''>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        {/* <Route path="admin" element={<AdminPanel/>} /> */}

        {/* Add more routes as needed */}
      </Routes>
    </div>
    </BrowserRouter>
  )
}
