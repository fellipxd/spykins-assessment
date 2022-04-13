import ArticleCards from '@components/Card/ArticleCards'
import React from 'react'

const Articles = () => {
  return (
    <div id="articles" className='  p-4 lg:px-40 lg:py-20 mt-4 bg-mantis-300'>
      <h1 className='flex flex-col text-mantis-150 text-4xl md:text-6xl lg:text-7xl'>
        <span className='text-lg font-bold'>LES </span>
        ARTICLES
      </h1>
      <ArticleCards />
    </div>
  )
}

export default Articles

