import Catalogs_UI from "@/components/catalogs/main";

export const metadata = {
    title: "Download Product Catalogs | Unitec USA Design",
    description: "View and download our digital product catalogs for the USA (English) and Latin America (Spanish). Explore our premium PVC and WPC building solutions.",
    openGraph: {
        title: "Product Catalogs – Unitec USA Design",
        description: "Digital catalogs for PVC and WPC building materials.",
        type: "website",
    }
};

export default function CatalogsPage() {
    return <Catalogs_UI />;
}
