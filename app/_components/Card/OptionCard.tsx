import React from 'react'
import Text from '../Text'
import { FaCircleCheck } from 'react-icons/fa6'

const OptionCard = ({
  option,
  optionText,
  isSelected,
  handleSelect,
}: {
  optionText: string
  option: string
  isSelected: boolean
  handleSelect: () => void
}) => {
  return (
    <div
      className={`flex cursor-pointer items-center bg-white h-14 justify-between p-1 w-full border-[3px] rounded-lg ${
        isSelected ? 'border-base' : 'border-gray-400'
      }`}
      onClick={handleSelect}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-10 h-10 text-black rounded-lg bg-light">
          {option}
        </span>
        <Text text={optionText} />
      </div>
      {isSelected && <FaCircleCheck className="text-[#2b8c72] text-[20px]" />}
    </div>
  )
}

export default OptionCard
