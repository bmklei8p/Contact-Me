import React from 'react'

const Docs = () => {
  return (
    <div className='w-full h-5/6 overflow-hidden flex flex-row'>
      <div className='basis-1/2 flex justify-center'>
        <div className='w-[70%] flex flex-col items-center'>
          <h1 className='text-5xl pt-20 font-bold pb-5 border-b-2 border-gray-400 w-full text-center'>Getting Started</h1>
        </div>
      </div>
      <div className='basis-1/2  bg-blue-500'>
        Code Example
      </div>
    </div>
  )
}

export default Docs