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
import { useLanguage } from "lib/LanguageContext";

export default function PoliciesPage() {
    const { t } = useLanguage();
    
    return (
        <main className="w-full">
            {/* ================= HERO ================= */}
            <section className="bg-gray-100 py-20">
                <div className="mx-auto max-w-5xl px-4">
                    <motion.h1 className="text-3xl font-bold">
                        {t('policies.title')}
                    </motion.h1>

                    <p className="mt-4 max-w-3xl text-sm text-gray-600">
                        {t('policies.description')}
                    </p>

                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-5xl px-4 space-y-14">
                    <Policy icon={Shield} title={t('policies.sections.introduction.title')}>
                        <p>
                            {t('policies.sections.introduction.text')}
                        </p>
                    </Policy>

                    <Policy icon={FileText} title={t('policies.sections.collect.title')}>
                        <p>
                            {t('policies.sections.collect.text')}
                        </p>
                    </Policy>

                    <Policy icon={Scale} title={t('policies.sections.use.title')}>
                        <ul className="list-disc pl-5 space-y-2">
                            {t('policies.sections.use.items') && t('policies.sections.use.items').map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </Policy>

                    <Policy icon={AlertTriangle} title={t('policies.sections.sharing.title')}>
                        <p>
                            {t('policies.sections.sharing.text')}
                        </p>
                    </Policy>

                    <Policy icon={Lock} title={t('policies.sections.security.title')}>
                        <p>
                            {t('policies.sections.security.text')}
                        </p>
                    </Policy>

                    <Policy icon={RefreshCcw} title={t('policies.sections.cookies.title')}>
                        <p>
                            {t('policies.sections.cookies.text')}
                        </p>
                    </Policy>

                    <Policy icon={Shield} title={t('policies.sections.rights.title')}>
                        <p>
                            {t('policies.sections.rights.text')}
                        </p>
                        <p className="font-medium">
                            📧 {t('policies.email')}
                        </p>
                    </Policy>

                    <Policy icon={Mail} title={t('policies.sections.contact.title')}>
                        <p>
                            {t('policies.sections.contact.text')}
                        </p>
                        <p className="font-medium">
                            📧 {t('policies.email')}
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
