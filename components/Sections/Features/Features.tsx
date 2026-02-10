import FeaturesGrid from './FeaturesGrid';

export default function Features() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for <span className="text-blue-400">Every Player</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Adaptable, customizable, and hassle-free. ClickCrystals fits your
            playstyle perfectly.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </section>
  );
}
