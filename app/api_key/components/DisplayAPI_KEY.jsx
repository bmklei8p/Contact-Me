"use client";
import { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { MdRemoveRedEye } from "react-icons/md";

const DisplayAPI_KEY = ({ API_KEY }) => {
  const [revealApiKey, setRevealApiKey] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(API_KEY);
  };

  return (
    <div className="flex flex-col text-left w-full mt-20">
      <h2 className="text-3xl mb-4">Your API Key:</h2>
      <div className="relative">
        <input
          type="text"
          value={revealApiKey ? API_KEY : "********************"}
          readOnly={true}
          className="w-full md:w-3/4 p-2 border-2 border-gray-400 rounded-lg text-xl min-w-fit"
        />
        {revealApiKey ? (
          <button
            onClick={copyToClipboard}
            className="absolute top-1 left-[45%]"
          >
            <RxCopy size={35} />
          </button>
        ) : (
          <button
            onClick={() => setRevealApiKey(!revealApiKey)}
            className="absolute top-1 left-[45%]"
          >
            <MdRemoveRedEye size={35} />
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayAPI_KEY;
