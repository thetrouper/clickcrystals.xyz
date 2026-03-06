import ReviewsList from './ReviewsList';

export default function Reviews() {
  return (
    <section className="py-12 md:py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-400/70 font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Trusted by Competitive PvP Players
          </h2>
        </div>
        <ReviewsList />
      </div>
    </section>
  );
}
