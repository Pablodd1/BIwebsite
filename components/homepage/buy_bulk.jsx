"use client"

import { motion } from "framer-motion"
import { Boxes, Ruler, Layers3, ShieldCheck } from "lucide-react"
import Stylish_H2 from "My_UI/stylish_h2"

const FEATURES = [
    {
        icon: Boxes,
        title: "Container-first commerce",
        desc: "Products are grouped by containers, not scattered carts. This ensures accurate volume planning and shipping efficiency.",
    },
    {
        icon: Ruler,
        title: "Volume-aware packing",
        desc: "Every product contributes to container capacity so you always know how full your shipment is before checkout.",
    },
    {
        icon: Layers3,
        title: "Multi-product optimization",
        desc: "Mix and match multiple products intelligently within a single container to reduce cost per unit.",
    },
    {
        icon: ShieldCheck,
        title: "Predictable logistics",
        desc: "No hidden shipping surprises. What you see in the container is exactly what gets shipped.",
    },
]

export default function BuiltForBulk() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className=""
                >
                    <Stylish_H2 h2={"Built for bulk. Designed for control."} />
                    <p className="mt-4 text-gray-600 text-sm">
                        Traditional carts weren&apos;t made for container shipping.
                        We built a system that thinks in volume, not guesswork.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="rounded-2xl border bg-white p-6"
                        >
                            <f.icon className="mb-4" size={26} />
                            <h3 className="font-semibold">{f.title}</h3>
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
