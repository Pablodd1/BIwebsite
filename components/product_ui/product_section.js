import AddToContainer from "My_UI/cart/addToContainer";
import GetFinalPrice from "My_UI/getFinalPrice";
import Image from "next/image";
import NotFoundPage from "../../app/not-found";

export default async function ProductSection({ product }) {

    return (
        product ?
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Image */}
                <div className="flex justify-center items-center h-[500px] bg-gray-50 rounded-xl p-4 relative w-full">
                    <Image
                        src={product.image?.url || product.image || '/raster/product.jpg'}
                        alt={product.name || 'Product Image'}
                        className="object-contain p-4 mix-blend-multiply"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
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


                    <div className="text-lg font-medium mb-6">
                        <GetFinalPrice basePrice={product.basePrice} discountPercent={product.discountPercent} />
                    </div>

                    <AddToContainer
                        item={{
                            id: product.id,
                            dimensions: product.dimensions,
                            price: product.basePrice
                        }}
                        isProductPage
                    />
                </div>
            </section>
            : <NotFoundPage />
    );
}
