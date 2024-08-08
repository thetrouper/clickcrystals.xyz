import CCS from "@/components/Sections/CCS/CCS";
import GetStarted from "@/components/Sections/GetStarted/GetStarted";
import Ingame from "@/components/Sections/Ingame/Ingame";
import Reviews from "@/components/Sections/Reviews/Reviews";
import Features from "@/components/Sections/Features/Features";
import Hero from "@/components/Sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CCS />
      <Features />
      <Ingame /> 
      <Reviews />
      <GetStarted />
    </>
  )
}