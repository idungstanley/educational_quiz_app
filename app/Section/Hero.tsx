import React from 'react'
import Text from '../_components/Text'
import Header from '../_components/Header'
import Button from '../_components/Buttons/Button'
import Login from '../_components/Login/Login'

const Hero = () => {
  return (
    <div
      className="w-full flex items-center justify-center h-screen flex-col lg:flex-row p-4"
      style={{
        backgroundImage: "url('laptop.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="lg:w-1/3 w-full mb-4 gap-8 flex items-start flex-col">
        <div className="flex items-start flex-col">
          <Text text="FOR A BETTER FUTURE" textColor="text-yellow-200" />
          <Header
            text="BUILDING AN INCREDIBLE LEARNING EXPERIENCE"
            textColor="text-white"
          />
        </div>
        <Button
          type="button"
          label="Find Quiz"
          width="w-[120px]"
          buttonStyle="custom"
          height="h-[40px]"
          roundedLeft={false}
          roundedRight={false}
          labelSize="text-[18px] font-lg text-white"
          customClasses="bg-base rounded-full"
        />
      </div>
      <Login />
    </div>
  )
}

export default Hero
