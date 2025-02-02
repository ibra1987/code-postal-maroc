"use client"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { ChangeEvent, useState } from "react"






const SearchForm = () => {
  const [searchInput,setSearchInput]=useState<string>("")
  const [error,setError]=useState("")
   
  const onchange =(e:ChangeEvent<HTMLInputElement>)=>{
    if(!e.target.value){
      setError("Veuillez saisir votre recherche")
    }
    setSearchInput(e.target.value)
  }

  return (
    <form className="w-full md:w-3/5 border  p-1 rounded bg-gray-200 my-3 flex">

                 <input name="search" value={searchInput} id="search" onChange={onchange} placeholder="taper votre recherche ici" type="search" className="w-full  bg-inherit outline-none border-gray-300 py-1 px-2 rounded"/>
                

     <Link className="flex gap-2 items-center bg-green-600 text-white rounded py-2 px-6 hover:bg-green-700" href={`/recherche?q=${searchInput}`}>
     <SearchIcon/>Rechercher
     </Link>

    </form>
  )
}

export default SearchForm