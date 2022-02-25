import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/shared/logo.svg'
import CustomLink from '../Hooks/CustomLink'

function Navbar() {
  return (
    <nav className='flex  items-center justify-between p-4 absolute w-full '>

      <div>
       <img src={logo} alt="logo" />
      </div>
      
      <div className=' pr-64  hidden lg:block lg:flex'>
        <CustomLink to ='/'>Home</CustomLink>
        <CustomLink to ='/destination'>Destination</CustomLink>
        <CustomLink to ='/crew'>Crew</CustomLink>
        <CustomLink to ='/technology'>Technology</CustomLink>
      </div>

    </nav>
  )
}

export default Navbar