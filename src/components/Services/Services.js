import ServiceCards from '@components/Card/ServicesCards'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className=' p-4 lg:px-40 lg:py-20 mt-4 '>
      <h1 className='flex flex-col text-mantis-150 text-4xl md:text-6xl lg:text-7xl'>
        <span className='text-lg font-bold'>NOS </span>
        SERVICES
      </h1>
      <ServiceCards />
    </div>
  )
}

export default Services