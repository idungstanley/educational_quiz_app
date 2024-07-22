import React from 'react';

const Text = ({
  text,
  textColor = 'text-gray-800',
  textSize = 'text-[14px] lg:text-[16px]',
  breakText
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  breakText?: string;
}) => {
  return (
    <h2 className={`${textColor} ${textSize} font-light`}>
      {text} <br /> {breakText}
    </h2>
  );
};

export default Text;
