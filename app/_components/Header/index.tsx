import React from 'react';

const Header = ({
  text,
  textSize = 'lg:text-[32px] text-[16px]',
  position,
  textColor = 'text-gray-800',
  textClasses
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  position?: string;
  textClasses?: string;
}) => {
  return <h6 className={`${textSize} ${textColor} ${position} ${textClasses} font-bold`}>{text}</h6>;
};

export default Header;
