"use client"
import { SearchIcon } from "lucide-react"
import { Region } from "../code-postal-maroc/[regionName]/page"
import { ChangeEvent, useEffect, useState } from "react"
import SearchResults from "./SearchResults"
import codes from "@/assets/codes"




const Search = () => {
  const [result,setResult]=useState<Region[]>([])
  const [showResults, setShowResults] = useState(false);

  const close = ()=>{
    setShowResults(false)
    setResult([])
    const input = document.getElementById("search") as HTMLInputElement
    if(input.value){
  input.value = ""
    }
  }
  const showSearchResults = (e:ChangeEvent<HTMLInputElement>)=>{
   

      const value = e.target.value.toLowerCase().trim()
      if (!value) {
        setShowResults(false); // Hide results when the input is empty
        setResult([]);
        return;
      }
      const filteredResults = codes.filter(record=>(
        record.AGENCE.toLowerCase().includes(value) ||
        record.NOUVEAU_CODE_POSTAL.toString().includes(value) ||
        record.PROVINCE.toLowerCase().includes(value) ||
        record.REGION_POSTALE.toLowerCase().includes(value)
      ))
      setResult(filteredResults);
      setShowResults(true);
  }

  useEffect(() => {
    if (showResults) {
      document.body.style.overflow = "hidden"; // Disable page scrolling
    } else {
      document.body.style.overflow = ""; // Restore page scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [showResults]);
  return (
    <form className=" lg:w-1/2 border  p-2 rounded bg-gray-200 my-3 flex">

                 <input name="search" id="search" onChange={showSearchResults} placeholder="taper votre recherche ici" type="search" className="w-full  bg-inherit outline-none border-gray-300 px-2 rounded"/>
                  <SearchIcon/>



   {showResults  && <SearchResults close={close} data={result}/>}
    </form>
  )
}

export default Search