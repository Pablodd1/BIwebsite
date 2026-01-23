import SearchFrom from "My_UI/navbar/search";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import Image from "next/image";
import SearchBody from "./body";


export default async function SearchPage({ searchParams }) {
    const { q: query } = await searchParams

    return (
            <section className="min-h-screen bg-primary flex flex-col items-center justify-center py-10" >
                <Image
                    alt="banner"
                    className={` ${query?' z-0 aspect-2/1 max-h-[428] shadow-md shadow-accent2 object-cover object-top ':"object-center object-contain"}`}
                    fill
                    src={`/raster/${query?"containers.jpg":"contianer front2.png"}`}
                />
                <div className=" min-w-full bg-linear-0 from-gray-900 to-transparent max-h-[428] aspect-2/1 absolute z-0 inset-1 top-0 left-0" />
                <SearchFrom full />
                {
                    query
                        ? <SearchBody query={query} />
                        : <RecommendationsSection />
                }
            </section>

    );
}
