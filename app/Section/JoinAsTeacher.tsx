'use client'
import React from 'react'
import Text from '../_components/Text'
import Header from '../_components/Header'
import Button from '../_components/Buttons/Button'
import { FaCheckCircle } from 'react-icons/fa'
import { benefitsOfTeacher } from '../constants'
import { useRouter } from 'next/navigation'

const JoinAsTeacher = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/auth/tutor-signup')
  }

  return (
    <div
      className="w-full flex items-center justify-center h-screen gap-10"
      style={{
        backgroundImage: "url('teacher.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="lg:w-1/3 w-full flex items-center flex-col">
        <div className="flex items-start flex-col gap-6 bg-white bg-opacity-80 rounded-lg p-6">
          <Header text="WANT TO JOIN AS A TEACHER?" textColor="text-black" />
          <div className="flex items-start gap-2 flex-col">
            {benefitsOfTeacher.map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <FaCheckCircle className="text-base" />
                <Text
                  text={item}
                  fontWeight="font-bold"
                  textColor="text-black"
                />
              </div>
            ))}
          </div>
          <Button
            type="button"
            label="Join As A Teacher"
            width="w-fit"
            onClick={handleClick}
            buttonStyle="custom"
            height="h-[40px]"
            roundedLeft={false}
            roundedRight={false}
            labelSize="text-[16px] text-base"
            customClasses="bg-white border border-base rounded-full z-10 px-4"
          />
        </div>
      </div>
    </div>
  )
}

export default JoinAsTeacher
