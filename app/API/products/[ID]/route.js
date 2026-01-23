import productData from "StaticData/products_full.json";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { ID } = await params;

    // Parse requested fields from query string
    const { searchParams } = new URL(request.url);
    const fieldsParam = searchParams.get("fields");
    const fields = fieldsParam ? fieldsParam.split(",") : null;

    // Find product by ID
    const product = productData.find(
        (item) => String(item.ID) === String(ID)
    );

    if (!product) {
        return NextResponse.json(
            { error: "Product not found" },
            { status: 404 }
        );
    }

    // If no fields requested, return full product
    if (!fields) {
        return NextResponse.json({});
    }

    // Pick only requested fields
    const filteredProduct = {};
    for (const field of fields) {
        if (field in product) {
            filteredProduct[field] = product[field];
        }
    }

    return NextResponse.json(filteredProduct);
}
