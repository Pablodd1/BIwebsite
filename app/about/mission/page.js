import React from 'react';
import { Target, Lightbulb, Heart, Globe, CheckCircle } from 'lucide-react';

export const metadata = {
    title: "Our Mission | Building Innovation",
    description: "At BUILDING INNOVATION, we simplify the world of construction through innovative, sustainable, and high-design solutions.",
};

export default function MissionPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-black to-gray-900 py-24 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        Our Mission
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
                        "At BUILDING INNOVATION, we simplify the world of construction through innovative, 
                        sustainable, and high-design solutions"
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
                            At BUILDING INNOVATION, we simplify the world of construction through innovative, 
                            sustainable, and high-design solutions, offering a comprehensive portfolio of 
                            architectural materials that creates value, fosters strategic partnerships, and 
                            enhances the construction experience and quality of life.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <MissionPillar 
                                icon={Lightbulb} 
                                title="Innovation" 
                                description="Pioneering new materials and solutions that transform construction practices"
                            />
                            <MissionPillar 
                                icon={Heart} 
                                title="Partnership" 
                                description="Building long-term relationships with distributors and strategic partners"
                            />
                            <MissionPillar 
                                icon={Globe} 
                                title="Global Impact" 
                                description="Enhancing quality of life through better construction across the Americas"
                            />
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
                        <CommitmentCard 
                            title="Innovative Product Development"
                            description="We continuously research and develop advanced PVC and WPC building materials that combine modern design, performance, and ease of installation."
                            items={[
                                "Future-ready product development",
                                "Advanced manufacturing technologies",
                                "Modern finishes and textures",
                                "Smart installation systems"
                            ]}
                        />
                        
                        <CommitmentCard 
                            title="Sustainability & Environment"
                            description="Environmental responsibility is built into everything we make. Our materials support sustainable construction without compromise."
                            items={[
                                "Recycled PVC content in all products",
                                "Fully recyclable materials",
                                "Low VOC emissions",
                                "Energy-efficient manufacturing"
                            ]}
                        />

                        <CommitmentCard 
                            title="Quality Without Compromise"
                            description="Every product is built to last with industry-leading warranties and real-world performance validation."
                            items={[
                                "15-25 year warranties",
                                "100% waterproof performance",
                                "Fire-resistant properties",
                                "ISO-certified manufacturing"
                            ]}
                        />

                        <CommitmentCard 
                            title="Empowering Our Partners"
                            description="We create solutions that empower professionals and homeowners, making quality construction accessible for projects of any scale."
                            items={[
                                "Expert technical support",
                                "Installation guides & tutorials",
                                "Sample programs",
                                "Project consultation services"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed">
                        "We believe building materials should do more than perform — 
                        they should inspire creativity, simplify installation, and 
                        contribute to a more sustainable built environment."
                    </blockquote>
                    <div className="mt-8 w-24 h-1 bg-black mx-auto"></div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black py-20 text-white">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Build with Us?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join our network of partners and distributors across the Americas. 
                        Together, we can transform the construction industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
                        >
                            Contact Our Team
                        </a>
                        <a 
                            href="/collections" 
                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                        >
                            Explore Products
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

function MissionPillar({ icon: Icon, title, description }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function CommitmentCard({ title, description, items }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
