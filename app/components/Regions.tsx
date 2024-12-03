import codes from "@/assets/codes"
import { Region } from "../code-postal-maroc/[regionName]/page";
import Link from "next/link";


const regionsPostales =  codes.reduce((acc: Record<string, Region[]>, reg: Region) => {
    if (acc[reg.REGION_POSTALE]) {
      acc[reg.REGION_POSTALE].push(reg);
    } else {
      acc[reg.REGION_POSTALE] = [reg];
    }
    return acc;
  }, {} as Record<string, Region[]>);

const Regions = () => {
  return (
    <div className="w-full mt-16">
        <h2 className="font-black text-2xl m-2">Les règions postales au Maroc</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-5">
        {Object.keys(regionsPostales).map((region,index)=>{
            return (
                <div key={regionsPostales[region][0].NOUVEAU_CODE_POSTAL+"-"+index} className="p-4 bg-gradient-to-tr from-gray-700 to-black text-white flex justify-center items-center rounded">

                    <h3><Link className="hover:underline   text-white " href={`/code-postal-maroc/${region.toLowerCase()}`}>{region.toLowerCase().charAt(0).toUpperCase()+region.slice(1).toLowerCase()}</Link></h3>
            </div>
            )
        })}

        </div>
    </div>
  )
}

export default Regions