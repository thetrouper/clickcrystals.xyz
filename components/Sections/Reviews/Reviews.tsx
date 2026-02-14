import ReviewsList from './ReviewsList';

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-wider text-slate-500 mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
            Trusted by Competitive PvP Players
          </h2>
        </div>
        <ReviewsList />
      </div>
    </section>
  );
}
