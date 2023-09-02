'use client'
import EnvPage from './components/EnvPage'
import ReqCodeBlock from './components/ReqCodeBlock'
import UrlBlock from './components/UrlBlock'
import { useState } from 'react'

const Docs = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const tabs = [
    {
      name: "NextJs",
      code: "NEXT_PUBLIC_EMAIL_API_KEY=Your API Key Here",
    },
    {
      name: "React",
      code: "REACT_APP_EMAIL_API_KEY=Your API Key Here",
    },
    {
      name: "Vue",
      code: "VUE_APP_EMAIL_API_KEY=Your API Key Here",
    },
    {
      name: "ES6",
      code: "code",
    },
  ];


  return (

    <div className='w-full flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center'>
        <div className='w-full md:w-[70%] px-6 md:px-0 flex flex-col'>
          <h1 className='text-5xl pt-10 md:pt-20 font-bold pb-5 border-b-2 border-gray-400 w-full text-center'>Getting Started</h1>
          <div className="flex flex-row w-full mt-4 gap-x-4 border-2 border-blue-500 px-2 py-1 rounded-lg">
        {tabs.map((tab, i) => {
          return (
            <button
              className={
                tabSelected === i
                  ? "text-blue-500 border-r-2 border-white pr-4"
                  : "border-r-2 border-white pr-4"
              }
              key={i}
              onClick={() => setTabSelected(i)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div>
          <EnvPage tabSelected={tabSelected} tabs={tabs} />
          <UrlBlock />
          </div>
        </div>
      </div>
      <div className='basis-1/2'>
        <ReqCodeBlock tabSelected={tabSelected} tabs={tabs} />
      </div>
    </div>
  )
}

export default Docs