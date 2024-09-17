import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section className="p-6 lg:p-8 bg-gray-800 text-white">
      <div className="py-8 text-center px-4 items-center">
        <h1 className="text-center text-white tracking-tight leading-[1.3] font-extrabold text-3xl lg:text-4xl mb-2">
          We care your safety. Play with the{' '}
          <span className="text-blue-500">advantage</span>, hassle-free
        </h1>
        <div className="w-full flex flex-row justify-center">
          <p className="text-gray-400 font-normal m-0 text-center max-w-4xl">
            We believe in your safety and privacy. The ClickCrystals client has
            multiple options to make it undetectable, including custom loading
            screen disabler and module toggle broadcast—so ever turn it on back
            when you wish, or keep off to stay hidden in the ghost era of
            ClickCrystals.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
