'use client'
import Link from 'next/link'
import React from 'react'
import Button from '../Buttons/Button'

const DesktopNav = () => {
  return (
    <section className="hidden w-full font-normal lg:flex">
      <div className="flex items-center justify-between w-full px-4 py-3">
        <div className="flex items-center justify-end w-full gap-4">
          <Link href="/auth/signup">
            <Button
              label="Sign up"
              width="w-[100px]"
              buttonStyle="custom"
              height="h-[35px]"
              labelSize="text-[15px] font-lg"
              customClasses="hover:bg-white hover:border-black hover:text-black text-white cursor-pointer bg-base border rounded-full"
            />
          </Link>
          <Link href="/auth/login">
            <Button
              label="Login"
              width="w-[100px]"
              buttonStyle="custom"
              height="h-[35px]"
              labelSize="text-[15px] font-lg rounded-full"
              customClasses="hover:bg-white text-black hover:border-black hover:text-black cursor-pointer bg-white border border-base rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DesktopNav
