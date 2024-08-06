import React from 'react'

const CountdownTimer = ({ timeLeft, initialTime}: { timeLeft: number; initialTime: number }) => {
  const getColor = () => {
    if (timeLeft <= 10) {
      return 'text-red-500'
    }
    return 'text-green-500'
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-[250px] h-fit shadow-gray-300">
      <div className="relative w-24 h-24">
        <svg
          className="absolute top-0 left-0 w-full h-full transform rotate-90"
          viewBox="0 0 36 36"
        >
          <path
            className="text-gray-300 stroke-current"
            strokeWidth="3.8"
            fill="none"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`stroke-current ${getColor()}`}
            strokeWidth="3.8"
            strokeDasharray={`${(timeLeft / initialTime) * 100}, 100`}
            fill="none"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <span className={`text-2xl ${getColor()}`}>{timeLeft}s</span>
        </div>
      </div>
      <p className="mt-2 text-lg text-gray-700">Timer Remaining:</p>
    </div>
  )
}

export default CountdownTimer
