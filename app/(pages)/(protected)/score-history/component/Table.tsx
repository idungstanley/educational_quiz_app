import TableHeader from '@/app/_components/Table/TableHeader'
import React from 'react'
import Row from './Row'
import { useAppSelector } from '@/app/redux/store'
import Header from '@/app/_components/Header'

const header = [
  { id: 'id', name: 's/n' },
  { id: 'full_name', name: 'Name' },
  { id: 'title', name: 'Title' },
  { id: 'pass_mark', name: 'Pass Mark' },
  { id: 'quiz_time', name: 'Quiz Time' },
  { id: 'total_question', name: 'Total Question' },
  { id: 'is_completed', name: 'Completed' },
  { id: 'score', name: 'Score' },
  { id: 'is_passed', name: 'Status' },
]

const Table = () => {
  const { quizHistroy } = useAppSelector((state) => state.quiz)
  return (
    <div className="p-4 h-full">
      {quizHistroy.length !== 0 ? (
        <table className="text-white h-full w-full" id="table">
          <TableHeader headers={header} />
          {quizHistroy?.map(
            (item, index) =>
              item !== null && <Row index={index} item={item} key={index} />,
          )}
        </table>
      ) : (
        <div className="flex items-center justify-center w-full">
          <Header
            text="No Score History yet, try taking a test first and check back after!!"
            textColor="text-white" textClasses='text-center'
          />
        </div>
      )}
    </div>
  )
}

export default Table
