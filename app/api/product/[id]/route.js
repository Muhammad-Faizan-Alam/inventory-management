import connectdb from "@/lib/mongodb";
import Product from "@/model/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = await params;
    const { name, brand, price, quantity } = await request.json();
    try {
        await connectdb();
        await Product.findByIdAndUpdate(id, { name, brand, price, quantity });
        // alert("Product Updated");
        return NextResponse.json({ message: "Product Updated" }, { status: 201 });
    } catch (error) {
        // alert("Error: Product not updated");
        return NextResponse.json(error, { message: "Error: Product not updated" }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = await params;
    try {
        await connectdb();
        const product = await Product.findOne({_id: id});
        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {
        // alert("Error: Product not fetch");
        return NextResponse.json(error, { message: "Error: Product not fetch" }, { status: 500 });
    }
}