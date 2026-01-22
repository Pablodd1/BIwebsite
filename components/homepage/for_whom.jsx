"use client"

import { motion } from "framer-motion"
import { Warehouse, Truck, Factory } from "lucide-react"
import MyButton from "My_UI/btn/main"

const USERS = [
    {
        icon: Warehouse,
        title: "Wholesalers",
        desc: "Buy in volume, consolidate shipments, and control cost per unit with precision.",
    },
    {
        icon: Truck,
        title: "Importers & exporters",
        desc: "Plan container loads in advance and eliminate shipping inefficiencies.",
    },
    {
        icon: Factory,
        title: "Manufacturers",
        desc: "Ship products in bulk directly to partners without fragmented logistics.",
    },
]

export default function WhoItsFor() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl w-4/5 tracking-wider font-medium uppercase">
                            Designed for serious bulk buyers
                        </h2>
                        <p className="my-4 text-sm w-8/12 text-gray-600 leading-relaxed">
                            If your business ships products by container — not parcels —
                            this platform gives you the clarity and control traditional ecommerce never could.
                        </p>
                        <MyButton
                            label="About Us"
                            href="/about"
                            className={{
                                btn: "bg-primary px-5 py-2 h-10 ",
                                label: ""
                            }}
                        />
                    </motion.div>

                    <div className="space-y-4">
                        {USERS.map((u, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-4 rounded-xl border p-5"
                            >
                                <u.icon size={26} />
                                <div>
                                    <p className="font-semibold">{u.title}</p>
                                    <p className="text-sm text-gray-600">{u.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
