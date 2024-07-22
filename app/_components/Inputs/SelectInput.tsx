/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';

export function SelectInput({
  data,
  value,
  placeholder,
  showPlaceholder = true,
  customClasses = 'h-10 w-[70%]',
  handleSelect
}: {
  placeholder?: string;
  data: any[];
  showPlaceholder?: boolean;
  value: string;
  customClasses?: string;
  handleSelect?: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className={`text-base cursor-pointer relative min-w-[150px]  pt-0 items-center text-white ${customClasses}`}>
      <select
        required
        id="countries"
        className="bg-white border  w-full rounded-lg p-2 border-[#2C3034] outline-none focus:outline-none !text-gray-400"
        defaultValue={placeholder}
        onChange={handleSelect}
      >
        {showPlaceholder && (
          <option value="" className="">
            {placeholder}
          </option>
        )}
        {data.map((item, index) => (
          <option key={index} value={item[value]}>
            {item[value].toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
