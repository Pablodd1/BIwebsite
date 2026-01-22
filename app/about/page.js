"use client"

import { motion } from "framer-motion"
import {
    Boxes,
    Truck,
    Ruler,
    Layers,
    ShieldCheck,
    Globe,
    Users,
    Target,
    ArrowRight,
} from "lucide-react"
import HowShippingWorks from "My_UI/product_ui/steps"
import Stylish_H2 from "My_UI/stylish_h2"

export default function AboutPage() {
    return (
        <main className="w-full">
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-br from-black to-gray-900 py-24 text-white">
                <div className="mx-auto max-w-6xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl text-3xl font-bold leading-tight md:text-4xl"
                    >
                        Built for Scale.
                        <span className="text-gray-300"> Designed for Containers.</span>
                    </motion.h1>

                    <p className="mt-5 max-w-3xl text-sm text-gray-300">
                        We help businesses move products in bulk using a structured,
                        container-first approach — reducing waste, optimizing space,
                        and simplifying logistics from order to shipment.
                    </p>
                </div>
            </section>

            {/* ================= STORY ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">
                    <div>
                        <Stylish_H2 h2={" Why We Exist"} />

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Bulk shipping is broken when treated like normal e-commerce.
                            Products aren&apos;t individual units — they are volumes, dimensions,
                            and constraints inside a container.
                        </p>

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            We built our platform around a simple belief:
                            <strong> containers come first, products come second.</strong>
                            This mindset allows businesses to plan shipments realistically,
                            avoid overbooking, and gain full visibility into capacity.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Stat icon={Boxes} label="Bulk-First Logic" />
                        <Stat icon={Ruler} label="Dimension-Aware" />
                        <Stat icon={Truck} label="Logistics Ready" />
                        <Stat icon={ShieldCheck} label="Operationally Safe" />
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <Stylish_H2 h2={"How Our System Works"} />

                    <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
                        Our workflow mirrors real-world container planning — not
                        traditional carts.
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <Step
                            icon={Layers}
                            title="Create Containers"
                            text="Each order starts with a physical container definition including internal dimensions."
                        />
                        <Step
                            icon={Boxes}
                            title="Fill with Products"
                            text="Products are added based on size and quantity, not just price."
                        />
                        <Step
                            icon={Truck}
                            title="Ship with Confidence"
                            text="Know exactly how full each container is before shipment."
                        />
                    </div>
                </div>
            </section>

            {/* ================= TRUST ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">
                    <div>
                        <Stylish_H2 h2={"Built for Real Businesses"} />

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Our platform is designed for manufacturers, exporters,
                            distributors, and logistics-driven companies that move
                            serious volume — not casual shoppers.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <ListItem text="Exporters & Wholesalers" />
                            <ListItem text="Manufacturers shipping in bulk" />
                            <ListItem text="B2B e-commerce operations" />
                            <ListItem text="Freight-optimized supply chains" />
                        </ul>
                    </div>

                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            What Makes Us Different
                        </h3>

                        <div className="mt-4 space-y-4">
                            <Difference
                                icon={Target}
                                title="Container-Driven UX"
                                text="We don’t fake physical reality — volume is enforced."
                            />
                            <Difference
                                icon={Globe}
                                title="Global-Ready"
                                text="Designed for international shipping logic."
                            />
                            <Difference
                                icon={Users}
                                title="B2B Focused"
                                text="Every feature serves operational teams."
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="bg-black py-20 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-2xl font-semibold">
                        Ready to Ship Smarter?
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300">
                        Let&apos;s plan containers, not guesses.
                    </p>

                    <a
                        href="/contact"
                        className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                        Contact Our Team
                        <ArrowRight size={16} />
                    </a>
                </div>
            </section>
        </main>
    )
}

/* ================= COMPONENTS ================= */

function Stat({ icon: Icon, label }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border p-4">
            <Icon size={20} />
            <span className="text-sm font-medium">{label}</span>
        </div>
    )
}

function Step({ icon: Icon, title, text }) {
    return (
        <div className="rounded-2xl border bg-white p-6 text-center">
            <Icon className="mx-auto mb-3" size={24} />
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{text}</p>
        </div>
    )
}

function Difference({ icon: Icon, title, text }) {
    return (
        <div className="flex gap-3">
            <Icon size={18} />
            <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm text-gray-600">{text}</p>
            </div>
        </div>
    )
}

function ListItem({ text }) {
    return (
        <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            {text}
        </li>
    )
}
