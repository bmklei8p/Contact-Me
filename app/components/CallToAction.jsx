// import EmailAnimation from "./EmailAnimation";
// import free from "../../public/no_resel.svg";
import email from "../../public/email.png";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const CallToAction = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className="text-5xl md:w-[90%] font-bold pb-5 border-b-2 border-gray-400 w-full text-center">
          Contact Me
        </h1>
      </div>
      <div className="w-full xl:w-[85%] px-4 md:px-0 flex flex-col 2xl:hidden">
        <div className="w-full flex flex-col lg:flex-row lg:gap-x-8 justify-center">
          <div className="flex flex-col text-center mt-10">
            <h3 className="text-3xl md:text-3xl italic font-bold">
              Fastest and simplest
            </h3>
            <h3 className="text-3xl md:text-3xl mt-2">
              {" "}
              way to get your messages
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <Image priority={true} src={email} width={650} height={650} className="" alt="email splash image for visual effect only" />
        </div>
        <div className="w-full flex justify-center">
          <div className="text-3xl flex flex-col text-center">
            <h2>
              Aquire your <strong>API Key</strong>
            </h2>
            <h3>and start getting contacted</h3>
            <Link href={"/api_key"}>
              <button className="min-w-fit mt-6 px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-3xl flex flex-col text-center items-center mt-20">
            <div>
              <h3>
                <strong>100% free</strong> email
              </h3>
              <h3>Software as a Service</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full px-4 md:px-0 flex-col mt-8 md:mt-12 relative  hidden 2xl:flex">
        <div className="w-full flex flex-col lg:flex-row lg:gap-x-8 justify-center xl:justify-center">
          <div className="flex flex-col text-center w-[70%]">
            <h3 className="text-3xl md:text-3xl italic font-bold">
              Fastest and simplest
            </h3>
            <h3 className="text-3xl md:text-3xl mt-2">
              {" "}
              way to get your messages
            </h3>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-3xl flex flex-row text-center">
          <div className="flex justify-start">
          <Image priority={true} src={email} width={650} height={650} className="" alt="email splash image for visual effect only" />
        </div>
            <div className="flex flex-col text-center justify-center">
              <h3>
                <strong>100% free</strong> email
              </h3>
              <h3>Software as a Service</h3>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-3xl flex flex-col text-start w-[70%] items-center">
            <h2>
              Aquire your <strong>API Key</strong>
            </h2>
            <h3>and start getting contacted</h3>
            <Link href={"/api_key"}>
              <button className="min-w-fit mt-6 px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default CallToAction;
