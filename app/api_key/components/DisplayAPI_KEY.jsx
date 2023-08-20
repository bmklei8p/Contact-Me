"use client";
import { useState, useEffect } from "react";
import { RxCopy } from "react-icons/rx";

const DisplayAPI_KEY = () => {
  const [apiKey, setApiKey] = useState("");
  const [revealApiKey, setRevealApiKey] = useState(false);

  useEffect(() => {
    const getApiKey = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getApiKey`,
        { next: { cache: "no-store" } }
      );
      const data = await res.json();
      setApiKey(data.API_KEY);
    };
    getApiKey();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
  };

  return (
    <div className="flex flex-col text-left w-full mt-20">
      <h2 className="text-3xl mb-4">Your API Key:</h2>
      <div className="relative">
        <input
          type="text"
          value={apiKey}
          readOnly={true}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-1/2 p-2 border-2 border-gray-400 rounded-lg"
        />
        <button onClick={copyToClipboard} className="absolute top-1 left-[45%]">
          <RxCopy size={35} />
        </button>
      </div>
    </div>
  );
};

export default DisplayAPI_KEY;
