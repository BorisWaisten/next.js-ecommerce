'use client';
import AddProductForm from '../../../components/Admin/Form.jsx';
import { useState } from 'react';

export default function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        category: '',
        description: '',
        image: '',
        stock: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmitApi = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (response.ok) {
            alert('Product added successfully');
            setProduct({ name: '', price: 0, category: '', description: '', image: '', stock: 0 });
        } else {
            alert('Failed to add product');
        }
    };

    return (
        <div>
            <AddProductForm 
                handleSubmitApi={handleSubmitApi}
                product={product}
                handleChange={handleChange}
            />
        </div>
    );
}
