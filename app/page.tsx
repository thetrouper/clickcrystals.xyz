import dynamic from 'next/dynamic';
import Hero from '@/components/Sections/Hero/Hero';

const Progress = dynamic(() => import('@/components/Sections/Progress/Progress'));
const CCS = dynamic(() => import('@/components/Sections/CCS/CCS'));
const Features = dynamic(() => import('@/components/Sections/Features/Features'));
const Ingame = dynamic(() => import('@/components/Sections/Ingame/Ingame'));
const Reviews = dynamic(() => import('@/components/Sections/Reviews/Reviews'));
const GetStarted = dynamic(() => import('@/components/Sections/GetStarted/GetStarted'));

export default function Home() {
  return (
    <>
      <Hero />
      <Progress />
      <CCS />
      <Features />
      <Ingame />
      <Reviews />
      <GetStarted />
    </>
  );
}
