"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchFrom() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && query.trim()) {
            router.push(`/collections/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <div className="relative w-full max-w-85">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />

            <input
                type="search"
                inputMode="search"
                enterKeyHint="search"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="w-full bg-accent1/75 border border-transparent focus:border-primary rounded-full py-2.5 pl-11 pr-5 text-sm text-inherit placeholder:text-gray-700 focus:outline-none search-input-focus transition-all"
            />
        </div>
    );
}
