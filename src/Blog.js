import React from 'react'
import SingleQuestion from './Question';
import questions from './Question data';
import { Link } from 'react-router-dom';
import Footer from './Footer'


const Blog = () => {
  return (
    <>
      <section className='md:grid grid-cols-2 justify-center p-2 mt-2 maximum lg:max-w-6xl mx-auto'>
        <div className='mt-4'>
          <div className='p-3 mb-4'>
            <div className='mx-auto max-w-lg border-2 rounded p-1'>
                <img src='./images/blog.jpg' alt='pancake' className='rounded'/>
                <p className='p-2 mt-5'>
                Pancakes are a popular breakfast dish made from a simple batter consisting of flour, eggs, milk, and baking powder. 
                They are typically cooked on a griddle or frying pan and flipped to achieve a golden-brown color on both sides. 
                Pancakes can be served with a variety of toppings such as maple syrup, fruit, chocolate chips, or whipped cream. 
                They are enjoyed in many cultures around the world and can vary in thickness and texture depending on regional preferences. 
                </p>
                <Link to='/' className='flex justify-center p-2 hover:bg-gold hover:text-white lg:rounded-md pb-2 border-2 border-gold mb-2 mx-2'>Pick some orders</Link>
            </div>
          </div>
          <div className='mx-auto max-w-lg border-2 rounded p-1'>
              <img src='./images/Red-velvet.jpg' alt='pancake' className='rounded'/>
              <p className='p-2'>
              Red velvet pancakes are a variation of traditional pancakes that incorporate the flavor and vibrant red color of red velvet cake. 
              They typically include ingredients such as cocoa powder, buttermilk, and red food coloring to achieve the signature hue. 
              These pancakes are often topped with cream cheese frosting or syrup and powdered sugar, providing a sweet and decadent breakfast or brunch treat reminiscent of the popular dessert.
              </p>
          </div>
          <p className='p-2 hidden md:block'>
            <p className='capitalize py-2'>Make orders for Weddings, birthday parties, gatherings, picnics and so on....</p>
            For More enquires : <span className='text-gold'>+2348056657981</span>
            <Link to='/contact' className='flex justify-center py-2 hover:bg-gold hover:text-white rounded-md pb-2 border-2 border-gold mb-2 my-4'>Contact</Link>
          </p>
        </div>
        <div>
          <div className='px-3 mt-8'>
            <div className='mx-auto max-w-lg border-2 rounded p-1'>
              <img src='./images/jam.jpg' alt='pancake' className='rounded'/>
              <p className='p-2'>
                Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut, 
                Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut, 
                Shabby chic keffiyeh neutra snackwave pork belly quilox shoreditch. Prism austin mlkshk truffaut, 
              </p>
            </div>
            <div className='grid grid-cols-2 maxxy px-2 mt-5 justify-center mx-auto'>
              <img src='./images/chocolate extra.jfif' alt='pancake' className='rounded-tl-lg w-full'/>
              <img src='./images/jam.jpg' alt='pancake' className='rounded-tr-lg w-full'/>
              <img src='./images/plain extra.jfif' alt='pancake' className='rounded-bl-lg w-full'/>
              <img src='./images/red velvet extra.jfif' alt='pancake' className='rounded-br-lg w-full'/>
            </div>
            <div>
              <h1 className='text-3xl text-center tracking-wide py-2 mt-9 capitalize'>commonly asked questions</h1>
              <div className='underline mb-14'></div>
              {questions.map((question)=>{
                return(
                  <SingleQuestion key={question.id} {...question}/>           
                )
              })} 
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
    
  )
}

export default Blog
