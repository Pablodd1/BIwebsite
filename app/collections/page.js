
'use client';
import Collections_UI from "My_UI/collections/main";


export default function Collections() {
    return (
        <Collections_UI
            h1={"Our Product Collections"}
            description={"Explore the complete range of Unitec USA Design PVC and WPC building materials. From exterior-grade panels to interior finishes, our collections are engineered for durability, ease of installation, and modern design across residential and commercial applications."}
            cover={{
                src: '/raster/collection-banner.png',
                alt: '/raster/collection-banner.png'
            }}
            productURL="/API/collections?"
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
