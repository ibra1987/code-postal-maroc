import Link from "next/link";
import { slugify } from "../utils/slugify";
import { ProvinceCard } from "./provinceCard";
import { ArrowRight } from "lucide-react";

export function RegionSection({ 
  region, 
  agences, 
  priority 
}: { 
  region: string; 
  agences: Array<{ name: string; region: string; province: string; codePostal: number }>; 
  priority: boolean;
}) {
  // Group by province
  const agencesByProvince = agences.reduce((acc, agence) => {
    const province = agence.province;
    if (!acc[province]) {
      acc[province] = [];
    }
    acc[province].push(agence);
    return acc;
  }, {} as Record<string, typeof agences>);

  const provinces = Object.keys(agencesByProvince).sort();

  return (
    <section 
      id={`region-${slugify(region)}`}
      className="scroll-mt-8"
    >
      {/* Region Header - Fixed gradient syntax */}
      <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl p-6 mb-6 text-white border-l-4 border-red-600 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              {region}
              <span className="text-red-500">→</span>
            </h2>
            <p className="text-gray-300">
              <span className="text-red-400 font-bold">{agences.length}</span> agences dans{' '}
              <span className="text-red-400 font-bold">{provinces.length}</span> provinces
            </p>
          </div>
          <Link
            href={`/regions/${slugify(region)}`}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center gap-2 group"
          >
            Voir la région
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Provinces */}
      <div className="space-y-6">
        {provinces.map((province) => (
          <ProvinceCard
            key={province}
            province={province}
            region={region}
            agences={agencesByProvince[province]}
          />
        ))}
      </div>
    </section>
  );
}