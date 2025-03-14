import codes from "@/assets/codes"






async function SearchPage({searchParams}:{searchParams:Promise<{search:string}>}){
    const {search} = await searchParams
   
    
    if(!search){
        return <main className="flex min-h-screen flex-col items-center justify-start">Aucune resulat correspond à votre recherche</main>
    }

    const normalize =( str: string) => str.replace(/\s+/g, " ").trim().toLowerCase();
    const query = normalize(decodeURIComponent(search));
    
   // Function to calculate similarity score (higher is better)
 // Function to count matching letters between query and text
const letterMatchScore = (query:string, text:string) => {
  if (!text) return 0; // Handle cases where text is undefined/null

  const queryLetters = query.replace(/\s+/g, "").split(""); // Remove spaces, split into letters
  const textLetters = text.replace(/\s+/g, "").split("");   // Remove spaces, split into letters

  let matchCount = 0;
  queryLetters.forEach(letter => {
    const index = textLetters.indexOf(letter);
    if (index !== -1) {
      matchCount++;
      textLetters.splice(index, 1); // Remove matched letter to prevent double counting
    }
  });

  return matchCount; // Higher is better
};

  
const searchResults1 = codes.filter(record=>(
  record.AGENCE.toLowerCase().includes(query) ||
 record.NOUVEAU_CODE_POSTAL.toString().includes(query) ||
 record.PROVINCE.toLowerCase().includes(query) ||
 record.REGION_POSTALE.toLowerCase().includes(query)
))

const searchResults2 = codes
.map(record => {
  const agence = record.AGENCE ? record.AGENCE.toLowerCase().replace(/\s+/g, "") : "";
  const similarity = letterMatchScore(query, agence); // Count letter matches


  return { ...record, similarity };
})
.filter(record => record.similarity > 0) // Keep only results with at least 1 matching letter
.sort((a, b) => b.similarity - a.similarity); // Sort by highest match count

const searchResults = searchResults1.length > 0 ? searchResults1 : searchResults2

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-start  pt-10 ">
            <div className="w-full flex justify-start gap-3 text-gray-500 mt-10 ">
               <h3 className="text-xl">
                Resultats de recherche pour : <span className="font-bold">{search}</span>
               </h3>

            </div>
        <div className="w-full bg-white rounded   ">

          <div className="w-full grid grid-cols-4 justify-items-center text-white p-2 bg-emerald-600 border ">
            <h3>région</h3>
            <h3>province</h3>
            <h3>agence</h3>
            <h3>code postal</h3>
          </div>
          {searchResults.map((record) => (
            <div key={record.NOUVEAU_CODE_POSTAL} className="grid grid-cols-4 justify-items-center bg-slate-200/60 p-2 text-sm md:text-base border-b   text-gray-600">
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