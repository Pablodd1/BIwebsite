import React from 'react';
import { House, Library, Search, Shapes, User } from 'lucide-react';
import Link from 'next/link';
import { CartButton } from './cartBtn';
import SearchFrom from './search';
import Logo from 'My_UI/logo';

const navItems = [
    { label: 'Home', id: 'home', href: '/', icon: <Logo size={50} />, onlyIcon: true },
    { label: 'Collections', id: 'collections', icon:<Library className=' text-inherit h-5' />, href: '/collections' },
    { label: 'Interiors', id: 'interiors', href: '/collections/interior' },
    { label: 'Exteriors', id: 'exteriors', href: '/collections/exterior' },
    { label: 'Sale', id: 'sale', href: '/collections/sales' },
    { label: 'Contact', id: 'contact', href: '/contact' }
];

const NavBar = ({ }) => {

    return (
        <header className="sticky top-0 z-30 bg-primary/75 shadow-accent2 border-b border-gray-300 shadow-sm backdrop-blur-md text-black  pr-8 pl-5 py-2.5">
            <div className="max-w-400 mx-auto flex items-center justify-between">

                {/* Navigation Links - Matching the screenshot style */}
                <nav className="flex items-center ">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="text-sm uppercase tracking-widest mx-5 first-of-type:mx-0 font-semibold flex items-center transition-all whitespace-nowrap cursor-pointer"
                        >
                            {
                                item.onlyIcon
                                    ? item.icon
                                    :
                                    <>
                                        {
                                            item.icon ?
                                                <span className='inline-flex' >{item.icon}</span>
                                                : null
                                        }
                                        {item.label}
                                    </>
                            }
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
