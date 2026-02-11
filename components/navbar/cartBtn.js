import React from 'react';
import { useLanguage } from 'lib/LanguageContext';

export default function CartButton({ count }) {
    const { t } = useLanguage();
    
    return (
        <button 
            onClick={() => window.location.href = '/collections'}
            className="relative"
            aria-label={t('nav.collections')}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
            >
                <path d="M3 3h18v18H3zm18 0h18V3H3zm0 2h18v14H3V5z"/>
            </svg>
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {count}
                </span>
            )}
        </button>
    );
}