import React from 'react';
import { Briefcase, Handshake, TrendingUp, Globe, Ship, Package, DollarSign, Users, CheckCircle2, ArrowRight, Building2, Store, HardHat } from 'lucide-react';

export const metadata = {
    title: "Business Models | Building Innovation",
    description: "Discover our flexible business models and partnership opportunities. From FOB to CIF terms, we offer solutions tailored to your specific needs.",
};

export default function BusinessModelsPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-black to-gray-900 py-24 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        Business Models
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        At Building Innovation, we operate under the main international trade terms 
                        to offer flexibility, transparency, and security for our partners across the globe.
                    </p>
                </div>
            </section>

            {/* International Trade Terms */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        International Trade Terms
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We offer flexible Incoterms to accommodate different business needs and logistics preferences
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* FOB */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                                    <Ship className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">FOB</h3>
                                    <p className="text-gray-500 text-sm">Free on Board</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We handle the goods until they are loaded on board the vessel at the port of shipment. 
                                You retain control over freight and insurance logistics from that point forward.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>We manage pre-shipment logistics</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Customer controls ocean freight & insurance</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Ideal for experienced importers</span>
                                </li>
                            </ul>
                        </div>

                        {/* CIF */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                                    <Package className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">CIF</h3>
                                    <p className="text-gray-500 text-sm">Cost, Insurance, and Freight</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We manage costs, insurance, and freight to your destination port, 
                                providing a hassle-free full-service experience from our door to yours.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>All-in-one shipping solution</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>We handle insurance and freight</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Perfect for streamlined operations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Models */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        Partnership Opportunities
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We work with various types of partners to expand our reach and serve customers better
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PartnerCard 
                            icon={Building2}
                            title="Distributors"
                            description="Exclusive and non-exclusive distribution agreements for regional markets"
                            benefits={[
                                "Competitive wholesale pricing",
                                "Marketing support",
                                "Exclusive territory options",
                                "Priority product access"
                            ]}
                        />
                        <PartnerCard 
                            icon={Store}
                            title="Retailers"
                            description="Partner with us to offer premium building materials to your customers"
                            benefits={[
                                "Retail margin protection",
                                "Point-of-sale materials",
                                "Product training",
                                "Inventory support"
                            ]}
                        />
                        <PartnerCard 
                            icon={HardHat}
                            title="Contractors"
                            description="Volume pricing and project support for construction professionals"
                            benefits={[
                                "Project-based pricing",
                                "Technical consultation",
                                "Priority delivery",
                                "Volume discounts"
                            ]}
                        />
                        <PartnerCard 
                            icon={Globe}
                            title="International"
                            description="Export partnerships for global distribution and representation"
                            benefits={[
                                "Export documentation support",
                                "Customs assistance",
                                "Multi-currency pricing",
                                "Global logistics coordination"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        Partner Benefits
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        These options allow us to offer our partners exceptional value and service
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <BenefitCard 
                            icon={DollarSign}
                            title="Flexibility in Logistics & Costs"
                            description="Adaptable solutions to fit your specific budget, timeline, and operational preferences. Choose the model that works best for your business."
                        />
                        <BenefitCard 
                            icon={Handshake}
                            title="Transparency Throughout"
                            description="Clear visibility and communication from production to delivery. No hidden fees or surprises at any stage of the process."
                        />
                        <BenefitCard 
                            icon={Package}
                            title="Tailored Solutions"
                            description="We customize our service to ensure safe, efficient operations with full control from origin to destination, meeting your specific requirements."
                        />
                    </div>
                </div>
            </section>

            {/* Volume Tiers */}
            <section className="bg-black text-white py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">
                        Volume Tiers & Pricing
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Our pricing structure rewards volume commitment with better rates and priority service
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <VolumeTier 
                            name="Container Load"
                            volume="1 Container"
                            description="Full container load (FCL) shipments for optimal pricing"
                            features={[
                                "Best per-unit pricing",
                                "Direct shipping",
                                "Priority production",
                                "Dedicated support"
                            ]}
                            highlighted={true}
                        />
                        <VolumeTier 
                            name="Bulk Order"
                            volume="Half Container"
                            description="Consolidated shipping for medium-volume orders"
                            features={[
                                "Competitive pricing",
                                "Shared container",
                                "Standard lead times",
                                "Technical support"
                            ]}
                            highlighted={false}
                        />
                        <VolumeTier 
                            name="Sample/Small"
                            volume="Less than LCL"
                            description="Sample orders and small quantities for testing"
                            features={[
                                "Standard pricing",
                                "Consolidated freight",
                                "Sample programs",
                                "Product evaluation"
                            ]}
                            highlighted={false}
                        />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
                        How to Become a Partner
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <ProcessStep 
                            number="1"
                            title="Inquiry"
                            description="Contact our sales team to discuss your business needs and goals"
                        />
                        <ProcessStep 
                            number="2"
                            title="Evaluation"
                            description="We evaluate your market, capabilities, and partnership potential"
                        />
                        <ProcessStep 
                            number="3"
                            title="Agreement"
                            description="Sign partnership agreement with terms tailored to your needs"
                        />
                        <ProcessStep 
                            number="4"
                            title="Launch"
                            description="Start ordering with your preferred terms and dedicated support"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Explore Partnership?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact our sales team to discuss which business model works best for your needs. 
                        We're here to help you succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/contact" 
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
                        >
                            Contact Sales Team
                            <ArrowRight size={18} />
                        </a>
                        <a 
                            href="/collections" 
                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black px-8 py-4 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                        >
                            View Product Catalog
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

function PartnerCard({ icon: Icon, title, description, benefits }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BenefitCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function VolumeTier({ name, volume, description, features, highlighted }) {
    return (
        <div className={`p-8 rounded-2xl ${highlighted ? 'bg-white text-black' : 'bg-gray-900 text-white'} ${highlighted ? 'ring-2 ring-yellow-400' : ''}`}>
            <div className="text-sm font-bold uppercase tracking-wider mb-2 opacity-70">{volume}</div>
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className={`text-sm mb-6 ${highlighted ? 'text-gray-600' : 'text-gray-400'}`}>{description}</p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-green-600' : 'text-yellow-400'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProcessStep({ number, title, description }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{number}</span>
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}
