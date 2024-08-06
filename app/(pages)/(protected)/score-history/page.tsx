'use client'
import Header from '@/app/_components/Header'
import { useGetQuizHistory } from '@/app/features/quiz/quizService'
import React from 'react'
import Table from './component/Table'
import { ClipLoader } from 'react-spinners';

const page = () => {
  const { isLoading } = useGetQuizHistory()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <ClipLoader />
      </div>
    )
  }
  return (
    <div className="w-full">
      <div className="w-full rounded-[20px] bg-base h-full overflow-auto">
        <div className="flex items-center gap-2 border-b border-light p-4">
          <img src="/leaderboard.png" alt="" width={40} height={30} />
          <Header
            text="Score History"
            textSize="text-[22px]"
            textColor="text-white"
          />
        </div>
        <Table />
      </div>
    </div>
  )
}

export default page
