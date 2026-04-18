import React from 'react'
import logo from '../assets/image.png'

const AuthNavbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 mt-3 ml-4'>
            <img src={logo} alt="Bank Logo" width={50} />
            <h1 className='mr-0.5 text-2xl font-bold'>THE BANK</h1>
        </div>
        <div className='flex items-center gap-7 mt-3 mr-4'>
            <a href="/about">About Us</a>
            <a href="/help">Help</a>
            <a href="/login">Login</a>
        </div>
    </div>
  )
}

export default AuthNavbar