export function buildRanges(values) {
    if (!values.length) return [];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const step = Math.ceil((max - min) / 3) || 1;
    return [0, 1, 2].map(i => ({
        key: i,
        label: `${min + i * step} – ${i === 2 ? max : min + (i + 1) * step}`,
        value: [min + i * step, i === 2 ? max : min + (i + 1) * step]
    }));
}

export function applyFilters(products, filters) {
    return products.filter(p => {
        if (filters.collection && filters.collection !== 'All' && p.collection !== filters.collection) return false;
        if (filters.subcategories.length && !filters.subcategories.includes(p.subcategory)) return false;

        const inRange = (range, value) => !range?.length || (value >= range[0] && value <= range[1]);
        if (!inRange(filters.thicknessRange, p.dimension.thickness.value)) return false;
        if (!inRange(filters.widthRange, p.dimension.width.value)) return false;
        if (!inRange(filters.lengthRange, p.dimension.length.value)) return false;

        return true;
    });
}

export function sortProducts(products, sort) {
    return [...products].sort((a, b) => {
        if (sort === 'price-asc') return a.basePrice - b.basePrice;
        if (sort === 'price-desc') return b.basePrice - a.basePrice;
        if (sort === 'name-asc') return a.name.localeCompare(b.name);
        if (sort === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
    });
}
