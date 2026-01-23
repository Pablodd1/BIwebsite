
'use client';
import Collections_UI from "My_UI/collections/main";


export default function Collections() {
    return (
        <Collections_UI
            h1={"Interior Design Solutions"}
            description={"Browse premium PVC sheets crafted for interior environments. Our interior solutions combine clean aesthetics, easy installation, and low-maintenance performance—ideal for walls, ceilings, and decorative finishes in residential and commercial spaces."}
            cover={{
                src: '/raster/interior.jpg',
                alt: '/raster/collection-interior'
            }}
            productURL="/API/collections?"
            prefilters={{
                collection: "Interior",
                subcategories: [],
                thicknessRange: [],
                widthRange: [],
                lengthRange: [],
                sort: "name-asc",
            }}
        />
    );
}
