import BannerContact from "./components/BannerContact";
import EmailAnimation from "./components/EmailAnimation";
import CallToAction from "./components/CallToAction";
import Image from "next/image";
import email from "../public/email.png";

export default function Home() {
  return (
    <div className="w-full h-5/6 overflow-hidden flex flex-col md:flex-row">
      <div className="basis-1/2 flex flex-col items-center relative">
        {/* <Image src={email} width={650} height={650} className=" absolute top-[20%] left-0  -z-50" /> */}
        <CallToAction />
      </div>
      <div className="basis-1/2">
        <BannerContact />
      </div>
    </div>
  );
}
