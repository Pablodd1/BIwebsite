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
                        Terms & Conditions
                    </motion.h1>

                    <p className="mt-4 max-w-3xl text-sm text-gray-600">
                        These Terms govern your access to and use of the Unitec USA Design website,
                        products, and services.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-5xl px-4 space-y-14">
                    <Policy icon={FileText} title="1. Acceptance of Terms">
                        <p>
                            By accessing or using www.unitecusadesign.com, you agree to be bound by
                            these Terms & Conditions. If you do not agree, please discontinue use
                            of the website.
                        </p>
                    </Policy>

                    <Policy icon={Shield} title="2. Use of Website">
                        <p>
                            You may use this website for lawful business and informational purposes
                            only, including browsing products, requesting quotes, and placing orders.
                        </p>
                        <p>
                            Unauthorized access, scraping, misuse, or interference with website
                            functionality is strictly prohibited.
                        </p>
                    </Policy>

                    <Policy icon={AlertTriangle} title="3. Product Information">
                        <p>
                            We strive for accuracy, but product descriptions, specifications, colors,
                            and availability are not guaranteed to be error-free.
                        </p>
                        <p>
                            We reserve the right to modify or discontinue products and correct
                            inaccuracies without notice.
                        </p>
                    </Policy>

                    <Policy icon={Scale} title="4. Pricing & Payment">
                        <p>
                            Prices are listed in USD and may change without notice. Shipping, taxes,
                            and duties are not included unless stated.
                        </p>
                        <p>
                            Payment is due at order placement unless credit terms are approved.
                            Orders may be canceled for non-payment.
                        </p>
                    </Policy>

                    <Policy icon={Truck} title="5. Orders & Delivery">
                        <p>
                            Orders are subject to acceptance and availability. Delivery dates are
                            estimates and not guaranteed.
                        </p>
                        <p>
                            Risk of loss transfers to the carrier upon shipment. Customers must
                            inspect deliveries and report damage promptly.
                        </p>
                    </Policy>

                    <Policy icon={RefreshCcw} title="6. Returns & Warranty">
                        <p>
                            Standard products may be eligible for return within 30 days, subject to
                            condition and restocking fees. Custom orders are non-refundable.
                        </p>
                        <p>
                            Products are covered by limited warranties as specified. Warranty claims
                            are limited to repair, replacement, or refund.
                        </p>
                    </Policy>

                    <Policy icon={Lock} title="7. Limitation of Liability">
                        <p>
                            To the maximum extent permitted by law, our liability is limited to the
                            purchase price of the product.
                        </p>
                        <p>
                            We are not responsible for indirect, incidental, or consequential damages,
                            installation errors, or delays beyond our control.
                        </p>
                    </Policy>

                    <Policy icon={Scale} title="8. Intellectual Property">
                        <p>
                            All website content, trademarks, and materials are owned by Unitec USA
                            Design or its licensors.
                        </p>
                        <p>
                            You may not reproduce, distribute, or use our content without prior
                            written permission.
                        </p>
                    </Policy>

                    <Policy icon={RefreshCcw} title="9. Changes to These Terms">
                        <p>
                            We may update these Terms at any time. Changes become effective upon
                            posting to the website.
                        </p>
                        <p>
                            Continued use of the website constitutes acceptance of the revised Terms.
                        </p>
                    </Policy>

                    <Policy icon={Mail} title="10. Contact">
                        <p>
                            For questions regarding these Terms & Conditions, please contact our
                            Legal Department.
                        </p>
                        <p className="font-medium">
                            📧 legal@unitecusadesign.com
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
