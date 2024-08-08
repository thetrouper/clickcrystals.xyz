import ReviewsList from "./ReviewsList";

export default function Reviews() {
  return (
    <div className="lg:p-12 p-6 bg-blue-50">
      <div className="max-w-6xl max-md:max-w-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-3">
            <h2 className="text-center text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              What our <span className="text-blue-500">users say</span>?
            </h2>
          </div>
        </div>
        <ReviewsList />
      </div>
    </div>
  )
}