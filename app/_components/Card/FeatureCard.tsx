import React from 'react'
import Text from '../Text'
import Image, { StaticImageData } from 'next/image'

const FeatureCard = ({
  image,
  title,
}: {
  image: StaticImageData
  title: string
}) => {
  return (
    <div className="border border-gray-400 w-[230px] h-[200px] flex items-center justify-center rounded-lg flex-col p-2 gap-2 shadow-md shadow-gray-800">
      <Image src={image} alt={title + 'image'} height={100} width={100} />
      <Text text={title} textColor="text-black font-bold" />
    </div>
  )
}

export default FeatureCard
