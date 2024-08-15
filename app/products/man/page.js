'use client';

import { Suspense, useEffect, useState } from 'react';
import { fetchProductsCategory } from '@/lib/mongodb/fetch';
import Loading from '../loading';
import ProductCard from '@/components/ProductCard';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ManProductPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const pathname = usePathname();
  const category = pathname.split("/")[2].charAt(0).toUpperCase() + pathname.split("/")[2].slice(1);
  
  // Verificar si estamos en un entorno de cliente
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;

  useEffect(() => {
    if (!category) return; // Esperar hasta que la categoría esté disponible

    async function fetchProductsReformatted() {
      const fetchedProducts = await fetchProductsCategory(category);
      setProducts(fetchedProducts);
      setLoading(false);
    }

    fetchProductsReformatted();
  }, [category]);

  if (loading) {
    return <Loading amount={products.length} />; // Muestra el componente Loading mientras se cargan los productos
  }

  return (
    <Suspense fallback={<Loading amount={products.length} />}>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold">{category} Products</h1>
        <div className="grid gap-4 mt-6 grid-cols-1 md:grid-cols-3">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
