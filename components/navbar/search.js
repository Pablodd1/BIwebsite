"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useLanguage } from "lib/LanguageContext";

export default function SearchFrom({ full = false, query: q }) {
    const { t } = useLanguage();
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && query.trim()) {
            router.push(`/collections/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <div className={` relative w-full  ${full ? ' max-w-4/5 lg:max-w-xl my-20 ' : ' hidden sm:block max-w-85'}`}>
            <Search className={`absolute text-secondary ${full ? 'left-3 top-2 w-6 h-6 ' : 'w-4 h-4 left-4  top-1/2 -translate-y-1/2'} `} />
            <input
                type="search"
                inputMode="search"
                enterKeyHint="search"
                autoComplete="off"
                value={q || query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("search.placeholder")}
                className={`w-full ${full ? 'bg-white/95' : 'bg-accent1/75'} border border-transparent focus:border-primary rounded-full py-2.5 pl-11 pr-5 text-sm text-inherit placeholder:text-gray-700 focus:outline-none search-input-focus transition-all`}
            />
        </div>
    );
}
