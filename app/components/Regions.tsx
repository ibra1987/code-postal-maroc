import codes from "@/assets/codes";
import { Region } from "../regions-postales/[regionName]/page";
import Link from "next/link";

const regionsPostales = codes.reduce(
  (acc: Record<string, Region[]>, reg: Region) => {
    if (acc[reg.REGION_POSTALE]) {
      acc[reg.REGION_POSTALE].push(reg);
    } else {
      acc[reg.REGION_POSTALE] = [reg];
    }
    return acc;
  },
  {} as Record<string, Region[]>
);

const Regions = () => {
  return (
    <div className="w-full flex flex-col gap-8 mt-16">
      <h2 className="  font-black text-gray-700 text-3xl m-2">
        Les règions postales au Maroc
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-5">
        {Object.keys(regionsPostales).map((region, index) => {
          return (
            <Link
              className="font-medium   "
              href={`/regions-postales/${region.toLowerCase()}`}
            >
              <div
                key={
                  regionsPostales[region][0].NOUVEAU_CODE_POSTAL + "-" + index
                }
                className="p-4 border-2 shadow-sm hover:bg-green-500 hover:border-2 hover:text-white bg-gradient-to-tr text-gray-800 flex justify-center items-center rounded"
              >
                {region.toLowerCase().charAt(0).toUpperCase() +
                  region.slice(1).toLowerCase()}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Regions;
