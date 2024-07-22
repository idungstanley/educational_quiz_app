import { InputDataTypes } from '@/app/types'
import React from 'react'

function Input({
  label,
  placeholder,
  hint,
  cornerHint,
  required,
  name,
  type = 'text',
  autoComplete,
  value,
  onChange,
  leadingIcon,
  trailingIcon,
  trailingClick,
  bgColor,
  borderRadius,
  height = 'h-12',
  classes,
  onBlur,
  styles,
  width = 'w-full',
  labelClasses,
  isError,
  errorMessage,
}: InputDataTypes) {
  const handleTrailingIconClick = () => {
    if (trailingClick) {
      trailingClick()
    }
  }

  return (
    <div className=" w-full lg:text-[16px] text-[14px]">
      <div className={`relative rounded-[16px] ${bgColor}`}>
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-1.5 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        {label && (
          <div className="flex justify-between">
            <label htmlFor={name} className={`z-10 ${labelClasses}`}>
              {label} {required && <span className="ml-1 text-red-500">*</span>}
            </label>
            {cornerHint && <span className="text-gray-500">{cornerHint}</span>}
          </div>
        )}
        <div
          className={`flex flex-col text-[#9E9E9E] gap-1 items-start justify-center ${width} appearance-none block ${
            leadingIcon && 'pl-8'
          } ${name == 'phoneNumber' && 'pl-[110px]'} ${
            trailingIcon && 'pr-10'
          } ${trailingIcon && 'pr-10'} 
          ${bgColor} ${height} border relative border-gray-400 focus:border-base focus:outline-base p-2`}
        >
          <input
            maxLength={2000}
            type={type}
            id={name}
            required={required}
            name={name}
            autoComplete={autoComplete}
            className={`${
              borderRadius
                ? borderRadius
                : name === 'search' && !borderRadius
                ? 'rounded-md py-0.5'
                : ''
            } placeholder-[#676767] text-[#676767] bg-transparent outline-none focus:outline-none w-full ${classes}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            style={{ ...styles }}
          />
        </div>
        {trailingIcon && (
          <div
            className="absolute inset-y-0 right-0 flex top-4 items-center pr-3 cursor-pointer"
            onClick={handleTrailingIconClick}
          >
            {trailingIcon}
          </div>
        )}
      </div>
      {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
      {isError && (
        <p className="text-brand-warning text-[15px]">{errorMessage}</p>
      )}
    </div>
  )
}

export default Input
