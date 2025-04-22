import codes from "@/assets/codes";
import { Region } from "../regions-postales/[regionName]/page";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";


export const metadata : Metadata = {
  title:"Code Postal Maroc | Toutes Les Règions Postales au Maroc",
  description:"La liste des règions postale au Maroc. Les régions postales au Maroc sont divisées en 12 régions."
}


const regionsPostales =  codes.reduce((acc: Record<string, Region[]>, reg: Region) => {
  if (acc[reg.REGION_POSTALE]) {
    acc[reg.REGION_POSTALE].push(reg);
  } else {
    acc[reg.REGION_POSTALE] = [reg];
  }
  return acc;
}, {} as Record<string, Region[]>);

function RegionsPostalesMarocPage() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start px-3 pt-10 md:px-10">
        <Link className="my-10" href='https://mb38.com/lnk.asp?o=8338&c=168794&a=236088&k=014B31586853C1351A6F9BDA977BA9FD&l=7050'><Image alt="kiwi.com" src='https://maxbounty.com/resources/getimage.asp?a=236088&m=3589&o=8338&i=168794.dat' width={728} height={90} /></Link>

     <h1 className="w-full text-left text-4xl font-black">
          Liste des régions postales au Maroc
     </h1>
    
      <p className="w-full text-left text-xl text-gray-700 my-4">
          Les régions postales au Maroc sont divisées en 12 régions.
          Voici ci dessous la liste complète des ces régions.
     </p>
     <div className="w-full grid grid-cols-2">
     {Object.keys(regionsPostales).map((region,index)=>{
            return (
                <div key={index} className="w-full p-4 flex flex-col justify-start items-left rounded">

                    <h3><Link className="hover:text-red-500 flex" href={`/regions-postales/${region.toLowerCase()}`}><ChevronRight/> {region}</Link></h3>
                    
            </div>
            )
        })}
     </div>

   </main>
  )
}

export default RegionsPostalesMarocPage