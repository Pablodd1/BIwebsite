import { Home, Building, Ruler, Zap } from "lucide-react";
import Stylish_H2 from "My_UI/stylish_h2";

export default function ProductUseCases({ description }) {
    return (
        <section className="mt-20 max-w-6xl mx-auto px-4 md:px-0">
            <Stylish_H2 h2="Product Overview & Ideal Applications" />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Overview */}
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500">
                        Product Overview
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        {description ||
                            "Unitec USA Design PVC and WPC materials combine durability, aesthetics, and eco-conscious manufacturing. Engineered for long-lasting performance, our products are 100% waterproof, maintenance-free, and ideal for both residential and commercial projects."}
                    </p>

                    <div className="mt-6 space-y-3 text-gray-600 text-sm">
                        <div className="flex items-start gap-3">
                            <Zap className="text-blue-600 mt-1" size={18} />
                            <span>Quick and efficient installation</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Ruler className="text-blue-600 mt-1" size={18} />
                            <span>Precision-engineered dimensions for uniformity</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Building className="text-blue-600 mt-1" size={18} />
                            <span>Architectural-grade material quality</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <Home className="text-blue-600 mt-1" size={18} />
                            <span>Durable, low-maintenance residential applications</span>
                        </div>
                    </div>
                </div>

                {/* Ideal Applications */}
                <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500">
                        Ideal Applications
                    </h3>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-700 text-sm">
                            <Home className="text-green-600 mt-1" size={18} />
                            Residential interiors: walls, ceilings, and decorative finishes
                        </li>
                        <li className="flex items-start gap-3 text-gray-700 text-sm">
                            <Building className="text-green-600 mt-1" size={18} />
                            Commercial and corporate environments: offices, lobbies, and conference rooms
                        </li>
                        <li className="flex items-start gap-3 text-gray-700 text-sm">
                            <Ruler className="text-green-600 mt-1" size={18} />
                            Architectural detailing: moldings, panels, and cladding
                        </li>
                        <li className="flex items-start gap-3 text-gray-700 text-sm">
                            <Zap className="text-green-600 mt-1" size={18} />
                            Renovation & retrofitting: fast-install solutions for minimal disruption
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
