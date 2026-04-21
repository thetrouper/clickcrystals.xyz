import { getTotalDownloads } from '@/lib/getDownloads';
import ProgressClient from './ProgressClient';

export default async function Progress() {
  const downloads = await getTotalDownloads();

  return (
    <section
      className="relative py-16 md:py-28"
      style={{ background: 'rgb(7,10,20)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)',
        }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <ProgressClient downloads={downloads} />
      </div>
    </section>
  );
}
