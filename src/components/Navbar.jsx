import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='  py-3 flex items-center justify-between'>
        <h4 className='font-bold text-lg'>MYBLOG</h4>
        <div className='font-semibold flex gap-8'>
            <NavLink to='/'>
                Posts
            </NavLink>
            <NavLink to='/create-post/'>
                Create Post
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar