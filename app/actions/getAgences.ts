"use server"

import codesPostaux from "../../assets/codes";

export async function getAgences(){
    const agences: Record<string, {region: string, province: string, codePostal: number}> ={}
    codesPostaux.map((codePostal)=>{
        agences[codePostal.AGENCE.toUpperCase()] = {
            region: codePostal.REGION_POSTALE.toUpperCase(),
            province: codePostal.PROVINCE.toUpperCase(),
            codePostal: codePostal.NOUVEAU_CODE_POSTAL
        }
    })
   return agences
}


