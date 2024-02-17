import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5938y69', 'template_3u457dg', form.current, {
        publicKey: 'vpFgKKpGQ_V9f4nXy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className='md:flex items-center py-20 px-19 justify-evenly lg:mx-auto'>
        <div className='w-full text-start pl-24 md:pl-5 md:max-w-xs lg:max-w-lg lg:pl-11'>
          <h1 className='font-bold text-5xl mb-5'>
            Let's Chat,
            <span> Tell Me About <br/>Your Order.</span>
          </h1>
          <p>Let's Make Some Transactions...</p>
          <div>
            <p>Mail me at : </p>
            <a href="mailto:mannie'spancake@gmail.com" className='italic text-gold'>
              mannie'spancake@gmail.com
            </a>
          </div>
          <div>
            <p>Contact me on : </p>
            <p className='text-gold'>+2348056657981</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='mx-auto shadow-shadowlight p-7 md:px-14 md:py-10 w-72 md:w-96 mt-11 md:mt-0 md:mb-32 md:ml-11 lg:w-1/2'>
          <p className='pb-5 text-xl'>Send us a message</p>
          <input type="text" name="from_name" placeholder='Name' required className='h-6 w-full px-2 mb-4 outline-gold rounded-md shadow-shadowlight'/><br/>
          <input type="email" name="user_email" placeholder='Email' className='h-6 w-full px-2 mb-4 rounded-md outline-gold shadow-shadowlight ' required/><br/>
          <textarea name="message" placeholder='Message' className='mb-7 h-56 w-full px-2 rounded-md outline-gold shadow-shadowlight' required/><br/>
          <div>
            <button type="submit" className='p-1 px-2 mr-3 mb-3 lg:mb-0 hover:bg-white bg-gold text-white hover:text-gold border-2 border-gold rounded-md'>
              Send Message
            </button>
            <button className='p-1 px-2 hover:bg-white bg-gold text-white hover:text-gold border-2 border-gold rounded-md'>
            <a href="https://wa.link/i863w7">
                Contact Me on whatsapp
              </a>
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
