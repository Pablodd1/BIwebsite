'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MultiSelect({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  function toggle(val) {
    onChange(value.includes(val) ? value.filter(v => v !== val) : [...value, val]);
  }
  return (
    <div className="relative col-span-2 md:col-span-1 ">
      <button aria-label="Toggle selection" onClick={() => setOpen(!open)} className="w-full  border rounded-lg px-3 py-2 text-sm flex justify-between">
        {value.length ? `${value.length} selected` : label}
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-lg border bg-white shadow-lg p-2 max-h-52 overflow-auto">
          {options.map(opt => (
            <label key={opt} className="flex gap-2 text-sm py-1">
              <input type="checkbox" checked={value.includes(opt)} onChange={() => toggle(opt)} />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
