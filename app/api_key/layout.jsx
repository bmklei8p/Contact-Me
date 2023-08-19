'use client'

import MongoUserProvider from "./components/MongoUserProvider"

const API_KEY_Layout = ({children}) => {

  return (
    <div className="w-full flex justify-center">
        <MongoUserProvider>
            {children}
        </MongoUserProvider>
    </div>
  )
}

export default API_KEY_Layout