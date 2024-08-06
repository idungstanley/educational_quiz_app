import React, { forwardRef, LegacyRef } from 'react'
import Input from '../Inputs'

const SingleQuestion = forwardRef<
  HTMLTextAreaElement,
  {
    questionIndex: number
    value: string
    onchange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  }
>(function SingleQuestion({ questionIndex = 1, value, onchange }, ref) {
  return (
    <div className="flex flex-col items-start gap-4 text-black w-full">
      <div className="w-[100px]">Question {questionIndex + 1}</div>
      <div className="flex items-center gap-4 w-full">
        <textarea
          name=""
          id=""
          className="border border-gray-400 h-10 rounded-md w-full focus:outline-none outline-none resize-none p-2"
          value={value}
          onChange={onchange}
          ref={ref}
        />
      </div>
    </div>
  )
})

export default SingleQuestion
