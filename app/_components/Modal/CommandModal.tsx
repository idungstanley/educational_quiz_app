'use client'
import { CommandProps } from '@/app/types'
import React, { useRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useClickAway } from 'react-use'

function CommandModal({
  commandVisible,
  children,
  setPopup,
  showCloseIcon = false,
  styling = 'top-14',
  width = "w-[350px] lg:w-[500px]",
  handleAction
}: CommandProps) {
  const dropdownRef = useRef(null)

  useClickAway(dropdownRef, () => {
    if(handleAction)handleAction()
    setPopup(false);
  })

  const handleClose = () => {
    setPopup(false)
  }

  if (!commandVisible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full mb-6 bg-black bg-opacity-50 ${styling} backdrop-blur-sm`}
    >
      <div
        className={`flex flex-col bg-white p-4 relative rounded-[15px] items-start ${width} max-h-[700px] overflow-auto`}
        ref={dropdownRef}
      >
        {showCloseIcon && (
          <span
            className="absolute top-3 right-3 text-xl hover:text-2xl cursor-pointer hover:rotate-270 transition-all ease-in-out text-white"
            onClick={handleClose}
          >
            <IoMdClose />
          </span>
        )}
        <div className="h-full lg:py-6 p-2 rounded w-full">
          <section className="flex flex-col gap-4 items-start  justify-center h-full w-full header">
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}

export default CommandModal
