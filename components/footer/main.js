"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from 'My_UI/logo';
import { useLanguage } from 'lib/LanguageContext';
import { useBrand } from 'lib/BrandContext';

const socials = [
    { Icon: Facebook, label: "Facebook", link: "#" },
    { Icon: Instagram, label: "Instagram", link: "#" },
    { Icon: Twitter, label: "Twitter", link: "#" },
    { Icon: Youtube, label: "YouTube", link: "#" },
];

const Footer = () => {
    const { t } = useLanguage();
    const { brand } = useBrand();

    const navData = {
        logo: {
            text: brand.name,
            tagline: t("footer.logo.tagline")
        },
        contact: {
            phone: "+91 9999 999 999",
            email: "info@unitecusadesign.com"
        },
        information: [
            { title: t("footer.information.links.collections"), link: "/collections" },
            { title: t("footer.information.links.exteriors"), link: "/collections/exterior" },
            { title: t("footer.information.links.interiors"), link: "/collections/interior" },
            { title: t("footer.information.links.sales"), link: "/collections/sales" }
        ],
        helpfulLinks: [
            { title: t("footer.helpful.links.about"), link: "/about" },
            { title: t("footer.helpful.links.supports"), link: "/contact" },
            { title: t("footer.helpful.links.faqs"), link: "/faq" },
            { title: t("footer.helpful.links.search"), link: "/collections/search" },
            { title: t("footer.helpful.links.terms"), link: "/terms" },
            { title: t("footer.helpful.links.privacy"), link: "/policies" }
        ]
    };

    return (
        <footer className="bg-black text-gray-300 pt-16">
            <div className="container mx-auto px-6">
                <section className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_0.7fr_0.75fr_1fr] gap-y-16 lg:gap-y-2' >
                    <article className='lg:w-2/3 sm:col-span-2 md:col-span-3 lg:col-span-1' >
                        {/* Logo Section */}
                        <div className="text-center mb-8 w-fit mx-auto ">
                            <Logo size={150} className="mx-auto bg-primary p-1 mb-3 rounded-md" />
                            <h1 className=" text-2xl uppercase tracking-wider text-primary first-line:font-bold">{navData.logo.text}</h1>
                            <p className="text-lg">{navData.logo.tagline}</p>
                        </div>

                        {/* Contact Section */}
                        <div className="text-center mb-8">
                            <p className="text-lg text-accent1 uppercase tracking-widest font-semibold">{t("footer.contact.title")}</p>
                            <p>{navData.contact.phone}</p>
                            <p>{navData.contact.email}</p>
                        </div>

                    </article>

                    {/* Information Section */}
                    <div className="mb-8">
                        <h3 className="text-xl mb-4 text-accent1 ">{t("footer.information.title")}</h3>
                        <ul className="space-y-2 px-2" >
                            {navData.information.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="uppercase tracking-widest font-semibold text-sm">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Helpful Links Section */}
                    <div className="mb-8 ">
                        <h3 className="text-xl mb-4 text-accent1">{t("footer.helpful.title")}</h3>
                        <ul className="space-y-2 px-2">
                            {navData.helpfulLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="uppercase tracking-widest font-semibold text-sm">{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Subscribe Section */}
                    <div className="text-center mb-8 max-w-64 float-right mx-auto lg:mr-0 relative lg:ml-auto w-full sm:col-span-2 md:col-span-3 lg:col-span-1 ">
                        <p className="text-lg">{t("footer.subscribe.title")}</p>
                        <div className="flex flex-col justify-center my-5">
                            <input
                                type="email"
                                placeholder={t("footer.subscribe.placeholder")}
                                className="p-2 rounded-t-lg placeholder:text-accent2 border-2 border-primary"
                            />
                            <button aria-label='Subscribe Button' className="bg-primary text-secondary  font-semibold hover:bg-secondary hover:text-white transition-all ease-in duration-300 cursor-pointer tracking-superwide uppercase py-2 px-3.5 rounded-b-lg ">{t("footer.subscribe.btn")}</button>
                        </div>
                    </div>
                </section>

                {/* Social Icons */}
                <div className="relative flex justify-center space-x-4 border-t-2 border-gray-100 py-5">
                    {socials.map(({ Icon, link }, index) => (
                        <Link key={index} href={link || ''} aria-label={`Go To ${link}`} className={`w-8 h-8 p-1 overflow-hidden flex items-center justify-center rounded-full bg-primary`}>
                            <Icon strokeWidth={1} className=" text-white fill-secondary w-full min-h-fit h-auto max-w-12 hover:fill-black" />
                        </Link>
                    ))}
                    {/* Bottom Copyright */}
                    <div className="text-center font-serif text-sm absolute right-0">
                        <p>&copy; 2016 Company Name. {t("footer.rights")}</p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;