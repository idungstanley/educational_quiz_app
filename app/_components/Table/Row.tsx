import React from 'react'

interface RowItem {
  name: string
  title: string
  duration: string
  totalTimeAllowed: string
  passMark: number
  score: number
  totalQuestions: number
}

function Row({ index, item }: { index: number; item: RowItem }) {
  return (
    <tr className="font-serif">
      <td className="p-2 text-left whitespace-nowrap">{index + 1}</td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.name}
      </td>
      <td className="p-2 text-left whitespace-nowrap">{item.title}</td>
      <td className="p-2 text-left whitespace-nowrap">{item.duration}</td>
      <td className="p-2 text-left whitespace-nowrap">
        {item.totalTimeAllowed}
      </td>
      <td className="p-2 text-left whitespace-nowrap">{item.passMark}</td>
      <td className="p-2 text-left whitespace-nowrap">{item.score}</td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.totalQuestions}
      </td>
    </tr>
  )
}

export default Row
