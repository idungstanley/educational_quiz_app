'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import { navItems } from '@/app/constants';
import Hamburger from '../Menu/Hamburger';
import { useRouter } from 'next/navigation';
import Button from '../Buttons/Button';

const MobileNav = ({
  isOpen,
  setOpen,
  headerConfigPath
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerConfigPath: boolean;
}) => {
  const ref = useRef(null);
  const router = useRouter();

  useClickAway(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className={`lg:hidden z-[50] flex ${
        isOpen ? 'bg-black bg-opacity-70 fixed bottom-0 left-0 right-0 w-full h-full' : null
      }`}
    >
      <Hamburger toggled={isOpen} size={30} toggle={setOpen} color={headerConfigPath ? 'white' : 'black'} />
      <div
        className={`flex flex-col items-center px-10 justify-start w-[80%] h-screen pt-20 top-[0px] z-[30] bg-white  fixed ${
          isOpen ? 'left-0' : '-left-[100%]'
        }`}
        style={{ transition: 'all 0.4s ease-in-out' }}
      >
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center">
          <Button
            type="button"
            label="Sign up"
            width="w-full"
            buttonStyle="custom"
            height="h-[40px]"
            roundedLeft={false}
            roundedRight={false}
            labelSize="text-[18px] font-lg text-white"
            customClasses="bg-base rounded-full"
            onClick={() => router.push('/auth/signup')}
          />
          <Button
            label="Login"
            width="w-full"
            buttonStyle="custom"
            height="h-[40px]"
            roundedLeft={false}
            roundedRight={false}
            labelSize="text-[18px] font-lg text-gray-700"
            customClasses="bg-transparent border border-base hover:border-black rounded-full"
            onClick={() => router.push('/auth/login')}
          />
        </div>
        {isOpen &&
          navItems.map((route, idx) => {
            return (
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10
                }}
                key={route.name}
                className="w-full list-none"
              >
                <a
                  onClick={() => setOpen((prev) => !prev)}
                  className={'flex items-center justify-start text-[16px] w-full text-black py-4'}
                  href={route.route}
                >
                  <span className="flex gap-1 text-[16px] whitespace-nowrap">{route.name}</span>
                </a>
              </motion.li>
            );
          })}
        <div
          className={`fixed bottom-0 h-[90px] p-4 w-[80%] gap-8 border-t border-gray-200 shadow-sm flex items-center justify-center ${
            isOpen ? 'left-0' : '-left-full'
          }`}
          style={{ transition: 'all 0.4s ease-in-out' }}
        >
          {/* <TalstrikeLogoWithText color={headerConfigPath ? 'white' : 'black'} width="158" height="50" /> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
