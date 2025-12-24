import Link from "next/link";
import { slugify } from "../utils/slugify";
import { AgenceCard } from "./agenceCard";



export function ProvinceCard({ 
  province, 
  region, 
  agences 
}: { 
  province: string; 
  region: string; 
  agences: Array<{ name: string; region: string; province: string; codePostal: number }>;
}) {
  const displayedAgences = agences.slice(0, 6);
  const hasMore = agences.length > 6;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Province Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{province}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {agences.length} agences postales
            </p>
          </div>
          <Link
            href={`/provinces-postales/${slugify(province)}`}
            className="text-white bg-black rounded-full border border-green-900 py-2 px-4 font-medium text-sm hover:underline"
          >
            Voir tout →
          </Link>
        </div>
      </div>

      {/* Agences Grid */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedAgences.map((agence) => (
            <AgenceCard key={agence.name} agence={agence} />
          ))}
        </div>

        {/* Show More */}
        {hasMore && (
          <div className="mt-4 text-center">
            <Link
              href={`/provinces-postales/${slugify(province)}`}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              Voir {agences.length - 6} agences de plus
              <span className="text-xs bg-blue-100 px-2 py-1 rounded-full">
                +{agences.length - 6}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
