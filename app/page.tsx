import Hero from "./components/Hero";
import Regions from "./components/Regions";
import Provinces from "./components/Provinces";
import HeroButton from "./components/HeroButton";
import { Metadata } from "next";
import Apropos from "./components/Apropos";





export const metadata: Metadata = {
  title: 'Trouver facilement les Codes Postaux au Maroc | Guide Complet des Codes Postaux',
  description: 'Explorez une base de données complète des codes postaux au Maroc. Recherchez par ville, région ou agence postale pour trouver rapidement le code postal dont vous avez besoin.',
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Hero/>
        <HeroButton/>
        <Regions/>
        <Apropos/>
        <Provinces/>
    </div>
  );
}
