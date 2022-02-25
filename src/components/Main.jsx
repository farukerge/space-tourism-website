import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'
import Navbar from './Navbar'
import logo from '../images/shared/logo.svg'

function Main() {
  return (
    <main className='bg-black'>

      
        <img src={logo} alt=""  className='w-16 h-16'/>
          
          {/* <Routes>
              <Route path='/' element= {<Home />} />
              <Route path='/' element= {<Destination />} />
              <Route path='/' element= {<Crew />} />
              <Route path='/' element= {<Technology />} />   
          </Routes> */}
      
     
    
    </main>
  )
}

export default Main