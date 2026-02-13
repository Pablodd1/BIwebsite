"use client";

import Image from "next/image";
import styles from "./herosection.module.css";
import MyButton from "My_UI/btn/main";
import CatalogFloatingBtn from "My_UI/hero/catalog_btn";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "lib/LanguageContext";

const socials = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Youtube, label: "YouTube" },
];

export default function HeroSec() {
    const { t } = useLanguage();

    return (
        <main className="overflow-hidden min-h-screen relative">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/raster/containes.avif"
                    className="w-full h-full object-cover"
                >
                    <source src="https://herovideo.my.canva.site/_assets/video/4398a9aa13476ae9ff803cf0f486a13f.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <Image
                        src="/raster/containes.avif"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                    />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
            </div>

            <section className="relative z-20 pt-24 md:pb-12">
                <div className="relative mx-auto max-w-300 px-6
                        grid gap-y-12 gap-x-8
                        md:grid-cols-[auto_auto] md:mt-16
                        lg:grid-cols-[1fr_0.75fr] lg:gap-x-2">

                    <figure className="order-2 md:order-1 relative max-h-full flex items-center justify-center overflow-visible">
                        <Image
                            src="/raster/containes.avif"
                            alt="banner image"
                            width={512} height={512}
                            priority
                            className="mx-auto max-w-4/5 md:min-w-[512] max-h-full w-3/5 md:h-auto z-10 md:w-full"
                        />
                        <figcaption className="absolute text-gray-100/20 top-1/2 left-1/2 -translate-1/2 w-full md:w-[150%] h-[150%] z-0">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M41.1,-62.8C50.2,-49.9,52.6,-33.9,59,-18.2C65.4,-2.6,75.8,12.7,74.3,26.3C72.8,39.8,59.4,51.6,45.1,60.6C30.7,69.6,15.3,75.9,2.1,73C-11.1,70,-22.1,57.8,-36.9,48.9C-51.6,40,-70,34.4,-77.6,22.5C-85.1,10.6,-81.9,-7.4,-72.2,-19.3C-62.6,-31.1,-46.6,-36.6,-33.5,-48.2C-20.4,-59.9,-10.2,-77.6,2.9,-81.6C16,-85.6,31.9,-75.7,41.1,-62.8Z" transform="translate(100 100)" />
                            </svg>
                        </figcaption>
                    </figure>
                    
                    <div className="flex flex-col justify-center gap-6 text-white">
                        <h1 className="text-3xl md:text-6xl md:leading-18 tracking-wide font-semibold w-11/12 drop-shadow-lg">
                            {t('hero.title_start')} <strong className="bg-primary/90 rounded-2xl px-2 text-orange-800">{t('hero.title_highlight')}</strong> {t('hero.title_end')}
                        </h1>

                        <p className="text-base font-normal text-white/90 w-8/12 drop-shadow-md">
                            {t('hero.subtitle')}
                        </p>
                        <MyButton
                            label={t('hero.btn')}
                            href="/collections"
                            className={{
                                btn: "bg-primary px-5 py-2 h-10 hover:bg-white transition-colors",
                                label: ""
                            }}
                        />
                    </div>
                </div>
                
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center justify-evenly gap-2 ${styles.bannerLink} z-30`}>
                    {socials.map(({ Icon, label }) => (
                        <a key={label} href="#" aria-label={label}>
                            <Icon strokeWidth={1} className="fill-white/80 text-white w-full min-h-fit h-auto max-w-12 hover:fill-primary hover:text-primary transition-colors" />
                        </a>
                    ))}
                </div>

                {/* Floating Catalog Button */}
                <div className="absolute left-0 bottom-8 z-40 hidden lg:block">
                    <CatalogFloatingBtn />
                </div>
            </section>
        </main>
    );
}
