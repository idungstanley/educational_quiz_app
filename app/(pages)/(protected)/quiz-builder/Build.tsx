'use client'
import Button from '@/app/_components/Buttons/Button'
import Header from '@/app/_components/Header'
import QuizHeader from '@/app/_components/Header/QuizHeader'
import Input from '@/app/_components/Inputs'
import { SelectInput } from '@/app/_components/Inputs/SelectInput'
import { InputSwitch } from '@/app/_components/Inputs/Switch'
import CommandModal from '@/app/_components/Modal/CommandModal'
import Choices from '@/app/_components/Questions/Choices'
import SingleQuestion from '@/app/_components/Questions/SingleQuestion'
import { allotedMetricsData } from '@/app/constants'
import useQuizManager from '@/app/hooks/useQuizManager';
import { Question } from '@/app/types'
import { FormControlLabel } from '@mui/material'
import { StaticImageData } from 'next/image'
import React, {
  ChangeEvent,
  createRef,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { HiPlusCircle } from 'react-icons/hi2'

const page = () => {
  const ref = useRef()
  const endOfListRef = useRef<HTMLDivElement | null>(null)
  const {} = useQuizManager(initialQuestion)

  const [showModal, setShowModal] = useState(true)
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [allotedMetrics, setAllotedMetrics] = useState('')
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([
    {
      questionText: 'what is love?',
      quizId: '66a5f32148893017b026facb',
      isMultipleSelect: false,
      marksAwarded: 5,
      allotedTime: 5,
      file: null,
      allotedMetric: 'minutes',
      options: [
        {
          text: 'God is love',
          isCorrect: true,
        },
        {
          text: 'love is sex',
          isCorrect: false,
        },
        {
          text: 'love is affection',
          isCorrect: false,
        },
        {
          text: 'love is protection',
          isCorrect: false,
        },
      ],
    },
  ])

  const textAreaRefs = useRef(
    quizQuestions.map(() => createRef<HTMLTextAreaElement>()),
  )

  const addQuestionToList = () => {
    const newQuestion = {
      questionText: '',
      quizId: '66a5f32148893017b026facQ',
      isMultipleSelect: false,
      marksAwarded: 5,
      file: null,
      allotedTime: 5,
      allotedMetric: 'minutes',
      options: [
        {
          text: 'God is love',
          isCorrect: true,
        },
        {
          text: 'love is sex',
          isCorrect: false,
        },
        {
          text: 'love is affection',
          isCorrect: false,
        },
        {
          text: 'love is protection',
          isCorrect: false,
        },
      ],
    }
    setQuizQuestions([...quizQuestions, newQuestion])
    textAreaRefs.current = [...textAreaRefs.current, createRef()]
  }

  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [quizQuestions, quizQuestions.length, endOfListRef.current])

  const handleChangeQuestion = (index: number, value: string) => {
    const newQuestionName = quizQuestions.map((quiz, quizIndex) => {
      if (index === quizIndex) {
        return {
          ...quiz,
          questionText: value,
        }
      }
      return quiz
    })
    setQuizQuestions(newQuestionName as Question[])
  }

  const handleSwitchMultipleSelect = (index: number) => {
    const newQuestionName = quizQuestions.map((quiz, quizIndex) => {
      if (index === quizIndex) {
        return {
          ...quiz,
          isMultipleSelect: !quiz.isMultipleSelect,
        }
      }
      return quiz
    })
    setQuizQuestions(newQuestionName as Question[])
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const newQuestionName = quizQuestions.map((quiz, quizIndex) => {
      if (index === quizIndex) {
        return {
          ...quiz,
          allotedMetric: e.target.value,
        }
      }
      return quiz
    })
    setQuizQuestions(newQuestionName as Question[])
  }
  console.log(quizQuestions)

  return (
    <div className="w-full text-black">
      <QuizHeader />
      <div className="border-2 rounded-md bg-white border-base mt-10 p-6 max-h-[700px] overflow-auto pb-10">
        <Header text="Quiz Questions:" textColor="self-start" />
        <div className="flex flex-col w-full gap-4">
          {quizQuestions.map((singleQuestion, questionIndex) => (
            <div
              className="rounded-[10px] border p-6 border-base mt-[20px] flex gap-6 flex-col items-center"
              key={questionIndex}
              ref={
                quizQuestions.length - 1 === questionIndex ? endOfListRef : null
              }
            >
              <SingleQuestion
                value={singleQuestion?.questionText}
                onchange={(e) =>
                  handleChangeQuestion(questionIndex, e.target.value)
                }
                questionIndex={questionIndex}
                ref={textAreaRefs.current[questionIndex]}
              />
              <Choices
                quizQuestions={quizQuestions}
                setQuizQuestions={setQuizQuestions}
                singleQuestion={singleQuestion}
                questionIndex={questionIndex}
              />
              <div className="grid grid-cols-2 gap-4 w-full">
                <FormControlLabel
                  control={
                    <InputSwitch
                      defaultChecked
                      onChange={() => handleSwitchMultipleSelect(questionIndex)}
                      checked={singleQuestion.isMultipleSelect}
                    />
                  }
                  label="Multiselect"
                />
                <SelectInput
                  placeholder="Select Alloted Metrics"
                  data={allotedMetricsData}
                  value="value"
                  handleSelect={(e) => handleSelect(e, questionIndex)}
                />
                <Input
                  bgColor="bg-white"
                  name="allotedTime"
                  label="Alloted Time"
                  placeholder="Enter alloted time"
                  type="number"
                  width="w-full"
                  onChange={() => ({})}
                  height="h-10 rounded-md mb-5"
                />
                <Input
                  bgColor="bg-white"
                  name="marks"
                  label="Marks Awarded"
                  placeholder="Enter Mark for this question"
                  type="number"
                  width="w-full"
                  onChange={() => ({})}
                  height="h-10 rounded-md mb-5"
                />
                <label
                  htmlFor="profile-pic"
                  className="flex flex-col mt-10 items-center justify-center gap-4"
                >
                  <div className="relative w-40 h-40 mb-4 rounded-full border-[3px] border-dashed border-brand-gray-700 flex items-center justify-center">
                    <input
                      id="profile-pic"
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      // onChange={handleImageUpload}
                    />
                    <span className="w-[90%] h-[90%] bg-brand-gray-100 flex items-center justify-center rounded-full">
                      {singleQuestion ? (
                        <img
                          src="/quiz.png"
                          alt="Profile"
                          className="object-cover w-full h-full rounded-full"
                        />
                      ) : (
                        <FaUserLarge
                          className="text-brand-gray-400 w-1/2 h-1/2
                  "
                        />
                      )}
                    </span>
                    <div className="absolute bottom-1 bg-white p-0.5 rounded-full right-1 cursor-pointer">
                      <HiPlusCircle className="text-3xl text-brand-blue-400" />
                    </div>
                  </div>
                  <div className="bg-blue-500 w-fit text-white px-4 py-2 rounded cursor-pointer">
                    {!uploading && !error ? 'Change Photo' : 'Upload a photo'}
                  </div>
                </label>
              </div>
              <Button
                type="button"
                label="Save question"
                width="w-fit"
                buttonStyle="custom"
                onClick={addQuestionToList}
                height="h-10"
                customClasses="bg-base text-white rounded-[12px] self-end"
              />
            </div>
          ))}
          <Button
            type="button"
            label="Add a new question"
            width="w-fit"
            buttonStyle="custom"
            onClick={addQuestionToList}
            height="h-10"
            customClasses="bg-base text-white rounded-[12px] self-center"
          />
        </div>
        <CommandModal
          styling="top-[50px]"
          width="w-[350px] lg:w-[700px]"
          setPopup={setShowModal}
          commandVisible={showModal}
        >
          <div
            className="rounded-[10px] w-full border p-6 border-base flex gap-6 flex-col items-center"
            ref={endOfListRef}
          >
            <SingleQuestion
              value={quizQuestion?.questionText}
              onchange={(e) => handleChangeQuestion(3, e.target.value)}
              questionIndex={3}
              ref={textAreaRefs.current[3]}
            />
            <Choices
              quizQuestions={quizQuestions}
              setQuizQuestions={setQuizQuestions}
              singleQuestion={quizQuestion}
              questionIndex={3}
            />
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormControlLabel
                control={
                  <InputSwitch
                    defaultChecked
                    onChange={() => handleSwitchMultipleSelect(3)}
                    checked={quizQuestion.isMultipleSelect}
                  />
                }
                label="Multiselect"
              />
              <SelectInput
                placeholder="Select Alloted Metrics"
                data={allotedMetricsData}
                value="value"
                handleSelect={(e) => handleSelect(e, 3)}
              />
              <Input
                bgColor="bg-white"
                name="allotedTime"
                label="Alloted Time"
                placeholder="Enter alloted time"
                type="number"
                width="w-full"
                onChange={() => ({})}
                height="h-10 rounded-md mb-5"
              />
              <Input
                bgColor="bg-white"
                name="marks"
                label="Marks Awarded"
                placeholder="Enter Mark for this question"
                type="number"
                width="w-full"
                onChange={() => ({})}
                height="h-10 rounded-md mb-5"
              />
              <label
                htmlFor="profile-pic"
                className="flex flex-col mt-10 items-center justify-center gap-4"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full border-[3px] border-dashed border-brand-gray-700 flex items-center justify-center">
                  <input
                    id="profile-pic"
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 h-full opacity-0 cursor-pointer"
                    // onChange={handleImageUpload}
                  />
                  <span className="w-[90%] h-[90%] bg-brand-gray-100 flex items-center justify-center rounded-full">
                    {quizQuestion ? (
                      <img
                        src="string"
                        alt="Profile"
                        className="object-cover w-full h-full rounded-full"
                      />
                    ) : (
                      <FaUserLarge
                        className="text-brand-gray-400 w-1/2 h-1/2
                  "
                      />
                    )}
                  </span>
                  <div className="absolute bottom-1 bg-white p-0.5 rounded-full right-1 cursor-pointer">
                    <HiPlusCircle className="text-3xl text-brand-blue-400" />
                  </div>
                </div>
                <div className="bg-blue-500 w-fit text-white px-4 py-2 rounded cursor-pointer">
                  {!uploading && !error ? 'Change Photo' : 'Upload a photo'}
                </div>
              </label>
            </div>
            <Button
              type="button"
              label="Save question"
              width="w-fit"
              buttonStyle="custom"
              onClick={addQuestionToList}
              height="h-10"
              customClasses="bg-base text-white rounded-[12px] self-end"
            />
          </div>
        </CommandModal>
      </div>
    </div>
  )
}

export default page
