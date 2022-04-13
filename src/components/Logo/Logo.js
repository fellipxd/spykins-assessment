/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Logo = ({ height, font }) => {
  return (
    <div className='flex h-14 w-92 items-center justify-center' >
      <img src="/logo.png" alt="logo" className='h-2/6 mr-2' />
      <p>BARBE & CIMON NOTAIRES</p>
    </div>
  )
}

export default Logo