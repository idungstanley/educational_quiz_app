'use client'
import React from 'react'
import Header from '../Header'
import Text from '../Text'
import { PiExamFill } from 'react-icons/pi'
import { FaClipboardList, FaListOl } from 'react-icons/fa'
import { IoTime } from 'react-icons/io5'
import Button from '../Buttons/Button'

const QuestionDetailCard = ({
  title,
  number_of_questions,
  pass_mark,
  time_allowed,
  id,
  width = 'lg:w-[500px] w-full',
  buttonLabel = 'Start Quiz',
  onClick,
  isPending,
  isCompleted = false,
  total_score,
}: {
  title: string
  number_of_questions: number
  pass_mark: number
  time_allowed: number
  id: string
  width?: string
  onClick: () => void
  buttonLabel?: string
  isPending: boolean
  isCompleted?: boolean
  total_score?: number
}) => {
  return (
    <div
      className={`shadow-gray-400 shadow-lg bg-white  rounded-[16px] w-full h-[500px] flex flex-col items-start gap-6 ${width}`}
    >
      <div className="w-full relative h-1/2 bg-base text-white text-[60px] flex items-center justify-center rounded-t-[16px]">
        <PiExamFill />
      </div>
      <div className="flex flex-col items-start justify-between w-full gap-4 p-6">
        <div className="flex flex-col items-start gap-1">
          <Header text="Title:" textSize="text-[25px] text-nowrap" />
          <Header text={title} textSize="text-[25px] text-wrap" />
        </div>
        <div className="flex flex-col items-start w-full gap-2">
          <div className="flex items-center justify-between w-full text-black">
            <div className="flex items-center gap-4">
              <FaClipboardList />
              <p>Question</p>
            </div>
            <Text text={`${number_of_questions}`} />
          </div>
          <div className="flex items-center justify-between w-full text-black">
            <div className="flex items-center gap-4">
              <IoTime />
              <p>Time</p>
            </div>
            <Text text={`${time_allowed} mins`} />
          </div>
          <div className="flex items-center justify-between w-full text-black">
            <div className="flex items-center gap-4">
              <FaListOl />
              <p>Pass mark</p>
            </div>
            <Text text={`${pass_mark}`} />
          </div>
          {isCompleted && (
            <div className="flex items-center justify-between w-full text-black">
              <div className="flex items-center gap-4">
                <FaListOl />
                <p>Total Score</p>
              </div>
              <Text text={`${total_score}`} />
            </div>
          )}
        </div>
        <Button
          loading={isPending}
          type="button"
          label={buttonLabel}
          width="w-fit"
          buttonStyle="custom"
          onClick={onClick}
          height="h-10"
          customClasses="bg-base text-white rounded-[12px] self-end"
        />
      </div>
    </div>
  )
}

export default QuestionDetailCard
