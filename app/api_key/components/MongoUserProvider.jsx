"use client";
import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

import { useState, useEffect } from "react";

const MongoUserProvider = ({ children }) => {
  console.log("MongoUserProvider running")
  const [mongoUser, setMongoUser] = useState();
  const { data: session } = useSession();
  console.log("MongoUserProvider session", session)

  useEffect(() => {
    const getMongoUser = async () => {
      if(session) {
        console.log({"Provider": session.user.email})
      }
      if(session){
        console.log("fetching mongoUser")
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/mongoUser/${session.user.email}`,
          { next: { cache: "no-store" } }
        );
        const data = await res.json();
        console.log("data", data)
        setMongoUser(data);
      }
    };
    getMongoUser();
  }, []);

  return (
    <UserContext.Provider value={mongoUser}>{children}</UserContext.Provider>
  );
};

export default MongoUserProvider;
