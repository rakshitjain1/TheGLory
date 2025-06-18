import { useState } from 'react'


import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import Gallery from './Pages/Gallery'
import Footer from './components/Footer'

import GalleryDetail from './Pages/GalleryDetail'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ServicesPage from './Pages/ServicesPage'
function App() {
 
      

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  }, [pathname]);

  return null;
};

  return (
   < div className='bg-white'>
 <Router>
       <Header/>
      <ScrollToTop />
       <Routes>
         <Route path="/"  element={<Home/>} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/gallery/:category" element={<GalleryDetail />} />
         <Route path="/services" element={<ServicesPage />} />



       
       </Routes>
       <Footer/>

     </Router>
 
   </div>
  )
}

export default App
