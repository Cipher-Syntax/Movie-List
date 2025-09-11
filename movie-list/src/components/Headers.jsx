import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
    return (
        <header>
            <nav className='relative z-10 flex justify-between items-center px-8 py-6'>
                <div className='flex space-x-12 mt-5'>
                    <a href="#" className="text-red-400 font-medium text-lg">Home</a>
                    <Link to="add_movie/" className="text-red-400 font-medium text-lg hover:underline">Add Movies</Link>
                </div>

                <div className='bg-red-500 px-6 py-2 rounded-full'>
                    <span className='text-white font-medium'>SPECTRUM LAB</span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Headers