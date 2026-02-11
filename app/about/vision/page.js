import React from 'react';
import { Eye, Rocket, Globe2, Users, Award, TrendingUp, Building2, MapPin } from 'lucide-react';

export const metadata = {
    title: "Our Vision | Building Innovation",
    description: "To become a leading brand in construction innovation in Latin America, recognized for simplifying construction processes and delivering high value architectural solutions.",
};

export default function VisionPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-gray-900 to-black py-24 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        Our Vision
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
                        "We aspire to build a scalable and collaborative business model, 
                        strengthening strategic partnerships and creating a positive impact 
                        on the industry, people, and the environment."
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
                            Where We're Heading
                        </h2>
                        
                        <p className="text-xl text-gray-700 leading-relaxed text-center mb-12">
                            To become a leading brand in construction innovation in Latin America, 
                            recognized for simplifying construction processes, setting trends in 
                            design and sustainability, and delivering high value architectural solutions.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <VisionCard 
                                icon={Rocket}
                                title="Innovation Leadership"
                                description="Pioneering the future of construction with cutting-edge materials and solutions that redefine industry standards."
                            />
                            <VisionCard 
                                icon={Globe2}
                                title="Regional Expansion"
                                description="Establishing presence across all Latin American markets with localized support and distribution networks."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        Strategic Pillars
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Our vision is built on four foundational pillars that guide our growth and impact
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StrategicPillar 
                            icon={Building2}
                            number="01"
                            title="Simplification"
                            description="Making construction processes easier through innovative materials and systems"
                        />
                        <StrategicPillar 
                            icon={Award}
                            number="02"
                            title="Design Excellence"
                            description="Setting trends in architectural design with modern, aesthetic solutions"
                        />
                        <StrategicPillar 
                            icon={TrendingUp}
                            number="03"
                            title="Sustainability"
                            description="Leading the industry toward environmentally responsible construction practices"
                        />
                        <StrategicPillar 
                            icon={Users}
                            number="04"
                            title="Partnership"
                            description="Building a collaborative ecosystem of distributors, contractors, and developers"
                        />
                    </div>
                </div>
            </section>

            {/* Market Presence */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
                                Expanding Our Reach
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We're building toward a future where sustainable construction, design freedom, 
                                and maintenance-free living are the standard, not the exception. Our strategic 
                                expansion focuses on key markets across the Americas.
                            </p>
                            
                            <div className="space-y-4">
                                <MarketItem 
                                    region="United States"
                                    location="Miami, FL"
                                    status="Global Headquarters"
                                />
                                <MarketItem 
                                    region="Latin America"
                                    location="Colombia, Mexico, Central America"
                                    status="Growing Markets"
                                />
                                <MarketItem 
                                    region="International"
                                    location="Caribbean, South America"
                                    status="Export Markets"
                                />
                            </div>
                        </div>

                        <div className="bg-black text-white p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">Our Global Headquarters</h3>
                            <div className="flex items-start gap-4 mb-6">
                                <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                <address className="not-italic text-gray-300">
                                    <p className="font-semibold text-white">6120 NW 74th Ave</p>
                                    <p>Doral, Miami, FL 33166</p>
                                    <p>United States</p>
                                </address>
                            </div>
                            <div className="border-t border-gray-700 pt-6">
                                <p className="text-gray-400 mb-2">Contact Information:</p>
                                <p className="text-white font-semibold">+1 (786) 968-5783</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Goals */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
                        Our Goals for the Future
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <GoalCard 
                            title="Market Leadership"
                            description="Become the preferred choice for PVC and WPC building materials across Latin America, recognized for quality and innovation."
                            timeline="2025-2030"
                        />
                        <GoalCard 
                            title="Sustainability Pioneer"
                            description="Lead the industry transition to 100% recyclable and sustainable building materials, setting new environmental standards."
                            timeline="2025-2035"
                        />
                        <GoalCard 
                            title="Digital Innovation"
                            description="Revolutionize the construction supply chain with technology-driven solutions, from container optimization to smart logistics."
                            timeline="2024-2028"
                        />
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">
                        Impact We Strive For
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ImpactItem 
                            title="On the Industry"
                            description="Transforming construction practices toward sustainability and efficiency"
                        />
                        <ImpactItem 
                            title="On People"
                            description="Improving quality of life through better, healthier living spaces"
                        />
                        <ImpactItem 
                            title="On the Environment"
                            description="Reducing construction waste and promoting circular economy"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-black py-20 text-white">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Join Us in Shaping the Future
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you're a contractor, architect, developer, or distributor, 
                        there's a place for you in our vision.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                        Become a Partner
                    </a>
                </div>
            </section>
        </main>
    );
}

function VisionCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

function StrategicPillar({ icon: Icon, number, title, description }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-gray-200">{number}</span>
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}

function MarketItem({ region, location, status }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="flex-1">
                <h4 className="font-semibold">{region}</h4>
                <p className="text-sm text-gray-600">{location}</p>
            </div>
            <span className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full">{status}</span>
        </div>
    );
}

function GoalCard({ title, description, timeline }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{timeline}</div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function ImpactItem({ title, description }) {
    return (
        <div>
            <h3 className="text-lg font-bold mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
