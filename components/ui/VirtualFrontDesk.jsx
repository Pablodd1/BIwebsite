'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const BASE_CHATBOT_URL = 'https://chat.unitecusadesign.com';

export default function VirtualFrontDesk() {
    const [isOpen, setIsOpen] = useState(false);
    const brandId = 'unitec';

    return (
        <>
            {isOpen && (
                <iframe
                    src={`${BASE_CHATBOT_URL}?embed=true&brandId=${brandId}`}
                    title="AI Front Desk Assistant"
                    allow="clipboard-read; clipboard-write; microphone; autoplay"
                    className="fixed bottom-[90px] right-6 w-[400px] h-[700px] max-w-[calc(100vw-32px)] max-h-[calc(100vh-120px)] border-none rounded-[32px] bg-white shadow-[0_10px_50px_rgba(0,0,0,0.2)] z-[999999] transition-all duration-300 ease-in-out"
                />
            )}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="fixed bottom-6 right-6 z-[999999] flex items-center justify-center w-14 h-14 bg-[#1E3A8A] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </>
    );
}
