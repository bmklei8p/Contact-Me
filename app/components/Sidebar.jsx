'use client'
// import { useState } from "react"
import Link from "next/link"
import React from "react"
import { BiSolidBarChartAlt2, BiSolidCalendar } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import { MdVpnKey } from "react-icons/md";

const Sidebar = () => {
  const navLinks = [{
    title: "Documentation",
    href: '/docs',
    icon: <HiDocumentText />,
  },
  {
    title: "API Key",
    href: '/api-key',
    icon: <MdVpnKey />,
  },
  ]
  return (
      <div className="width-[200px] h-screen p-4 bg-headerBackground z-20">
        <div className="flex flex-col text-white text-lg relative text-left gap-2 items-start">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setShowSideBar(false)}>
              <div className="flex flex-row items-center text-center p-1 w-full hover:bg-white hover:text-black rounded-lg px-2">
                <div className="pr-2">
                  {link.icon && React.cloneElement(link.icon, { size: 25 })}
                  {link.img && <Image src={link.img} alt='f1-logo' width={25} height={25} />}
                </div>
                {link.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Sidebar