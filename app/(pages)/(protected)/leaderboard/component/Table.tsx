import Row from '@/app/_components/Table/Row'
import TableHeader from '@/app/_components/Table/TableHeader'
import { useGetLeaderboard } from '@/app/features/quiz/quizService'
import React from 'react'
import { ClipLoader } from 'react-spinners'

const header = [
  { id: 'id', name: 's/n' },
  { id: 'name', name: 'Name' },
  { id: 'title', name: 'title' },
  { id: 'duration', name: 'Duration' },
  { id: 'totalTimeAllowed', name: 'Total Time Allowed' },
  { id: 'passMark', name: 'Pass Mark' },
  { id: 'score', name: 'Score' },
  { id: 'totalQuestions', name: 'Total Question' },
]

const Table = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetLeaderboard(id)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <ClipLoader />
      </div>
    )
  }

  if (data?.data.length === 0 || !data) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        NO DATA HERE
      </div>
    )
  }

  return (
    <div className="p-4">
      <table className="text-white" id="table">
        <TableHeader headers={header} />
        {data?.data?.map(
          (item, index) =>
            item !== null && <Row index={index} item={item} key={index} />,
        )}
      </table>
    </div>
  )
}

export default Table
