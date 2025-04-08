import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <button > Logout</button>
        
    </div>
  )
}

export default navbar
