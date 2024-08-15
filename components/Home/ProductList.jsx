'use client';

import ProductCard from '../ProductCard';
import { fetchProducts } from '@/lib/mongodb/fetch';
import { useEffect, useState } from 'react';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProductsReformatted() {
            const fetchedProducts = await fetchProducts();
            console.log(fetchedProducts);
            setProducts(fetchedProducts);
        }

        fetchProductsReformatted();
    }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
