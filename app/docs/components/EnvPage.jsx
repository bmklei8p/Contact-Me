"use client";
import React from "react";
import { CodeBlock } from "react-code-blocks";
import { useState } from "react";

const EnvPage = () => {
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

  const themes = "dracula";
  const showLineNumbers = true;
  const wrapLongLines = false;
  const codeBlock = true;

  return (
    <div className="w-full h-full mt-6">
            <div className="flex flex-row gap-x-4 mb-2 border-2 px-2 py-1">
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
      <h2 className="text-md mt-2">.env file</h2>
      <div>
        <CodeBlock
          text={tabs[tabSelected].code}
          language={"javascript"}
          theme={themes}
          wrapLongLines={wrapLongLines}
          {...{ showLineNumbers, codeBlock }}
        />
      </div>
    </div>
  );
};

export default EnvPage;
