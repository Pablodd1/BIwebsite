"use client";

import Stylish_H2 from "My_UI/stylish_h2";
import { useLanguage } from "lib/LanguageContext";

export default function WhyWeSection() {
    const { t } = useLanguage();

    const features = [
        {
            id: "01",
            title: t("why.features.innovation.title"),
            text: t("why.features.innovation.text"),
        },
        {
            id: "02",
            title: t("why.features.quality.title"),
            text: t("why.features.quality.text"),
        },
        {
            id: "03",
            title: t("why.features.sustainability.title"),
            text: t("why.features.sustainability.text"),
        },
    ];

    return (
        <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16 my-20 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <Stylish_H2 h2={t("why.title")} />

                {/* Description */}
                <p className="max-w-3xl text-md text-accent2 mx-auto text-center mb-14">
                    {t("why.description")}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center relative">
                    {features.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex flex-col border-b-2 md:border-r-2 border-accent2/75 py-5 last-of-type:border-0 md:border-b-0"
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
