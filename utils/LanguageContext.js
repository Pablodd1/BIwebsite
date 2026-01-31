"use client";

import { createContext, useContext, useState, useEffect } from "react";
import globalTranslations from "lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // Try to load saved language from localStorage, default to 'en'
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("app-language");
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const switchLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("app-language", lang);
    };

    const t = (key) => {
        // If key is "section.key", split it
        const keys = key.split('.');
        let value = globalTranslations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key; // Return key if translation missing
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
