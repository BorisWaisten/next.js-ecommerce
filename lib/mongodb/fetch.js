export async function fetchProductsCategory(category) {
    try {
        const response = await fetch(`/api/products/${category}`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const productsCategory = await response.json();
        console.log(productsCategory, "products fetchProductsCategory");
        return productsCategory;
    } catch (error) {
        console.log(error);
    }
}


export async function fetchProduct() {
    try {
        const products = await fetchProducts();
        const productId = products.find(product => product._id === id);
        return productId;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchProducts() {
    try {
        const response = await fetch('/api/products', { method: 'GET' });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function createProduct(formData) {
    try {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        return {
            success: response.ok,
            message: response.statusText,
            body: await response.json(),
        };
    } catch (error) {
        console.log(error);
    }
}
