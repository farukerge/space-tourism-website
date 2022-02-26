import React from 'react'
import logo from '../images/shared/logo.svg'
import CustomLink from '../Hooks/CustomLink'

function Navbar() {
  return (
    <nav className='flex  items-center justify-between pt-8 absolute w-full '>

      <div>
       <img src={logo} alt="logo" className='pl-16' />
      </div>
      
      <div className=' pr-64  hidden lg:block lg:flex text-red-50  navBg '>
        <CustomLink to ='/'><span className='mr-2'>00</span>Home</CustomLink>
        <CustomLink to ='/destination'><span className='mr-2'>01</span>Destination</CustomLink>
        <CustomLink to ='/crew'><span className='mr-2'>02</span>Crew</CustomLink>
        <CustomLink to ='/technology'><span className='mr-2'>03</span>Technology</CustomLink>
      </div>

    </nav>
  )
}

export default Navbar