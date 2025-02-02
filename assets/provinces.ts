import { Region } from "@/app/regions-postales/[regionName]/page";
import codes from "./codes";


const provinces = codes.reduce((acc: Record<string, Region[]>, reg: Region) => {
    if (acc[reg.PROVINCE]) {
      acc[reg.PROVINCE].push(reg);
    } else {
      acc[reg.PROVINCE] = [reg];
    }
    return acc;
  }, {} as Record<string, Region[]>);


  export {provinces}