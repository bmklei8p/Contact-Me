"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { MdEmail } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { MdVpnKey } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const navLinks = [
    {
      title: "Documentation",
      href: "/docs",
      icon: <HiDocumentText />,
    },
    {
      title: "API Key",
      href: "/api_key",
      icon: <MdVpnKey />,
    },
  ];

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      // console.log(res)
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggleSidebar(false);
      }
    };

    if (toggleSidebar) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggleSidebar]);

  return (
    <>
      <div className="flex flex-row bg-headerBackground text-white py-4 px-4 justify-between lg:px-20">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex flex-row items-center align-middle gap-2">
              <MdEmail size={30} />
              <h2 className="text-2xl font-semibold">Contact Me</h2>
            </div>
          </Link>
        </div>
        <div className="flex-row gap-x-4 flex items-center align-middle">
          <div className="hidden lg:flex lg:flex-row lg:gap-x-4 items-center text-xl">
            {navLinks.map((link) => (
              <Link
                className="w-full"
                key={link.href}
                href={link.href}
                onClick={() => setShowSideBar(false)}
              >
                <div className=" p-1 hover:bg-white hover:text-black rounded-lg px-2">
                  {link.title}
                </div>
              </Link>
            ))}
            {session?.user ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="min-w-fit"
              >
                <p className="text-lg">Sign Out</p>
              </button>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="flex flex-row gap-x-3 min-w-fit px-4 py-2 text-lg font-medium text-black bg-white border border-transparent rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      <FcGoogle size={25} />
                      <p>Sign in with {provider.name}</p>
                    </button>
                  ))}
              </>
            )}
          </div>
          <div>
            <button
              className="sidebar-link-block"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <FiMoon size={25} /> : <FiSun size={25} />}
            </button>
          </div>
          <div>
            <button>
              <RiMenuFill
                className="block lg:hidden"
                size={30}
                onClick={() => setShowSideBar((prev) => !prev)}
              />
            </button>
          </div>
        </div>
      </div>
      {showSideBar && (
        <div className="h-screen absolute w-[200px] z-50 p-4 bg-headerBackground flex flex-col text-white text-lg text-left gap-2 items-start">
          {navLinks.map((link) => (
            <Link
              className="w-full"
              key={link.href}
              href={link.href}
              onClick={() => setShowSideBar(false)}
            >
              <div className="flex flex-row items-center text-center p-1 hover:bg-white hover:text-black rounded-lg px-2">
                <div className="pr-2">
                  {link.icon && React.cloneElement(link.icon, { size: 25 })}
                  {link.img && (
                    <Image
                      src={link.img}
                      alt="f1-logo"
                      width={25}
                      height={25}
                    />
                  )}
                </div>
                {link.title}
              </div>
            </Link>
          ))}
          {session?.user ? (
            <div className="flex justify-center items-center align-middle w-full mt-12">
              <button
                type="button"
                onClick={() => signOut()}
                className="min-w-fit"
              >
                <p className="text-lg">Sign Out</p>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full mt-12">
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="min-w-fit px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    <p>Sign In</p>
                  </button>
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
