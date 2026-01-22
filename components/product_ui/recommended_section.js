import GetFinalPrice from "My_UI/getFinalPrice";
import EmblaCarousel from "My_UI//slides/main";
import Image from "next/image";
import Link from "next/link";
import Stylish_H2 from "My_UI/stylish_h2";

const OPTIONS = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function RecommendationsSection({ items, title = "You might also like" }) {

    return (
        <section className="my-24">
            <Stylish_H2 h2={title} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <EmblaCarousel slides={items} options={OPTIONS} />
            </div>
        </section>
    );
}
