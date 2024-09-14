'use client';  
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';  

import { useSearch } from '../Provider/SearchContext';

export default function Search({ placeholder }) {

  const {searchQuery, setSearchQuery} = useSearch();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative flex flex-1 items-center">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-500" />
    </div>
  );
}