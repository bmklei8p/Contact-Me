"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

import Link from "next/link";
import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import { BiSolidBarChartAlt2, BiSolidCalendar } from "react-icons/bi";
import { SlLogin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { isLoggedIn, setIsLoggedIn } = useState(false);

  return (
    //  desktop header
    <div className="header-container bg-headerBackground z-50">
      <div className="flex flex-row text-white py-4 px-4 justify-between w-full lg:w-[70%]">
        <Link href="/">
          <div className="flex flex-row items-center align-middle gap-4">
            <MdEmail size={30} />
            <h2 className="text-2xl font-semibold">Contact Me</h2>
          </div>
        </Link>
        <div className="flex flex-row gap-4">
        {isLoggedIn ? (
          <Link href="/dashboard">
            <div className="text-xl">Dashboard</div>
          </Link>
        ) : (
          <Link href="/login">
            <div className="text-xl">Login</div>
          </Link>
        )}
        <button
          className="sidebar-link-block"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FiMoon size={25} /> : <FiSun size={25} />}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
