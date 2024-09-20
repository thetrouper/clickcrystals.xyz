import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section className="p-6 lg:p-8 bg-gray-800 text-white">
      <div className="py-8 text-center px-4 items-center">
        <h1 className="text-center text-white tracking-tight leading-[1.3] font-extrabold text-3xl lg:text-4xl mb-2">
           We care about your needs. Participate in a {' '}
           <span className="text-blue-500">leveled</span>, playing field
        </h1>
        <div className="w-full flex flex-row justify-center">
          <p className="text-gray-400 font-normal m-0 text-center max-w-4xl">
            We believe in equity. Clickcrystals can be adapated to fit the
            needs of anyone who uses it. Want to press less buttons when PvPing?
            Then clickcrystals is for you. Want something custom tailored to your prefernces?
            Script it to your liking. ClickCrystals comes hassle-free.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
