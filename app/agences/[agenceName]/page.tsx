
import { agences } from "@/assets/agences";
import { getAgenceMetaData } from "@/assets/metadata";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";


export const dynamicParams = true; // or false, to 404 on unknown paths
 
type Props = {
  params: Promise<{ agenceName: string }>
}



export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const agence = (await params).agenceName
  const agenceName = agence.split("-").join(" ")
 

  const meta = getAgenceMetaData(agenceName)
  return {
    title:meta?.title,
    description:`${meta?.description}`,
  
   
  }
}
   
export async function generateStaticParams() {

  return Object.keys(agences).map((agence) => ({
    provinceName: agence
  }));
}


async function ParAgenceNamePage({params}:{params:Promise<{agenceName:string}>}) {

  const { agenceName} = await params
  const name = agenceName.toUpperCase().replaceAll("-"," ")
  const agence = Object.keys(agences).find(ag=>ag === name )

    if(!agence) {
      return   <main className="flex min-h-screen flex-col items-center justify-start px-3 md:p-20 ">
        Aucune resulat correspond à votre recherche (:
      </main>
    }
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start px-3 md:p-20 ">
      

     <h1 className="w-full text-center text-2xl md:text-4xl font-bold mb-10">
        Code Postal de l&apos;agence
        <span className="text-red-500 m-2 underline">
          {agence}
        </span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center   ">
        <h2 className="w-full  text-center font-black text-5xl text-red-500">
            {agences[agence as keyof typeof agences][0].NOUVEAU_CODE_POSTAL}
        </h2>
        <div className="flex w-full flex-col justify-start items-start text-gray-500">
            <span className="flex gap-2">
            <ChevronRight/> Région: {agences[agence as keyof typeof agences][0].REGION_POSTALE}
            </span>
            <span className="flex gap-2">
            <ChevronRight/>Province: {agences[agence as keyof typeof agences][0].PROVINCE}
            </span>
        </div>
        <div>

        </div>
      </div>
  </main>
  )
  
}

export default ParAgenceNamePage