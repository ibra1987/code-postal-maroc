import { provinces } from "@/assets/provinces"
import Link from "next/link"






const Provinces = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 mt-16">
          <h2 className="font-black text-2xl m-2">Toutes les provinces postales au Maroc </h2>
        <div className="w-full justify-items-center grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   gap-1 text-white  bg-gradient-to-tr from-indigo-600 to-indigo-950 p-6 rounded-md">
          {Object.keys(provinces).slice(0,12).map((province,index)=>{
            return (
              <div key={provinces[province][0].NOUVEAU_CODE_POSTAL+"-"+index} className="p-2  flex justify-start items-center rounded">

               <Link href={`/code-postal-maroc/provinces/${province.toLowerCase().replaceAll(" ","-")}`} className="hover:text-red-500  ">
               {province.toLowerCase().charAt(0).toUpperCase()+province.toLowerCase().slice(1)}
               </Link>
                </div>
            )
          })}
        </div>
        <div className="w-full justify-items-center grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   gap-1 text-white  bg-gradient-to-tr from-indigo-600 to-indigo-950 p-6 rounded-md">
          {Object.keys(provinces).slice(13,25).map((province,index)=>{
            return (
              <div key={provinces[province][0].NOUVEAU_CODE_POSTAL+"-"+index} className="p-2  flex justify-start items-center rounded">

               <Link href={`/code-postal-maroc/provinces/${province.toLowerCase().replaceAll(" ","-")}`} className="hover:text-red-500  ">
               {province.toLowerCase().charAt(0).toUpperCase()+province.toLowerCase().slice(1)}
               </Link>
                </div>
            )
          })}
        </div>
        <div className="w-full justify-items-center grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   gap-1 text-white  bg-gradient-to-tr from-indigo-600 to-indigo-950 p-6 rounded-md">
          {Object.keys(provinces).slice(26,38).map((province,index)=>{
            return (
              <div key={provinces[province][0].NOUVEAU_CODE_POSTAL+"-"+index} className="p-2  flex justify-start items-center rounded">

               <Link href={`/code-postal-maroc/provinces/${province.toLowerCase().replaceAll(" ","-")}`} className="hover:text-red-500  ">
               {province.toLowerCase().charAt(0).toUpperCase()+province.toLowerCase().slice(1)}
               </Link>
                </div>
            )
          })}
        </div>
        <div className="w-full justify-items-center grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   gap-1 text-white  bg-gradient-to-tr from-indigo-600 to-indigo-950 p-6 rounded-md">
          {Object.keys(provinces).slice(39,51).map((province,index)=>{
            return (
              <div key={provinces[province][0].NOUVEAU_CODE_POSTAL+"-"+index} className="p-2  flex justify-start items-center rounded">

               <Link href={`/code-postal-maroc/provinces/${province.toLowerCase().replaceAll(" ","-")}`} className="hover:text-red-500  ">
               {province.toLowerCase().charAt(0).toUpperCase()+province.toLowerCase().slice(1)}
               </Link>
                </div>
            )
          })}
        </div>
        <div className="w-full justify-items-center grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4   gap-1 text-white  bg-gradient-to-tr from-indigo-600 to-indigo-950 p-6 rounded-md">
          {Object.keys(provinces).slice(52).map((province,index)=>{
            return (
              <div key={provinces[province][0].NOUVEAU_CODE_POSTAL+"-"+index} className="p-2  flex justify-start items-center rounded">

               <Link href={`/code-postal-maroc/provinces/${province.toLowerCase().replaceAll(" ","-")}`} className="hover:text-red-500  ">
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