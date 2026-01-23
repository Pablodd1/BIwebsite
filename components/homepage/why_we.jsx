import Stylish_H2 from "My_UI/stylish_h2";

const features = [
    {
        id: "01",
        title: "Innovation",
        text: "We challenge traditional construction methods by developing advanced PVC and WPC building materials that combine modern design, performance, and ease of installation. Our products are engineered to simplify projects without sacrificing quality or aesthetics.",
    },
    {
        id: "02",
        title: "Quality & Durability",
        text: "Every Unitec product is built to last. With high pure-PVC content, 100% waterproof performance, fire-resistant properties, and industry-leading warranties, we deliver materials that outperform conventional alternatives in real-world conditions.",
    },
    {
        id: "03",
        title: "Sustainability",
        text: "Environmental responsibility is built into everything we make. Our materials contain recycled content, are fully recyclable, require zero maintenance, and reduce long-term waste—supporting sustainable construction without compromise.",
    },
];

export default function WhyWeSection() {
    return (
        <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16 my-20 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <Stylish_H2 h2={"Why Unitec"} />

                {/* Description */}
                <p className="max-w-3xl text-md text-accent2 mx-auto text-center mb-14">
                    Unitec USA Design was founded on a simple idea: building materials should be
                    innovative, durable, and environmentally responsible—without being complicated
                    or costly. We create modern PVC and WPC solutions that help professionals and
                    homeowners build smarter, faster, and with confidence.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center relative">
                    {features.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex flex-col border-r-2 border-accent2/75 py-5 last-of-type:border-r-0"
                        >
                            <span className="text-sm tracking-widest text-secondary font-extrabold mb-2">
                                {item.id}
                            </span>

                            <h3 className="text-md tracking-widest uppercase text-gray-900 mb-4">
                                {item.title}
                            </h3>

                            <p className="text-sm max-w-xs mx-auto text-accent2">
                                {item.text}
                            </p>

                            {/* Divider (desktop only, not after last item) */}
                            {index < features.length - 1 && (
                                <div
                                    className={`hidden md:block absolute top-[60%] h-28 w-px bg-gray-200 
                                    ${index === 0 ? "left-1/3" : "left-2/3"}`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
