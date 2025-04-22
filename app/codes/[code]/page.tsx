
import { codePostaux } from "@/assets/codes_postaux";
import { getCodeMetaData } from "@/assets/metadata";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


// We&apos;ll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn&apos;t been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths
 
type Props = {
  params: Promise<{ code: string }>
}


 const baseUrl ="https://codepostalmaroc.com"

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const code = (await params).code
 

  const meta = getCodeMetaData(code)
  return {
    title:meta?.title,
    description:`${meta?.description} - Code Postal Maroc | ${code}`,
    alternates:{
      canonical: `${baseUrl}/codes/${code}`
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
    <main className="w-full flex min-h-screen flex-col items-center justify-start pt-10 md:px-10">
            <Link className="my-10" href='https://mb38.com/lnk.asp?o=8338&c=168794&a=236088&k=014B31586853C1351A6F9BDA977BA9FD&l=7050'><Image alt="kiwi.com" src='https://maxbounty.com/resources/getimage.asp?a=236088&m=3589&o=8338&i=168794.dat' width={728} height={90} /></Link>

     <h1 className="w-full text-center text-4xl font-bold mb-10">
       Le code postal
        <span className="text-red-500 m-2 underline">
          {foundCode}
        </span>
      </h1>
      <Link className="my-10" href='https://afflat3e1.com/trk/lnk/CDD99D98-5252-4D03-A2C4-E80015E98115/?o=28202&c=179234&a=236088&k=B4E14A7142777DCF98B50B838500C109&l=30905'><Image alt="survey" src='https://maxbounty.com/resources/getimage.asp?a=236088&m=13878&o=28202&i=179234.dat' width={350} height={350}/ > </Link>

      <div className="w-full flex flex-col justify-center items-center   ">
        <h2 className="w-full  text-center font-black text-3xl text-red-500 mb-6">
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