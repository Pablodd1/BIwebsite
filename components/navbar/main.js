'use client'
import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCartTotal } from 'lib/cart/getCartTotals';
import { openCart } from 'lib/cart/cart.ui';

const navItems = [
    { label: 'Collections', id: 'collections', href: '/collections' },
    { label: 'Interiors', id: 'interiors', href: '/collections/interior' },
    { label: 'Exteriors', id: 'exteriors', href: '/collections/exterior' },
    { label: 'Sale', id: 'sale', href: '/collections/sales' },
    { label: 'Contact', id: 'contact', href: '/contact' }
];

const NavBar = ({ }) => {
    const cartCount = useCartTotal()
    const onOpenCart = () => { }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <header className="sticky top-0 z-30 bg-white/25 shadow-gray-200 border-b border-gray-400 shadow-xl backdrop-blur-md text-black  px-8 py-2.5">
            <div className="max-w-400 mx-auto flex items-center justify-between">

                {/* Navigation Links - Matching the screenshot style */}
                <nav className="flex items-center gap-10">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm uppercase tracking-widest font-semibold  transition-all whitespace-nowrap cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Actions Area */}
                <div className="flex items-center gap-2 flex-1 justify-end ml-12">

                    {/* Search Bar - Matching the rounded pill design from screenshot */}
                    <div className="relative w-full max-w-85">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary " />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-secondary/75 border border-transparent focus:border-primary rounded-full py-2.5 pl-11 pr-5 text-sm text-inherit placeholder:text-gray-700 focus:outline-none search-input-focus transition-all shadow-md shadow-gray-300 focus:shadow-primary/25"
                        />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={openCart}
                            className="px-2 hover:bg-white/5 rounded-full transition-all relative group"
                        >
                            <ShoppingCart className={`w-fit h-full ${cartCount>0?'text-primary/75':'text-inherit'}`} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2/5 -right-px  text-md font-bold text-primary ">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button className="px-2 hover:bg-white/5 rounded-full transition-all group">
                            <User className="w-fit h-full text-inherit" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
