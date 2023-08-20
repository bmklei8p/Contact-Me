"use client";
import { useSession } from "next-auth/react";
import SignUpNeeded from "./components/SignUpNeeded";
import GenerateAPI_KEY from "./components/GenerateAPI_KEY";
import { useUserContext } from "./components/MongoUserProvider";
import DisplayAPI_KEY from "./components/DisplayAPI_KEY";

const API_KEY_PAGE = () => {
  const { data: session } = useSession();
  const mongoUser = useUserContext();
  console.log({ mongoUser: mongoUser });
  return (
    <div className="w-full h-5/6 overflow-hidden flex flex-row">
      <div className="w-full flex justify-center">
        <div className="w-[70%] flex flex-col items-center">
          <h1 className="text-5xl pt-20 font-bold pb-5 border-b-2 border-gray-400 w-full text-center">
            API Key
          </h1>
          {session?.user ? (
            true ? (
              <>
                <GenerateAPI_KEY email={session.user.email} />
                <DisplayAPI_KEY />
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
