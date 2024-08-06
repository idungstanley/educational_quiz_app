import React from 'react'
import Input from '../Inputs'
import { alphabet } from '@/app/constants'
import { Question } from '@/app/features/quiz/quiz.interface';

const Choices = ({
  // singleQuestion,
  quizQuestion,
  setQuizQuestion,
}: {
  questionIndex: number
  singleQuestion: Question
  setQuizQuestion: React.Dispatch<React.SetStateAction<Question>>
  quizQuestion: Question
}) => {
  // const options = singleQuestion?.options
  const handleChangeOption = (value: string, optionIndex: number) => {
    const updatedOptions = quizQuestion.options.map((option, idx) => {
      if (idx === optionIndex) {
        return { ...option, text: value }
      }
      return option
    })
    setQuizQuestion({ ...quizQuestion, options: updatedOptions })
  }

  const handleSelectAnswer = (optionIndex: number) => {
    const updatedOptions = quizQuestion.options.map((option, idx) => {
      if (idx === optionIndex) {
        return { ...option, isCorrect: !option.isCorrect }
      }
      return option
    })
    setQuizQuestion({ ...quizQuestion, options: updatedOptions })
  }

  return (
    <div className="text-black flex-col flex items-start gap-4 w-full">
      <div className="w-[100px]">Choices</div>
      <div className="border border-gray-400 rounded-[15px] w-full flex flex-col gap-4 p-6">
        {quizQuestion.options?.map((item, index) => (
          <div className="flex items-center gap-4" key={index}>
            <span>{alphabet[index]}:</span>
            <Input
              bgColor="bg-white"
              name="title"
              width="w-full"
              value={item.text}
              onChange={(e) => handleChangeOption(e.target.value, index)}
              height="h-10 rounded-md"
            />
            <input
              checked={item.isCorrect}
              type="checkbox"
              name={'question' + (index + 1)}
              id={'question' + index + 1}
              onChange={() => handleSelectAnswer(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Choices
