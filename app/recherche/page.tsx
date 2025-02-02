import codes from "@/assets/codes"






async function SearchPage({searchParams}:{searchParams:Promise<{q:string}>}){
    const {q} = await searchParams
    const searchResults = codes.filter(record=>(
             record.AGENCE.toLowerCase().includes(q) 
            // ||
            // // record.NOUVEAU_CODE_POSTAL.toString().includes(q) ||
            // // record.PROVINCE.toLowerCase().includes(q) ||
            // // record.REGION_POSTALE.toLowerCase().includes(q)
          ))
    
    if(!q  || !searchResults){
        return <main className="flex min-h-screen flex-col items-center justify-start">Aucune resulat correspond à votre recherche</main>
    }
    

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-start  px-3 md:px-20 ">
            <div className="w-full flex justify-start gap-3 text-gray-500 mt-10 ">
               <h3 className="text-xl">
                Resultats de recherche pour : <span className="font-bold">{q}</span>
               </h3>

            </div>
        <div className="w-full bg-white h-full rounded   ">

          <div className="w-full grid grid-cols-4 justify-items-start text-white p-2 bg-green-500 border">
            <h3>région</h3>
            <h3>province</h3>
            <h3>agence</h3>
            <h3>code postal</h3>
          </div>
          {searchResults.map((record) => (
            <div key={record.NOUVEAU_CODE_POSTAL} className="grid grid-cols-4 p-2 text-sm md:text-base border-b   text-gray-600">
              <span>{record.REGION_POSTALE}</span>
              <span>{record.PROVINCE}</span>
              <span>{record.AGENCE}</span>
              <span>{record.NOUVEAU_CODE_POSTAL}</span>
            </div>
          ))}
        </div>
        </main>
    )

}


export default SearchPage