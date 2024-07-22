import { SearchInputProps } from '@/app/types';
import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchWithIcon = ({
  onChange,
  value,
  textColor = 'placeholder:text-brand-gray-100 text-brand-gray-100',
  borderColor = 'border-brand-gray-100',
  placeholderColor="placeholder:text-brand-gray-100",
  bgColor = 'bg-[#082091]',
  placeholder,
  loading = false
}: SearchInputProps) => {
  return (
    <div className={`flex relative items-center w-full rounded-md ${bgColor} ${textColor}`} style={{ maxWidth: '350px' }}>
      <input
        id="search-input"
        name="search-input"
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`block w-full bg-transparent pl-2 pr-10 h-8 sm:text-sm outline-none focus:outline-none border-none ${placeholderColor}`}
      />
      <span className={`absolute right-2  border-l pl-2 my-2 ${borderColor}`}>
        <RiSearchLine />
      </span>
    </div>
  );
};

export default SearchWithIcon;
