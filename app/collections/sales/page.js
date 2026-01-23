
'use client';
import Collections_UI from "My_UI/collections/main";


export default function Collections() {
    return (
        <Collections_UI
            h1={"Sale & Clearance Products"}
            description={"Shop discounted Unitec USA Design products available for a limited time. Find high-quality PVC and WPC materials at reduced prices while supplies last—perfect for budget-conscious projects without compromising performance or style."}
            cover={{
                src: '/raster/sale.jpg',
                alt: '/raster/collection-sale'
            }}
            productURL="/API/collections?onlyDiscounted=true&"
            prefilters={{
                collection: "All",
                subcategories: [],
                thicknessRange: [],
                widthRange: [],
                lengthRange: [],
                sort: "name-asc",
            }}
        />
    );
}
