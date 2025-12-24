import { getProvinces } from "@/app/actions/getProvinces";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Map,
  Globe,
  ArrowLeft,
  Hash,
  ChevronRight,
  Users,
  Mailbox,
  Flag,
  Home,
  Award,
  Search,
  Filter,
  SortAsc,
  BarChart3
} from "lucide-react";
import { getProvincePageSchemas, StructuredData } from "@/app/structured-data-schemas/data-schema";

export default async function ProvincePage({ params }: { params: Promise<{ provinceName: string }> }) {
  const provinceName = decodeURIComponent((await params).provinceName);
  const removeHyphens = provinceName.replace(/-/g, " ").toUpperCase();
  if (!provinceName) {
    return notFound();
  }


  const provinces = await getProvinces();
  const province = provinces[removeHyphens];

  if (!province) {
    return notFound();
  }

  const totalAgences = province.agences.length;
  
  // Sort agences by code postal
  const sortedAgences = [...province.agences].sort((a, b) => a.codePostal - b.codePostal);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={getProvincePageSchemas(provinceName,province.region,sortedAgences)} />
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-red-500 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour 
            </Link>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                {province.region}
              </div>
              <div className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">
                Province
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-linear-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            <div className="flex items-center text-gray-500 mb-3">
              <Flag className="h-5 w-5 mr-2" />
              <span>Maroc</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="font-medium">{province.region}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <h1 className="text-5xl font-bold text-black mb-3">{provinceName}</h1>
                <p className="text-gray-600 text-lg">
                  Province située dans la région postale de <span className="font-semibold text-black">{province.region}</span>
                </p>
              </div>
              
              <div className="mt-6 md:mt-0">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="text-center">
                    <div className="text-4xl font-black text-red-500 mb-1">{totalAgences}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Zones Postales</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-red-50 rounded-lg mr-4">
                    <Building2 className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">{totalAgences}</div>
                    <div className="text-sm text-gray-500">Agences</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-50 rounded-lg mr-4">
                    <Map className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">1</div>
                    <div className="text-sm text-gray-500">Province</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-50 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">1</div>
                    <div className="text-sm text-gray-500">Région</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-50 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">
                      {sortedAgences[sortedAgences.length - 1]?.codePostal - sortedAgences[0]?.codePostal || 0}
                    </div>
                    <div className="text-sm text-gray-500">Plage de codes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Rechercher une agence dans cette province..."
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtre
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <SortAsc className="h-4 w-4 mr-2" />
                  Trier par code
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Agences Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black">Toutes les zones postales</h2>
              <p className="text-gray-600 mt-2">
                Liste complète des {totalAgences} agences postales de {provinceName}
              </p>
            </div>
            <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              {province.region} • {provinceName}
            </div>
          </div>

          {/* Agences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAgences.map((agence, index) => (
              <Link
                key={agence.name}
                href={`/agences/${encodeURIComponent(agence.name)}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 opacity-5 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  
                  {/* Number badge */}
                  <div className="absolute -top-2 -left-2 z-10">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                      {index + 1}
                    </div>
                  </div>

                  <div className="relative z-20">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors line-clamp-2 pr-4 flex-1">
                          {agence.name}
                        </h3>
                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors flex-shrink-0 ml-2">
                          <Mailbox className="h-5 w-5 text-gray-500 group-hover:text-red-500" />
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{provinceName}</span>
                      </div>
                    </div>

                    {/* Code Postal Highlight */}
                    <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Code Postal</div>
                          <div className="text-3xl font-black text-red-500">{agence.codePostal}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">Zone #{index + 1}</div>
                          <div className="text-sm font-medium text-black">Poste Principale</div>
                        </div>
                      </div>
                    </div>

                    {/* Region Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Globe className="h-4 w-4 mr-1" />
                        <span>{province.region}</span>
                      </div>
                      <span className="text-gray-400">Région</span>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-end mt-6 pt-4 border-t border-gray-100">
                      <span className="text-sm text-red-500 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                        Consulter l'agence
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Province Summary */}
        <div className="bg-linear-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">À propos de {provinceName}</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  La province de <span className="font-semibold text-black">{provinceName}</span> est située dans la région postale de <span className="font-semibold text-black">{province.region}</span> et compte <span className="font-semibold text-black">{totalAgences}</span> zones postales actives.
                </p>
                <p>
                  Chaque agence postale possède un code postal unique permettant l'acheminement précis du courrier dans toute la province.
                </p>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500 mb-1">
                      {sortedAgences[0]?.codePostal || 0}
                    </div>
                    <div className="text-xs text-gray-500">Plus petit code</div>
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500 mb-1">
                      {sortedAgences[sortedAgences.length - 1]?.codePostal || 0}
                    </div>
                    <div className="text-xs text-gray-500">Plus grand code</div>
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black mb-1">{provinceName}</div>
                    <div className="text-xs text-gray-500">Province</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-black mb-4 flex items-center">
                <Award className="h-5 w-5 text-red-500 mr-2" />
                Statistiques clés
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Nombre d'agences</span>
                  <span className="font-bold text-black">{totalAgences}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Codes postaux</span>
                  <span className="font-bold text-red-500">{sortedAgences.length}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Région</span>
                  <span className="font-medium text-black">{province.region}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Type</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                    Province
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-linear-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-3">
                {"Besoin d'un autre code postal ?"}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {"Découvrez les agences postales dans toutes les régions du Maroc "}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
               
                <Link
                  href="/search"
                  className="px-20 py-3 bg-red-500 text-white border border-gray-300  font-medium rounded-lg hover:bg-red-600 transition-colors"
                >
                  Rechercher 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}