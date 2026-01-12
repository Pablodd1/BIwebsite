
'use client';
import { useState, useEffect } from "react";
import ProductItem from "My_UI/product/item"
import SortDropdown from "My_UI/forms/sortDropDown";
import Stylish_H2 from "My_UI/stylish_h2";
import MyPagination from "My_UI/product/pagination";
import MultiSelect from "My_UI/forms/multiselect";
import CollectionToggle from "My_UI/forms/toggles";
import RangeCheckboxGroup from "My_UI/forms/checkbox";
import { applyFilters, buildRanges, sortProducts } from "lib/applyFilters";
function toggleRange(current, next) {
    if (current && current[0] === next[0] && current[1] === next[1])
        return null;
    else
        return next;
}

export default function Collections() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        collection: "All",
        subcategories: [],
        thicknessRange: [],
        widthRange: [],
        lengthRange: [],
        sort: "name-asc",
    });

    // Fetch products
    useEffect(() => {
        setLoading(true);
        fetch(`/API/collections?currentPage=${currentPage}`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                setTotalItems(data.totalItems);
                setLoading(false);
            }).catch(() => setLoading(false));
    }, [currentPage]);

    // Derived filter options
    const subCategoriesFromData = Array.from(new Set(products.map(p => p.subcategory)));
    const thicknessRanges = buildRanges(products.map(p => p.dimension.thickness.value));
    const widthRanges = buildRanges(products.map(p => p.dimension.width.value));
    const lengthRanges = buildRanges(products.map(p => p.dimension.length.value));

    // Apply filters + sorting
    const filtered = applyFilters(products, filters);
    const displayedProducts = sortProducts(filtered, filters.sort);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="rounded-xl shadow-sm p-6 mb-8 bg-secondary/75 shadow-gray-400">
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

            {loading ? <div className="text-center py-20 text-gray-500">Loading products...</div> :
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {displayedProducts.map(p => <ProductItem key={p.ID} item={p} />)}
                    </div>

                    <div className="mt-10">
                        <MyPagination
                            current={currentPage}
                            total={totalItems}
                            pageSize={15}
                            onChange={setCurrentPage}
                            className="flex justify-center gap-2"
                        />
                    </div>
                </>
            }
        </div>
    );
}
