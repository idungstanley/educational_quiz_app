import React from 'react'
import Header from '../_components/Header'
import StepsCard from '../_components/Card/StepsCard'
import { stepsData } from '../constants'

const HowItWorks = () => {
  return (
    <div className="bg-light p-10 w-full flex flex-col items-center gap-10">
      <Header text="How it works" />
      <div className="flex gap-10 items-center lg:flex-row flex-col">
        {stepsData.map((item, index) => (
          <StepsCard
            key={index}
            title={item.title}
            Icon={item.Icon}
            image={item.image}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
