"use client";
import { SearchIcon} from "lucide-react";
import { ChangeEvent, useState } from "react";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  // const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
   

  };
  // const normalize =( str: string) => str.replace(/\s+/g, " ").trim().toLowerCase();

  // const getSuggestions = (input:string)=>{
  //   const query = normalize(decodeURIComponent(input));
  //   const minSubstringLength = 4;
    
  //   const cleanSpace = (str: string) => str.toLowerCase().replace(/\s+/g, ''); // Remove spaces
  //   const cleanQuery = cleanSpace(query);

  //   const searchResults1 =  codes.filter((record)=>{
  //     return (
  //       cleanSpace(record.AGENCE).includes(cleanQuery) ||
  //       record.NOUVEAU_CODE_POSTAL.toString().includes(cleanQuery) ||
  //       cleanSpace(record.PROVINCE).includes(cleanQuery) ||
  //       cleanSpace(record.REGION_POSTALE).includes(cleanQuery) 
  //     )
  //   })


  

 
    
  //   const searchResults2 =  codes.filter(record => {
  //     return (
     
  //       (cleanQuery.length >= minSubstringLength &&
  //         (cleanSpace(record.AGENCE).includes(cleanQuery.slice(0, minSubstringLength)) ||
  //         cleanSpace(record.PROVINCE).includes(cleanQuery.slice(0, minSubstringLength)) ||
  //         cleanSpace(record.REGION_POSTALE).includes(cleanQuery.slice(0, minSubstringLength))))
  //     );
  //   });
    

  //   const searchResults = searchResults1.length >0 ? searchResults1 : searchResults2
  //   return searchResults.map((record)=>record.AGENCE)
  // }

  return (
    <div className="w-full flex flex-col justify-start items-center relative">
      <form action={`/recherche?q=${encodeURIComponent(searchInput)}`} className="w-full md:w-4/5 border  p-1 rounded bg-gray-200 my-3 ">
        <div className="w-full flex justify-between items-center">
          <input
            name="search"
            value={searchInput}
            id="search"
            onChange={onchange}
            placeholder="taper votre recherche ici"
            type="search"
            className="w-full  bg-inherit outline-none border-gray-300 py-1 px-2 rounded"
          />

          <button
            disabled={!searchInput}
            className="flex gap-2 items-center bg-green-600 text-white rounded py-2 px-2 lg:px-4 hover:bg-green-700"
            type="submit"
          >
            <SearchIcon size={16} />
            <span className="hidden md:inline-block text-sm tracking-wider">
            Rechercher
            </span>
          </button>
        </div>
      </form>
     
        {/* {searchSuggestions.length > 0 && (
           <div className=" max-h-[100px] w-full md:w-4/5 border p-2 rounded overflow-auto bg-white flex  flex-col">
         { searchSuggestions.map((suggestion,index)=>(
            <span key={suggestion+"-"+index}>
              {suggestion}
            </span>
          ))}
          </div>
        )} */}
     
      
    
    </div>
  );
};

export default SearchForm;
