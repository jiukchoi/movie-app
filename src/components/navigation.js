import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Navigation