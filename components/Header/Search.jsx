'use client';  
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';  
import { useDebouncedCallback } from 'use-debounce';  
import { useSearchParams, useRouter, usePathname } from 'next/navigation';  

export default function Search({ placeholder }) {  
  const searchParams = useSearchParams();  
  const pathname = usePathname();  
  const { replace } = useRouter();  

  // Verificar que searchParams no sea undefined  
  const handleSearch = useDebouncedCallback((term) => {  
    console.log(`Searching... ${term}`);  
    
    // Comprueba si searchParams es accesible y limpia su uso  
    const params = searchParams ? new URLSearchParams(searchParams.toString()) : new URLSearchParams();  
    
    if (term) {  
      params.set('query', term);  
    } else {  
      params.delete('query');  
    }  
    
    // Almacenar la nueva URL con los parámetros actualizados  
    replace(`${pathname}?${params.toString()}`);  
  }, 500);  

  return (  
    <div className="relative flex flex-1 flex-shrink-0">  
      <input  
        id="search"  
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-none placeholder-gray-500"  
        placeholder={placeholder}  
        onChange={(e) => handleSearch(e.target.value)}  
        defaultValue={searchParams ? searchParams.get('query') : ''}  
      />  
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />  
    </div>  
  );  
}