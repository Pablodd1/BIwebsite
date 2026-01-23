"use client";

import { motion } from "framer-motion";
import { UnfoldVertical, Crop, Move, Layers } from "lucide-react";
import Stylish_H2 from "My_UI/stylish_h2";

const ICONS = {
    width: <UnfoldVertical className="text-current rotate-90 " />,
    height: <Crop className="text-current" />,
    length: <UnfoldVertical className="text-current" />,
    thickness: <Layers className="text-current" />,
};

export default function ProductDimensions({ dimension }) {
    if (!dimension) return null;

    // Filter out zero-value dimensions
    const filtered = Object.entries(dimension).filter(
        ([_, val]) => val.value && val.value !== 0
    );

    if (!filtered.length) return null;

    // Find max for relative sizing
    const maxValue = Math.max(...filtered.map(([_, val]) => val.value));

    return (
        <section className="mt-20 w-full mx-auto px-4 md:px-0">
            <Stylish_H2 h2={"Technical Specifications"} />

            <div className="flex items-stretch justify-evenly w-full gap-8">
                {filtered.map(([key, val]) => {
                    return (
                        <motion.div
                            key={key}
                            whileHover={{ scale: 1.05 }}
                            className="bg-black rounded-xl shadow-md p-6 w-full flex flex-col items-center gap-4"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-primary text-secondary  rounded-full">
                                {ICONS[key] || null}
                            </div>

                            <div className="text-center">
                                <p className="text-primary uppercase text-xs tracking-wider">{key}</p>
                                <p className="text-lg font-semibold text-orange-700 mt-1">
                                    {val.value} {val.unit}
                                </p>
                            </div>

                        </motion.div>
                    );
                })}
            </div>

            <p className="mt-6 text-xs text-gray-500 text-center md:text-left">
                Note: Dimensions with 0 value are not displayed. Relative bars visualize size comparisons for quick understanding.
            </p>
        </section>
    );
}
