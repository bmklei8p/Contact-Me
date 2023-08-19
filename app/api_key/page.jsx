"use client";
import { useSession } from "next-auth/react";
import SignUpNeeded from "./components/SignUpNeeded";
import GenerateAPI_KEY from "./components/GenerateAPI_KEY";
import { useUserContext } from "./components/MongoUserProvider";

const page = () => {
  const { data: session } = useSession();
  const mongoUser = useUserContext();
  console.log({"mongoUser": mongoUser})
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
                <p>already have an api key</p>
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

export default page;
