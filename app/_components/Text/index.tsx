import React from 'react'

const Text = ({
  text,
  textColor = 'text-gray-800',
  textSize = 'text-[14px] lg:text-[16px]',
  breakText,
  fontWeight = 'font-light',
  textPosition
}: {
  text: string
  textColor?: string
  textSize?: string
  breakText?: string
    fontWeight?: string
  textPosition?: string
}) => {
  return (
    <h2 className={`${textColor} ${textSize} ${fontWeight} ${textPosition}`}>
      {text} <br /> {breakText}
    </h2>
  )
}

export default Text
