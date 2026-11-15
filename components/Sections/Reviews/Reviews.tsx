import ReviewsList from './ReviewsList';

export default function Reviews() {
  return (
    <div className="lg:p-12 p-6 bg-[#162D4A]">
      <div className="max-w-6xl max-md:max-w-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-3">
            <h2 className="text-center text-[#F4F8FF] tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              What our users think{' '}
              <span className="text-[#61ADEC]">about ClickCrystals</span>
            </h2>
          </div>
        </div>
        <ReviewsList />
      </div>
    </div>
  );
}
