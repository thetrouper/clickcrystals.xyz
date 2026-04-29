import Hero from '@/components/Sections/Hero/Hero';
import dynamic from 'next/dynamic';

const Progress = dynamic(
  () => import('@/components/Sections/Progress/Progress'),
);
const CCS = dynamic(() => import('@/components/Sections/CCS/CCS'));
const Features = dynamic(
  () => import('@/components/Sections/Features/Features'),
);
const Ingame = dynamic(() => import('@/components/Sections/Ingame/Ingame'));
const Reviews = dynamic(() => import('@/components/Sections/Reviews/Reviews'));
const Footer = dynamic(() => import('@/components/ui/Footer'));

export default function Home() {
  return (
    <>
      <Hero />
      <div className="content-auto">
        <Progress />
      </div>
      <div className="content-auto">
        <CCS />
      </div>
      <div className="content-auto">
        <Features />
      </div>
      <div className="content-auto">
        <Ingame />
      </div>
      <div className="content-auto">
        <Reviews />
      </div>
      <Footer />
    </>
  );
}
