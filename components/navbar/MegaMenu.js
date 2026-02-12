"use client";

import React from 'react';
import Link from 'next/link';

const productCategories = {
    Interior: {
        "PAREDES": [
            "Rollo Marmol",
            "Acolchado",
            "Marmol",
            "Acustico",
            "Panel PS",
            "PU",
            "Muroflex",
            "Uniflex"
        ],
        "LAMINAS": [
            "Foam Board",
            "Marmol",
            "Paredes",
            "PVC Board"
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
            "Tejas"
        ],
        "PAREDES": [
            "Fachada",
            "Polifachada"
        ],
        "JARDINES ARTIFICIALES": [],
        "PANELES WPC Y ANGULOS": [
            "WPC Exterior"
        ],
        "PISOS": [
            "Deck"
        ]
    }
};

const MegaMenu = () => {
    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-2 gap-8">
                {/* Interior Section */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-black border-b-2 border-secondary pb-2">
                        Interior
                    </h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(productCategories.Interior).map(([category, subcategories]) => (
                            <div key={category} className="mb-4">
                                <Link
                                    href={`/collections/interior?category=${encodeURIComponent(category)}`}
                                    className="font-bold text-gray-800 hover:text-secondary mb-2 block text-sm uppercase transition-colors"
                                >
                                    {category}
                                </Link>
                                {subcategories.length > 0 && (
                                    <ul className="space-y-1">
                                        {subcategories.map(sub => (
                                            <li key={sub}>
                                                <Link
                                                    href={`/collections/interior?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(sub)}`}
                                                    className="text-gray-600 hover:text-secondary text-xs transition-colors block py-0.5 hover:underline"
                                                >
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exterior Section */}
                <div>
                    <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-black border-b-2 border-secondary pb-2">
                        Exterior
                    </h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(productCategories.Exterior).map(([category, subcategories]) => (
                            <div key={category} className="mb-4">
                                <Link
                                    href={`/collections/exterior?category=${encodeURIComponent(category)}`}
                                    className="font-bold text-gray-800 hover:text-secondary mb-2 block text-sm uppercase transition-colors"
                                >
                                    {category}
                                </Link>
                                {subcategories.length > 0 && (
                                    <ul className="space-y-1">
                                        {subcategories.map(sub => (
                                            <li key={sub}>
                                                <Link
                                                    href={`/collections/exterior?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(sub)}`}
                                                    className="text-gray-600 hover:text-secondary text-xs transition-colors block py-0.5 hover:underline"
                                                >
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
