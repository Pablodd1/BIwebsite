'use client';
import Stylish_H2 from 'My_UI/stylish_h2';
import { Download, Eye, BookOpen } from 'lucide-react';
import Image from 'next/image';

const CatalogCard = ({ title, description, image, fileUrl, showBadge }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
            {/* Cover Image Placeholder */}
            <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                {image ? (
                    <Image src={image} alt={title} fill className="object-cover" />
                ) : (
                    <div className="text-gray-300 flex flex-col items-center gap-2">
                        <BookOpen size={48} />
                        <span className="text-xs uppercase tracking-widest font-bold">Catalog Preview</span>
                    </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={fileUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-primary transition-colors">
                        <Eye size={18} /> View
                    </a>
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    {showBadge && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full border border-yellow-200">
                            2024
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                    {description}
                </p>

                <a
                    href={fileUrl}
                    download
                    className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-medium hover:bg-secondary transition-colors"
                >
                    <Download size={18} /> Download PDF
                </a>
            </div>
        </div>
    );
};

export default function Catalogs_UI() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
            <Stylish_H2 h2="Product Catalogs" />
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
                Explore our comprehensive range of PVC and WPC solutions. Download our digital catalogs to view detailed specifications, color options, and technical data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <CatalogCard
                    title="Product Catalog USA"
                    description="Complete guide to our Interior and Exterior solutions available in the US market. Includes technical specs (Imperial units) and full color palette."
                    fileUrl="/catalogs/USA_Catalog.pdf"
                    showBadge={true}
                // image="/raster/catalog-usa.jpg" 
                />

                <CatalogCard
                    title="Building Catalog LATAM"
                    description="Guía completa de soluciones para Latinoamérica. Incluye especificaciones técnicas (Sistema Métrico), detalles de instalación y portafolio completo."
                    fileUrl="/catalogs/LATAM_Catalog.pdf"
                    showBadge={true}
                // image="/raster/catalog-latam.jpg"
                />
            </div>
        </div>
    );
}
