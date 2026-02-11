"use client";

import React from 'react';
import { Eye, Rocket, Globe2, Users, Award, TrendingUp, Building2, MapPin } from 'lucide-react';
import { useLanguage } from 'lib/LanguageContext';

export default function VisionPage() {
    const { t } = useLanguage();
    
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-gray-900 to-black py-24 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        {t('about.vision.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
                        {t('about.vision.p1')}
                    </p>
                </div>
            </section>

            {/* Vision Statement */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-lg">
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-xl">
                                <Eye className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 uppercase tracking-wide">
                            Where We&apos;re Heading
                        </h2>
                        
                        <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
                            {t('about.vision.p1')}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                    <Rocket className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Innovation Leadership</h3>
                                <p className="text-gray-600 text-sm">Pioneering the future of construction</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                    <Globe2 className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Regional Expansion</h3>
                                <p className="text-gray-600 text-sm">Across Latin American markets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
                        Strategic Pillars
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-gray-200">01</span>
                            <h3 className="text-lg font-bold mb-2">Simplification</h3>
                            <p className="text-gray-600 text-sm">Making construction easier</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-gray-200">02</span>
                            <h3 className="text-lg font-bold mb-2">Design Excellence</h3>
                            <p className="text-gray-600 text-sm">Setting industry trends</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-gray-200">03</span>
                            <h3 className="text-lg font-bold mb-2">Sustainability</h3>
                            <p className="text-gray-600 text-sm">Environmental responsibility</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-gray-200">04</span>
                            <h3 className="text-lg font-bold mb-2">Partnership</h3>
                            <p className="text-gray-600 text-sm">Collaborative ecosystem</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Headquarters */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="bg-black text-white p-10 rounded-2xl text-center">
                        <div className="flex justify-center mb-6">
                            <MapPin className="w-12 h-12 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest">{t('whoWeAre.headquarters.title')}</h3>
                        <address className="not-italic text-lg space-y-2 text-gray-300">
                            <p>{t('whoWeAre.headquarters.address')}</p>
                            <p>{t('whoWeAre.headquarters.city')}</p>
                            <p>{t('whoWeAre.headquarters.country')}</p>
                        </address>
                        <div className="mt-6">
                            <p className="text-white font-semibold">{t('whoWeAre.headquarters.phone')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
