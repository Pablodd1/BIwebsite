import ProductSection from "My_UI/product_ui/product_section";
import productReview from "StaticData/products.json";
import RecommendationsSection from "My_UI/product_ui/recommended_section";
import ReviewsSection from "My_UI/product_ui/review_section";
import HowShippingWorks from "My_UI/product_ui/steps";
import ProductDimensions from "My_UI/product_ui/dimension";
import ProductUseCases from "My_UI/product_ui/technical";
import ProductStory from "My_UI/product_ui/story";
import { notify } from "lib/notify";
import NotFoundPage from "../../not-found";

// app/products/[ID]/page.jsx (or equivalent)

export async function generateMetadata({ params }, parent) {
  const parentMeta = await parent;
  const { ID } = await params;

  let product = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/API/products/${ID}?fields=id,name,description,image`,
      { cache: "no-store" }
    );

    if (res.ok) {
      product = await res.json();
    }
  } catch (e) {
    // silent fail – fallback meta will be used
  }

  const title =
    product?.name
      ? `${product.name} | PVC & WPC Building Materials | Unitec USA Design`
      : "Product Details | Unitec USA Design";

  const description =
    product?.description
      ? product.description.slice(0, 160)
      : "Explore high-performance PVC and WPC building materials by Unitec USA Design, engineered for durability, aesthetics, and zero maintenance.";

  const image =
    product?.image?.url || process.env.DEFAULT_IMAGE;

  const canonical = `${process.env.BASE_URL}/products/${ID}`;

  return {
    ...parentMeta,
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      ...parentMeta.openGraph,
      title,
      description,
      url: canonical,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product?.name || "Unitec USA Design Product",
        },
      ],
    },

    twitter: {
      ...parentMeta.twitter,
      title,
      description,
      images: [image],
    },
  };
}

async function fetchProduct(id) {
  const res = await fetch(
    `${process.env.BASE_URL}/API/products/${id}?fields=id,category,collection,itemsPerBox,subcategory,name,basePrice,image,discountPercent,description,dimensions`,
    { cache: "no-store" }
  )
  if (!res.ok) return <NotFoundPage />
  return res.json()
}



export default async function ProductPage({ params }) {
  const ID = (await params)?.ID;
  const product = await fetchProduct(ID)

  return (
    <main className="">
      <div className="max-w-6xl mx-auto bg-white px-2 md:px-5 lg:px-12 flex flex-col gap-15 py-16">
        <ProductSection product={product} />
        <ProductStory product={product} description={product.description} />
        <ProductDimensions dimension={product.dimensions} />
        <ProductUseCases description={product.description} />
      </div>
      <HowShippingWorks />
      <div className="max-w-11/12 mx-auto bg-white px-12 py-16">
        <RecommendationsSection itemID={ID} />
        <ReviewsSection reviews={productReview.reviews} />
      </div>
    </main>
  );
}
