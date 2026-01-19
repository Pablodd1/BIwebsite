'use client'

import { openCart } from "lib/cart/cart.ui"
import { useCartTotal } from "lib/cart/useCartTotals"
import { ShoppingCart } from "lucide-react"

export function CartButton() {
    const cartCount = useCartTotal()
    return (
        <button
            onClick={openCart}
            className="px-2 hover:bg-white/5 rounded-full transition-all relative group cursor-pointer"
        >
            <ShoppingCart fill={cartCount > 0 ? "#ca3500bf":'none'} className={`w-fit h-full ${cartCount > 0 ? 'text-orange-700/75' : 'text-inherit'}`} />
            {cartCount > 0 && (
                <span className="absolute -top-5 -right-px  text-3xl font-semibold text-orange-700 ">
                    •
                </span>
            )}
        </button>
    )
}