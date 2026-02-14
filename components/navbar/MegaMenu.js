"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Package, Home, Building2, Layers, Droplets, Sparkles, TreeDeciduous, Grid3X3 } from 'lucide-react';

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

const categoryIcons = {
    "PAREDES": Layers,
    "LAMINAS": Grid3X3,
    "JARDINES ARTIFICIALES": TreeDeciduous,
    "PANELES WPC Y ANGULOS": Building2,
    "PISOS": Home,
    "ZOCALOS": Grid3X3,
    "CUBIERTAS UPVC": Home,
};

const MegaMenu = () => {
    return (
        <div className="hidden lg:block absolute left-0 top-full pt-2 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
            <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-2xl rounded-b-2xl border border-gray-700 overflow-hidden mx-4 max-w-7xl mx-auto">
                
                {/* Top Banner */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3 flex items-center justify-between">
                    <span className="text-black font-bold text-sm uppercase tracking-wider">Premium PVC & WPC Building Materials</span>
                    <Link href="/collections" className="flex items-center gap-1 text-black text-sm font-semibold hover:text-gray-800 transition-colors">
                        View All Products <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="flex">
                    {/* Interior Section */}
                    <div className="flex-1 p-6 border-r border-gray-700 hover:bg-gray-800/50 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-4">
                            <Home className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Interior</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {Object.entries(productCategories.Interior).map(([category, subcategories]) => {
                                const Icon = categoryIcons[category] || Package;
                                return (
                                    <div key={category} className="group/item">
                                        <Link
                                            href={`/collections/interior?category=${category}`}
                                            className="flex items-center gap-2 font-bold text-gray-100 hover:text-yellow-400 mb-1 text-sm uppercase transition-colors"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {category}
                                        </Link>
                                        <ul className="space-y-0.5 ml-6">
                                            {subcategories.map(sub => (
                                                <li key={sub}>
                                                    <Link
                                                        href={`/collections/interior?category=${category}&subcategory=${sub}`}
                                                        className="text-gray-400 hover:text-yellow-300 text-xs transition-colors block py-0.5"
                                                    >
                                                        {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Exterior Section */}
                    <div className="flex-1 p-6 hover:bg-gray-800/50 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Exterior</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {Object.entries(productCategories.Exterior).map(([category, subcategories]) => {
                                const Icon = categoryIcons[category] || Package;
                                return (
                                    <div key={category} className="group/item">
                                        <Link
                                            href={`/collections/exterior?category=${category}`}
                                            className="flex items-center gap-2 font-bold text-gray-100 hover:text-yellow-400 mb-1 text-sm uppercase transition-colors"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {category}
                                        </Link>
                                        <ul className="space-y-0.5 ml-6">
                                            {subcategories.map(sub => (
                                                <li key={sub}>
                                                    <Link
                                                        href={`/collections/exterior?category=${category}&subcategory=${sub}`}
                                                        className="text-gray-400 hover:text-yellow-300 text-xs transition-colors block py-0.5"
                                                    >
                                                        {sub}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Featured Section */}
                    <div className="w-72 bg-gradient-to-b from-gray-900 to-black p-6 border-l border-gray-700">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Featured</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-colors cursor-pointer group">
                                <div className="w-full h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg mb-3 flex items-center justify-center">
                                    <Layers className="w-8 h-8 text-yellow-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">WPC Panels</h4>
                                <p className="text-gray-400 text-xs mt-1">Premium quality composite panels</p>
                            </div>
                            
                            <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-colors cursor-pointer group">
                                <div className="w-full h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg mb-3 flex items-center justify-center">
                                    <Droplets className="w-8 h-8 text-blue-400" />
                                </div>
                                <h4 className="text-white font-semibold text-sm">Waterproof Solutions</h4>
                                <p className="text-gray-400 text-xs mt-1">100% waterproof materials</p>
                            </div>
                        </div>

                        <Link 
                            href="/collections/sales" 
                            className="mt-4 block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                        >
                            View Sales
                        </Link>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="bg-gray-900 px-8 py-2 flex items-center justify-between border-t border-gray-700">
                    <span className="text-gray-400 text-xs">Free shipping on orders over $5,000</span>
                    <span className="text-gray-400 text-xs">15-25 Year Warranties</span>
                    <span className="text-gray-400 text-xs">Global Shipping</span>
                </div>

            </div>
        </div>
    );
};

export default MegaMenu;
