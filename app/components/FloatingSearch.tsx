"use client"

import { ChangeEvent, useState } from "react"
import { Region } from "../code-postal-maroc/regions/[regionName]/page"
import codes from "@/assets/codes"
import { CircleX } from "lucide-react"



function FloatingSearch({close}:{close:()=>void}) {
    const [result,setResult]=useState<Region[]>([])
    const showSearchResults = (e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value.toLowerCase().trim()
        if (!value) {
          setResult([]);
          close()
          return;
        }
        const filteredResults = codes.filter(record=>(
          record.AGENCE.toLowerCase().includes(value) ||
          record.NOUVEAU_CODE_POSTAL.toString().includes(value) ||
          record.PROVINCE.toLowerCase().includes(value) ||
          record.REGION_POSTALE.toLowerCase().includes(value)
        ))
        setResult(filteredResults);
    }
  return (
    <div className="min-h-screen w-screen mx-auto bg-black/25 p-20   flex flex-col justify-start items-center absolute top-0 left-0 bg-white z-100 p-4">
        <div className="w-full text-sm hover:cursor-pointer flex justify-end items-center">
        <CircleX className="z-50  " color="red" onClick={close} />
         </div>
        <form className="w-full lg:w-4/5">
            <input autoFocus={true} onChange={showSearchResults} type="search" className="w-full border-b p-2 text-gray-600" placeholder="Taper votre recherche ici" />
        </form>


 <div className="w-full flex flex-col justify-start items-center">
  {result && result.length>0 &&(
    <div className="w-full lg:w-4/5 items-start justify-center">
        

        <div className="w-full grid grid-cols-4 justify-items-start text-white p-2 bg-red-500 ">
        <h3>région</h3>
            <h3>province</h3>
            <h3>agence</h3>
            <h3>code postal</h3>
          </div>
          {result.map((record) => (
            <div key={record.NOUVEAU_CODE_POSTAL} className="grid grid-cols-4 p-2 text-sm md:text-base   text-gray-600">
              <span>{record.REGION_POSTALE}</span>
              <span>{record.PROVINCE}</span>
              <span>{record.AGENCE}</span>
              <span>{record.NOUVEAU_CODE_POSTAL}</span>
            </div>
          ))}
        </div>
  )}
 </div>

    </div>
  )
}

export default FloatingSearch