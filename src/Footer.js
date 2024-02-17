import React from 'react'
import {social} from './Navbar-data'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-between items-center p-4 py-4 md:py-6 bg-gold mt-20 '>
      <div className='text-white uppercase'>&copy; 2024 Mannie's Pancakes</div>
      <div className='uppercase text-white hidden md:block'>{'\u0040'} o.a.u campus, ile-ife</div>
      <div>
        <ul className='flex justify-between w-24 text-white items-center'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
                <li key={id}>
                    <Link to={url} className='hover:text-black'>{icon}</Link>
                </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Footer
