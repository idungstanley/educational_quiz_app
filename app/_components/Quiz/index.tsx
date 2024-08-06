'use client'
import React, { useState } from 'react'
import Header from '../Header'
import QuizCard from '../Card/QuizCard'
import AddQuizCard from '../Card/AddQuizCard'
import CommandModal from '../Modal/CommandModal'
import Input from '../Inputs'
import Button from '../Buttons/Button'
import {
  useAddQuizMutation,
  useGetAllQuiz,
} from '@/app/features/quiz/quizService'
import { useFormik } from 'formik'
import { addQuizSchema } from '@/app/validationSchemas'
import { AddQuizProps } from '@/app/features/quiz/quiz.interface'
import { useAppSelector } from '@/app/redux/store'
import { ClipLoader } from 'react-spinners'

const MyQuizzes = () => {
  const { isLoading } = useGetAllQuiz()
  const { quiz } = useAppSelector((state) => state.quiz)
  const { self } = useAppSelector((state) => state.auth)

  const [showModal, setShowModal] = useState(false)
  const { mutateAsync, isPending } = useAddQuizMutation()
  const handleShowModal = () => {
    setShowModal(true)
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      passMark: '',
    },
    validateOnBlur: true,
    validationSchema: addQuizSchema,
    onSubmit: async (values: AddQuizProps) => {
      try {
        await mutateAsync({
          title: values.title,
          description: values.description,
          passMark: values.passMark,
        })
        setShowModal(false)
      } catch (error) {
        console.log(error)
      }
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <ClipLoader />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full gap-6 lg:items-start">
      <Header text="My Quizzes" position="place-self-start" />
      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3">
        {self?.user.role === 'tutor' && (
          <AddQuizCard handleClick={handleShowModal} />
        )}
        {quiz?.map((item, index) => (
          <QuizCard
            id={item.id}
            key={index}
            title={item.title}
            number_of_questions={item.totalQuestions}
          />
        ))}
        {showModal ? (
          <CommandModal
            styling="top-[50px]"
            setPopup={setShowModal}
            commandVisible={showModal}
          >
            <form
              action=""
              className="flex flex-col items-start w-full gap-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
                <Input
                  bgColor="bg-white"
                  label="Quiz/Test name"
                  required
                  name="title"
                  width="w-full"
                  placeholder="Enter quiz/test name"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  height="h-10 rounded-md"
                />
              </div>
              <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
                <Input
                  required
                  type="number"
                  bgColor="bg-white"
                  label="Pass Mark"
                  name="passMark"
                  width="w-full"
                  placeholder="Enter passmark"
                  value={formik.values.passMark}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  height="h-10 rounded-md"
                />
              </div>
              <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
                <Input
                  bgColor="bg-white"
                  label="Description"
                  name="description"
                  width="w-full"
                  placeholder="Enter description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  height="h-10 rounded-md"
                />
              </div>
              <Button
                type="submit"
                loading={isPending}
                label="Submit Quiz details"
                width="w-full"
                buttonStyle="custom"
                height="h-10"
                customClasses="bg-base text-white rounded-[12px]"
              />
            </form>
          </CommandModal>
        ) : null}
      </div>
    </div>
  )
}

export default MyQuizzes
