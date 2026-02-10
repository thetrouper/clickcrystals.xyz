import ReviewsList from './ReviewsList';

export default function Reviews() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-white mb-16">
          What Players Say About{' '}
          <span className="text-blue-400">ClickCrystals</span>
        </h2>
        <ReviewsList />
      </div>
    </div>
  );
}
