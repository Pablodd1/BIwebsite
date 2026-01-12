import ProductSection from "@My_UIproduct_section";
import productData from "@StaticData/products.json";
import RecommendationsSection from "@My_UIrecommended_section";
import ReviewsSection from "@My_UIreview_section";

export default function HomePage() {
  return (
    <main className="">
      <div className="max-w-6xl mx-auto bg-white px-12 py-16">
        <ProductSection product={productData.product} />
        <RecommendationsSection items={productData.recommendations} />
        <ReviewsSection reviews={productData.reviews} />
      </div>
    </main>
  );
}
