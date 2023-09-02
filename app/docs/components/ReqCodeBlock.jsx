"use client";
import { CodeBlock } from "react-code-blocks";


const ReqCodeBlock = ({ tabSelected, tabs}) => {
  const frameworks = [
    {
      name: "NextJs",
      code: `import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
    `
  },]

  const themes = "dracula";
  const showLineNumbers = true;
  const wrapLongLines = false;
  const codeBlock = true;
  return (
    <div className="w-full px-4">
      <h1 className="text-4xl">
        {frameworks[tabSelected].name}
      </h1>
              <CodeBlock
              className="mt-4 rounded-lg"
          text={frameworks[tabSelected].code}
          language={"javascript"}
          theme={themes}
          wrapLongLines={wrapLongLines}
          {...{ showLineNumbers, codeBlock }}
        />
    </div>
  )
}

export default ReqCodeBlock