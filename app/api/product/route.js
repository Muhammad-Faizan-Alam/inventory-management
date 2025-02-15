import connectdb from "@/lib/mongodb";
import Product from "@/model/product";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, brand, price, quantity } = await request.json();
    try {
        await connectdb();
        await Product.create({ name, brand, price, quantity });
        alert("Product Listed");
        return NextResponse.json({ message: "Product listed" }, { status: 201 });
    } catch (error) {
        alert("Product not posted");
        return NextResponse.json({ message: "Error adding product", error }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectdb();
        const products = await Product.find({});
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching products", error }, { status: 500 });
    }
}