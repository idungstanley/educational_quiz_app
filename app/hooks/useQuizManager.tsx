import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Option } from '../types'
import { Question } from '../features/quiz/quiz.interface';

const useQuizManager = (initialQuestion: Question) => {
  const [quizQuestion, setQuizQuestion] = useState<Question>(initialQuestion)
  const endOfListRef = useRef<HTMLDivElement | null>(null)
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  const addQuestionOption = () => {
    const newOption: Option = { text: 'New option', isCorrect: false }
    setQuizQuestion({
      ...quizQuestion,
      options: [...quizQuestion.options, newOption],
    })
  }

  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [quizQuestion])

  const handleChangeQuestion = (value: string) => {
    setQuizQuestion({ ...quizQuestion, questionText: value })
  }

  const handleSwitchMultipleSelect = () => {
    setQuizQuestion({
      ...quizQuestion,
      isMultipleSelect: !quizQuestion.isMultipleSelect,
    })
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuizQuestion({ ...quizQuestion, allotedMetric: e.target.value })
  }

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

  const handleChangeAllotedTime = (value: string) => {
    setQuizQuestion({ ...quizQuestion, allotedTime: Number(value) })
  }
  const handleChangeMarksAwared = (value: string) => {
    setQuizQuestion({ ...quizQuestion, marksAwarded: Number(value) })
  }

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      if (!file.type.startsWith('image/')) {
        setQuizQuestion({ ...quizQuestion, file: null })
        return
      }

      if (file.size > 2 * 1024 * 1024) {
        setQuizQuestion({ ...quizQuestion, file: null })
        return
      }
      setQuizQuestion({ ...quizQuestion, file: URL.createObjectURL(file) })
    }
  }

  return {
    quizQuestion,
    addQuestionOption,
    handleChangeQuestion,
    handleSwitchMultipleSelect,
    handleSelect,
    endOfListRef,
    textAreaRef,
    setQuizQuestion,
    handleChangeOption,
    handleSelectAnswer,
    handleChangeAllotedTime,
    handleChangeMarksAwared,
    handleImageUpload,
  }
}

export default useQuizManager
