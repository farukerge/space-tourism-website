import React from 'react'
import { Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className=' '>
      <Link to = "/">Home</Link>
      <Link to = "/destination">Destination</Link>
      <Link to = "/crew">Crew</Link>
      <Link to = "/technology">Technology</Link>
    </div>
  )
}

export default Navbar