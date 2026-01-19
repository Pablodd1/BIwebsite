export default function RangeCheckboxGroup({ title, options, value, onChange }) {

  return (
    <div className="md:order-last lg:order-first  lg:row-span-full">
      <p className="mb-2 text-sm font-medium  ">{title}</p>
      <div className="space-y-2">
        {options.map(opt => (
          <label key={opt.key} className="flex items-center gap-2 cursor-pointer text-sm ">{console.log("value:", value, opt.value)}
            <input
              type="checkbox"
              checked={Array.isArray(value) &&
                value[0] === opt.value[0] &&
                value[1] === opt.value[1]}
              onChange={() => onChange(opt.value)}
              className="accent-primary text-secondary"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
