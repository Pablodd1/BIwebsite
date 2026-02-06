"use client"

import { motion } from "framer-motion"
import {
    Phone,
    Mail,
    MapPin,
    Boxes,
    Clock,
    Truck,
    ShieldCheck,
    Container,
    Send,
} from "lucide-react"
import Stylish_H2 from "My_UI/stylish_h2"
import Map from "./map";


export default function ContactPage() {
    return (
        <main className="w-full">
            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-linear-160 from-gray-900 to-black py-20 text-white min-h-fit">
                <div className="mx-auto max-w-6xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl"
                    >
                        Let&apos;s Move Your Products —
                        <span className="text-gray-300"> At Scale</span>
                    </motion.h1>

                    <p className="my-4 max-w-2xl text-sm text-gray-300">
                        We specialize in bulk product handling, container-based shipping,
                        and optimized logistics workflows. Reach out to discuss volumes,
                        containers, and delivery timelines.
                    </p>

                    {/* Trust signals */}
                    <div className="my-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <TrustItem icon={Container} label="Bulk Orders" value="Container-based" />
                        <TrustItem icon={Truck} label="Logistics" value="Optimized Packing" />
                        <TrustItem icon={Clock} label="Response Time" value="Within 24h" />
                        <TrustItem icon={ShieldCheck} label="Handling" value="Secure & Tracked" />
                    </div>
                </div>
            </section>

            {/* ================= CONTACT MAP ================= */}
            <Map />

            {/* ================= CONTACT CONTENT ================= */}
            <section className="py-20">
                <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-5">
                    <Stylish_H2 h2="Talk to Our Logistics Team" className="col-span-full tracking-widest uppercase text-sm md:text-lg " />
                    {/* LEFT INFO */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold">

                        </h2>

                        <p className="mt-3 text-sm text-gray-600">
                            Whether you&apos;re planning a full container load or evaluating
                            capacity, our team helps you choose the right shipping structure.
                        </p>

                        {/* Contact cards */}
                        <div className="mt-8 space-y-4">
                            <InfoCard
                                icon={MapPin}
                                title="Headquarters"
                                value="6120 NW 74th Ave, Doral, Miami, FL 33166"
                                hint="United States"
                            />
                            <InfoCard
                                icon={Phone}
                                title="General Inquiries"
                                value="+1 (786) 968-5783"
                                hint="@building.innovation"
                            />

                            <h3 className="text-lg font-semibold mt-6 mb-2">Active Staff</h3>

                            <InfoCard
                                icon={Phone}
                                title="Juan David Garcia (CEO)"
                                value="+1 (786) 657-5441"
                                hint="General inquiries through main line"
                            />
                            <InfoCard
                                icon={Phone}
                                title="Alexander Gomez Zapata (Global)"
                                value="+57 311 3017763"
                                hint="International Account Manager"
                            />
                            <InfoCard
                                icon={Phone}
                                title="Johana Mesa (Distribution)"
                                value="+1 (786) 968-5783"
                                hint="Distribution Sales Manager"
                            />
                            <InfoCard
                                icon={Phone}
                                title="Antonio Borjas (Sales)"
                                value="+1 (786) 546-9051"
                                hint="Sales Representative"
                            />
                            <InfoCard
                                icon={Phone}
                                title="Marlon Moncada (SW Florida)"
                                value="+1 (239) 878-9299"
                                hint="Sales Representative"
                            />
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">
                                Request a Bulk Shipping Quote
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Provide details about your products and container requirements.
                            </p>

                            <form className="mt-6 grid gap-4 sm:grid-cols-2">
                                <Input label="Full Name" placeholder="John Doe" />
                                <Input label="Company Name" placeholder="Your Company LLC" />
                                <Input label="Email" placeholder="your-name@example.com" />
                                <Input label="Phone" placeholder="+1 234 567 890" />

                                <div className="sm:col-span-2">
                                    <Input
                                        label="Estimated Volume / Containers"
                                        placeholder="e.g. 1x 40ft container"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <Textarea
                                        label="Project Details"
                                        placeholder="Describe product types, quantities, destination, and timeline..."
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <button
                                        type="submit" aria-label="Submit Form"
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 active:scale-[0.98]"
                                    >
                                        <Send size={16} />
                                        Send Inquiry
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-xs text-gray-500">
                                Our team usually responds within 24 business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

/* ================= SUB COMPONENTS ================= */

function TrustItem({ icon: Icon, label, value }) {
    return (
        <div className="rounded-xl bg-white/5 p-4 text-center md:min-h-fit">
            <Icon strokeWidth={0.5} className="mx-auto mb-5 h-18 md:h-full w-auto text-gray-300" />
            <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
            <p className="text-sm font-thin tracking-widest uppercase my-2 ">{value}</p>
        </div>
    )
}

function InfoCard({ icon: Icon, title, value, hint }) {
    return (
        <div className="flex items-start gap-4 rounded-xl border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                <Icon size={18} />
            </div>
            <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm">{value}</p>
                <p className="text-xs text-gray-500">{hint}</p>
            </div>
        </div>
    )
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">
                {label}
            </label>
            <input
                {...props}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-black"
            />
        </div>
    )
}

function Textarea({ label, ...props }) {
    return (
        <div>
            <label className="mb-1 block text-xs font-medium text-gray-600">
                {label}
            </label>
            <textarea
                {...props}
                rows={4}
                className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:border-black"
            />
        </div>
    )
}
