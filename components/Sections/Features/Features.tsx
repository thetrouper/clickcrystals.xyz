import FeaturesGrid from "./FeaturesGrid";

export default function Features() {
  return (
    <section className="p-6 lg:p-8 bg-gray-800 text-white">
      <div className="py-8 text-center px-4 items-center">
        <h1 className="text-center text-white tracking-tight leading-[1.3] font-extrabold text-3xl lg:text-4xl mb-2">
          Safety our <span className="text-blue-500">priority</span>. No worries.
        </h1>
        <div className="w-full flex flex-row justify-center">
          <p className="text-gray-400 font-normal m-0 text-center max-w-4xl">Active support, community and development. Blow up your opponent in every match without getting the boredom or tired. Safe to be used on <i>most</i> servers, give us a try!</p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  )
}
