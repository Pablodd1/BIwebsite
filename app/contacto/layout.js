

export async function generateMetadata(_, parent) {
    const parentMeta = await parent;

    const defaultData = {
        title: "Contact Unitec USA Design | Bulk Orders & Product Support",
    };

    return {
        ...parentMeta,
        title: defaultData.title,
        description:
            "Contact Unitec USA Design for bulk pricing, product inquiries, samples, technical support, or nationwide shipping information.",
        alternates: {
            canonical: `${process.env.BASE_URL}/contact`,
        },
        openGraph: {
            ...parentMeta.openGraph,
            title: "Contact Unitec USA Design",
            description:
                "Get in touch with Unitec USA Design for product quotes, samples, technical guidance, and project consultation.",
            url: `${process.env.BASE_URL}/contact`,
        },
        twitter: {
            ...parentMeta.twitter,
            title: "Contact Unitec USA Design",
            description:
                "Reach Unitec USA Design for pricing, samples, and expert support.",
        },
    };
}
export default function PageLayout({children}) {
    return children
}