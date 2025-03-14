import codes from "@/assets/codes";
import { Region } from "../regions-postales/[regionName]/page";
import Link from "next/link";
import { regionsDescription } from "@/assets/regionsDescription";
import { ArrowRight } from "lucide-react";

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
      <h2 className=" w-full text-center font-black text-gray-700 text-3xl m-2">
        Les règions postales au Maroc
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {Object.keys(regionsPostales).map((region, index) => {
          const lowerCaseRegionName = region.toLowerCase();
          const firstLetterCapitalized =
            lowerCaseRegionName.charAt(0).toUpperCase() +
            lowerCaseRegionName.slice(1);
          return (
            <div
              key={regionsPostales[region][0].NOUVEAU_CODE_POSTAL + "-" + index}
              className="p-3 md:p-6 border-2 shadow-sm  hover:border-black transition duration-150 ease-in-out bg-gradient-to-tr text-gray-800 flex flex-col justify-center items-start rounded"
            >
              {/**Region name */}
              <h5 className="text-xl font-bold">
                {region.toLowerCase().charAt(0).toUpperCase() +
                  region.slice(1).toLowerCase()}
              </h5>
              {/**region excerpt desc */}
              <p className="text-gray-600 text-sm">
                {regionsDescription[
                  firstLetterCapitalized as keyof typeof regionsDescription
                ]
                  ? `${regionsDescription[
                      firstLetterCapitalized as keyof typeof regionsDescription
                    ]?.description?.slice(0, 119)}...`
                  : ""}
              </p>
              <Link
                className="font-medium mt-2 text-red-700 hover:underline transition duration-100 ease-in-out text-sm flex gap-2 justify-center items-center   "
                href={`/regions-postales/${region.toLowerCase()}`}
              >
                Voir les codes postaux{" "}<ArrowRight  size={14}/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Regions;
