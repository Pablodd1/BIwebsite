import ProductSection from "My_UI/product_ui/product_section";
import productData from "StaticData//products_full.json";
import productRec from "StaticData//products_thumb.json";
import productReview from "StaticData//products.json";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import ReviewsSection from "My_UI/product_ui/review_section";

export default function HomePage() {
  return (
    <main className="">
      <div className="max-w-6xl mx-auto bg-white px-12 py-16">
        <ProductSection product={productData[0]} />
        <RecommendationsSection items={productRec} />
        <ReviewsSection reviews={productReview.reviews} />
      </div>
    </main>
  );
}
