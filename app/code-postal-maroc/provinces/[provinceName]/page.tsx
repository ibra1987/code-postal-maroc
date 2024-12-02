import { provinces } from "@/assets/provinces";
import { Region } from "../../[regionName]/page";
import Link from "next/link";

export const revalidate = 6;

// We&apos;ll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn&apos;t been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  return Object.keys(provinces).map((region) => ({
    provinceName: region,
  }));
}

async function ParProvincePage({ params }: { params: Promise<{ provinceName: string }> }) {
  const {provinceName} = await params
  const name = provinceName.toUpperCase().replaceAll("-"," ")
  const data = provinces[name] ?? provinces[provinceName] ?? provinces[provinceName.toUpperCase()]
  return (
    <div className="w-full flex flex-col justify-start items-center gap-1  ">
      <h1 className="w-full text-left text-4xl font-bold mb-10">
        Liste des codes postaux de la province
        <span className="text-red-500 m-2 underline">
          {name}
        </span>
      </h1>
      {data?.map((reg: Region) => {
        return (
          <div key={data[0].NOUVEAU_CODE_POSTAL} className=" w-full border-b">
            <h3 className="w-full">
              <Link
                className="hover:bg-red-500 hover:text-white w-full  px-2 flex justify-between rounded items-center p-2  "
                href={`/code-postal-maroc/agences/${reg.AGENCE.toLowerCase().replaceAll(" ","-")}`}
              >
                <span>{reg.AGENCE}</span>
                <span>{reg.NOUVEAU_CODE_POSTAL}</span>
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default ParProvincePage;
