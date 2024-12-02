import { provinces } from "@/assets/provinces"
import Link from "next/link"






const Provinces = () => {
  return (
    <div className="w-full mt-16">
          <h2 className="font-black text-2xl m-2">Toutes les provinces postales au Maroc </h2>
        <div className="w-full justify-center grid grid-cols-3 md:grid-cols-5    gap-3">
          {Object.keys(provinces).map((province)=>{
            return (
              <div key={provinces[province][0].NOUVEAU_CODE_POSTAL} className="p-4  flex justify-start items-center rounded">

               <Link href={`/code-postal-maroc/provinces/${province.toLowerCase().replaceAll(" ","-")}`} className="hover:text-red-500 p-2 ">
               {province.toLowerCase().charAt(0).toUpperCase()+province.toLowerCase().slice(1)}
               </Link>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default Provinces