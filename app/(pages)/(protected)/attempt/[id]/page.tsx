'use client'
import QuestionDetailCard from '@/app/_components/Card/QuestionDetailCard'
import {
  useAttemptQuizMutation,
  useGetOneQuiz,
} from '@/app/features/quiz/quizService'
import { useAppSelector } from '@/app/redux/store'
import { pageProps } from '@/app/types'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'

const AttemptQuiz: FC<pageProps> = ({ params }) => {
  const router = useRouter()
  const {
    mutateAsync: quizAttemptMutate,
    isPending: quizAttemptLoading,
  } = useAttemptQuizMutation()
  const { isLoading } = useGetOneQuiz(params.id)
  const { oneQuiz } = useAppSelector((state) => state.quiz)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <ClipLoader />
      </div>
    )
  }

  const handleStartQuiz = async () => {
    await quizAttemptMutate(params.id)
    router.push(`/attempt/${params.id}/quiz`)
  }

  return (
    <div>
      <QuestionDetailCard
        onClick={handleStartQuiz}
        isPending={quizAttemptLoading}
        id={params.id}
        time_allowed={oneQuiz?.totalTimeAllowed as number / 60}
        pass_mark={oneQuiz?.passMark as number}
        title={oneQuiz?.title as string}
        number_of_questions={oneQuiz?.totalQuestions as number}
      />
    </div>
  )
}

export default AttemptQuiz
