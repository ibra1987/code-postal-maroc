import Image from "next/image";
import Hero from "./components/Hero";
import Regions from "./components/Regions";
import Provinces from "./components/Provinces";
import HeroButton from "./components/HeroButton";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Hero/>
        <HeroButton/>
        <Regions/>
        <Provinces/>
    </div>
  );
}
