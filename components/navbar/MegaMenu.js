import React from 'react';
import Link from 'next/link';

const productCategories = {
    Interior: {
        "PAREDES": [
            "ROLLO MARMOL",
            "ACOLCHADO",
            "MARMOL",
            "ACUSTICO",
            "PANEL PS",
            "PU",
            "MUROFLEX",
            "UNIFLEX"
        ],
        "LAMINAS": [
            "FOAM BOARD",
            "MARMOL",
            "PAREDES",
            "PVC BOARD"
        ],
        "JARDINES ARTIFICIALES": [],
        "PANELES WPC Y ANGULOS": [
            "WPC Interior"
        ],
        "PISOS": [
            "SPC"
        ],
        "ZOCALOS": [
            "SPC"
        ]
    },
    Exterior: {
        "CUBIERTAS UPVC": [
            "TEJAS"
        ],
        "PAREDES": [
            "FACHADA",
            "POLIFACHADA"
        ],
        "JARDINES ARTIFICIALES": [],
        "PANELES WPC Y ANGULOS": [
            "WPC Exterior"
        ],
        "PISOS": [
            "DECK"
        ]
    }
};

const MegaMenu = () => {
    return (
        <div className="hidden lg:block absolute left-0 top-full pt-2 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
            <div className="bg-white shadow-2xl rounded-b-xl border border-gray-100 overflow-hidden flex max-w-7xl mx-auto">

                {/* Interior Section */}
                <div className="flex-1 p-8 border-r border-gray-100">
                    <h3 className="text-xl font-bold mb-6 bg-yellow-300 w-fit px-2 py-1 uppercase tracking-wider">Interior</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {Object.entries(productCategories.Interior).map(([category, subcategories]) => (
                            <div key={category} className="mb-2 break-inside-avoid">
                                <Link
                                    href={`/collections/interior?category=${category}`}
                                    className="font-bold text-gray-800 hover:text-black mb-1 block text-sm uppercase"
                                >
                                    {category}
                                </Link>
                                <ul className="space-y-1">
                                    {subcategories.map(sub => (
                                        <li key={sub}>
                                            <Link
                                                href={`/collections/interior?category=${category}&subcategory=${sub}`}
                                                className="text-gray-500 hover:text-yellow-600 text-xs transition-colors block py-0.5"
                                            >
                                                - {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exterior Section */}
                <div className="flex-1 p-8">
                    <h3 className="text-xl font-bold mb-6 bg-yellow-300 w-fit px-2 py-1 uppercase tracking-wider">Exterior</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {Object.entries(productCategories.Exterior).map(([category, subcategories]) => (
                            <div key={category} className="mb-2 break-inside-avoid">
                                <Link
                                    href={`/collections/exterior?category=${category}`}
                                    className="font-bold text-gray-800 hover:text-black mb-1 block text-sm uppercase"
                                >
                                    {category}
                                </Link>
                                <ul className="space-y-1">
                                    {subcategories.map(sub => (
                                        <li key={sub}>
                                            <Link
                                                href={`/collections/exterior?category=${category}&subcategory=${sub}`}
                                                className="text-gray-500 hover:text-yellow-600 text-xs transition-colors block py-0.5"
                                            >
                                                - {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MegaMenu;
