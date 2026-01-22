import productData from "StaticData/products_full.json";

// fields to return (easy to manage / edit)
const FIELDS = [
    "name",
    "basePrice",
    "discountPercent",
    "image",
    "ID",
    "dimension",
    "collection",
    "subcategory",
];

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    // Boolean handling
    const onlyDiscounted = searchParams.get("onlyDiscounted") === "true";

    const currentPage = Number(searchParams.get("currentPage")) || 1;
    const ITEMS_PER_PAGE = 15;

    // Filter first (important for correct pagination)
    const filteredProducts = onlyDiscounted
        ? productData.filter(
            (item) => Number(item.discountPercent) > 0
        )
        : productData;

    const totalItems = filteredProducts.length;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedItems = filteredProducts
        .slice(startIndex, endIndex)
        .map((item) =>
            FIELDS.reduce((acc, field) => {
                acc[field] = item[field];
                return acc;
            }, {})
        );

    return Response.json({
        currentPage,
        totalItems,
        items: paginatedItems,
    });
}
