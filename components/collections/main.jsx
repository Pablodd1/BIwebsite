
'use client';
import { useState, useEffect } from "react";
import ProductItem from "My_UI/product/item"
import MyPagination from "My_UI/product/pagination";
import { applyFilters, sortProducts } from "lib/applyFilters";
import CollectionHero from "My_UI/collections/collection_hero";
import FilterUI from "My_UI/collections/filters_UI";


export default function Collections_UI({ h1, description, productURL, cover, prefilters }) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState(prefilters);

    // Fetch products
    useEffect(() => {
        setLoading(true);
        fetch(`${productURL}currentPage=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                setTotalItems(data.totalItems);
                setLoading(false);
            }).catch(() => setLoading(false));
    }, [currentPage]);


    // Apply filters + sorting
    const filtered = applyFilters(products, filters);
    const displayedProducts = sortProducts(filtered, filters.sort);

    return (
        <div className="">
            <CollectionHero
                h1={h1}
                description={description}
                cover={cover}
            />
            <FilterUI filters={filters} products={products} setFilters={setFilters} />
            {
                loading
                    ? <div className="text-center py-20 text-gray-500">Loading products...</div> :
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto ">
                            {displayedProducts.map(p => <ProductItem key={p.ID} item={p} />)}
                        </div>

                        <div className="my-10">
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
