import { RxCopy } from "react-icons/rx";
import { useState } from "react";


const GenerateAPI_KEY = ({email}) => {
  const [apiKey, setApiKey] = useState("");
  const [inputValue, setInputValue] = useState("");

  const generateApiKey = async (e) => {
    if (!email) {
      return;
    }
    e.preventDefault();
    try {
      const response = await fetch("/api/generateApiKey", {
        method: "PATCH",
        body: JSON.stringify({ email: email}),
      });
      const data = await response.json();
      setApiKey(data.API_KEY);
    } catch (error) {
      console.error("Error generating API key:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
  };


  return (
    <div className="flex flex-col text-left justify-start w-full">
    <div className="flex gap-x-4 mt-16 mb-4 align-middle items-center">
      <h2 className="text-xl lg:text-2xl">Generate a new API Key:</h2>
      <button
        onClick={(e) => generateApiKey(e)}
        className="text-xl lg:text-2xl min-w-fit px-4 py-2 font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        Generate
      </button>
    </div>
    <div className="flex flex-row gap-x-2">
      <input
        type="text"
        value={apiKey}
        readOnly={true}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full lg:w-3/4 p-2 text-xl border-2 border-gray-400 rounded-lg"
      />
      <button
        onClick={copyToClipboard}
        className=""
      >
        <RxCopy size={35} />
      </button>
    </div>
  </div>
  )
}

export default GenerateAPI_KEY