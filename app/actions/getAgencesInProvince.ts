"use server"

import codePostal from "@/assets/codes"
import { getAgences } from "./getAgences"


export async function getAgencesInProvince(agence: string){
    const agencesObject = await getAgences()
    if(!agence || !agencesObject[agence]  ){
        return null
    }
    
    
    const agenceProvince = agencesObject[agence].province
    const agencesInProvince = codePostal.filter((codePostal)=>codePostal.PROVINCE.toUpperCase() === agenceProvince.toUpperCase())
    return agencesInProvince
}