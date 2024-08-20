'use client';
import { fetchProduct } from '@/lib/mongodb/fetch';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ProductPage({ category, id }) {
    const [product, setProduct] = useState(null);
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [cartMessage, setCartMessage] = useState('');
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetchProduct(category, id);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data[0]);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        }

        getProduct();
    }, [category, id]);

    const handleAddToCart = () => {
        if (!session) {
            router.push(`/signin?callbackUrl=${encodeURIComponent(`/products/${category}/${id}`)}`);
            return;
        }


        if (!size) {
            setCartMessage('Please select a size.');
            return;
        }

        if (quantity > product.stock) {
            setCartMessage('Quantity exceeds available stock.');
            return;
        }

        // Lógica para agregar al carrito aquí
        setCartMessage('Product added to cart!');
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Product Page</h1>

            {product && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Image 
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-lg font-bold text-red-500 mb-6">${product.price}</p>

                        <div className="mb-4">
                            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Size:
                            </label>
                            <select 
                                id="size" 
                                value={size} 
                                onChange={(e) => setSize(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select a size</option>
                                {/* Asumiendo que los tamaños son fijos para todos los productos, si no se tienen se puede eliminar el select */}
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                Quantity:
                            </label>
                            <input 
                                type="number" 
                                id="quantity" 
                                value={quantity} 
                                onChange={(e) => setQuantity(Math.min(Number(e.target.value), product.stock))}
                                min="1"
                                max={product.stock}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <p className="text-sm text-gray-500 mt-1">Available stock: {product.stock}</p>
                        </div>

                        <button 
                            onClick={handleAddToCart}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Add to Cart
                        </button>

                        {cartMessage && (
                            <p className={`mt-4 text-center ${cartMessage.includes('added') ? 'text-green-600' : 'text-red-600'}`}>
                                {cartMessage}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
