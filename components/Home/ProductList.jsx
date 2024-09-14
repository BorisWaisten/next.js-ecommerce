'use client';

import ProductCard from '../Product/ProductCard';
import { fetchProducts } from '@/lib/mongodb/fetch';
import { useEffect, useState } from 'react';
import { useSearch } from '../Provider/SearchContext';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchQuery } = useSearch();

  useEffect(() => {
    async function fetchProductsReformatted() {
      const fetchedProducts = await fetchProducts();
      console.log(fetchedProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Inicialmente muestra todos los productos
    }

    fetchProductsReformatted();
  }, []);

  useEffect(() => {
    // Si el searchQuery está vacío, mostramos todos los productos
    console.log(searchQuery);
    
    if (searchQuery === "") {
      setFilteredProducts(products);
    } else {
      // Filtramos productos solo si hay algo en searchQuery
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
