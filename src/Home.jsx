import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Venus from './components/Venue'
import Contact from './components/Contact'

const Home = () => {
  return (
    <div className='bg-white'
     >
       <HeroSection/>
       <About/>
       <Services/>
       <Venus/>
       <Contact/>
       
    </div>
  )
}

export default Home
