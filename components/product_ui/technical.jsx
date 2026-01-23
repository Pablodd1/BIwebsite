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
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold">
                        Ideal Applications
                    </h3>

                    <div className="mt-4 space-y-4">
                        <Difference
                            icon={Home}
                            title="Residential interiors"
                            text="walls, ceilings, and decorative finishes"
                        />
                        <Difference
                            icon={Building}
                            title="Commercial environments"
                            text="offices, lobbies, and conference rooms"
                        />
                        <Difference
                            icon={Ruler}
                            title="Architectural detailing"
                            text="oldings, panels, and cladding"
                        />
                        <Difference
                            icon={Zap}
                            title="Renovation & retrofitting"
                            text="fast-install solutions for minimal disruption"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Difference({ icon: Icon, title, text }) {
    return (
        <div className="flex gap-3">
            <Icon size={18} />
            <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-sm text-gray-600">{text}</p>
            </div>
        </div>
    )
}
