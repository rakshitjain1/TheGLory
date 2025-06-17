import { useState } from 'react'


import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import Gallery from './Pages/Gallery'
import Footer from './components/Footer'
import GalleryDetail from './Pages/GalleryDetail'

function App() {
 
      

  return (
   < div className='bg-white'>
 <Router>
       <Header/>
     
       <Routes>
         <Route path="/" exact={true} element={<Home/>} />
         <Route path="/gallery" exact={true} element={<Gallery/>} />
         <Route path="/gallery/:category" element={<GalleryDetail />} />
       
       </Routes>
       <Footer/>

     </Router>
 
   </div>
  )
}

export default App
