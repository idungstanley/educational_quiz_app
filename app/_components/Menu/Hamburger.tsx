import { HamburgerProps } from '@/app/types'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const Hamburger = ({
  toggled,
  color,
  size,
  toggle,
  width,
  height,
  classname,
}: HamburgerProps) => {
  return (
    <div
      onClick={() => toggle((prev) => !prev)}
      className={toggled ? 'z-[999] absolute top-4 flex items-center justify-center w-full' : 'relative'}
    >
      {toggled ? (
        <IoCloseOutline
          className={classname}
          color="black"
          size={size}
          width={width}
          height={height}
        />
      ) : (
        <RxHamburgerMenu
          className={classname}
          color={color}
          size={size}
          width={width}
          height={height}
        />
      )}
    </div>
  )
}

export default Hamburger
