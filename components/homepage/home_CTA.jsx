"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MyButton from "My_UI/btn/main"
import { useLanguage } from "lib/LanguageContext"

export default function HomeCTA() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-black text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-4 text-center"
            >
                <h2 className="text-3xl font-bold">
                    {t("cta.title")}
                </h2>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {t("cta.text")}
                </p>

                <div className="mt-8 flex justify-center">
                    <MyButton
                        label={t("cta.btn")}
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
