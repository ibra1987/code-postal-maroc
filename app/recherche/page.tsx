import codes from "@/assets/codes"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata : Metadata = {
  title:"Trouvez facilement le code postal de n'importe quelle localité, ville ou province au Maroc.",
  description:"Un outil de recherche facile et efficace des codes postaux au Maroc. "
}

async function SearchPage({searchParams}:{searchParams:Promise<{search:string}>}){
    const {search} = await searchParams
   
    
    if(!search){
        return <main className="flex min-h-screen flex-col items-center justify-start">Aucune resulat correspond à votre recherche</main>
    }

    const normalize =( str: string) => str.replace(/\s+/g, " ").trim().toLowerCase();
    const query = normalize(decodeURIComponent(search));
    const minSubstringLength = 4;
    
    const cleanSpace = (str: string) => str.toLowerCase().replace(/\s+/g, ''); // Remove spaces
    const cleanQuery = cleanSpace(query);

    const searchResults1 = codes.filter((record)=>{
      return (
        cleanSpace(record.AGENCE).includes(cleanQuery) ||
        record.NOUVEAU_CODE_POSTAL.toString().includes(cleanQuery) ||
        cleanSpace(record.PROVINCE).includes(cleanQuery) ||
        cleanSpace(record.REGION_POSTALE).includes(cleanQuery) 
      )
    })


  

 
    
    const searchResults2 = codes.filter(record => {
      return (
     
        (cleanQuery.length >= minSubstringLength &&
          (cleanSpace(record.AGENCE).includes(cleanQuery.slice(0, minSubstringLength)) ||
          cleanSpace(record.PROVINCE).includes(cleanQuery.slice(0, minSubstringLength)) ||
          cleanSpace(record.REGION_POSTALE).includes(cleanQuery.slice(0, minSubstringLength))))
      );
    });
    

const searchResults = searchResults1.length >0 ? searchResults1 : searchResults2

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-start  pt-10 ">

            <div className="w-full flex justify-start gap-3 text-gray-500 mt-10 ">
               <h3 className="text-xl">
                Resultats de recherche pour : <span className="font-bold">{search}</span>
               </h3>

            </div>
        <div className="w-full  rounded   ">

          
          {searchResults.length >0 ? (
            <>
            <div className="w-full grid grid-cols-3 md:grid-cols-4 justify-items-center text-white p-2 bg-slate-600 border rounded ">
            <h3 className="hidden  md:block">région</h3>
            <h3>province</h3>
            <h3>agence</h3>
            <h3>code postal</h3>
          </div>
               {searchResults?.map((record) => (
              <div key={record.NOUVEAU_CODE_POSTAL} className="grid grid-cols-3 md:grid-cols-4 justify-items-center  bg-slate-200/60 p-2 text-sm md:text-base border-b border-b-blue-100 odd:bg-slate-200/20   text-gray-600">
                <span className="hidden md:inline-block">{record.REGION_POSTALE}</span>
                <span>{record.PROVINCE}</span>
                <span>{record.AGENCE}</span>
                <span>{record.NOUVEAU_CODE_POSTAL}</span>
              </div>))}
            </>
            ): <p className="text-red-600">{"Aucun résultat ne correspond à votre recherche, merci de réessayer.  "}</p>}
        </div>
        </main>
    )

}


export default SearchPage