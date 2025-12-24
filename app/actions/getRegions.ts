"use server";

import { Agence, getProvinces } from "./getProvinces";
type Province = {
    province: string;
    agences: Agence[];
}



export async function getRegions(){
    const regions :Record<string, Province[]> ={}
    const provinces = await getProvinces()
    Object.keys(provinces).map((province)=>{
      if(!Object.hasOwn(regions,provinces[province].region.toUpperCase())){
        regions[provinces[province].region.toUpperCase()] = []
      }
      regions[provinces[province].region.toUpperCase()].push({
        province:province.toUpperCase(),
        agences:provinces[province].agences
      })
    })
    return regions
}