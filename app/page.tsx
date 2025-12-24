import { Suspense } from 'react';
import { getAgences } from './actions/getAgences';
import { HeroSection } from './components/heroSection';
import { StatCard } from './components/statCard';
import { Building2, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { slugify } from './utils/slugify';
import { ProvinceCard } from './components/provinceCard';
import { getHomepageSchemas, StructuredData } from './structured-data-schemas/data-schema';
import { RegionSection } from './components/regions-section';
import { RegionSkeleton } from './components/regionSkeleton';


// Types matching your data structure
interface AgenceData {
  region: string;
  province: string;
  codePostal: number;
}

type AgencesObject = Record<string, AgenceData>;

// Metadata for SEO
export const metadata = {
  title: 'Toutes les Agences Postales au Maroc | Codes Postaux',
  description: 'Liste complète de toutes les agences postales au Maroc avec leurs codes postaux. Recherchez par région, province ou nom d\'agence.',
  keywords: 'agences postales maroc, bureaux de poste maroc, codes postaux maroc',
};

// Slugify function


// Convert object to array for easier processing
function agencesObjectToArray(agencesObj: AgencesObject) {
  return Object.entries(agencesObj).map(([name, data]) => ({
    name,
    ...data,
  }));
}

// Server Component - Main Page
export default async function HomePage() {
  const agencesObject = await getAgences();
  const agencesArray = agencesObjectToArray(agencesObject);
  
  // Group by region
  const agencesByRegion = agencesArray.reduce((acc, agence) => {
    const region = agence.region;
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(agence);
    return acc;
  }, {} as Record<string, typeof agencesArray>);

  const regions = Object.keys(agencesByRegion).sort();
  const totalAgences = agencesArray.length;
  const totalCodes = new Set(agencesArray.map(a => a.codePostal)).size;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100">
           <StructuredData data={getHomepageSchemas()} />

      {/* Hero Section */}
 <HeroSection totalAgences={totalAgences} regions={regions} />

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-8 mb-12">
            {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Agences Postales au Maroc',
            description: 'Liste complète des agences postales au Maroc',
            numberOfItems: totalAgences,
            itemListElement: agencesArray.slice(0, 10).map((agence, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'PostOffice',
                name: agence.name,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: agence.province,
                  addressRegion: agence.region,
                  postalCode: agence.codePostal.toString(),
                  addressCountry: 'MA',
                },
              },
            })),
          }),
        }}
      />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={<MapPin className="w-6 h-6" />}
            label="Régions"
            value={regions.length}
            color="black"
          />
          <StatCard
            icon={<Building2 className="w-6 h-6" />}
            label="Agences Postales"
            value={totalAgences}
            color="red"
          />
          <StatCard
            icon={<Mail className="w-6 h-6" />}
            label="Codes Postaux"
            value={totalCodes}
            color="gray"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        {/* Regions Navigation */}
        <nav className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Parcourir par Région
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {regions.map(region => (
              <Link
                key={region}
                href={`/regions-postales/${slugify(region)}`}
                className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition">
                      {region}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {agencesByRegion[region].length} agences
                    </p>
                  </div>
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition" />
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Regions List */}
        <div className="space-y-12">
          {regions.map((region, index) => (
            <Suspense 
              key={region} 
              fallback={<RegionSkeleton regionName={region} />}
            >
              <RegionSection
                region={region}
                agences={agencesByRegion[region]}
                priority={index < 2}
              />
            </Suspense>
          ))}
        </div>
      </main>

  
    </div>
  );
}






