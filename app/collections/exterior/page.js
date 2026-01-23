
'use client';
import Collections_UI from "My_UI/collections/main";


export default function Collections() {
    return (
        <Collections_UI
            h1={"Exterior Building Solutions"}
            description={"Discover high-performance PVC sheets designed for exterior applications. Built to withstand moisture, UV exposure, and harsh environmental conditions, our exterior solutions deliver long-lasting durability with zero maintenance for facades, cladding, and outdoor structures."}
            cover={{
                src: '/raster/exterior.jpg',
                alt: '/raster/collection-exterior'
            }}
            productURL="/API/collections?"
            prefilters={{
                collection: "Exterior",
                subcategories: [],
                thicknessRange: [],
                widthRange: [],
                lengthRange: [],
                sort: "name-asc",
            }}
        />
    );
}
