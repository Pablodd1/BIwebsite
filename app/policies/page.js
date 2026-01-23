"use client"

import { motion } from "framer-motion"
import {
    FileText,
    Shield,
    AlertTriangle,
    Lock,
    Truck,
    Scale,
    RefreshCcw,
    Mail,
} from "lucide-react"

export default function PoliciesPage() {
    return (
        <main className="w-full">
            {/* ================= HERO ================= */}
            <section className="bg-gray-100 py-20">
                <div className="mx-auto max-w-5xl px-4">
                    <motion.h1 className="text-3xl font-bold">
                        Privacy Policy
                    </motion.h1>

                    <p className="mt-4 max-w-3xl text-sm text-gray-600">
                        This Privacy Policy explains how Unitec USA Design collects, uses, and protects
                        your information when you visit our website or engage with our products
                        and services.
                    </p>

                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-5xl px-4 space-y-14">
                    <Policy icon={Shield} title="1. Introduction">
                        <p>
                            Unitec USA Design (“we,” “our,” or “us”) is committed to protecting your
                            privacy. This policy explains how we collect, use, disclose, and safeguard
                            your information when you visit www.unitecusadesign.com.
                        </p>
                        <p>
                            By using our website or services, you agree to the practices described
                            in this Privacy Policy.
                        </p>
                    </Policy>

                    <Policy icon={FileText} title="2. Information We Collect">
                        <p>
                            We may collect personal information such as your name, email address,
                            phone number, mailing address, company details, billing information,
                            and project specifications.
                        </p>
                        <p>
                            We also automatically collect technical data including IP address,
                            browser type, pages viewed, and usage behavior through cookies
                            and similar technologies.
                        </p>
                    </Policy>

                    <Policy icon={Scale} title="3. How We Use Your Information">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Process orders and deliver products</li>
                            <li>Respond to inquiries and provide customer support</li>
                            <li>Improve our website, products, and services</li>
                            <li>Send updates or marketing communications (with consent)</li>
                            <li>Prevent fraud and comply with legal obligations</li>
                        </ul>
                    </Policy>

                    <Policy icon={AlertTriangle} title="4. Information Sharing">
                        <p>
                            We do not sell your personal information. We may share data with trusted
                            service providers, authorized partners (with consent), or when required
                            by law.
                        </p>
                        <p>
                            Information may also be disclosed in connection with business transfers
                            such as mergers or acquisitions.
                        </p>
                    </Policy>

                    <Policy icon={Lock} title="5. Data Security">
                        <p>
                            We use industry-standard safeguards including encryption, secure servers,
                            access controls, and regular security reviews to protect your data.
                        </p>
                        <p>
                            While we take reasonable measures, no online system can be guaranteed
                            to be 100% secure.
                        </p>
                    </Policy>

                    <Policy icon={RefreshCcw} title="6. Cookies & Tracking">
                        <p>
                            Cookies help us remember preferences, analyze traffic, personalize content,
                            and improve site functionality.
                        </p>
                        <p>
                            You may manage cookie settings through your browser. Disabling cookies
                            may affect certain features.
                        </p>
                    </Policy>

                    <Policy icon={Shield} title="7. Your Privacy Rights">
                        <p>
                            You may request access, correction, or deletion of your personal data,
                            opt out of marketing communications, or withdraw consent at any time.
                        </p>
                        <p className="font-medium">
                            📧 privacy@unitecusadesign.com
                        </p>
                    </Policy>

                    <Policy icon={Mail} title="8. Contact">
                        <p>
                            For questions about this Privacy Policy or our data practices, please
                            contact our Privacy Department.
                        </p>
                        <p className="font-medium">
                            📧 privacy@unitecusadesign.com
                        </p>
                    </Policy>

                </div>
            </section>
        </main>
    )
}

/* ================= COMPONENT ================= */

function Policy({ icon: Icon, title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
        >
            <div className="mb-4 flex items-center gap-3">
                <Icon size={20} />
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                {children}
            </div>
        </motion.div>
    )
}
