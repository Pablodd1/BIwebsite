import React from 'react';
import { useLanguage } from 'lib/LanguageContext';

export const metadata = {
    title: "Who We Are | Building Innovation",
    description: "We are an international company dedicated to the development and supply of innovative solutions for construction and architectural design.",
};

export default function WhoWeArePage() {
    const { t } = useLanguage();
    const intro = t('whoWeAre.intro') || [];
    
    return (
        <main className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-10 text-center uppercase tracking-wider">{t('whoWeAre.title')}</h1>

            <section className="mb-16">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <h2 className="text-3xl font-bold mb-2">{t('whoWeAre.company')}</h2>
                    <p className="text-xl text-gray-500 italic mb-6">{t('whoWeAre.tagline')}</p>

                    <div className="text-lg text-gray-700 leading-relaxed text-justify space-y-4">
                        {intro.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-10 mb-16">
                <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide border-b-2 border-primary w-fit pb-1">{t('whoWeAre.mission.title')}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {t('whoWeAre.mission.text')}
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide border-b-2 border-primary w-fit pb-1">{t('whoWeAre.vision.title')}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {t('whoWeAre.vision.text')}
                    </p>
                </div>
            </section>

            <section className="bg-black text-white p-10 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest">{t('whoWeAre.headquarters.title')}</h3>
                <address className="not-italic text-lg space-y-2 text-gray-300">
                    <p>{t('whoWeAre.headquarters.address')}</p>
                    <p>{t('whoWeAre.headquarters.city')}</p>
                    <p>{t('whoWeAre.headquarters.country')}</p>
                </address>
                <div className="mt-6 text-gray-400">
                    <p>{t('whoWeAre.headquarters.phone')}</p>
                </div>
            </section>
        </main>
    );
}
