import { getRegions } from "@/app/actions/getRegions";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  ArrowLeft,
  Hash,
  Globe,
  Map,
  ChevronRight,
  Users,
  Navigation
} from "lucide-react";
import { getRegionPageSchemas, StructuredData } from "@/app/structured-data-schemas/data-schema";
import { getAgence } from "@/app/actions/getAgence";
import { getAgences } from "@/app/actions/getAgences";
import { Agence } from "@/app/actions/getProvinces";

export default async function RegionPage({params}: {params: Promise<{regionName: string}>}){
  const regionName = decodeURIComponent((await params).regionName)
  if(!regionName){
    return notFound()
  }
  const sanitizedRegionName = regionName.replace(/-/g, " ").toUpperCase()
  const regions = await getRegions()
  
  if(!regions[sanitizedRegionName]){
    return notFound()
  }
  
  const region = regions[sanitizedRegionName]
  
  // Calculate total agencies
  const totalAgencies = region.reduce((acc, province) => acc + province.agences.length, 0)
  const regionAgences = region.reduce((acc, province) => {
    acc.push(...province.agences)
    return acc
  }, [] as Agence[])
  
  return (
    <div className="min-h-screen w-full bg-white">
      <StructuredData data={getRegionPageSchemas(sanitizedRegionName,regionAgences,totalAgencies)} />
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-red-500 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour 
            </Link>
            <div className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
              {region.length} {region.length === 1 ? 'PROVINCE' : 'PROVINCES'}
            </div>
          </div>
        </div>
      </header>

      <main className="w-full container mx-auto px-4 py-8">
        {/* Region Header Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            {/* Card Header */}
            <div className="bg-linear-to-r from-gray-50 to-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-red-500 rounded-xl mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-black">{sanitizedRegionName}</h1>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Navigation className="h-4 w-4 mr-1" />
                      <span>{region.length} {region.length === 1 ? 'province' : 'provinces'}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-red-500 mb-1">{totalAgencies}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Agences</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provinces List */}
        <div className="max-w-6xl mx-auto space-y-6">
          {region.map((provinceData, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Province Header */}
              <div className="bg-linear-to-r from-slate-800 to-slate-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-white/10 rounded-lg mr-3">
                      <Map className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {provinceData.province}
                      </h2>
                      <p className="text-gray-300 text-sm mt-0.5">
                        {provinceData.agences.length} {provinceData.agences.length === 1 ? 'agence' : 'agences'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agencies Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {provinceData.agences.map((agence, agenceIndex) => (
                    <Link
                      key={agenceIndex}
                      href={`/agences/${encodeURIComponent(agence.name.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-black group-hover:text-red-600 transition-colors line-clamp-1">
                              {agence.name}
                            </h3>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span className="truncate">{agence.province}</span>
                            </div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
                            <Hash className="h-4 w-4 text-gray-500 group-hover:text-red-500" />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <div>
                            <div className="text-xs text-gray-500">Code Postal</div>
                            <div className="text-xl font-black text-red-500">{agence.codePostal}</div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Globe className="h-3 w-3 mr-1" />
                            <span className="truncate max-w-[100px]">{agence.region}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-end mt-4">
                          <span className="text-xs text-red-500 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                            Voir détails
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-linear-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-3">
                {"Besoin d'un autre code postal ?"  }

              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {"Découvrez les agences postales dans toutes les régions du Maroc"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
               
                <Link
                  href="/search"
                  className="px-20 py-3 bg-red-500 border border-gray-300 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
                >
                  Rechercher 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}