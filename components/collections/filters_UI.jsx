import { buildRanges } from "lib/applyFilters";
import RangeCheckboxGroup from "My_UI/forms/checkbox";
import MultiSelect from "My_UI/forms/multiselect";
import SortDropdown from "My_UI/forms/sortDropDown";
import CollectionToggle from "My_UI/forms/toggles";
import Stylish_H2 from "My_UI/stylish_h2";
function toggleRange(current, next) {
    if (current && current[0] === next[0] && current[1] === next[1])
        return null;
    else
        return next;
}

export default function FilterUI({ filters,products, setFilters }) {

    // Derived filter options
    const subCategoriesFromData = Array.from(new Set(products.map(p => p.subcategory)));
    const thicknessRanges = buildRanges(products.map(p => p.dimension.thickness.value));
    const widthRanges = buildRanges(products.map(p => p.dimension.width.value));
    const lengthRanges = buildRanges(products.map(p => p.dimension.length.value));

    return (

        <div className="max-w-11/12 mx-auto rounded-xl shadow-sm p-6 mb-8 shadow-gray-400">
            <Stylish_H2 h2="Filters" />
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-rows-2 lg:grid-cols-6">
                <CollectionToggle value={filters.collection} onChange={v => setFilters(f => ({ ...f, collection: v }))} />
                <MultiSelect label="Subcategories" options={subCategoriesFromData} value={filters.subcategories} onChange={v => setFilters(f => ({ ...f, subcategories: v }))} />
                <RangeCheckboxGroup title="Thickness (mm)" options={thicknessRanges} value={filters.thicknessRange} onChange={v => setFilters(f => ({ ...f, thicknessRange: toggleRange(f.thicknessRange, v) }))} />
                <RangeCheckboxGroup title="Width (cm)" options={widthRanges} value={filters.widthRange} onChange={v => setFilters(f => ({ ...f, widthRange: toggleRange(f.widthRange, v) }))} />
                <RangeCheckboxGroup title="Length (cm)" options={lengthRanges} value={filters.lengthRange} onChange={v => setFilters(f => ({ ...f, lengthRange: toggleRange(f.lengthRange, v) }))} />
                <SortDropdown value={filters.sort} onChange={v => setFilters(f => ({ ...f, sort: v }))} />
            </div>
        </div>
    )
}