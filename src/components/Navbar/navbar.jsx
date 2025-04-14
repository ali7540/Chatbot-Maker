import Link from 'next/link'
import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <div className="main">
    <div style={{fontSize:"2vw",color:"white",fontFamily:"fantasy",paddingTop:"0.5vw"}}>ChatBot</div>
    <div className='parent'>
        <Link href="/" className='links'>Home</Link>
        <Link href="/about" className='links'>About</Link>
        <Link href="/dashboard" className='links'>Dashboard</Link>
        <button className='button'><Link href="/Auth/Login" style={{textDecoration:"none"}}>Login</Link></button>
    </div>
    </div>
  )
}

export default navbar
