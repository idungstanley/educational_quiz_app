import React from 'react'
import { ButtonProps } from '@/app/types'
import { cl } from '@/app/utils'
import { ClipLoader } from 'react-spinners'

function Button({
  buttonStyle,
  onClick,
  loading = false,
  label,
  icon,
  width = 'w-auto',
  height = 'h-10',
  padding = 'px-4 py-2',
  disabled = false,
  iconPosition = 'left',
  ringOnFocus = false,
  labelSize = 'lg:text-[16px] text-[14px]',
  roundedLeft = false,
  roundedRight = false,
  borderLeft = true,
  borderRight = true,
  value,
  bgColor,
  type = 'button',
  customClasses,
  loaderColor = 'white',
}: ButtonProps) {
  let buttonClassName
  let hoverBackgroundColor

  if (buttonStyle === 'primary') {
    hoverBackgroundColor = 'hover:bg-primary-700'
    buttonClassName =
      'border border-transparent shadow-sm text-sm font-medium text-white bg-primary-600 focus:outline-none'
  } else if (buttonStyle === 'secondary') {
    hoverBackgroundColor = 'hover:bg-primary-200'
    buttonClassName =
      'border border-transparent text-sm font-medium text-primary-700 bg-primary-100 focus:outline-none'
  } else if (buttonStyle === 'danger') {
    hoverBackgroundColor = 'hover:bg-red-700'
    buttonClassName =
      'border border-transparent shadow-sm text-sm font-medium text-white bg-red-600 focus:ring-red-500'
  } else if (buttonStyle === 'white') {
    hoverBackgroundColor = 'hover:bg-gray-50'
    buttonClassName =
      'border border-gray-300 shadow-sm text-sm font-medium text-primary-700 bg-white focus:outline-none'
  } else if (buttonStyle === 'custom') {
    hoverBackgroundColor = `${customClasses}`
    buttonClassName = 'font-medium  focus:outline-none'
  }
  if (ringOnFocus === true) {
    // What about danger which already have a ring?
    buttonClassName = `${buttonClassName} focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-primary-600`
  }

  if (roundedLeft) {
    buttonClassName = `${buttonClassName} rounded-l-md`
  }

  if (roundedRight) {
    buttonClassName = `${buttonClassName} rounded-r-md`
  }

  if (!borderLeft) {
    buttonClassName = `${buttonClassName} border-l-0`
  }

  if (!borderRight) {
    buttonClassName = `${buttonClassName} border-r-0`
  }

  return (
    <button
      value={value}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={cl(
        disabled
          ? ('opacity-50 bg-gray-200 text-gray-600 rounded-full' as string)
          : (hoverBackgroundColor as string),
        `${buttonClassName} ${width} ${height} ${padding} inline-flex items-center justify-center`,
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-row items-center gap-2">
          {icon && iconPosition === 'center' && <span>{icon}</span>}
          {icon && (iconPosition === 'left' || iconPosition === null) && (
            <span className="mr-1">{icon}</span>
          )}
          {label && <span className={`${labelSize} text-nowrap`}>{label}</span>}
          {icon && iconPosition === 'right' && (
            <span className="ml-1">{icon}</span>
          )}
        </div>
        {loading && (
          <div className="items-center justify-end flex">
            <ClipLoader
              color={loaderColor}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </button>
  )
}

export default Button
