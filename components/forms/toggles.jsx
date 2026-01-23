export default function CollectionToggle({ value, onChange }) {
    const options = ["All", "Interior", "Exterior"];
    return (
        <div className="flex gap-2 rounded-xl col-span-2 lg:col-span-3  w-full items-stretch justify-evenly bg-primary p-1">
            {options.map(opt => (
                <button
                    key={opt}
                    aria-label={"Select " + opt}
                    onClick={() => onChange(opt)}
                    className={`px-4 py-2 rounded-lg text-sm transition w-1/3 ${value === opt ? "bg-secondary text-white shadow" : "text-gray-700 hover:bg-white"
                        }`}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}
