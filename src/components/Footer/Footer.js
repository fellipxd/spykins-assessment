import Logo from '@components/Logo/Logo'
import React from 'react'

const Footer = () => {
    return (
        <div id="contact" className=' lg:px-44 lg:py-20 lg:flex lg:justify-around p-4'>
            <div className='lg:flex-1  mx-auto'>  <Logo /></div>
            <div className='flex-1 lg:flex lg:justify-around justify-center'>
                <div className='flex  w-1/2 mt-8 lg:mt-0 mx-auto '>
                    <ul>
                        <li><a href="#home">&Aacute; PROPOS </a></li>
                        <li><a href="#services">NOS SERVICES </a></li>
                        <li><a href="#articles">ARTICLES </a></li>
                        <li><a href="#contact">CONTACT </a></li>
                    </ul>
                </div>
                <div className='w-1/2 mt-8 mx-auto  lg:mt-0'>
                    <p className='font-bold lg:mb-4 mb-2'>BUREAU</p>
                    <p className='lg:w-4/5 '>101 BOULEVARD SAINT JOSEPH 0, MONTR&Eacute;AL, QC H2T 2P7</p>
                    <p className='font-bold lg:mt-4 mt-2'>NOUS SUIVRE</p>
                </div>
            </div>
        </div>
    )
}

export default Footer