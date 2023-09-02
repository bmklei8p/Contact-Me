import BannerContact from "./components/BannerContact";
import EmailAnimation from "./components/EmailAnimation";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="w-full h-5/6 overflow-hidden flex flex-col md:flex-row">
      <div className="basis-1/2 flex flex-col items-center">
        <CallToAction />
      </div>
      <div className="basis-1/2">
        <BannerContact />
      </div>
    </div>
  );
}
