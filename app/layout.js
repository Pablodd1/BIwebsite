
import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "My_UI/footer/main";
import NavBar from "My_UI/navbar/main";
import CartInit from "lib/cart/initCart";
import CartDrawer from "My_UI/cart/CartDrawer.client";
import { Suspense } from "react";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

const NotifyPortal = dynamic(() => import("lib/notify"));


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})


export async function generateMetadata() {
  const data = null;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;

  const defaults = {
    title:
      "Unitec USA Design | Premium PVC & WPC Building Materials for Modern Construction",
    description:
      "Unitec USA Design delivers innovative PVC and WPC building materials for residential and commercial projects. Durable, waterproof, fire-resistant, zero-maintenance solutions engineered for modern architecture.",
    keywords:
      "Unitec USA Design, PVC Building Materials, WPC Panels, PVC Ceiling Panels, Wall Cladding, Facade Systems, Waterproof Building Materials, Fire Resistant Panels, Sustainable Construction Materials, Bulk Building Materials, Container Shipping Building Products",
    image: process.env.DEFAULT_IMAGE,
    siteName: "Unitec USA Design",
    canonical: BASE_URL,
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: data?.pageTitle || defaults.title,
    description: data?.metaDescription || defaults.description,
    keywords: data?.metaKeywords || defaults.keywords,

    applicationName: data?.appName || "Unitec USA Design",
    generator: "Next.js",
    creator: "MyAbabeel (Muhammad Talha)",
    manifest: "/manifest.json",

    alternates: {
      canonical: data?.canonicalURL || defaults.canonical,
    },

    verification: {
      // google: "YOUR-GOOGLE-VERIFY-CODE",
    },

    icons: {
      icon: [
        { url: "/favicons/favicon.ico" },
        { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicons/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicons/android-icon-144x144.png", sizes: "144x144", type: "image/png" },
        { url: "/favicons/android-icon-72x72.png", sizes: "72x72", type: "image/png" },
        { url: "/favicons/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicons/android-icon-36x36.png", sizes: "36x36", type: "image/png" },
        { url: "/favicons/android-icon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      shortcut: ["/favicons/favicon.ico"],
      apple: [
        { url: "/favicons/apple-icon.png" },
        { url: "/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
        { url: "/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
        { url: "/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
        { url: "/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
        { url: "/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
        { url: "/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
        { url: "/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
        { url: "/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
        { url: "/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { rel: "msapplication-TileImage", url: "/favicons/ms-icon-144x144.png" },
        { rel: "mask-icon", url: "/favicon.svg", color: "#7FD8F5" },
      ],
    },

    openGraph: {
      title:
        data?.ogTitle ||
        "Unitec USA Design | Innovative PVC & WPC Solutions for Modern Spaces",
      description:
        data?.ogDescription ||
        "Discover premium PVC and WPC building products designed for durability, sustainability, and effortless installation. Trusted by architects, builders, and developers across North America.",
      url: data?.canonicalURL || defaults.canonical,
      siteName: data?.ogSiteName || defaults.siteName,
      images: [
        {
          url: data?.ogImage || defaults.image,
          width: 1200,
          height: 630,
          alt:
            data?.ogImageAlt ||
            "Unitec USA Design – Innovative PVC & WPC Building Materials",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: data?.twitterCard || "summary_large_image",
      site: "@UnitecUSADesign",
      title:
        data?.twitterTitle ||
        "Unitec USA Design | Smarter Building Materials",
      description:
        data?.twitterDescription ||
        "Premium PVC & WPC materials engineered for durability, sustainability, and modern design. Built for bulk. Designed to last.",
      images: [data?.twitterImage || defaults.image],
    },
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
        <CartInit />
        <CartDrawer />
        <div id="modal-root" />
        <div id="notify-container" />
        <Suspense fallback={<Loader />}>
          <NotifyPortal />
        </Suspense>
      </body>
    </html>
  );
}
