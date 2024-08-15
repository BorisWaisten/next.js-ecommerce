// /pages/api/products/[category].js
import { connectMongoDB } from "@/lib/mongodb/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params; // Obtiene la categoría de los parámetros

    try {
        await connectMongoDB();
        const product = await Product.find({ _id: id }); // Busca productos por categoría
        return NextResponse.json(product, { status: 200 }); // Devuelve los productos
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
