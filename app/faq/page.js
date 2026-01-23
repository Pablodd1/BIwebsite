'use client'
import { motion, AnimatePresence } from "framer-motion"
import {
    HelpCircle,
    Package,
    Wrench,
    ShieldCheck,
    Leaf,
    CreditCard,
    Flame,
    Mail,
    Phone,
    MessageSquare,
    ChevronDown,
} from "lucide-react"
import { useState } from "react"

const FAQSection = ({ icon: Icon, title, items }) => {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                </div>
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>

            <div className="space-y-4">
                {items.map((faq, idx) => {
                    const isOpen = openIndex === idx

                    return (
                        <div
                            key={idx}
                            className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition"
                            >
                                <span className="font-medium text-gray-900">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`transition-transform ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="px-6 pb-5 text-gray-600 leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default function FAQPage() {
    return (
        <main className="bg-gray-50">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-6 py-20 max-w-6xl">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Everything you need to know about Unitec USA Design products,
                            installation, warranties, and ordering.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6 py-20 max-w-6xl">
                <FAQSection
                    icon={HelpCircle}
                    title="General Questions"
                    items={[
                        {
                            q: "What makes PVC and WPC superior to traditional building materials?",
                            a: "PVC and WPC are 100% waterproof, maintenance-free, fire resistant, lighter in weight, faster to install, antimicrobial, eco-friendly, and last 15–25+ years—far outperforming wood, metal, and gypsum.",
                        },
                        {
                            q: "Are your products suitable for residential and commercial use?",
                            a: "Yes. Unitec products are used in homes, commercial buildings, healthcare facilities, hospitality venues, and industrial projects across North America.",
                        },
                        {
                            q: "Do you ship nationwide?",
                            a: "Yes, we ship to all 50 U.S. states. Shipping costs depend on location and order volume.",
                        },
                        {
                            q: "Can I order samples?",
                            a: "Yes, we offer sample programs for most products. Email sales@unitecusadesign.com to request samples.",
                        },
                    ]}
                />

                <FAQSection
                    icon={Package}
                    title="Product Questions"
                    items={[
                        {
                            q: "What is the difference between PVC and WPC?",
                            a: "PVC is a lightweight synthetic polymer with high design flexibility. WPC blends wood fibers with polymers for a more natural wood-like appearance and texture.",
                        },
                        {
                            q: "Are products suitable for outdoor use?",
                            a: "Yes. Many products are UV-protected and designed specifically for exterior applications including roofing, facades, decking, and cladding.",
                        },
                        {
                            q: "What colors are available?",
                            a: "We offer 200+ color options across all product lines including wood tones, neutrals, marble finishes, metallics, and custom palettes.",
                        },
                        {
                            q: "Can products be painted or stained?",
                            a: "No. Products are pre-finished and painting is not recommended as it may void warranties.",
                        },
                    ]}
                />

                <FAQSection
                    icon={Wrench}
                    title="Installation"
                    items={[
                        {
                            q: "Can I install products myself?",
                            a: "Many interior products are DIY-friendly. Roofing, facades, and large-scale projects should be professionally installed to maintain warranty coverage.",
                        },
                        {
                            q: "What adhesive should I use?",
                            a: "We recommend Pegatec multipurpose adhesive, available in white and transparent.",
                        },
                        {
                            q: "Do I need special tools?",
                            a: "No. Standard woodworking tools are sufficient for most installations.",
                        },
                    ]}
                />

                <FAQSection
                    icon={ShieldCheck}
                    title="Warranty & Returns"
                    items={[
                        {
                            q: "What warranty do products come with?",
                            a: "Exterior products carry a 15-year limited warranty, interior products a 7-year warranty. Actual lifespan typically exceeds 25 years.",
                        },
                        {
                            q: "What does the warranty cover?",
                            a: "Manufacturing defects such as delamination, excessive fading, or structural failure. Improper installation and misuse are excluded.",
                        },
                        {
                            q: "How do I file a warranty claim?",
                            a: "Email warranty@unitecusadesign.com with proof of purchase, photos, and installation details.",
                        },
                    ]}
                />

                <FAQSection
                    icon={Flame}
                    title="Technical & Sustainability"
                    items={[
                        {
                            q: "Are products fire-rated?",
                            a: "Yes. Our PVC products are self-extinguishing with low flame propagation and meet building code requirements.",
                        },
                        {
                            q: "Do products emit VOCs?",
                            a: "No. Products have low VOC emissions and are safe for indoor environments.",
                        },
                        {
                            q: "Can products be recycled?",
                            a: "Yes. All products are fully recyclable and contain recycled content.",
                        },
                    ]}
                />

                {/* Still Have Questions */}
                <section className="mt-20 rounded-3xl bg-primary p-10 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold mb-3">
                            Still have questions?
                        </h3>
                        <p className="text-secondary text-lg">
                            Our product specialists are ready to help you plan, price, and
                            execute your project with confidence.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Mail /> support@unitecusadesign.com
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone /> +1 (XXX) XXX-XXXX
                        </div>
                        <div className="flex items-center gap-3">
                            <MessageSquare /> Live Chat (Mon–Fri, 8am–6pm EST)
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}
