import React from 'react'
import Header from '../_components/Header'
import FeatureCard from '../_components/Card/FeatureCard'
import { featuresCard } from '../constants'

const OurFeatures = () => {
  return (
    <div className="bg-white p-10 w-full flex flex-col items-center gap-10">
      <Header text="Our Features" />
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        {featuresCard.map((item, index) => (
          <FeatureCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default OurFeatures
