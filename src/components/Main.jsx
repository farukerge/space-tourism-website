import React from 'react'
import { Routes, Route} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

function Main() {
  return (
      <div className=' h-screen bg-black text-yellow-50'>
          <Routes>
              <Route path='/' element= {<Home />} />
              <Route path='/about' element= {<About />} />
          </Routes>
    </div>
  )
}

export default Main