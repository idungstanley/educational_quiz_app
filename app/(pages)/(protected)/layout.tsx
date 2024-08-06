'use client'
import { useGetSelf } from '@/app/features/auth/authService'
import { getSession } from 'next-auth/react'
import React, { ReactNode, useEffect } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  useGetSelf()

  useEffect(() => {
    const storeToken = async () => {
      const session = await getSession()
      const token = (session?.user as { token: { token: string } })?.token
      if (token) {
        localStorage.setItem('token', JSON.stringify(token?.token))
      }
    }

    storeToken()
  }, [])

  return (
    <div className="bg-light lg:h-full w-full flex justify-center pt-[70px]">
      <div className="flex lg:w-3/4 w-full p-4 lg:p-10">{children}</div>
    </div>
  )
}

export default layout
