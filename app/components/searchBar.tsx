'use client';

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
      autoFocus
        type="text"
        placeholder="Rechercher une agence, ville ou code postal..."
        className="w-full  bg-inherit pl-12 pr-4 py-4 rounded-xl text-gray-300 border-2 border-transparent focus:border-red-800 focus:shadow-2xl focus:outline-none  shadow-lg"
      />
    </div>
  );
}