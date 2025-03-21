import codes  from "@/assets/codes"
import { getRegionMetadata } from "@/assets/metadata"
import { regionsDescription } from "@/assets/regionsDescription"
import { ChevronRight } from "lucide-react"
import type { Metadata } from 'next'

import Link from "next/link"
import Script from "next/script"



export interface Region {
    REGION_POSTALE:string,
    PROVINCE:string,
    AGENCE:string,
    NOUVEAU_CODE_POSTAL:number
  }
   
  // Next.js will invalidate the cache when a
  // request comes in, at most once every 60 seconds.
   
  // We&apos;ll prerender only the params from `generateStaticParams` at build time.
  // If a request comes in for a path that hasn&apos;t been generated,
  // Next.js will server-render the page on-demand.
  export const dynamicParams = true // or false, to 404 on unknown paths

 
type Props = {
  params: Promise<{ regionName: string }>
}


 

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const regionName = (await params).regionName
 

  const meta = getRegionMetadata(regionName.toLowerCase().charAt(0).toUpperCase()+regionName.slice(1))
  return {
    title:meta?.title,
    description:`${meta?.description} - Code Postal Maroc | ${regionName}`,
    
  }
}
   
  export async function generateStaticParams() {

    return codes.map((region:Region) => ({
      regionName: region.REGION_POSTALE.toLowerCase().trim(),
    }))
  }
   
  export default async function Page({ params }: { params: Promise<{ regionName: string }> }) {

    //state 
    const {regionName} = await params
    const firstLetterCapitalized = regionName?.charAt(0).toUpperCase()+regionName.slice(1)
    const regionsCodes: Region[] = codes.filter(
      (reg: Region) => reg.REGION_POSTALE === regionName.toUpperCase()
    )!
    const provinces = regionsCodes.reduce((acc: Record<string, Region[]>, reg: Region) => {
      if (acc[reg.PROVINCE]) {
        acc[reg.PROVINCE].push(reg);
      } else {
        acc[reg.PROVINCE] = [reg];
      }
      return acc;
    }, {} as Record<string, Region[]>);
  if(!regionsCodes.length){
    return (
      <main className="flex min-h-screen flex-col items-center justify-start  ">
        Aucune resulat correspond à votre recherche (:
      </main>
    )
  }
    // structured data 



    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      "name": regionName,
      "addressRegion": regionName,
      "containedIn": {
        "@type": "Country",
        "name": "Morocco",
        "addressCountry": "MA"
      },
      "hasPostalCode": {
        "@type": "PostalAddress",
        "addressLocality": regionName,
        "postalCode": regionsCodes[0].NOUVEAU_CODE_POSTAL
      }
    };
  



    return (
     <>
     
    <Script
     strategy="afterInteractive"
    id="structured-data-regions"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} 
    />
     
     <main className="w-full flex min-h-screen flex-col items-center justify-start pt-10 md:px-10 ">
       
        <h1 className="w-full text-left text-4xl font-bold">Liste des codes postaux de la region 
          <span className=" mx-2">
        {regionName?.toUpperCase() }
        </span></h1>
        <p className="my-6 indent-3 text-gray-700 tracking-wide leading-8">
            {regionsDescription[firstLetterCapitalized as keyof typeof regionsDescription].description ?? ""}
          </p>
        <div className="w-full mt-12">
          <h2 className="font-medium">Provinces de la region {regionName?.toUpperCase()}</h2>
          <div className="flex flex-col justify-start items-start bg-gray-100 p-4 rounded border">
            {Object.keys(provinces).map((province)=>{
              return (
                <div className="w-full flex justify-between items-start gap-4 p-1 border-b" key={province}>
                  <div className="text-gray-700"> <Link className="hover:text-red-500 scroll-smooth" href={`#${province}`}>{province}</Link>:</div>
                  <div className="text-red-500"> {provinces[province].length}</div>
                 </div>
              )
            })}

          </div>
         
        </div>
        <div className="w-full flex-col gap-3">
           {Object.keys(provinces).map((province,index)=>{
            return (
              <div  key={province+"-"+index} className="flex flex-col gap-3 ">
                 
               <h2 id={province} className="w-full flex  justify-start items-center text-2xl my-6 font-bold">
               <ChevronRight/> <span>Province de:{" "} {province}</span>
               </h2>
              
               { provinces[province].map((reg)=>{
                return (
                  <div className="w-full flex justify-between items-start gap-4 p-1 border-b" key={reg.NOUVEAU_CODE_POSTAL}>
                  <Link href={`/agences/${reg.AGENCE.toLowerCase().replaceAll(" ","-")}`} className="hover:bg-red-500 hover:text-white w-full px-2 flex justify-between rounded items-center p-2  ">
                  <span>
                    {reg.AGENCE}
                  </span>
                  <span>
                    {reg.NOUVEAU_CODE_POSTAL}
                  </span>
                  </Link>
                   </div>
                )
               })}
                               
              </div>
            )})}
          
        </div>
      </main>
     </>
    )
  }