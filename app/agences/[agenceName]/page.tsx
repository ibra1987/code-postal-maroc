
import { agences } from "@/assets/agences";
import { getAgenceMetaData } from "@/assets/metadata";
import { provinces } from "@/assets/provinces";
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
      return   <main className="pt-10 flex min-h-screen flex-col items-center justify-start  ">
        Aucune resulat correspond à votre recherche (:
      </main>
    }
  return (
    <main className="pt-10 w-full flex min-h-screen flex-col gap-6 items-center justify-start md:px-10 ">
     <h1 className="w-full text-center text-2xl font-bold mb-10">
        Code Postal de l&apos;agence
        <span className="text-red-500 m-2 ">
          {agence}
        </span>
      </h1>
      <div className=" flex flex-col justify-center gap-4 items-center border rounded -md p-6  text-white bg-red-500 ">
        <h2 className="  text-center font-black text-5xl ">
            {agences[agence as keyof typeof agences][0].NOUVEAU_CODE_POSTAL}
        </h2>
        <div className="flex w-full flex-col gap-2 justify-start items-start ">
       
        <span className="flex gap-2">
            <ChevronRight/>Agence: {agence.toUpperCase()}
            </span>
            <span className="flex gap-2">
            <ChevronRight/>Province Postale: {agences[agence as keyof typeof agences][0].PROVINCE}
            </span>
            <span className="flex gap-2">
            <ChevronRight/> Région Postale: {agences[agence as keyof typeof agences][0].REGION_POSTALE}
            </span>
           
        </div>
        <div>

        </div>
      </div>
      <div className="w-full flex flex-col gap-4 justify-start items-start">
        <h2 className="text-2xl font-bold">Resultas similaires</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="w-full rounded border p-4  text-gray-700">
        {provinces[agences[agence as keyof typeof agences][0].PROVINCE as keyof typeof provinces].slice(0,4).map((res)=>(
            <div className="w-full flex justify-between items-center  gap-2 " key={res.AGENCE}>
                  <span>
                     {res.AGENCE}
                  </span>
                  <span>
                    {res.NOUVEAU_CODE_POSTAL}
                  </span>
              </div>
           ))}
        </div>
            <div className="w-full rounded border p-4  text-gray-700">
            {provinces[agences[agence as keyof typeof agences][0].PROVINCE as keyof typeof provinces].slice(4,8).map((res)=>(
            <div className="w-full flex justify-between items-center gap-2 " key={res.AGENCE}>
                  <span>
                     {res.AGENCE}
                  </span>
                  <span>
                    {res.NOUVEAU_CODE_POSTAL}
                  </span>
              </div>
           ))}
            </div>
           <div className="w-full rounded border p-4  text-gray-700">
           {provinces[agences[agence as keyof typeof agences][0].PROVINCE as keyof typeof provinces].slice(8,12).map((res)=>(
            <div className="w-full flex justify-between items-center  gap-2 " key={res.AGENCE}>
                  <span>
                     {res.AGENCE}
                  </span>
                  <span>
                    {res.NOUVEAU_CODE_POSTAL}
                  </span>
              </div>
           ))}
           </div>
        </div>
      </div>
  </main>
  )
  
}

export default ParAgenceNamePage