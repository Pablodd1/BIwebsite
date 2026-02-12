"use client";

import React from 'react';
import { Target, Lightbulb, Heart, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from 'lib/LanguageContext';

export default function MissionPage() {
    const { t } = useLanguage();
    
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-black to-gray-900 py-24 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        {t('about.mission.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
                        {t('about.mission.p1')}
                    </p>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-wide">
                            Our Purpose
                        </h2>
                        
                        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                            {t('about.mission.p1')}
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                                <p className="text-gray-600">Pioneering new materials and solutions</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Partnership</h3>
                                <p className="text-gray-600">Building long-term relationships</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                                <p className="text-gray-600">Enhancing quality of life</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Objectives */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
                        Our Commitments
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t('about.mission.items') && Array.isArray(t('about.mission.items')) ? t('about.mission.items').map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{item}</p>
                            </div>
                        )) : null}
                    </div>
                </div>
            </section>
        </main>
    );
}
