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
    Droplets,
    ToolCase,
    Flame,
    Leaf,
    Zap,
    Home,
    Grid,
    Layout,
    Volume2,
    Palette,
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


            {/* ================= MISSION & VISION ================= */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">

                    {/* MISSION */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Stylish_H2 h2={"Our Mission"} />

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            At Unitec USA Design, our mission is to redefine modern construction
                            by delivering innovative, sustainable, and high-quality PVC and WPC
                            building materials that elevate everyday spaces.
                        </p>

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            We believe building materials should do more than perform —
                            they should inspire creativity, simplify installation, and
                            contribute to a more sustainable built environment.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <ListItem text="Innovative, future-ready product development" />
                            <ListItem text="Eco-conscious materials and manufacturing" />
                            <ListItem text="Premium quality without compromise" />
                            <ListItem text="Solutions that empower professionals and homeowners" />
                            <ListItem text="Accessible materials for projects of any scale" />
                        </ul>
                    </motion.div>

                    {/* VISION */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold">Our Vision</h3>

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Our vision is to become the leading provider of PVC and WPC
                            building solutions across North America — transforming how
                            professionals and homeowners approach construction and design.
                        </p>

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            We’re building toward a future where sustainable construction,
                            design freedom, and maintenance-free living are the standard,
                            not the exception.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <Stat icon={Globe} label="Nationwide Reach" />
                            <Stat icon={ShieldCheck} label="Sustainable Focus" />
                            <Stat icon={Target} label="Design Freedom" />
                            <Stat icon={Users} label="Built for Professionals" />
                        </div>
                    </motion.div>

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

            {/* ================= WHY CHOOSE UNITEC ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <Stylish_H2 h2={"Why Choose Unitec"} />

                    <p className="mt-4 max-w-2xl text-sm text-gray-600">
                        Our products are engineered to outperform traditional building materials
                        while simplifying installation and long-term ownership.
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <Feature icon={ShieldCheck} title="15–25 Year Warranties" text="Industry-leading durability backed by confidence." />
                        <Feature icon={Droplets} title="100% Waterproof" text="No rot, rust, or moisture damage — ever." />
                        <Feature icon={ToolCase} title="Zero Maintenance" text="No painting, sealing, or refinishing required." />
                        <Feature icon={Flame} title="Fire Resistant" text="Self-extinguishing with low flame propagation." />
                        <Feature icon={Leaf} title="Eco-Friendly" text="Recyclable materials with recycled content." />
                        <Feature icon={Zap} title="Fast Installation" text="Save time and labor on every project." />
                    </div>
                </div>
            </section>

            {/* ================= PRODUCT RANGE ================= */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <Stylish_H2 h2={"Our Product Range"} />

                    <p className="mt-4 max-w-2xl text-sm text-gray-600">
                        With 100+ product lines across 22 categories, Unitec delivers
                        complete solutions for residential and commercial construction.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Stat icon={Layers} label="Wall Panels & Cladding" />
                        <Stat icon={Home} label="Ceilings & Roofing" />
                        <Stat icon={Grid} label="Flooring Systems" />
                        <Stat icon={Layout} label="Facade Solutions" />
                        <Stat icon={Volume2} label="Acoustic Treatments" />
                        <Stat icon={Palette} label="Decorative Finishes" />
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

            {/* ================= SUSTAINABILITY & QUALITY ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">

                    <div>
                        <Stylish_H2 h2={"Sustainability Built In"} />
                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <ListItem text="Recycled PVC content in all products" />
                            <ListItem text="Fully recyclable at end of life" />
                            <ListItem text="Low VOC emissions for indoor safety" />
                            <ListItem text="Long lifespan reduces replacement waste" />
                            <ListItem text="Energy-efficient manufacturing processes" />
                        </ul>
                    </div>

                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Quality Assurance</h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-700">
                            <ListItem text="ISO-certified manufacturing facilities" />
                            <ListItem text="Third-party laboratory testing" />
                            <ListItem text="Strict production-stage inspections" />
                            <ListItem text="Real-world performance validation" />
                            <ListItem text="Continuous improvement protocols" />
                        </ul>
                    </div>

                </div>
            </section>

            {/* ================= INNOVATION & CUSTOMER SUCCESS ================= */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">

                    <div>
                        <Stylish_H2 h2={"Innovation Leadership"} />
                        <p className="mt-4 text-sm text-gray-600">
                            We continuously invest in research and development to deliver
                            advanced materials, modern finishes, and smarter installation systems.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <ListItem text="Advanced manufacturing technologies" />
                            <ListItem text="Expanded product applications" />
                            <ListItem text="Improved durability and performance" />
                            <ListItem text="Modern color trends and textures" />
                        </ul>
                    </div>

                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Customer Success</h3>
                        <ul className="mt-4 space-y-3 text-sm text-gray-700">
                            <ListItem text="Expert technical support" />
                            <ListItem text="Installation guides & video tutorials" />
                            <ListItem text="Sample programs & consultations" />
                            <ListItem text="Warranty and post-sale support" />
                        </ul>
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
function Feature({ icon: Icon, title, text }) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Icon size={22} className="mb-3" />
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {text}
            </p>
        </div>
    )
}
function IconStat({ icon: Icon, label, subtext }) {
    return (
        <div className="flex items-start gap-3 rounded-xl border p-4">
            <Icon size={20} />
            <div>
                <p className="text-sm font-medium">{label}</p>
                {subtext && (
                    <p className="text-xs text-gray-600">{subtext}</p>
                )}
            </div>
        </div>
    )
}
