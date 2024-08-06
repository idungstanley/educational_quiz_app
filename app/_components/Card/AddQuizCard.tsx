import React from 'react'
import { HiMiniSquaresPlus } from 'react-icons/hi2'
import Text from '../Text';

const AddQuizCard = ({handleClick}: {handleClick: ()=> void}) => {
  return (
    <div className="shadow-gray-400 shadow-lg bg-light w-full  rounded-[16px] w-full lg:w-[250px] h-[300px] flex items-center justify-center cursor-pointer" onClick={handleClick}>
      <span className="flex flex-col items-center justify-center text-base text-[50px]">
        <HiMiniSquaresPlus />
        <Text text="Add quiz" textSize='text-[20px]' />
      </span>
    </div>
  )
}

export default AddQuizCard
