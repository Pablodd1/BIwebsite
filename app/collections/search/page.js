
'use client';
import NoProductsFound from "My_UI/collections/noproduct";
import SearchFrom from "My_UI/navbar/search";
import ProductItem from "My_UI/product/item";
import MyPagination from "My_UI/product/pagination";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import Image from "next/image";
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
            <section className="min-h-screen bg-primary flex flex-col items-center justify-center py-10" >
                <Image
                    alt="banner"
                    className=" object-center object-contain"
                    fill
                    src={"/raster/contianer front2.png"}
                />
                <SearchFrom full />
                <RecommendationsSection />
            </section>

    );
}
