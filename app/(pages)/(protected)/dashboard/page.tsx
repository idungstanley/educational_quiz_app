'use client'
import React from 'react'
import SummaryCard from '@/app/_components/Card/SummaryCard'
import Barchart from '@/app/_components/Chart/Barchart'
import Header from '@/app/_components/Header'
import Text from '@/app/_components/Text'
import { useAppSelector } from '@/app/redux/store'
import { useGetQuizHistory } from '@/app/features/quiz/quizService'
import { ClipLoader } from 'react-spinners'

const Dashboard = () => {
  const { self } = useAppSelector((state) => state.auth)
  const { quizSummary } = useAppSelector((state) => state.quiz)
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
      <div className="lg:mb-4 mb-1">
        <Header text={`Welcome back, ${self?.user?.fullName}`} />
        <Text text="Your currect quiz summary and activities" />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-6 gap-0 items-center">
        <SummaryCard
          count={quizSummary?.passedCount as number}
          title="Passed Test"
        />
        <SummaryCard
          count={quizSummary?.failedCount as number}
          title="Failed Test"
        />
        <SummaryCard
          count={quizSummary?.incompleteCount as number}
          title="Incompleted Test"
        />
        <SummaryCard
          count={quizSummary?.completeCount as number}
          title="Completed Quiz"
        />
        <SummaryCard
          count={quizSummary?.totalAttempts as number}
          title="Total Attempt"
        />
      </div>
      <Barchart />
    </div>
  )
}

export default Dashboard
