'use client';

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    } 
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full flex gap-3">
      <div className="relative flex-1">
       <div className="w-full  p-1 pl-2 flex items-center gap-2 border border-red-900 rounded-xl">
         <Search className="w-8 h-8 text-gray-400" />

        <input
          autoFocus
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Rechercher une agence, ville ou code postal..."
          className="w-full p-3 border-none outline-none"
        />
          <button
        onClick={handleSearch}
        className="px-6 py-4 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition-colors shadow-lg flex items-center gap-2"
      >
        <Search className="w-5 h-5" />
        <span className="hidden sm:inline">Rechercher</span>
      </button>
       </div>
        
      </div>
    
    </div>
  );
}