import Hero from "./components/Hero";
import Regions from "./components/Regions";
import Provinces from "./components/Provinces";
import { Metadata } from "next";
import Apropos from "./components/Apropos";
import SearchForm from "./components/SearchForm";





export const metadata: Metadata = {
  title: 'Trouver facilement les Codes Postaux au Maroc | Guide Complet des Codes Postaux',
  description: 'Explorez une base de données complète des codes postaux au Maroc. Recherchez par ville, région ou agence postale pour trouver rapidement le code postal dont vous avez besoin.',
}

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-items-center min-h-screen ">
        <div className="w-full bg-red-600 flex flex-col justify-center items-center  px-3 md:px-20 py-32">
         
          <Hero/>
          <SearchForm/>
          
        </div>
       <div className="w-full flex flex-col justify-start items-center  px-3 md:px-20 gap-10">
       <Regions/>
        
        <Provinces/>
        <Apropos/>
        </div>
    </div>
  );
}
