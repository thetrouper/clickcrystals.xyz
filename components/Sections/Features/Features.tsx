import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-400/70 font-semibold mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What's Included
          </h2>
          <p className="text-base md:text-lg text-slate-200">
            Core systems designed for competitive Crystal PvP.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
