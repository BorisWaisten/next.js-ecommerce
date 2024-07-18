'use client';
import { useState } from 'react';
import AddProductForm from '../../../components/Admin/Form.jsx';
import { addImageToFolder } from '@/lib/firebase/fetch.js';
import { createProduct } from '@/lib/mongodb/fetch.js';

export default function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        category: '',
        description: '',
        image: '',
        stock: 0,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProduct({
            ...product,
            image: file,
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmitApi = async (e) => {
        e.preventDefault();
        const { name, price, category, description, image, stock } = product;
        
        const imagePreview = await addImageToFolder('products',category,name,image);

        console.log('Image Preview: ', imagePreview);

        const formData = {
            name,
            price,
            category,
            description,
            image: imagePreview,
            stock,
        };

        const response = await createProduct(formData);

        if (response.success) {
            alert('Product added successfully');
            setProduct({
                name: '',
                price: 0,
                category: '',
                description: '',
                image: '',
                stock: 0,
            });
            setImagePreview(null);
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
                handleImageChange={handleImageChange}
                imagePreview={imagePreview}
            />
        </div>
    );
}
