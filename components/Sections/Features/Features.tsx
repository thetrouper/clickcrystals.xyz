import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/[0.06]">
      <div className="max-w-[1040px] mx-auto px-8">
        <div className="mb-16 max-w-[720px]">
          <p className="text-sm uppercase tracking-wider text-white/50 mb-2">Features</p>
          <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
            What's Included
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Core systems designed for competitive Crystal PvP.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
