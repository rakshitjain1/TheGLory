import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import Footer from './components/Footer'
function App() {
 
      

  return (
   <div className='bg-white'>
 <Router>
       <Header/>
       <Routes>
         <Route path="/" exact={true} element={<Home/>} />
       </Routes>
       <Footer/>

     </Router>
 
   </div>
  )
}

export default App
