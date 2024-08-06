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
import {
  allotedMetricsData,
  initialQuestion,
  quizQuestions,
} from '@/app/constants'
import { useAddQuestionMutation } from '@/app/features/quiz/quizService'
import useQuizManager from '@/app/hooks/useQuizManager'
import { Question } from '@/app/types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
} from '@mui/material'
import React, { useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaUserLarge } from 'react-icons/fa6'
import { HiPlusCircle } from 'react-icons/hi2'

const page = () => {
  const endOfListRef = useRef<HTMLDivElement | null>(null)
  const {
    quizQuestion,
    handleChangeQuestion,
    handleSelect,
    handleSwitchMultipleSelect,
    setQuizQuestion,
    handleChangeAllotedTime,
    handleChangeMarksAwared,
    handleImageUpload,
  } = useQuizManager(initialQuestion)
  const textAreaRefs = useRef<HTMLTextAreaElement>(null)
  const [showModal, setShowModal] = useState(false)
  console.log(quizQuestion)
  const { mutateAsync } = useAddQuestionMutation()

  const handleSubmit = async () => {
    await mutateAsync(quizQuestion)
  }

  const editQuestion = (data: Question) => {
    setQuizQuestion(data)
    setShowModal(true)
  }
  const addNewQuestion = () => {
    setQuizQuestion(initialQuestion)
    setShowModal(true)
  }

  return (
    <div className="w-full text-black">
      <QuizHeader />
      <div className="border-2 rounded-md bg-white border-base mt-10 p-6 max-h-[700px] overflow-auto pb-10">
        <div className="flex items-center justify-between w-full mb-4">
          <Header text="Quiz Questions:" textColor="self-start" />
          <Button
            type="button"
            label="Add question"
            width="w-fit"
            buttonStyle="custom"
            onClick={addNewQuestion}
            height="h-10"
            customClasses="bg-base text-white rounded-[12px] self-end"
          />
        </div>
        <div className="flex flex-col gap-4 items-start w-full">
          {quizQuestions.map((singleQuestion, questionIndex) => (
            <Accordion className="!w-full !rounded-md">
              <AccordionSummary
                expandIcon={<FaChevronDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Question {questionIndex + 1}
              </AccordionSummary>
              <AccordionDetails>
                <div
                  className="rounded-[10px] border p-6 border-base mt-[20px] flex gap-6 flex-col items-center"
                  key={questionIndex}
                  ref={
                    quizQuestions.length - 1 === questionIndex
                      ? endOfListRef
                      : null
                  }
                >
                  <SingleQuestion
                    value={singleQuestion?.questionText}
                    onchange={(e) => handleChangeQuestion(e.target.value)}
                    questionIndex={questionIndex}
                    ref={textAreaRefs}
                  />
                  <Choices
                    quizQuestion={singleQuestion}
                    setQuizQuestion={setQuizQuestion}
                    singleQuestion={singleQuestion}
                    questionIndex={questionIndex}
                  />
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <FormControlLabel
                      control={
                        <InputSwitch
                          defaultChecked
                          onChange={() => handleSwitchMultipleSelect()}
                          checked={singleQuestion.isMultipleSelect}
                        />
                      }
                      label="Multiselect"
                    />
                    <SelectInput
                      placeholder={singleQuestion.allotedMetric}
                      data={allotedMetricsData}
                      value="value"
                      handleSelect={(e) => handleSelect(e)}
                    />
                    <Input
                      bgColor="bg-white"
                      name="allotedTime"
                      label="Alloted Time"
                      placeholder="Enter alloted time"
                      type="number"
                      width="w-full"
                      onChange={() => ({})}
                      value={singleQuestion.allotedTime}
                      height="h-10 rounded-md mb-5"
                    />
                    <Input
                      bgColor="bg-white"
                      name="marks"
                      label="Marks Awarded"
                      placeholder="Enter Mark for this question"
                      type="number"
                      value={singleQuestion.marksAwarded}
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
                        {singleQuestion.file
                          ? 'Change Photo'
                          : 'Upload a photo'}
                      </div>
                    </label>
                  </div>
                  <Button
                    type="button"
                    label="Edit question"
                    width="w-fit"
                    buttonStyle="custom"
                    onClick={()=> editQuestion(singleQuestion)}
                    height="h-10"
                    customClasses="bg-base text-white rounded-[12px] self-end"
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
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
            <div className="flex items-center justify-between w-full">
              <Header text="New question" textColor="self-start" />
              <Button
                type="button"
                label="Save question"
                width="w-fit"
                buttonStyle="custom"
                onClick={handleSubmit}
                height="h-10"
                customClasses="bg-base text-white rounded-[12px] self-end"
              />
            </div>
            <SingleQuestion
              value={quizQuestion?.questionText}
              onchange={(e) => handleChangeQuestion(e.target.value)}
              questionIndex={3}
              ref={textAreaRefs}
            />
            <Choices
              quizQuestion={quizQuestion}
              setQuizQuestion={setQuizQuestion}
              singleQuestion={quizQuestion}
              questionIndex={3}
            />
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormControlLabel
                control={
                  <InputSwitch
                    defaultChecked
                    onChange={handleSwitchMultipleSelect}
                    checked={quizQuestion.isMultipleSelect}
                  />
                }
                label="Multiselect"
              />
              <SelectInput
                placeholder="Select Alloted Metrics"
                data={allotedMetricsData}
                value="value"
                handleSelect={(e) => handleSelect(e)}
              />
              <Input
                bgColor="bg-white"
                name="allotedTime"
                label="Alloted Time"
                placeholder="Enter alloted time"
                type="number"
                value={quizQuestion.allotedTime}
                width="w-full"
                onChange={(e) => handleChangeAllotedTime(e.target.value)}
                height="h-10 rounded-md mb-5"
              />
              <Input
                bgColor="bg-white"
                name="marks"
                label="Marks Awarded"
                placeholder="Enter Mark for this question"
                type="number"
                value={quizQuestion.marksAwarded}
                width="w-full"
                onChange={(e) => handleChangeMarksAwared(e.target.value)}
                height="h-10 rounded-md mb-5"
              />
            </div>
            <label
              htmlFor="profile-pic"
              className="flex flex-col mt-10 items-center justify-center gap-4 w-full self-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full border-[3px] border-dashed border-brand-gray-700 flex items-center justify-center">
                <input
                  id="profile-pic"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                />
                <span className="w-[90%] h-[90%] bg-brand-gray-100 flex items-center justify-center rounded-full">
                  {quizQuestion.file ? (
                    <img
                      src={quizQuestion.file}
                      alt="image failed"
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    <FaUserLarge className="text-brand-gray-400 w-1/2 h-1/2" />
                  )}
                </span>
                <div className="absolute bottom-1 bg-white p-0.5 rounded-full right-1 cursor-pointer">
                  <HiPlusCircle className="text-3xl text-brand-blue-400" />
                </div>
              </div>
              <div className="bg-blue-500 w-fit text-white px-4 py-2 rounded cursor-pointer">
                {quizQuestion.file ? 'Change image' : 'Attach an image'}
              </div>
            </label>
          </div>
        </CommandModal>
      </div>
    </div>
  )
}

export default page
