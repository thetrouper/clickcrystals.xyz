import Scripts from "@/components/Sections/scripts/Scripts";

export default function ScriptsArchive() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              ClickCrystals <span className="text-blue-600">Script Archive</span>
            </h1>
            <p className="text-gray-500 font-normal max-w-4xl my-3">
              All our working ClickScripts (ClickCrystals Scripts or CCS) are provided here. Use them on your own and do not abuse them on public servers without permission.
            </p>
          </div>
        </div>
        <Scripts />
      </main>
    </>
  );
}
