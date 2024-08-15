'use client'
import { fetchProduct } from '@/lib/mongodb/fetch';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProductPage({ category, id }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetchProduct(category, id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data[0]);
                console.log(data[0]);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        }

        getProduct();
    }, [category, id]);

    return (
        <div>
            <h1>Product Page</h1>

            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
            )}

        </div>
    );
}
