import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <p className="text-xs md:text-sm uppercase tracking-wider text-slate-500 mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            What's Included
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Core systems designed for competitive Crystal PvP.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
