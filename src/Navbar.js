import React, { useState, useRef, useEffect } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {links, social} from './Navbar-data'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const containerRef = useRef(null)
    const linksRef = useRef(null)
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
        containerRef.current.style.height = `${linksHeight}px`;
        } else {
        containerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return (
      <div>
        <nav className='lg:flex justify-evenly items-center shadow-shadower'>
            <div className='flex justify-between items-center p-4'>
                <Link to='/'>
                    <h1 className='text-xl italic capitalize text-gold'>mannie's <span className='text-black'>pancakes</span></h1>
                </Link>
                <button className='text-xl hover:text-gold lg:hidden' onClick={() => setShowLinks(!showLinks)}>
                    {showLinks ? <FaTimes/> : <FaBars/>}
                </button> 
            </div>
            <div className='links-container lg:h-custom shadow-shadower lg:shadow-none' ref={containerRef}>
                <ul className='list-none transition-all duration-300 linear lg:flex justify-between' ref={linksRef}>
                    {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                        <li key={id} className='p-2 hover:bg-gold hover:text-white lg:rounded-md pb-2'>
                            <Link to={url} className='transition-all duration-300 linear capitalize lg:p-2'>{text}</Link>
                        </li>
                    );
                    })}
                </ul>
            </div>
            <ul className='list-none hidden lg:flex'>
            {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                <li key={id} className='px-2 hover:text-gold'>
                    <a href={url}>{icon}</a>
                </li>
                );
            })} 
            </ul>
        </nav>
      </div>
    );
  }

export default Navbar
