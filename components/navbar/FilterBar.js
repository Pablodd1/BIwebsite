"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const filters = {
    type: {
        label: "Type",
        options: ["Interior", "Exterior"]
    },
    category: {
        label: "Category",
        options: ["Paredes", "Pisos", "Techos", "Techumbre", "Jardines Artificiales", "Paneles WPC"]
    },
    material: {
        label: "Material",
        options: ["PVC", "WPC", "SPC", "UPVC", "PS"]
    },
    application: {
        label: "Application",
        options: ["Residential", "Commercial"]
    }
};

const FilterBar = () => {
    const [openFilter, setOpenFilter] = useState(null);

    return (
        <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center space-x-6 text-xs font-bold uppercase overflow-x-auto">
                {Object.entries(filters).map(([key, filter]) => (
                    <div key={key} className="relative">
                        <button 
                            className="flex items-center cursor-pointer hover:text-secondary transition-colors whitespace-nowrap"
                            onClick={() => setOpenFilter(openFilter === key ? null : key)}
                        >
                            <span>{filter.label}</span>
                            <span className="ml-1 text-lg">{openFilter === key ? '-' : '+'}</span>
                        </button>
                        
                        {/* Dropdown */}
                        {openFilter === key && (
                            <div className="absolute top-full left-0 mt-1 bg-white shadow-lg border border-gray-100 rounded-md py-2 min-w-[150px] z-50">
                                {filter.options.map((option) => (
                                    <Link
                                        key={option}
                                        href={`/collections?${key}=${encodeURIComponent(option)}`}
                                        className="block px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 hover:text-secondary transition-colors"
                                        onClick={() => setOpenFilter(null)}
                                    >
                                        {option}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
