import FeaturesGrid from "./FeaturesGrid";

export default function Features() {
  return (
    <section className="p-6 lg:p-8 bg-gray-800 text-white">
      <div className="py-8 text-center px-4 items-center">
        <h1 className="text-center text-white tracking-tight leading-[1.3] font-extrabold text-3xl lg:text-4xl mb-2">
          We <span className="text-blue-500">value your safety</span>. Play with confidence. Play with the advantage
        </h1>
        <div className="w-full flex flex-row justify-center">
          <p className="text-gray-400 font-normal m-0 text-center max-w-4xl">You have chosen the right choice- we have an active team & community which help build the best for you.  Bet you'd crush the noobs in every match with ClickCrystals. </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  )
}
