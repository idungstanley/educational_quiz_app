import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GrAnnounce } from 'react-icons/gr';
import Button from '../../Buttons/Button';

const NavRightOptions = () => {
  return (
    <div className="flex items-center gap-6 text-white text-[25px]">
      <Button buttonStyle="custom" customClasses="text-white bg-brand-blue-600" label="Show Case" icon={<FiPlus />} />
      <HiOutlineBriefcase />
      <GrAnnounce />
      <IoMdNotificationsOutline />
    </div>
  );
};

export default NavRightOptions;
