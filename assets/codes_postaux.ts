import { Region } from "@/app/code-postal-maroc/regions/[regionName]/page";
import codes from "./codes";


const codePostaux = codes.reduce((acc: Record<string, Region[]>, reg: Region) => {
    if (acc[reg.NOUVEAU_CODE_POSTAL]) {
      acc[reg.NOUVEAU_CODE_POSTAL].push(reg);
    } else {
      acc[reg.NOUVEAU_CODE_POSTAL] = [reg];
    }
    return acc;
  }, {} as Record<string, Region[]>);


  export {codePostaux}