import React from 'react'
import Header from '.'
import Button from '../Buttons/Button'
import { usePublishMutation } from '@/app/features/quiz/quizService'
import { useRouter } from 'next/navigation';

const QuizHeader = ({ id }: { id: string; }) => {
  const router = useRouter()
  const { mutateAsync, isPending } = usePublishMutation()
  const handlePublishData = async () => {
    await mutateAsync(id)
    router.push("/quiz")
  }
  return (
    <div className="flex w-full items-center">
      <div className="flex items-center gap-4 w-full">
        <img src="/leaderboard.png" alt="" width={50} height={50} />
        <Header text="Quiz Builder" />
      </div>
      <Button
        type="button"
        loading={isPending}
        label="Publish"
        width="w-fit"
        onClick={handlePublishData}
        buttonStyle="custom"
        height="h-10"
        customClasses="bg-base text-white rounded-[12px]"
      />
    </div>
  )
}

export default QuizHeader
