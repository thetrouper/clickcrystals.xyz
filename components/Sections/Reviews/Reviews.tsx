import Image from 'next/image';
import ReviewsList from './ReviewsList';

const staffAvatars = [
  '/staff/ayaantutla.png',
  '/staff/improperissues.png',
  '/staff/inoam.png',
  '/staff/josh.png',
  '/staff/practice.png',
];

export default function Reviews() {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'rgb(7,10,20)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)',
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(ellipse, #6366f1, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[300px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse, #3b82f6, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[300px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse, #8b5cf6, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/60 font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Trusted by Competitive PvP Players
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Real feedback from real players who use ClickCrystals every day.
          </p>
        </div>

        <ReviewsList />

        {/* Footer social proof */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <div className="flex">
            {staffAvatars.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="staff"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full ring-2 ring-[rgb(7,10,20)] bg-slate-800"
                style={{
                  zIndex: staffAvatars.length - i,
                  marginLeft: i === 0 ? 0 : '-8px',
                }}
              />
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            <span className="text-white font-semibold">9 others</span> also left
            a review
          </p>
        </div>
      </div>
    </section>
  );
}
