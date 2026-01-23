
'use client';
import NoProductsFound from "My_UI/collections/noproduct";
import SearchFrom from "My_UI/navbar/search";
import ProductItem from "My_UI/product/item";
import MyPagination from "My_UI/product/pagination";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Collections() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);

    // Fetch products
    useEffect(() => {
        if (query) {
            setLoading(true);
            fetch(`/API/collections?query=${encodeURI(query)}&currentPage=${currentPage}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.items);
                    setTotalItems(data.totalItems);
                    setLoading(false);
                }).catch(() => setLoading(false));
        }
    }, [currentPage, query]);


    return (

        query ? (
            loading
                ? <div className="text-center py-20 text-gray-500">Loading products...</div> :
                products?.length > 0 ?
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto ">
                            {products.map(p => <ProductItem key={p.ID} item={p} />)}
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
                    : <NoProductsFound />
        )
            :
            <section className="min-h-screen flex flex-col items-center justify-center py-[15%]" >
                <SearchFrom />
                <RecommendationsSection />
            </section>

    );
}
