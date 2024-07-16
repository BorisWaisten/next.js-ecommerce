'use client';

import { useState } from 'react';

const AddProductForm = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('category', product.category);
        formData.append('image', product.image);

        const response = await fetch('/api/products', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
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
        <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={product.name}
                            placeholder='Add Name'
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            value={product.price}
                            placeholder='Add Price'
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <select
                            id="category"
                            name="category"
                            value={product.category}
                            onChange={handleChange}

                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        >
                            <option selected="">Select Category</option>
                            <option value="Category 1">Man</option>
                            <option value="Category 2">Woman</option>
                        </select>
                    </div>
                    <div>
                        <div className="relative border-2 border-gray-300 border-dashed rounded-lg p-6">
                            <input
                                type="file"
                                id="image"
                                name="image"
                        
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 z-50"
                            />
                            <div className="text-center">
                                <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="Upload Icon" />
                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                    <label htmlFor="image" className="relative cursor-pointer">
                                        <span>Drag and drop</span>
                                        <span className="text-indigo-600"> or browse</span>
                                        <span> to upload</span>
                                    </label>
                                </h3>
                                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            {imagePreview && (
                                <img src={imagePreview} className="mt-4 mx-auto max-h-40" alt="Preview" />
                            )}
                        </div>
                    </div>
                    <div>
                        <textarea 
                            id="description"
                            name="description"
                            placeholder='Add Description'
                            value={product.description}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                    <label className="text-white dark:text-gray-200" htmlFor="stock">Add Stock</label>
                            <input
                                id="stock"
                                name="stock"
                                type="number"
                                value={product.stock}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                    </div>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;
