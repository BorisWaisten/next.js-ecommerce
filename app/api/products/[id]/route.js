import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    await connectMongoDB();
    const product = await Product.findById(params.id);
    return NextResponse.json(product);
}