'use client'
import React, { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import Header from '../Header'
import Text from '../Text'
import { PiDotsThreeBold } from 'react-icons/pi'
import { FaCirclePlay } from 'react-icons/fa6'
import { LuTrash2 } from 'react-icons/lu'
import { FiInbox } from 'react-icons/fi'
import { CiEdit } from 'react-icons/ci'
import Dropdown from '../dropdown'
import { useRouter } from 'next/navigation'
import { auth } from '@/auth'
import { useAppSelector } from '@/app/redux/store'
import { useAttemptQuizMutation } from '@/app/features/quiz/quizService'

const dropdownOption = [
  {
    icon: <CiEdit />,
    label: 'Edit',
    visibility: true,
    handleClick: () => {},
  },
  {
    icon: <FiInbox />,
    label: 'Move to draft',
    visibility: true,
    handleClick: () => ({}),
  },
  {
    icon: <LuTrash2 />,
    label: 'Trash',
    visibility: true,
    handleClick: async () => ({}),
  },
]

const QuizCard = ({
  title,
  number_of_questions,
  id,
}: {
  title: string
  number_of_questions: number
  id: string
}) => {
  const router = useRouter()
  const { self } = useAppSelector((state) => state.auth)
  const [showDropdown, setShowDropdownn] = useState<null | HTMLDivElement>(null)
  const handleCloseDropdown = () => {
    setShowDropdownn(null)
  }

  const handleOpenDropdown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setShowDropdownn(e.currentTarget)
  }

  const handleStartQuiz = () => {
    if (self?.user.role === 'user') {
      router.push(`/attempt/${id}`)
    } else {
      router.push(`/quiz-builder/${id}`)
    }
  }

  return (
    <div className="shadow-gray-400 shadow-lg bg-white  rounded-[16px] w-full lg:max-w-[250px] h-[300px] flex flex-col items-start justify-between">
      <div className="w-full relative h-1/2 bg-base text-white text-[60px] flex items-center justify-center rounded-t-[16px]">
        <FaCode />
        {self?.user.role === 'tutor' && (
          <span
            className="absolute right-2 text-white top-2 text-[25px] cursor-pointer"
            onClick={handleOpenDropdown}
          >
            <PiDotsThreeBold />
          </span>
        )}
      </div>
      <div className="flex flex-col items-start justify-between w-full p-4">
        <Header text={title} textSize="text-[25px]" />
        <Text text={number_of_questions + ' Questions'} />
        <div className="flex items-center justify-between w-full text-black">
          <img src="/score.png" alt="choose" width={20} height={20} />
          <p>Success rate 100%</p>
          <FaCirclePlay
            className="text-[30px] cursor-pointer"
            onClick={handleStartQuiz}
          />
        </div>
      </div>
      <Dropdown
        handleClose={handleCloseDropdown}
        anchorEl={showDropdown}
        options={dropdownOption}
      />
    </div>
  )
}

export default QuizCard
