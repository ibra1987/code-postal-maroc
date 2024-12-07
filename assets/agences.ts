import { Region } from "@/app/code-postal-maroc/regions/[regionName]/page";
import codes from "./codes";


const agences = codes.reduce((acc: Record<string, Region[]>, reg: Region) => {
    if (acc[reg.AGENCE]) {
      acc[reg.AGENCE].push(reg);
    } else {
      acc[reg.AGENCE] = [reg];
    }
    return acc;
  }, {} as Record<string, Region[]>);


  export {agences}