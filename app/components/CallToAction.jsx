import EmailAnimation from "./EmailAnimation";
import free from "../../public/no_resel.svg";
import Image from "next/image";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const CallToAction = () => {
  return (
    <>
      <div className="w-full xl:w-[85%] flex flex-col items-center">
        <h1 className="text-5xl pt-10 md:pt-20 font-bold pb-5 border-b-2 border-gray-400 w-full text-center">
          Contact Me
        </h1>
      </div>
      <div className="w-full xl:w-[85%] px-4 md:px-0 flex flex-col mt-8 md:mt-12 relative">
        <div className="w-full flex flex-col lg:flex-row lg:gap-x-8 justify-center xl:justify-start">
          <div className="flex flex-col text-center">
            <h3 className="text-2xl md:text-3xl italic font-bold">
              Fastest and simplest
            </h3>
            <h3 className="text-2xl md:text-3xl mt-2">
              {" "}
              way to get your messages
            </h3>
          </div>
          <div className="flex justify-center mt-4 relative">
            <MdOutlineMarkEmailUnread className="text-blue-500" size={60}/>
            <EmailAnimation />
          </div>
        </div>
        <div className="w-full flex justify-center xl:justify-end">
        <div className="text-2xl md:text-3xl mt-32 md:mt-44 flex flex-col lg:flex-row md:gap-x-8 text-center">
            <div>
              <h3>
                <strong>100% free</strong> email
              </h3>
              <h3>Software as a Service</h3>
            </div>
            {/* <div className="flex justify-center mt-4 items-center">
              <Image src={free} alt="free" height={75} width={75} className="fill-blue-500" />
            </div> */}
          </div>
        </div>
        <div className="w-full flex justify-center xl:justify-start">
        <div className="text-2xl md:text-3xl mt-32 md:mt-44 flex flex-col text-center items-center">
            <h2>
              Aquire your <strong>API Key</strong>
            </h2>
            <h3>and start getting contacted</h3>
            <button className="min-w-fit mt-6 px-4 py-2 text-lg font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
