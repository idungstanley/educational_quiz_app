'use client'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import DesktopNav from './DesktopNav'
import { usePathname, useRouter } from 'next/navigation'
import MobileNav from './MobileNav'
import { authRoutes, publicRoutes, showNavItem } from '@/app/constants/routes'
import NavRightOptions from './components/NavRightOptions'
import SearchWithIcon from '../Inputs/SearchInput'
import { navItems } from '@/app/constants'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const isPublicRoute = publicRoutes.includes(pathname)
  const isAuthRoute = authRoutes.includes(pathname)
  const isAllRoute = showNavItem.includes(pathname)

  const config = useMemo(
    () => [
      {
        active:
          publicRoutes.includes(pathname) || authRoutes.includes(pathname),
        element: <DesktopNav />,
      },
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
    <nav className="z-[999] w-full h-[50px] border-b text-black flex items-center justify-around bg-white border-gray-200 flex-shrink-0 fixed">
      <div className="flex items-center w-full px-4 justify-around lg:px-14">
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="flex items-center justify-center w-full lg:justify-start text-[30px]">
              <Image src="/quiz.png" alt="logo" width={50} height={50} />
            </div>
          </Link>
          {!isAllRoute && (
            <SearchWithIcon
              value=""
              placeholder="Search"
              onChange={() => ({})}
            />
          )}
        </div>
        {!isAllRoute && (
          <div className="lg:flex items-start gap-6 text-black ml-14 hidden">
            {navItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item.route)}
                className={`cursor-pointer h-[50px] w-[100px] text-nowrap flex flex-col justify-center items-center gap-1 ${
                  pathname === item.route ? 'border-base border-b-2' : ''
                }`}
              >
                <item.image />
                <p className="text-[14px]">{item.name}</p>
              </div>
            ))}
          </div>
        )}
        <MobileNav
          isOpen={menuOpen}
          setOpen={setMenuOpen}
          headerConfigPath={!isAllRoute}
        />
        {headerData ? headerData.element : null}
      </div>
    </nav>
  )
}

export default Navbar
