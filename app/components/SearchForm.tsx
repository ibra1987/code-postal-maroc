"use client";
import { SearchIcon} from "lucide-react";
import { ChangeEvent, useState } from "react";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-full  flex flex-col justify-start items-center relative">
      <form action={`/recherche?search=${searchInput}`} className="w-full md:w-4/5 border  p-1 rounded bg-gray-200 my-3 ">
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
            className="flex gap-2 items-center bg-green-600 text-white rounded py-2 px-2 md:px-6 hover:bg-green-700"
            type="submit"
          >
            <SearchIcon />
            <span className="hidden md:inline-block">
            Rechercher
            </span>
          </button>
        </div>
      </form>
      
    
    </div>
  );
};

export default SearchForm;
