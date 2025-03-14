"use client"

import { usePathname } from "next/navigation"
import SearchForm from "./SearchForm"



const SearchFormWrapper = () => {
    const pathname = usePathname()

 if(pathname === "/") return
  return (
    <div className="flex-grow">
      <SearchForm/>
    </div>
  )
}

export default SearchFormWrapper
