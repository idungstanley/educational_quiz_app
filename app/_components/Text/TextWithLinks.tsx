import { TextWithLinksProps } from '@/app/types';
import Link from 'next/link';
import React from 'react';

const TextWithLinks = ({ linkRoute, linkLabel, text, textPosition = 'justify-center' }: TextWithLinksProps) => {
  return (
    <div className={`flex items-center gap-2 py-4 w-full ${textPosition}`}>
      <p className="text-black lg:text-[16px] text-[14px] text-center">{text}</p>
      <Link href={linkRoute} className="font-normal text-base">
        {linkLabel}
      </Link>
    </div>
  );
};

export default TextWithLinks;
