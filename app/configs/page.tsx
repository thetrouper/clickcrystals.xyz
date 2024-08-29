import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClickCrystals - Configs Explorer",
}

import Configs from "@/components/Sections/configs/Configs";

export default function ScriptsArchive() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              ClickCrystals <span className="text-blue-600">Configs Explorer</span>
            </h1>
            <p className="text-gray-500 font-normal max-w-4xl mt-3 mb-6">
              ClickCrystals Configs are used to import/export and share your ClickCrystals module, HUD and core settings with others. Here are some of our configs and you can also share your config by uploading here!
              <br/>
              Learn how to create your own configs! <span className="text-blue-500">Configs Tutorial</span>
            </p>
          </div>
        </div>
        <Configs />
      </main>
    </>
  );
}
