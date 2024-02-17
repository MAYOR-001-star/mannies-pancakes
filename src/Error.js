import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className='grid md:grid-cols-2 items-center h-96'>
      <div className='pl-6 mx-auto md:my-auto md:mx-0'>
        <div className='text-center text-9xl font-semibold'>404</div>
        <p className='capitalize mb-4 text-center'>oops! sorry page not found...</p>
        <button className='flex justify-center w-full'>
          <Link to='/' className='bg-gold text-white rounded-lg p-2 px-4 hover:bg-white hover:text-gold border-2 border-gold'>Go Back</Link>
        </button>
      </div>
      <div className='p-5 hidden md:block'>
        <img src='./images/donut.svg' alt='error-icon' className='w-27rem h-80'/>
      </div>
    </div>
  )
}

export default Error
