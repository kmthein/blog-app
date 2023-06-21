import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='w-[80%] mx-auto'>
        <Navbar /> 
        <Outlet />
    </div>
  )
}

export default Main