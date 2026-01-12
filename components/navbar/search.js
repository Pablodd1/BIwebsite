import { Search } from "lucide-react";


export default function SearchFrom() {

    return (
        <div className="relative w-full max-w-85">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary " />
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-secondary/75 border border-transparent focus:border-primary rounded-full py-2.5 pl-11 pr-5 text-sm text-inherit placeholder:text-gray-700 focus:outline-none search-input-focus transition-all shadow-md shadow-gray-300 focus:shadow-primary/25"
            />
        </div>
    )
}