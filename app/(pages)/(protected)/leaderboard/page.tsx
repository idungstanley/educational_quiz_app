'use client'
import Header from '@/app/_components/Header'
import React, { useState } from 'react'
import Table from './component/Table'
import { SelectInput } from '@/app/_components/Inputs/SelectInput'
import { allotedMetricsData } from '@/app/constants'
import { useGetAllQuiz } from '@/app/features/quiz/quizService'
import { useAppSelector } from '@/app/redux/store'
import { ClipLoader } from 'react-spinners'
import { Quiz } from '@/app/features/quiz/quiz.interface'

const LeaderboardPage = () => {
  const { isLoading } = useGetAllQuiz()
  const { quiz } = useAppSelector((state) => state.quiz)
  const [selectedId, setSelectedId] = useState('')

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <ClipLoader />
      </div>
    )
  }

  const data = (quiz as Quiz[]).map((item) => ({
    name: item.title,
    value: item._id,
  }))

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedId(e.target.value)
  }

  console.log(selectedId)
  console.log(data)

  return (
    <div className="w-full">
      <div className="w-full rounded-[20px] bg-base h-full overflow-auto">
        <div className="flex items-center justify-between grow border-b border-light gap-10 p-2">
          <div className="flex items-center gap-2 p-4">
            <img src="/leaderboard.png" alt="" width={40} height={30} />
            <Header
              text="TOP USERS RANKING IN JAVASCRIPT"
              textSize="text-[22px]"
              textColor="text-white text-nowrap"
            />
          </div>
          <div className="w-1/2">
            <SelectInput
              placeholder="Select a quiz"
              data={data}
              value="value"
              handleSelect={(e) => handleSelect(e)}
            />
          </div>
        </div>
        <Table id={selectedId} />
      </div>
    </div>
  )
}

export default LeaderboardPage
