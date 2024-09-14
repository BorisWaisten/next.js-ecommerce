import Image from "next/image";

const AddProductForm = ({ handleSubmitApi, product, handleChange, handleImageChange, imagePreview }) => {
    return (
        <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Product</h1>
            <form onSubmit={handleSubmitApi}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <select
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        >
                            <option value="">Select Name</option>
                            <option value="T-shirt">T-shirt</option>
                            <option value="shirt">shirt</option>
                            <option value="jacket">jacket</option>
                            <option value="pants">pants</option>
                            <option value="shorts">shorts</option>
                            <option value="sweatshirt">sweatshirt</option>
                        </select>
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
                            <option value="">Select Category</option>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
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
                                <Image 
                                className="mx-auto h-12 w-12" 
                                src="https://www.svgrepo.com/show/357902/image-upload.svg" 
                                alt="Upload Icon" 
                                width={50} height={50}
                                />
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
                                <Image src={imagePreview} className="mt-4 mx-auto max-h-40" alt="Preview" />
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
                        <input
                            id="stock"
                            name="stock"
                            type="number"
                            value={product.stock}
                            placeholder="Add Stock"
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
