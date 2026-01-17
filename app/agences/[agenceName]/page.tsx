import { getAgencesInProvince } from "@/app/actions/getAgencesInProvince";
import { getAgences } from "@/app/actions/getAgences";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Navigation,
  ArrowLeft,
  Hash,
  Globe,
  Map,
  ChevronRight,
  Users,
  Compass,
  Mailbox,
  AlertCircle
} from "lucide-react";
import { getAgence } from "@/app/actions/getAgence";
import Image from "next/image";

export default async function AgencePage({ params }: { params: Promise<{ agenceName: string }> }) {
  let agenceName = decodeURIComponent((await params).agenceName);
  agenceName = agenceName.replace(/-/g, " ").toUpperCase();
  const agences = await getAgences();
  let agenceData = agences[agenceName.toUpperCase()];
  const agenceResult = await getAgence(agenceName);

if (!agenceResult.agence) {
  return notFound();
}
  agenceData = agenceResult.agence;
  let agencesInProvince = await getAgencesInProvince(agenceName);
  if (!agencesInProvince) {
    agencesInProvince = await getAgencesInProvince(agenceResult.matchedName?.toUpperCase() || "");
  }
  // Get random 3-5 entries from agencesInProvince with proper error handling
  const getRandomEntries = (array: any[] | undefined, count: number) => {
    if (!array || array.length === 0) return [];
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
  };

  // Handle agencesInProvince being undefined or empty
  const safeAgencesInProvince = agencesInProvince || [];
  
  // Filter out the current agence and get random entries
  const randomAgences = getRandomEntries(
    safeAgencesInProvince.filter((agence: any) => agence.AGENCE !== agenceName),
    Math.min(5, safeAgencesInProvince.length - 1)
  );

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto  py-4">
          <div className="flex  items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-red-500 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour 
            </Link>
            <div className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
              CODE: {agenceData.codePostal}
            </div>
          </div>
        </div>
      </header>

      <main className="w-full  mx-auto px-4 py-8">
      
        {/* Main Agence Card */}
        <div className=" mx-auto mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            {/* Card Header */}
            <div className="bg-linear-to-r from-gray-50 to-white border-b border-gray-200 p-6">
              <div className="flex flex-col items-center justify-between">
                <div className="flex items-center">
                  <div className="p-3 bg-red-500 rounded-xl mr-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-black">{agenceResult.matchedName || agenceName}</h1>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{agenceData.province}</span>
                    </div>
                  </div>
                </div>
                <Link href="https://temu.to/k/e2evg6evki8" className="my-6" target="_blank" rel="noopener noreferrer">
                 <Image src="/images/1000bundletemu.png" className="rounded" alt="Temu" width={1500} height={784} />
                </Link>
                  <div className="text-center">
                    <div className="text-6xl font-black text-red-500 mb-1">{agenceData.codePostal}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Code Postal</div>
                  </div>
              
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Basic Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      Informations Géographiques
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Globe className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Région</div>
                          <div className="font-medium text-black">{agenceData.region}</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Map className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Province/Préfecture</div>
                          <div className="font-medium text-black">{agenceData.province}</div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-red-50 rounded-lg">
                        <Mailbox className="h-5 w-5 text-red-500 mr-3" />
                        <div>
                          <div className="text-xs text-gray-500">Zone Postale</div>
                          <div className="font-bold text-black">{agenceName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Détails de la Zone
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Navigation className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Couverture Postale</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Cette zone couvre {agenceName} et ses environs immédiats dans la province de {agenceData.province}.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Compass className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Localisation</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Situé dans la région de {agenceData.region}, ce code postal est utilisé pour toutes les adresses de {agenceName}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Province Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Dans la même province</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{safeAgencesInProvince.length} agences</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  La province de {agenceData.province} comprend {safeAgencesInProvince.length} zones postales différentes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Random Agences Section */}
        {randomAgences.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">Autres zones postales à découvrir</h2>
              <Link
                href="/agences"
                className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center"
              >
                Voir toutes
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {randomAgences.map((agence: any) => (
                <Link
                  key={agence.AGENCE}
                  href={`/agences/${encodeURIComponent(agence.AGENCE)}`}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-black group-hover:text-red-600 transition-colors line-clamp-1">
                          {agence.AGENCE}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{agence.PROVINCE}</span>
                        </div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
                        <Hash className="h-4 w-4 text-gray-500 group-hover:text-red-500" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-gray-500">Code Postal</div>
                        <div className="text-xl font-black text-red-500">{agence.NOUVEAU_CODE_POSTAL}</div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Globe className="h-3 w-3 mr-1" />
                        <span className="truncate max-w-[100]">{agence.REGION_POSTALE}</span>
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

            {/* CTA Card */}
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
          </div>
        ) : safeAgencesInProvince.length > 0 ? (
          // Only current agence in province
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-black mb-2">Zone postale unique</h3>
                  <p className="text-gray-600">
                    {agenceName} est actuellement la seule zone postale répertoriée dans la province de {agenceData.province}.
                    Explorez d'autres provinces pour découvrir plus de codes postaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>

     
    </div>
  );
}