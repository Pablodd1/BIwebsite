import GetFinalPrice from "@My_UIgetFinalPrice";
import Image from "next/image";

export default function ProductSection({ product }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Image */}
            <div className="flex justify-center">
                <Image
                    src={product.image.url || '/raster/product.jpg'}
                    alt={product.title || 'Product Image'}
                    className="max-w-md w-full object-contain"
                    width={1024} height={1024}
                />
            </div>

            {/* Content */}
            <div>
                <h1 className="text-2xl tracking-wide uppercase mb-6">
                    {product.name}
                </h1>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {product.description}
                </p>

                <div className="space-y-4 text-sm mb-8">
                    <div className="border-b pb-2">Product details</div>
                    <div className="border-b pb-2">Shipping & Returns</div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <select className="border px-3 py-2 text-sm">
                        {product.colors?.map((color) => (
                            <option key={color}>{color}</option>
                        ))}
                    </select>

                    <select className="border px-3 py-2 text-sm">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                <div className="text-lg font-medium mb-6">
                    <GetFinalPrice basePrice={product.basePrice} discountPercent={product.discountPercent} />
                </div>

                <button className="bg-black text-white px-8 py-3 text-sm tracking-wide uppercase">
                    Add to cart
                </button>
            </div>
        </section>
    );
}
