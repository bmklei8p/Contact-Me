// "use client";
// import { createContext, useContext } from "react";
// import { useSession } from "next-auth/react";

// const UserContext = createContext();

// import { useState, useEffect } from "react";

// const MongoUserProvider = ({ children }) => {
//   // console.log("MongoUserProvider running")
//   const [mongoUser, setMongoUser] = useState();
//   const { data: session } = useSession();
//   const [email, setEmail] = useState();

//   // console.log("MongoUserProvider session", session)

//   useEffect(() => {
//     const getEmail = async () => {
//       setEmail(email);
//     };
//     const getMongoUser = async () => {
//       // console.log("MongoUserProvider getMongoUser running")
//       if(session) {
//         console.log({"Provider": email})
//       }
//       if(session){
//         // console.log("fetching mongoUser")
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/mongoUser/${email}`,
//           { next: { cache: "no-store" } }
//         );
//         const data = await res.json();
//         // console.log("data", data)
//         setMongoUser(data);
//       }
//     };
//     getEmail();
//     getMongoUser();
//   }, []);

//   return (
//     <UserContext.Provider value={mongoUser}>{children}</UserContext.Provider>
//   );
// };
// export const useUserContext = () => useContext(UserContext);
// export default MongoUserProvider;
