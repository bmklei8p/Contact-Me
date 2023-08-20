"use client";
import React from "react";
import { CodeBlock } from "react-code-blocks";
import { useState } from "react";

const EnvPage = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const tabs = [
    {
      name: "NextJs",
      code: "NEXT_PUBLIC_EMAIL_API_KEY=YOUR API KEY HERE",
    },
    {
      name: "React",
      code: "code",
    },
  ];

  const code = "\n";
  const themes = "dracula";
  const showLineNumbers = true;
  const wrapLongLines = false;
  const codeBlock = true;

  return (
    <div className="w-full h-full overflow-y-scroll mt-6">
            <div className="flex flex-row gap-x-4 mb-2 border-2 px-2 py-1">
        {tabs.map((tab, i) => {
          return <button className={tabSelected === i ? 'text-blue-500 border-r-2 border-white pr-4' : 'text-gray-100 border-r-2 border-white pr-4'}  key={i} onClick={() => setTabSelected(i)}>{tab.name}</button>;
        })}
      </div>
      <h2 className="text-lg">.env file</h2>
      <div>
      <CodeBlock
        text={tabs[tabSelected].code}
        language={"language"}
        theme={themes}
        wrapLongLines={wrapLongLines}
        {...{ showLineNumbers, codeBlock }}
      />
      </div>
    </div>
  );
};

export default EnvPage;
