'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <div className="bg-light w-full h-full flex flex-grow flex-col items-center">
      <div className="flex items-center justify-center lg:h-full h-[calc(100vh-70px)] w-full lg:px-40 overflow-hidden">
        <div className="flex w-full h-full lg:h-[700px] items-center flex-col-reverse lg:flex-row lg:justify-center justify-end bg-white lg:overflow-auto overflow-hidden rounded-none lg:rounded-[16px] shadow-md shadow-gray-600">
          <div className="w-full lg:basis-1/2 p-4 lg:p-14 basis-0 bg-white flex items-center justify-center">{children}</div>
          <div className="lg:basis-1/2 basis-0 bg-gray-200 h-full flex w-full backdrop-blur-lg bg-opacity-50">
            <div className="h-full w-full flex items-center justify-center flex-grow">
              <img
                src="/quiz.png"
                alt="auth base"
                className="h-[50%] w-[50%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
