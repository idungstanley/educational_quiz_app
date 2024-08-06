import React from 'react'

export interface RowItem {
    name: string;
    duration: string;
    score: number;
    passMark: number;
    title: string;
    totalQuestions: number;
    totalTimeAllowed: string;
    isPassed: boolean;
    isComplete: boolean;
}

function Row({ index, item }: { index: number; item: RowItem }) {
  return (
    <tr className="font-serif">
      <td className="p-2 text-left whitespace-nowrap">{index + 1}</td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.name}
      </td>
      <td className="p-2 text-left whitespace-nowrap">{item.title}</td>
      <td className="p-2 text-left whitespace-nowrap">{item.passMark}</td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.duration}
      </td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.totalQuestions}
      </td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.isComplete}
      </td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.score}
      </td>
      <td className="p-2 text-left whitespace-nowrap capitalize">
        {item.isPassed}
      </td>
    </tr>
  )
}

export default Row
