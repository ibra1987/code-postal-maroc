import { provinces } from "@/assets/provinces";
import { Region } from "../../regions-postales/[regionName]/page";
import Link from "next/link";
import { Metadata } from "next";
import { getProvinceMetadata } from "@/assets/metadata";
import Image from "next/image";



type Props = {
  params: Promise<{ provinceName: string }>
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const provinceName = (await params).provinceName
 
  
  const meta = getProvinceMetadata(provinceName) ?? getProvinceMetadata(provinceName.charAt(0).toUpperCase()+provinceName.slice(1))
  
 console.log(provinceName.toLowerCase().charAt(0).toUpperCase()+provinceName.slice(1))
   return {
    title:meta?.title,
    description:`${meta?.description} - Code Postal Maroc | ${provinceName}`,
   
  }
}
export async function generateStaticParams() {
  return Object.keys(provinces).map((region) => ({
    provinceName: region,
  }));
}

async function ParProvincePage({ params }: { params: Promise<{ provinceName: string }> }) {
  const {provinceName} = await params
  const name = provinceName.toUpperCase().replaceAll("-"," ")
  const data = provinces[name] 
  ?? provinces[provinceName] 
  ?? provinces[provinceName.toUpperCase()]


  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start pt-10 md:px-10 ">
              <Link className="my-10" href='https://mb38.com/lnk.asp?o=8338&c=168794&a=236088&k=014B31586853C1351A6F9BDA977BA9FD&l=7050'><Image alt="kiwi.com" src='https://maxbounty.com/resources/getimage.asp?a=236088&m=3589&o=8338&i=168794.dat' width={728} height={90} /></Link>

      <h1 className="w-full text-left text-2xl md:ext-4xl font-bold mb-10">
        Liste des codes postaux de la province
        <span className="text-red-600 m-2 underline">
          {name}
        </span>
      </h1>
      {data?.map((reg: Region,index) => {
        return (
          <div key={data[0].NOUVEAU_CODE_POSTAL+"-"+index} className=" w-full border-b even:bg-gray-200">
            <h3 className="w-full">
              <Link
                className="hover:bg-red-600  hover:text-white w-full   flex justify-between rounded items-center p-3  "
                href={`/agences/${reg.AGENCE.toLowerCase().replaceAll(" ","-")}`}
              >
                <span>{reg.AGENCE}</span>
                <span>{reg.NOUVEAU_CODE_POSTAL}</span>
              </Link>
            </h3>
          </div>
        );
      })}
    </main>
  );
}

export default ParProvincePage;
