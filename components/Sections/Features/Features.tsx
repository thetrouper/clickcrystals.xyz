import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section
      className="relative py-16 md:py-28 overflow-hidden"
      style={{ background: 'rgb(7,10,20)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/60 font-semibold mb-4">
            Features
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            What's Included
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-xl">
            Core systems designed for competitive Crystal PvP.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
