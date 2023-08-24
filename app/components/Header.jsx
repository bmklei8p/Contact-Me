"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    //  desktop header
    <div className="flex flex-row bg-headerBackground text-white py-4 px-4 justify-between md:px-20">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex flex-row items-center align-middle gap-2">
            <MdEmail size={30} />
            <h2 className="text-2xl font-semibold">Contact Me</h2>
            </div>
          </Link>
      </div>
      <div className="flex flex-row gap-4">
        {session?.user ? (
          <button type="button" onClick={() => signOut()} className="min-w-fit">
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
                  className="min-w-fit px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  <p>Sign In</p>
                </button>
              ))}
          </>
        )}
        <button
          className="sidebar-link-block"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FiMoon size={25} /> : <FiSun size={25} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
