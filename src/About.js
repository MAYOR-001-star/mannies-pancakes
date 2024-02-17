import React, { useState } from 'react'
import reviews from './Reviews-data'
import Footer from './Footer'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const About = () => {
  const [value, setValue] =useState(0)
  const {id, name, job,image,text} = reviews[value]
  const checkNumber = (number) => {
    if(number > reviews.length-1){
      return 0
    }
    if(number < 0){
      return reviews.length - 1
    }
    return number
  }
  const prevReview = () => {
    setValue((value)=>{
      let newValue = value - 1
      return checkNumber(newValue)
    })
  }
  const nextReview = () => {
    setValue((value)=>{
      let newValue = value + 1
      return checkNumber(newValue)
    })
  }
  return (
    <div>
      <div className='py-9'>
      <h1 className='text-2xl capitalize text-gold text-center font-bold'>mannie's <span className='text-black'>pancakes</span></h1>
      <div className='pt-5'>
        <p className='px-3 italic text-md text-center'>
        Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut,
          Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut,
          Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut,
          Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut,
        </p>
      </div>
      </div>
      <div className='grid grid-cols-3 p-3 w-full mb-11 mx-auto max-w-lg'>
        <img src='./images/chocolate extra.jfif' alt='pancakes' className='border-2 rounded-tl-lg'/>
        <img src='./images/jam.jpg' alt='about-img'/>
        <img src='./images/plain-pancake.jpg' alt='pancakes' className='border-2 rounded-tr-lg'/>
        <img src='./images/Red-velvet.jpg' alt='pancakes'/>
        <img src='./images/chocolate pancake.jpg' alt='pancakes'/>
        <img src='./images/Red-velvet.jpg' alt='pancakes'/>
        <img src='./images/red velvet extra.jfif' alt='pancakes' className='border-2 rounded-bl-lg'/>
        <img src='./images/plain extra.jfif' alt='pancakes'/>
        <img src='./images/chocolate extra.jfif' alt='pancakes' className='border-2 rounded-br-lg'/>
      </div>
      <div>
        <h4 className='text-center text-4xl m-3'>Reviews</h4>
        <div className='underline'></div>
        <div className='w-full flex justify-center max-w-xs md:max-w-xl items-center mx-auto my-9 shadow-shadowlight p-2'>
        <div className='flex justify-start'>
            <FaChevronLeft onClick={prevReview} className='border-2 hover:text-white hover:bg-gold text-4xl text-gold'/>
          </div>
          <article key={id} className='mx-auto'>
            <div className='img-container'>
              <img src={image} alt={name} className='person-img'/>
              <span className='quote-icon bg-gold'>
                <FaQuoteRight className='text-white'/>
              </span>
            </div>
            <div className='text-center'>
              <p className='uppercase font-bold mb-2'>{name}</p>
              <p className='text-gold uppercase text-sm mb-2'>{job}</p>
              <div className='text-sm mb-5'>{text}</div>
            </div>
          </article>
          <div className='flex justify-end'>
            <FaChevronRight onClick={nextReview} className='border-2 hover:text-white hover:bg-gold text-4xl text-gold'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
