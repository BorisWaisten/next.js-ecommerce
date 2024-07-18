// /pages/api/products/[category].js
import { connectMongoDB } from "@/lib/mongodb/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { category } = params; // Obtiene la categoría de los parámetros

    try {
        await connectMongoDB();
        const products = await Product.find({ category }); // Busca productos por categoría
        return NextResponse.json(products, { status: 200 }); // Devuelve los productos
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
