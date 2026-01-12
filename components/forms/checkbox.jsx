export default function RangeCheckboxGroup({ title, options, value, onChange }) {
  return (
    <div className="md:order-last lg:order-first  lg:row-span-full">
      <p className="mb-2 text-sm font-medium  ">{title}</p>
      <div className="space-y-2">
        {options.map(opt => (
          <label key={opt.key} className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="checkbox" checked={value === opt.value} onChange={() => onChange(opt.value)} className="accent-primary" />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
