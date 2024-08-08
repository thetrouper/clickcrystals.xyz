import clickcrystalsLogo from "@/public/icon.png";
import Image from "next/image";

const Latest = ({ version = "1.2.7" }) => {
  return (
    <div className="bg-slate-800 py-4 my-8 px-4 rounded-[4px] flex flex-row items-center">
      <Image alt="ClickCrystals" className="size-24" height={50} width={50} src={clickcrystalsLogo} />
      <div className="flex flex-col ml-4">
        <h1 className="text-white text-3xl font-bold mb-2">Instantly download the latest version of <span className="text-blue-400 cursor-pointer select-none">ClickCrystals</span>!</h1>
        <h1 className="text-white text-md">Click <span className="text-blue-500 font-bold">here</span> to start your download, the latest version is {version}</h1>
      </div>
    </div>
  )
}

export default Latest;