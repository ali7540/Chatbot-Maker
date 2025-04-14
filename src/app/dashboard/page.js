'use client'
import { AuthContext } from '@/context/auth'
import React from 'react'
import { useContext } from 'react'

const Dashboard = () => {
    const globalData=useContext(AuthContext)
    const isLoggedin=globalData.isLoggedin

  if(!isLoggedin){
      return <>Please Login First</>
    }
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
