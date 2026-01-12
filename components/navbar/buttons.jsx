'use client'

import { openCart } from "lib/cart/cart.ui"
import { useCartTotal } from "lib/cart/getCartTotals"
import { ShoppingCart } from "lucide-react"

export function CartButton() {
    const cartCount = useCartTotal()
    return (
        <button
            onClick={openCart}
            className="px-2 hover:bg-white/5 rounded-full transition-all relative group"
        >
            <ShoppingCart className={`w-fit h-full ${cartCount > 0 ? 'text-primary/75' : 'text-inherit'}`} />
            {cartCount > 0 && (
                <span className="absolute -top-2/5 -right-px  text-md font-bold text-primary ">
                    {cartCount}
                </span>
            )}
        </button>
    )
}