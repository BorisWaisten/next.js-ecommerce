"use client"; // para que el contexto funcione en componentes cliente

import { createContext, useContext, useState } from "react";

// Crear el contexto
const SearchContext = createContext();

// Proveedor del contexto
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Estado de la búsqueda

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useSearch = () => {
  return useContext(SearchContext);
};
