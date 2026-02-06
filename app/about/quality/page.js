import React from 'react';
import { ShieldCheck, Eye, Award, TrendingUp } from 'lucide-react';

export default function QualityPage() {
    return (
        <main className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-12 text-center uppercase tracking-wider">Committed to Quality</h1>

            <div className="max-w-3xl mx-auto mb-16 text-center">
                <p className="text-2xl font-medium text-gray-800 italic mb-8">
                    "At Building Innovation, quality is not a standard—it is a promise."
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Every product goes through technical control processes and certified material selection, ensuring durability, precision, and high-end finishes.
                </p>
            </div>

            <h2 className="text-2xl font-bold text-center mb-10 text-gray-900 border-b border-gray-200 pb-4 w-fit mx-auto">
                Our commitment to excellence is reflected in:
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Quality Audits at Source</h3>
                    <p className="text-gray-600">Rigorous inspections in China and LATAM to ensure compliance with our high standards.</p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <Eye className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Continuous Supervision</h3>
                    <p className="text-gray-600">Monitoring at every stage of production to guarantee consistency and precision.</p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Certified Partnerships</h3>
                    <p className="text-gray-600">Collaboration with internationally certified manufacturers aligned with our quality goals.</p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Ongoing Innovation</h3>
                    <p className="text-gray-600">Constant evolution to exceed market expectations and set industry benchmarks.</p>
                </div>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold tracking-widest uppercase">
                    Quality you can see, feel, and trust over time
                </h3>
            </div>
        </main>
    );
}
