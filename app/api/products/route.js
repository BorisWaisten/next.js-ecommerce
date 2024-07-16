import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, price, description, image, category, stock } = await request.json();

        // Validación básica de datos
        if (!name || !price || !description || !image || !category || !stock) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        await connectMongoDB();
        const product = await Product.create({ name, price, description, image, category, stock });

        return NextResponse.json({ message: "Product Added", product }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const products = await Product.find();
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
