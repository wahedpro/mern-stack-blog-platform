import React from 'react'
import FeaturedBlogs from '../components/home/FeaturedBlogs'
import Categories from '../components/home/Categories'
import AboutAuthor from '../components/home/AboutAuthor'
import Newsletter from '../components/home/Newsletter'

const HomePage = () => {
  return (
    <div>
        <FeaturedBlogs/>
        <Categories/>
        <AboutAuthor/>
        <Newsletter/>
    </div>
  )
}

export default HomePage