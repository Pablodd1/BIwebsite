"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BrandContext = createContext();

export const BRAND_CONFIG = {
    binw: {
        id: 'binw',
        name: "Building Innovation",
        logoText: "BINW",
        logoImage: "/logo.png",
        metaTitle: "Unitec USA Design | Premium PVC & WPC Building Materials"
    },
    unitec: {
        id: 'unitec',
        name: "UNITEC",
        logoText: "UNITEC",
        logoImage: "/unitec-logo.png",
        metaTitle: "UNITEC | Premium Building Solutions"
    }
};

export function BrandProvider({ children }) {
    const [activeBrand, setActiveBrand] = useState("binw");

    const toggleBrand = () => {
        setActiveBrand(prev => prev === 'binw' ? 'unitec' : 'binw');
    };

    const brand = BRAND_CONFIG[activeBrand];

    return (
        <BrandContext.Provider value={{ activeBrand, toggleBrand, brand }}>
            {children}
        </BrandContext.Provider>
    );
}

export function useBrand() {
    return useContext(BrandContext);
}
