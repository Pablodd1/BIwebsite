import ProductSection from "@My_UIproduct_section";
import productData from "@StaticData/products_full.json";
import productRec from "@StaticData/products_thumb.json";
import productReview from "@StaticData/products.json";
import RecommendationsSection from "@My_UIrecommended_section";
import ReviewsSection from "@My_UIreview_section";

export default async function ProductPage({ params }) {
  const ID = (await params)?.ID;

  return (
    <main className="">
      <div className="max-w-6xl mx-auto bg-white px-12 py-16">
        <ProductSection product={productData.find(x => x.ID == ID)} />
        <RecommendationsSection items={productRec} />
        <ReviewsSection reviews={productReview.reviews} />
      </div>
    </main>
  );
}
