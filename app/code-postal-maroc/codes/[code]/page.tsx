
import { codePostaux } from "@/assets/codes_postaux";
import { getCodeMetaData } from "@/assets/metadata";
import { ChevronRight } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

export let revalidate = 60*60*60*24;

// We&apos;ll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn&apos;t been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths
 
type Props = {
  params: Promise<{ code: string }>
}


 const baseUr ="https://codepostalmaroc.com"

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const code = (await params).code
 

  const meta = getCodeMetaData(code)
  return {
    title:meta?.title,
    description:`${meta?.description} - Code Postal Maroc | ${code}`,
    alternates:{
      canonical: `${baseUr}/code-postal-maroc/codes/${code}`
    }
   
  }
}
   
export async function generateStaticParams() {
   

  return Object.keys(codePostaux).map((code) => ({
    provinceName: code
  }));
}


async function ParCodePostalPage({params}:{params:Promise<{code:string}>}) {
  const  {code}  = await params
  const codePostal = parseInt(code)
    const foundCode = Object.keys(codePostaux).find(code=>parseInt(code) === codePostal )
    if(!foundCode) {
      return   <main className="flex min-h-screen flex-col items-center justify-start px-4">
        Aucune resulat correspond à votre recherche (:
      </main>
    }
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start">
     <h1 className="w-full text-center text-4xl font-bold mb-10">
       Le code postal
        <span className="text-red-500 m-2 underline">
          {foundCode}
        </span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center   ">
        <h2 className="w-full  text-center font-black text-5xl text-red-500 mb-6">
           Agence: {codePostaux[foundCode as keyof typeof codePostaux][0].AGENCE}
        </h2>
        <div className="flex w-full flex-col justify-start items-start text-gray-500">
            <span className="flex gap-2">
            <ChevronRight/> Région: {codePostaux[foundCode as keyof typeof codePostaux][0].REGION_POSTALE}
            </span>
            <span className="flex gap-2">
            <ChevronRight/>Province: {codePostaux[foundCode as keyof typeof codePostaux][0].PROVINCE}
            </span>
        </div>
        <div>

        </div>
      </div>
  </main>
  )
  
}

export default ParCodePostalPage