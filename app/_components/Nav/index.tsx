'use client'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import DesktopNav from './DesktopNav'
import { usePathname, useRouter } from 'next/navigation'
import MobileNav from './MobileNav'
import { authRoutes, publicRoutes } from '@/app/constants/routes'
import NavRightOptions from './components/NavRightOptions'
import { IoChevronBack } from 'react-icons/io5'
import SearchWithIcon from '../Inputs/SearchInput'
import { navItems } from '@/app/constants';
import { MdQuiz } from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const isPublicRoute = publicRoutes.includes(pathname)
  const isAuthRoute = authRoutes.includes(pathname)

  const config = useMemo(
    () => [
      { active: publicRoutes.includes(pathname), element: <DesktopNav /> },
      { active: authRoutes.includes(pathname), element: <></> },
      {
        active:
          !authRoutes.includes(pathname) && !publicRoutes.includes(pathname),
        element: <NavRightOptions />,
      },
    ],
    [pathname],
  )

  const headerData = useMemo(() => config.find((i) => i.active), [config])

  const router = useRouter()
  const handleClick = (item: string) => {
    router.push(item)
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <nav className="z-[999] w-full h-[70px] border-b text-black flex items-center justify-around bg-white border-gray-200">
      <div className="flex items-center w-full px-4 justify-around lg:px-14">
        <Link href="/">
          <div className="flex items-center justify-center w-full lg:justify-start text-[30px]">
            <MdQuiz />
          </div>
        </Link>
        <MobileNav
          isOpen={menuOpen}
          setOpen={setMenuOpen}
          headerConfigPath={!isPublicRoute && !isAuthRoute}
        />
        {(isAuthRoute || isPublicRoute) && (
          <div className="lg:flex items-start gap-6 w-full text-black ml-9 hidden">
            {navItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item.route)}
                className={'cursor-pointer'}
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
        {!isPublicRoute && !isAuthRoute && (
          <SearchWithIcon value="" placeholder="Search" onChange={() => ({})} />
        )}
        {headerData ? headerData.element : null}
      </div>
    </nav>
  )
}

export default Navbar
