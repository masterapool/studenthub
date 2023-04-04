import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='bg-blue-700 flex justify-between p-3 items-center text-white'>
            <span>StudentHub</span>
            <div className='flex justify-evenly'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Register</a></li>
                <li><a href="/">Time tables</a></li>
            </div>
        </div>
    </div>
  )
}

export default Header