import React from 'react';
import { Ship, Package, DollarSign, Handshake, Briefcase, Building2, Store, HardHat, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from 'lib/LanguageContext';

export const metadata = {
    title: "Business Models | Building Innovation",
    description: "Discover our flexible business models and partnership opportunities. From FOB to CIF terms, we offer solutions tailored to your specific needs.",
};

export default function BusinessModelsPage() {
    const { t } = useLanguage();
    
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-black to-gray-900 py-24 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        {t('businessModels.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t('businessModels.intro')}
                    </p>
                </div>
            </section>

            {/* Trade Terms */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        {t('businessModels.tradeTerms.title')}
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        {t('businessModels.tradeTerms.subtitle')}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* FOB */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                                    <Ship className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{t('businessModels.tradeTerms.fob.title')}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {t('businessModels.tradeTerms.fob.desc')}
                            </p>
                            <ul className="space-y-3">
                                {t('businessModels.tradeTerms.fob.benefits')?.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CIF */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                                    <Package className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{t('businessModels.tradeTerms.cif.title')}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {t('businessModels.tradeTerms.cif.desc')}
                            </p>
                            <ul className="space-y-3">
                                {t('businessModels.tradeTerms.cif.benefits')?.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Types */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        {t('businessModels.partnership.title')}
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        {t('businessModels.partnership.subtitle')}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(t('businessModels.partnership.types') || {}).map(([key, type]) => (
                            <div key={key} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                    {key === 'distributors' && <Building2 className="w-6 h-6 text-white" />}
                                    {key === 'retailers' && <Store className="w-6 h-6 text-white" />}
                                    {key === 'contractors' && <HardHat className="w-6 h-6 text-white" />}
                                    {key === 'international' && <Globe className="w-6 h-6 text-white" />}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{type.desc}</p>
                                <ul className="space-y-2">
                                    {type.benefits?.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
                        {t('businessModels.benefits.title')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                                <DollarSign className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('businessModels.benefits.items.flexibility.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('businessModels.benefits.items.flexibility.desc')}</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                                <Handshake className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('businessModels.benefits.items.transparency.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('businessModels.benefits.items.transparency.desc')}</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                                <Briefcase className="w-7 h-7 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('businessModels.benefits.items.tailored.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('businessModels.benefits.items.tailored.desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black py-20 text-white">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        {t('businessModels.cta.title')}
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('businessModels.cta.desc')}
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                        Contact Sales Team
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </main>
    );
}
