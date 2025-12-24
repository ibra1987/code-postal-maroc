"use server";

import codes from "@/assets/codes";

export type Agence ={
    name:string;
    region:string;
    codePostal:number;
    province:string;
}


export async function getProvinces() {
    const provinces  :Record<string,{region:string,agences:Agence[]}> = {}
    codes.map((code)=>{
        if(!Object.hasOwn(provinces,code.PROVINCE.toUpperCase())){
            provinces[code.PROVINCE.toUpperCase()]= {
                region:code.REGION_POSTALE,
                agences:[]
            }
        }else{
            provinces[code.PROVINCE.toUpperCase()].agences.push({
                region:code.REGION_POSTALE,
                name:code.AGENCE.toUpperCase(),
                codePostal:code.NOUVEAU_CODE_POSTAL,
                province:code.PROVINCE
            })
        }
    })

    return provinces
}


