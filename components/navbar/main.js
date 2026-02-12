"use client";

import React, { useState } from 'react';
import { Search, Menu, X, ShoppingBag, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { CartButton } from './cartBtn';
import Logo from 'My_UI/logo';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from 'lib/LanguageContext';
import { useBrand } from 'lib/BrandContext';
import MegaMenu from './MegaMenu';

const BrandToggle = () => {
    const { activeBrand, toggleBrand } = useBrand();
    return (
        <button
            onClick={toggleBrand}
            className="text-xs font-bold px-2 py-1 bg-black text-white rounded hover:bg-gray-800 transition-colors uppercase ml-2"
        >
            {activeBrand === 'binw' ? 'UNITEC' : 'BINW'}
        </button>
    )
}

const NavBar = ({ searchParams }) => {
    const { t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Main Navigation Bar - Mussi Style */}
            <header className="relative bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="block">
                            <Logo size={50} className="min-w-10" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 uppercase text-sm font-medium tracking-tighter">
                        {/* Products List with Mega Menu */}
                        <div className="group py-5">
                            <Link 
                                href="/collections"
                                className="hover:text-secondary transition-colors flex items-center gap-1"
                            >
                                {t('nav.productList')}
                                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                            </Link>
                            {/* Mega Menu Container */}
                            <div className="invisible group-hover:visible absolute left-0 top-full w-full bg-white shadow-xl z-50 border-t border-gray-100">
                                <MegaMenu />
                            </div>
                        </div>

                        {/* Institutional Dropdown */}
                        <div className="group relative py-5">
                            <button className="hover:text-secondary transition-colors flex items-center gap-1">
                                {t('nav.institutional')}
                                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                            </button>
                            {/* Dropdown */}
                            <div className="invisible group-hover:visible absolute left-0 top-full pt-2 w-48 opacity-0 group-hover:opacity-100 transition-all duration-200">
                                <div className="bg-white shadow-lg rounded-md border border-gray-100 overflow-hidden">
                                    <Link href="/about/who-we-are" className="block px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-black border-b border-gray-50">
                                        {t('nav.whoWeAre')}
                                    </Link>
                                    <Link href="/about/mission" className="block px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-black border-b border-gray-50">
                                        {t('nav.ourMission')}
                                    </Link>
                                    <Link href="/about/vision" className="block px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-black border-b border-gray-50">
                                        {t('nav.ourVision')}
                                    </Link>
                                    <Link href="/about/quality" className="block px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-black border-b border-gray-50">
                                        {t('nav.qualityCommitment')}
                                    </Link>
                                    <Link href="/about/business-models" className="block px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-black">
                                        {t('nav.businessModels')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <Link 
                            href="/contact"
                            className="hover:text-secondary transition-colors py-5"
                        >
                            {t('nav.contact')}
                        </Link>
                    </nav>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="hover:text-secondary transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/collections" className="hover:text-secondary transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                        </Link>
                        <div className="hidden md:block">
                            <LanguageToggle />
                        </div>
                        <BrandToggle />
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden hover:text-secondary transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
                    <nav className="flex flex-col space-y-4">
                        <Link 
                            href="/collections"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.productList')}
                        </Link>
                        <Link 
                            href="/about/who-we-are"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.whoWeAre')}
                        </Link>
                        <Link 
                            href="/about/mission"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.ourMission')}
                        </Link>
                        <Link 
                            href="/about/vision"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.ourVision')}
                        </Link>
                        <Link 
                            href="/about/quality"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.qualityCommitment')}
                        </Link>
                        <Link 
                            href="/about/business-models"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.businessModels')}
                        </Link>
                        <Link 
                            href="/contact"
                            className="text-lg uppercase tracking-wider font-bold py-2 border-b border-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.contact')}
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
};

export default NavBar;
