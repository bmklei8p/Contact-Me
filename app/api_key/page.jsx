"use client";
import { useSession } from "next-auth/react";
import SignUpNeeded from "./components/SignUpNeeded";
import GenerateAPI_KEY from "./components/GenerateAPI_KEY";
import DisplayAPI_KEY from "./components/DisplayAPI_KEY";
import { useState, useEffect } from "react";
import Image from "next/image";
import stockKey from "../../public/stock_key.png";

const API_KEY_PAGE = () => {
  const { data: session } = useSession();
  const [apiKey, setApiKey] = useState();

  useEffect(() => {
    const getApiKey = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/mongoUser/${session.user.email}`,
        { next: { cache: "no-store" } }
      );
      const data = await res.json();
      setApiKey(data[0].API_KEY);
    };
    if (session) {
      getApiKey();
    }
  }, [session]);

  return (
    <div className="w-full h-5/6 overflow-hidden flex flex-col-reverse  md:flex-row-reverse">
      <div className="w-full">
        <Image
          src={stockKey}
          alt="key"
          width={1000}
          height={1000}
          className="-z-10"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[70%] flex flex-col items-center">
          <h1 className="text-5xl pt-20 font-bold pb-5 border-b-2 border-gray-400 w-full text-center">
            API Key
          </h1>
          {session?.user ? (
            true ? (
              <>
                <GenerateAPI_KEY email={session.user.email} />
                <DisplayAPI_KEY API_KEY={apiKey} />
                <div className="flex flex-col text-left mt-16 w-full">
                  <h3 className="text-2xl">Considerations:</h3>
                  <ul>
                    <li className="text-lg">
                      Your API Key is unique to you and should not be shared
                      with anyone.
                    </li>
                    <li className="text-lg">
                      Your API Key is used to authenticate your requests to the
                      API.
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <GenerateAPI_KEY email={session.user.email} />
            )
          ) : (
            <SignUpNeeded />
          )}
        </div>
      </div>
    </div>
  );
};

export default API_KEY_PAGE;
