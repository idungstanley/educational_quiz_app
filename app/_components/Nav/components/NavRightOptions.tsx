import React from 'react'
import Button from '../../Buttons/Button'
import { useAppSelector } from '@/app/redux/store'
import { SignOut } from '@/app/lib/signOut'

const NavRightOptions = () => {
  const { self } = useAppSelector((state) => state.auth)
  const handleSignout = async () => {
    await SignOut()
    if (window) window.location.reload()
  }
  return (
    <div className="lg:flex items-center gap-6 text-black hidden">
      <p className="text-nowrap capitalize">Welcome, {self?.user.fullName}</p>
      <Button
        type="submit"
        height="h-[35px]"
        buttonStyle="custom"
        customClasses="text-white bg-base rounded-lg"
        label="logout"
        onClick={handleSignout}
      />
    </div>
  )
}

export default NavRightOptions
