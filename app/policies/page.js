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
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold"
                    >
                        Terms & Policies
                    </motion.h1>

                    <p className="mt-4 max-w-3xl text-sm text-gray-600">
                        These terms outline how our platform operates, how data is handled,
                        and what users can expect when using our container-based bulk
                        ordering and logistics services.
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-5xl px-4 space-y-14">

                    <Policy
                        icon={FileText}
                        title="1. Platform Usage"
                    >
                        <p>
                            Our platform is designed for businesses purchasing, planning,
                            or managing products in bulk using container-based workflows.
                            By accessing or using the platform, you agree to use it only
                            for lawful business purposes.
                        </p>

                        <p>
                            You are responsible for ensuring that all information provided,
                            including product quantities, dimensions, and shipment details,
                            is accurate to the best of your knowledge.
                        </p>
                    </Policy>

                    <Policy
                        icon={Truck}
                        title="2. Containers & Product Allocation"
                    >
                        <p>
                            Containers represent physical shipping units with defined
                            internal dimensions. Product placement within containers is
                            calculated based on volume and quantity.
                        </p>

                        <p>
                            The platform provides estimates and planning tools only.
                            Actual shipment feasibility may vary due to packaging,
                            handling, or carrier constraints.
                        </p>
                    </Policy>

                    <Policy
                        icon={AlertTriangle}
                        title="3. Accuracy & Limitations"
                    >
                        <p>
                            While we strive to provide accurate calculations and system
                            feedback, the platform does not guarantee that container
                            capacity, shipping costs, or delivery timelines are exact.
                        </p>

                        <p>
                            Users should independently verify critical logistics decisions
                            before final shipment.
                        </p>
                    </Policy>

                    <Policy
                        icon={Shield}
                        title="4. User Responsibilities"
                    >
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Ensure compliance with local and international trade laws</li>
                            <li>Provide truthful and accurate business information</li>
                            <li>Use the platform in a non-abusive and lawful manner</li>
                        </ul>
                    </Policy>

                    <Policy
                        icon={Lock}
                        title="5. Data & Privacy"
                    >
                        <p>
                            We collect and process data necessary to operate the platform,
                            improve user experience, and support logistics workflows.
                        </p>

                        <p>
                            We do not sell user data. Access to sensitive information is
                            restricted and protected using industry-standard security
                            practices.
                        </p>
                    </Policy>

                    <Policy
                        icon={Scale}
                        title="6. Intellectual Property"
                    >
                        <p>
                            All platform content, workflows, designs, and logic are the
                            intellectual property of the company unless otherwise stated.
                        </p>

                        <p>
                            Users may not copy, resell, reverse-engineer, or misuse any
                            part of the platform without written permission.
                        </p>
                    </Policy>

                    <Policy
                        icon={RefreshCcw}
                        title="7. Changes to These Terms"
                    >
                        <p>
                            We may update these terms periodically to reflect changes
                            in our services, legal requirements, or operational practices.
                        </p>

                        <p>
                            Continued use of the platform after updates indicates
                            acceptance of the revised terms.
                        </p>
                    </Policy>

                    <Policy
                        icon={Mail}
                        title="8. Contact"
                    >
                        <p>
                            If you have questions regarding these terms or policies,
                            please contact our support or legal team.
                        </p>

                        <p className="font-medium">
                            📧 support@yourcompany.com
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
