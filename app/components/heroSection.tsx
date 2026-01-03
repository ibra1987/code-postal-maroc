import { Suspense } from "react";
import { SearchSkeleton } from "./skeleton";
import { SearchBar } from "./searchBar";

export function HeroSection({totalAgences, regions}: {totalAgences: number; regions: string[]}) {
  return (
    <section className="w-full rounded-xl bg-slate-900 text-white py-12 md:py-24 px-4 md:px-10 relative overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] lg:w-[800px] lg:h-[400px] bg-red-600/20 blur-[100px] rounded-full" />
      </div>
      
      <div className="mx-auto relative max-w-7xl">
        <div className="max-w-3xl">
          {/* Badge */}
         
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Toutes les Agences Postales au Maroc
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Découvrez les <span className="text-red-400 font-bold">{totalAgences.toLocaleString()}</span> agences postales réparties dans <span className="text-red-400 font-bold">{regions.length}</span> régions
          </p>
          
          <Suspense fallback={<SearchSkeleton />}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
    </section>
  );
}