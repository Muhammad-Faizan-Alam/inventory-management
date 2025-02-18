import connectdb from "@/lib/mongodb";
import Product from "@/model/product";

export async function PUT(request, { params }) {
    const { id } = params;
    const { name, brand, price, quantity } = await request.json();
    try {
        await connectdb();
        await Product.findByIdAndUpdate(id, { name, brand, price, quantity });
        alert("Product Updated");
        return NextResponse.json({ message: "Product Updated" }, { status: 201 });
    } catch (error) {
        alert("Error: Product not updated");
        return NextResponse.json(error, { message: "Error: Product not updated" }, { status: 500 });
    }
}

export async function GET(rrquest, { params }) {
    const { id } = params;
    try {
        await connectdb();
        const product = await Product.findOne(id);
        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {
        alert("Error: Product not fetch");
        return NextResponse.json(error, { message: "Error: Product not fetch" }, { status: 500 });
    }
}