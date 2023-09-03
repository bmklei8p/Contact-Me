"use client";
import React from "react";
import { CodeBlock } from "react-code-blocks";

const EnvPage = ({tabSelected, tabs}) => {
  const themes = "dracula";
  const showLineNumbers = true;
  const wrapLongLines = false;
  const codeBlock = true;

  return (
    <div className="w-full mt-4">
      <h2 className="text-xl font-bold mt-8">.env file</h2>
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
