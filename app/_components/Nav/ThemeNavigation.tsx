import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { TiWeatherSunny } from 'react-icons/ti';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const ThemeNavigation = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-full h-9">
      <span className="text-8 bg-brand-gray-700 bg-opacity-20 rounded-full p-1">
        <TiWeatherSunny />
      </span>
      <span className="text-8 p-1">
        <BsMoon />
      </span>
      <span className="text-8 p-1">
        <HiOutlineDesktopComputer />
      </span>
    </div>
  );
};

export default ThemeNavigation;
