import Image from "next/image";
import styles from "./herosection.module.css";
import MyButton from "My_UI/btn/main";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const socials = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Youtube, label: "YouTube" },
];

export default function HeroSec() {
    return (
        <main className="overflow-hidden bg-accent1 min-h-screen">
            <section className="pt-24 pb-12">
                <div className="relative mx-auto max-w-300 px-6
                        grid gap-y-12 gap-x-8
                        md:grid-cols-2 md:mt-16
                        lg:grid-cols-[1fr_0.75fr] lg:gap-x-2">

                    <figure className="md:order-1 relative   flex items-center justify-center overflow-visible ">
                        <Image
                            src="/raster/contianer front4.png"
                            alt="banner image"
                            width={1024} height={1024}
                            fetchPriority="high"
                            className="mx-auto min-w-[512] h-auto z-10  w-full "
                        />
                        <figcaption className="absolute text-gray-900 top-1/2 left-1/2 -translate-1/2 w-[150%] h-[150%] z-0 " >
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M41.1,-62.8C50.2,-49.9,52.6,-33.9,59,-18.2C65.4,-2.6,75.8,12.7,74.3,26.3C72.8,39.8,59.4,51.6,45.1,60.6C30.7,69.6,15.3,75.9,2.1,73C-11.1,70,-22.1,57.8,-36.9,48.9C-51.6,40,-70,34.4,-77.6,22.5C-85.1,10.6,-81.9,-7.4,-72.2,-19.3C-62.6,-31.1,-46.6,-36.6,-33.5,-48.2C-20.4,-59.9,-10.2,-77.6,2.9,-81.6C16,-85.6,31.9,-75.7,41.1,-62.8Z" transform="translate(100 100)" />
                            </svg>
                        </figcaption>
                    </figure>
                    <div className="flex flex-col justify-center gap-6 ">
                        <h1 className="text-6xl leading-18 tracking-wide font-semibold  w-11/12 ">
                            Fill Your <strong className=" bg-primary rounded-2xl px-1 text-orange-800" >Container.</strong> Ship Your Way.
                        </h1>

                        <p className="text-base font-normal text-black w-8/12">
                            Choose the products you want, pack them into your container, and we’ll handle the shipping — simple, flexible, and built around you.
                        </p>
                        <MyButton
                            label="Explore Products"
                            href="/collections"
                            className={{
                                btn: "bg-primary px-5 py-2 h-10 ",
                                label: ""
                            }}
                        />
                    </div>



                </div>
                <div className={`absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center justify-evenly gap-2  ${styles.bannerLink}`}>
                    {socials.map(({ Icon, label }) => (
                        <a key={label} href="#" aria-label={label}>
                            <Icon strokeWidth={1} className=" fill-primary text-secondary w-full min-h-fit h-auto max-w-12 hover:fill-black" />
                        </a>
                    ))}
                </div>

            </section>
        </main>
    );
}
