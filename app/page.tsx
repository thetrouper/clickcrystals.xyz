import Hero from '@/components/Sections/Hero/Hero';
import Progress from '@/components/Sections/Progress/Progress';
import CCS from '@/components/Sections/CCS/CCS';
import Features from '@/components/Sections/Features/Features';
import Ingame from '@/components/Sections/Ingame/Ingame';
import Reviews from '@/components/Sections/Reviews/Reviews';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Progress />
      <CCS />
      <Features />
      <Ingame />
      <Reviews />
      <Footer />
    </>
  );
}
