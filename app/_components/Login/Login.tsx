'use client'
import React from 'react'
import Header from '../Header'
import Text from '../Text'
import Input from '../Inputs'
import Button from '../Buttons/Button'

const Login = () => {
  return (
    <div className="text-gray-800 flex flex-col w-[400px]  p-10 items-center justify-center bg-white rounded-lg">
      <Header text="Get Started today!" />
      <Text text="Find your test. Engage your teacher. Build your career. Do it again with E-test platform!" />
      <form action="" className='w-full flex gap-4 flex-col'>
        <div className="flex flex-col w-full items-center justify-center">
          <Input
            value=""
            onChange={() => ({})}
            name="name"
            placeholder="name"
          />
        </div>
        <div>
          <Input
            value=""
            onChange={() => ({})}
            name="email"
            placeholder="email"
          />
        </div>
        <div>
          <Input
            value=""
            onChange={() => ({})}
            name="password"
            placeholder="password"
          />
        </div>
        <Button
          type="submit"
          label="Sign up"
          width="w-full"
          buttonStyle="custom"
          height="h-[40px]"
          roundedLeft={false}
          roundedRight={false}
          labelSize="text-[18px] font-lg text-white"
          customClasses="bg-base rounded-full"
        />
      </form>
    </div>
  )
}

export default Login
