/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'
const Hero = () => {
    return (
        <>
            <div id="home" className=' p-4 lg:py-20 lg:px-10 bg-mantis h-max  lg:flex justify-center items-center '>
                <div className='flex-1 h-full lg:px-16  '>
                    <h2 className='text-xl text-mantis-50 font-medium'>NOUS VALORISONS LA</h2>
                    <h1 className=' text-4xl md:text-7xl lg:text-7xl text-mantis-50 mb-10 font-medium flex'>CLART&Eacute;  <BsChevronCompactRight /></h1>
                    <p className='text-base md:text-lg lg:text-lg font-semibold'>Cillum velit veniam esse excepteur sint dolore ex ipsum magna aliquip. Reprehenderit do cupidatat magna pariatur minim dolor ipsum. Aliquip nostrud exercitation tempor aute cupidatat. Duis aute proident velit Lorem sit ipsum consequat magna.</p>
                    <button className=' text-mantis-50 font-bold border-2 border-mantis-100 px-12 py-4 mt-10 rounded-lg hover:bg-mantis-100 hover:text-white  hover:transition-colors hover:duration-500 hover:ease ease duration-500'>En savoir plus</button>
                </div>
                <div className='flex-1  h-full '>
                    <img src="/pen2.png" alt="pen" className='relative left-20 lg:top-12' />
                </div>
            </div>
            <div className='lg:h-80 h-24 overflow-hidden '>
                <img src="bg-houses.png" alt="houses" className='' />
            </div>
        </>
    )
}

export default Hero