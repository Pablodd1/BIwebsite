"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MyButton from "My_UI/btn/main"

export default function HomeCTA() {
    return (
        <section className="py-24 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-4 text-center"
            >
                <h2 className="text-3xl font-bold">
                    Start filling your first container
                </h2>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    Explore products, see how they fit inside containers,
                    and ship with complete confidence — before checkout.
                </p>

                <div className="mt-8 flex justify-center">
                    <MyButton
                        label="Browse Products"
                        href="/collections"
                        className={{
                            btn: "bg-secondary px-5 py-2 h-10 ",
                            label: " "
                        }}
                        icon={<ArrowRight size={16} />}
                    />
                </div>
            </motion.div>
        </section>
    )
}
