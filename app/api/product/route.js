import connectdb from "@/lib/mongodb";
import Product from "@/model/product";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        console.log("Incoming request...");
        const { name, brand, price, quantity } = await request.json();
        console.log("Received data:", { name, brand, price, quantity });

        await connectdb();
        console.log("Connected to DB");

        const newProduct = await Product.create({ name, brand, price, quantity });
        console.log("Product created:", newProduct);

        return NextResponse.json({ message: "Product listed" }, { status: 201 });
    } catch (error) {
        console.error("Error in POST /api/product:", error);
        return NextResponse.json({ message: "Error adding product", error: error.message }, { status: 500 });
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


export async function DELETE(request) {
    try {
        // Extract ID from request URL
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
        }

        await connectdb();
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error: Product not Deleted", error: error.message }, { status: 500 });
    }
}