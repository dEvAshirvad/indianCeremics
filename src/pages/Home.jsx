import React from 'react'
import CategorySection from '../comps/CategorySection'
import FeaturedProduct from '../comps/FeaturedProduct'
import FeaturedWork from '../comps/FeaturedWork'
import Hero from '../comps/Hero'
import QuoteSection from '../comps/QuoteSection'
import StorySection from '../comps/StorySection'

function Home() {
  return (
    <div className="homePage">
        <Hero/>
        <CategorySection/>
        <StorySection/>
        <QuoteSection/>
        <FeaturedWork/>
        <FeaturedProduct/>
    </div>
  )
}

export default Home