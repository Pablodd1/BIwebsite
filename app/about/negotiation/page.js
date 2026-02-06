import React from 'react';
import { Ship, Package, DollarSign, Handshake } from 'lucide-react';

export default function NegotiationPage() {
    return (
        <main className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4 text-center uppercase tracking-wider">Business Terms</h1>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                At Building Innovation, we operate under the main international trade terms to offer flexibility and security.
            </p>

            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* FOB */}
                <div className="flex flex-col gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <Ship className="w-7 h-7 text-black" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">FOB (Free on Board)</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We handle the goods until they are loaded on board the vessel at the port of shipment. You retain control over freight and insurance logistics.
                        </p>
                    </div>
                </div>

                {/* CIF */}
                <div className="flex flex-col gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <Package className="w-7 h-7 text-black" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">CIF (Cost, Insurance, and Freight)</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We manage costs, insurance, and freight to your destination port, providing a hassle-free full service experience.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-center mb-10 text-gray-900 border-b border-gray-200 pb-4 w-fit mx-auto">
                These options allow us to offer our partners:
            </h2>

            <div className="space-y-6">
                {/* Flexibility */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-1">Flexibility in logistics and costs</h3>
                        <p className="text-gray-600">Adaptable solutions to fit your specific budget and timeline.</p>
                    </div>
                </div>

                {/* Transparency */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <Handshake className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-1">Transparency throughout the supply chain</h3>
                        <p className="text-gray-600">Clear visibility and communication from production to delivery.</p>
                    </div>
                </div>

                {/* Custom Solutions */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                    <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-1">Solutions tailored to each client’s needs</h3>
                        <p className="text-gray-600">We customize our service to ensure safe, efficient operations with full control from origin to destination.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
