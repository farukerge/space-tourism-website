import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'
import Navbar from './Navbar'


function Main() {
  return (
    <div className='   relative h-screen'>
      <Router>
        
        <Navbar />
        
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/destination' element = {<Destination />} />
            <Route path='/crew' element = {<Crew />} />
            <Route path='/technology' element = {<Technology />} />
        </Routes>
        
      </Router>
   </div>
  )
}

export default Main