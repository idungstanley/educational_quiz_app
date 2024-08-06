import React from 'react'
import Text from '../Text'
import Header from '../Header'
import { BsThreeDotsVertical } from 'react-icons/bs'

const SummaryCard = ({ title, count }: { title: string; count: number }) => {
  return (
    <div className="min-w-[250px] w-full h-[100px] flex items-start justify-between rounded-lg flex-col p-4 shadow-lg shadow-gray-400 bg-white relative my-4 cursor-pointer">
      <span className="absolute right-2 text-gray-800 cursor-pointer">
        <BsThreeDotsVertical />
      </span>
      <Text text={title} />
      <Header text={`${count}`} />
    </div>
  )
}

export default SummaryCard
