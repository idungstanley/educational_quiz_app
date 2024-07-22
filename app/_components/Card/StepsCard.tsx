import { StaticImageData } from 'next/image'
import React from 'react'
import Text from '../Text'
import { IconType } from 'react-icons'
import one from '@/app/assets/one.png'

const StepsCard = ({
  image,
  title,
  desc,
  Icon,
}: {
  image: string
  title: string
  desc: string
  Icon: IconType
}) => {
  return (
    <div
      className="max-w-[400px] h-[200px] flex items-start justify-center rounded-lg flex-col p-4 gap-3 shadow-lg shadow-gray-400"
      style={{
        backgroundImage: `url(/${image}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '40%',
        backgroundPosition: '100% 50%',
      }}
    >
      <span className="w-10 h-10 items-center justify-center flex bg-light rounded-lg">
        <Icon className="text-base text-[35px]" />
      </span>
      <div className="w-2/3">
        <Text text={title} textColor="text-black" fontWeight="font-bold" />
        <Text text={desc} />
      </div>
    </div>
  )
}

export default StepsCard
