
'use client';
import Collections_UI from "My_UI/collections/main";


export default function Collections() {
    return (
        <Collections_UI
            h1={"Explore Exterior Products"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
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
