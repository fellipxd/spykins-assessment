import Logo from '@components/Logo/Logo'
import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const toggle = () => setClick(false);


  return (
    <nav className='py-1 flex  w-screen justify-around bg-mantis shadow-xl z-20'>
      <div >
        <Logo height="10px" />
      </div>
      <ul className={click ? 'active' : 'navMenu'}>
        <i onClick={handleClick} className='fas fa-times close' ></i>
        <li onClick={toggle} className='lg:ml-4 md:ml-4'> <a href="#home"> &Aacute; PROPOS </a></li>
        <li onClick={toggle} className='lg:ml-4 md:ml-4'><a href="#services"> NOS SERVICES </a></li>
        <li onClick={toggle} className='lg:ml-4 md:ml-4'><a href="#articles"> ARTICLES </a></li>
        <li onClick={toggle} className='lg:ml-4 md:ml-4'><a href="#contact"> CONTACT </a></li>
        <li onClick={toggle} className='lg:ml-4 md:ml-4 font-bold'>EN</li>
      </ul>

      <div className="mobileMenuIcon flex items-center text-xl"
        onClick={handleClick}
      >
        <i className='fas fa-bars bars'></i>


      </div>
    </nav>

  )
}

export default Navbar