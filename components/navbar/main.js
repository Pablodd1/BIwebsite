import React from 'react';
import { Search, User } from 'lucide-react';
import Link from 'next/link';
import { CartButton } from './buttons';
import SearchFrom from './search';

const navItems = [
    { label: 'Collections', id: 'collections', href: '/collections' },
    { label: 'Interiors', id: 'interiors', href: '/collections/interior' },
    { label: 'Exteriors', id: 'exteriors', href: '/collections/exterior' },
    { label: 'Sale', id: 'sale', href: '/collections/sales' },
    { label: 'Contact', id: 'contact', href: '/contact' }
];

const NavBar = ({ }) => {

    return (
        <header className="sticky top-0 z-30 bg-white/25 shadow-gray-200 border-b border-gray-400 shadow-xl backdrop-blur-md text-black  px-8 py-2.5">
            <div className="max-w-400 mx-auto flex items-center justify-between">

                {/* Navigation Links - Matching the screenshot style */}
                <nav className="flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="text-sm uppercase tracking-widest font-semibold  transition-all whitespace-nowrap cursor-pointer"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions Area */}
                <div className="flex items-center gap-2 flex-1 justify-end ml-12">

                    {/* Search Bar - Matching the rounded pill design from screenshot */}
                    <SearchFrom />

                    {/* Icons */}
                    <div className="flex items-center gap-1">
                        <CartButton />
                        <div className="px-2 hover:bg-white/5 rounded-full transition-all group">
                            <User className="w-fit h-full text-inherit" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
