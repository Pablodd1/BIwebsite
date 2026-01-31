"use client";

import { LanguageProvider } from "lib/LanguageContext";
import { BrandProvider } from "lib/BrandContext";

export default function Providers({ children }) {
    return (
        <BrandProvider>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </BrandProvider>
    );
}
