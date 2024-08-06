'use client'
import Button from '@/app/_components/Buttons/Button'
import OptionCard from '@/app/_components/Card/OptionCard'
import QuestionDetailCard from '@/app/_components/Card/QuestionDetailCard'
import CountdownTimer from '@/app/_components/CountdownTimer'
import Header from '@/app/_components/Header'
import CommandModal from '@/app/_components/Modal/CommandModal'
import Text from '@/app/_components/Text'
import {
  useAttemptQuestionMutation,
  useGetNextMutation,
  useGetOneQuiz,
  useGetPrevMutation,
  useSubmitQuizMutation,
} from '@/app/features/quiz/quizService'
import { useAppSelector } from '@/app/redux/store'
import { pageProps } from '@/app/types'
import { useRouter } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import { FaClipboardList, FaListOl } from 'react-icons/fa'
import { IoTime } from 'react-icons/io5'
import { PiExamFill } from 'react-icons/pi'

const page: FC<pageProps> = ({ params }) => {
  const router = useRouter()
  const { oneQuiz, activeQuestion, attemptId, totalScore } = useAppSelector(
    (state) => state.quiz,
  )
  const {
    mutateAsync: mutateNext,
    isPending: nextLoading,
  } = useGetNextMutation()
  const { mutateAsync, isPending } = useAttemptQuestionMutation()
  const {
    mutateAsync: quizSubmitMutate,
    isPending: quizSubmitLoading,
  } = useSubmitQuizMutation()
  const {
    mutateAsync: mutatePrev,
    isPending: prevLoading,
  } = useGetPrevMutation()
  useGetOneQuiz(params.id)

  const optionsArray = ['A', 'B', 'C', 'D']
  const [timeLeft, setTimeLeft] = useState(0)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }
  const handleTimeUp = () => {
    // Logic to auto-submit the quiz question
    console.log('Time is up!')
  }
  const handleNext = async () => {
    await mutateNext(attemptId as string)
  }
  const handlePrev = async () => {
    await mutatePrev(attemptId as string)
  }
  const handleSubmitAnswer = async () => {
    await mutateAsync({
      id: activeQuestion?._id as string,
      selectedOptions: [selectedOption as string],
    })
    await mutateNext(attemptId as string)
  }

  const handleSubmitQuiz = async () => {
    await quizSubmitMutate(attemptId as string)
    // router.push(`/attempt/${params.id}/quiz`)
    setShowModal(true)
  }

  const handleGoToQuiz = async () => {
    setShowModal(false)
    router.push('/quiz')
  }

  useEffect(() => {
    if (!activeQuestion) return

    const allocatedTime = activeQuestion.remainingTime
      ? activeQuestion.remainingTime * 60
      : 0
    setTimeLeft(allocatedTime)

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval)
          handleTimeUp()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [activeQuestion?._id])

  return (
    <div className="flex w-full gap-6 p-6 bg-white rounded-md">
      <div className="w-full">
        <Header text={oneQuiz?.title as string} />
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex items-center gap-4">
            <Header text="Question: " />
            <Header text={activeQuestion?.questionText as string} />
          </div>
          <div className="flex flex-col items-start w-full gap-4">
            {activeQuestion?.options?.map((option, index) => (
              <OptionCard
                handleSelect={() => handleSelect(option)}
                key={index}
                optionText={option}
                option={optionsArray[index]}
                isSelected={option === selectedOption}
              />
            ))}
          </div>
          <Button
            type="button"
            onClick={handleSubmitAnswer}
            loading={isPending}
            label="Submit Answer"
            width="w-fit"
            buttonStyle="custom"
            height="h-10"
            customClasses="bg-base text-white rounded-[12px] self-end"
          />
          <div className="flex items-center justify-between w-full">
            <Button
              type="button"
              loading={prevLoading}
              onClick={handlePrev}
              label="Prev"
              width="w-fit"
              buttonStyle="custom"
              height="h-10"
              customClasses="bg-base text-white rounded-[12px]"
              disabled={!activeQuestion?.hasPrevQuestion}
            />
            <Button
              type="button"
              onClick={handleNext}
              loading={nextLoading}
              disabled={!activeQuestion?.hasNextQuestion}
              label="Next"
              width="w-fit"
              buttonStyle="custom"
              height="h-10"
              customClasses="bg-base text-white rounded-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <CountdownTimer
          timeLeft={timeLeft}
          initialTime={(activeQuestion?.allotedTime as number) * 60}
        />
        <QuestionDetailCard
          buttonLabel="Submit Quiz"
          width="lg:w-[250px]"
          id={params.id}
          isPending={quizSubmitLoading}
          onClick={handleSubmitQuiz}
          time_allowed={oneQuiz?.totalTimeAllowed as number / 60}
          pass_mark={oneQuiz?.passMark as number}
          title={oneQuiz?.title as string}
          number_of_questions={oneQuiz?.totalQuestions as number}
        />
      </div>
      <CommandModal
        handleAction={handleGoToQuiz}
        commandVisible={showModal}
        setPopup={setShowModal}
      >
        <div className="w-full relative h-[150px] bg-base text-white text-[60px] flex items-center justify-center rounded-t-[16px]">
          <PiExamFill />
        </div>
        <div className="flex flex-col items-start justify-between w-full gap-4 p-6">
          <div className="flex items-center gap-1">
            <Header
              text="Huray, Quiz Completed!"
              textSize="text-[25px] text-nowrap"
            />
          </div>
          <div className="flex items-center gap-1">
            <Header text="Title:" textSize="text-[20px] text-nowrap" />
            <Header
              text={oneQuiz?.title as string}
              textSize="text-[20px] text-wrap"
            />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex items-center justify-between w-full text-black">
              <div className="flex items-center gap-4">
                <FaClipboardList />
                <p>Question</p>
              </div>
              <Text text={`${oneQuiz?.totalQuestions as number}`} />
            </div>
            <div className="flex items-center justify-between w-full text-black">
              <div className="flex items-center gap-4">
                <IoTime />
                <p>Time</p>
              </div>
              <Text text={`${oneQuiz?.totalTimeAllowed as number / 60} mins`} />
            </div>
            <div className="flex items-center justify-between w-full text-black">
              <div className="flex items-center gap-4">
                <FaListOl />
                <p>Pass mark</p>
              </div>
              <Text text={`${oneQuiz?.passMark as number}`} />
            </div>
            {showModal && (
              <div className="flex items-center justify-between w-full text-black">
                <div className="flex items-center gap-4">
                  <FaListOl />
                  <p>Total Score</p>
                </div>
                <Text text={`${totalScore}`} />
              </div>
            )}
          </div>
          <Button
            loading={isPending}
            type="button"
            label="Go to quiz"
            width="w-fit"
            buttonStyle="custom"
            onClick={handleGoToQuiz}
            height="h-10"
            customClasses="bg-base text-white rounded-[12px] self-end"
          />
        </div>
      </CommandModal>
    </div>
  )
}

export default page
