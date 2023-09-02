import BannerContact from "./components/BannerContact"


export default function Home() {
  return (
    <div className='w-full justify-center flex flex-col md:flex-row'>
      <div className='basis-1/2 flex justify-center'>
        <div className='w-[70%] flex flex-col items-center'>
          <h1 className='text-5xl pt-20 font-bold pb-5 border-b-2 border-gray-400 w-full text-center'>Contact Me</h1>
        </div>
      </div>
      <div className='basis-1/2'>
        <BannerContact />
      </div>
    </div>
      )
}
