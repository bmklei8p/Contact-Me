"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import User from "@/models/user";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { FiSun, FiMoon } from "react-icons/fi";

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
    <div className="flex flex-row bg-headerBackground text-white py-4 px-4 justify-end md:pr-20">
      <div className="flex flex-row gap-4">
        {session?.user ? (
          <Link href="/dashboard">
            <div className="text-xl">Dashboard</div>
          </Link>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
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
