import React from 'react'

const ServiceCards = () => {

     return (
          <div className="grid gap-6 row-gap-5 lg:grid-cols-3  mt-12 p-8 lg:p-0" >
               <div className=' h-40 rounded-xl flex justify-center items-center bg-mantis-150 text-white shadow-3xl  hover:bg-transparent hover:border hover:border-4 hover:text-mantis-150 hover:border-mantis-150 hover:transition-colors hover:duration-500 hover:ease ease duration-500'>
                    <h1 className='text-3xl text-center'>COPROPRI&Eacute;T&Eacute;</h1>
               </div>
               <div className=' h-40 rounded-xl flex justify-center items-center bg-mantis-200 text-white shadow-3xl hover:bg-transparent hover:border hover:border-4 hover:text-mantis-200 hover:border-mantis-200 hover:transition-colors hover:duration-500 hover:ease ease duration-500 '>
                    <h1 className='text-3xl text-center'>PLANIFICATION FAMILIALE</h1>
               </div>
               <div className=' h-40 rounded-xl flex justify-center items-center bg-mantis-250 text-white shadow-3xl hover:bg-transparent hover:border hover:border-4 hover:text-mantis-250 hover:border-mantis-250 hover:transition-colors hover:duration-500 hover:ease ease duration-500 '>
                    <h1 className='text-3xl text-center'>IMMOBILIER</h1>
               </div>



          </div>
     )
}

export default ServiceCards

