import { SearchInputProps } from '@/app/types';
import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchWithIcon = ({
  onChange,
  value,
  textColor = 'placeholder:text-white text-white',
  borderColor = 'border-white',
  placeholderColor="placeholder:text-white",
  bgColor = 'bg-base',
  placeholder,
}: SearchInputProps) => {
  return (
    <div className={`flex relative h-8 items-center w-[200px] lg:w-full lg:min-w-[400px] rounded-md ${bgColor} ${textColor}`}>
      <input
        id="search-input"
        name="search-input"
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`block w-full bg-transparent pl-2 pr-10 h-6 sm:text-sm outline-none focus:outline-none border-none ${placeholderColor}`}
      />
      <span className={`absolute right-2  border-l pl-2 my-2 ${borderColor}`}>
        <RiSearchLine />
      </span>
    </div>
  );
};

export default SearchWithIcon;
