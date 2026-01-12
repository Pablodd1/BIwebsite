"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { addOne, removeOne } from "lib/cart/cart.actions"
import Image from "next/image"
import GetFinalPrice from "@My_UIgetFinalPrice"
import { getCart } from "lib/cart/cart.core"
import { subscribeCart } from "lib/cart/cart.events"
import { Minus, Plus } from "lucide-react"

async function fetchProduct(id) {
    const res = await fetch(
        `/API/products/${id}?fields=id,name,basePrice,image,discountPercent`,
        { cache: "no-store" }
    )
    if (!res.ok) throw new Error("Failed")
    return res.json()
}

export default function RenderItemsList() {
    const [items, setItems] = useState(() => getCart().items)
    const ids = Object.keys(items)

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    /* 🔴 SUBSCRIBE TO CART CHANGES */
    useEffect(() => {
        return subscribeCart(() => {
            setItems({ ...getCart().items })
        })
    }, [])

    /* Fetch products only when ids change */
    useEffect(() => {
        if (!ids.length) {
            setProducts({})
            setLoading(false)
            return
        }

        let alive = true
        setLoading(true)

        Promise.all(
            ids.map(async (id) => {
                if (products[id]) return [id, products[id]]
                const data = await fetchProduct(id)
                return [id, data]
            })
        ).then((entries) => {
            if (!alive) return
            setProducts((prev) => ({ ...prev, ...Object.fromEntries(entries) }))
            setLoading(false)
        })

        return () => {
            alive = false
        }
    }, [ids.join(",")])

    if (loading)
        return (
            <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-20 rounded-lg bg-gray-100 animate-pulse"
                    />
                ))}
            </div>
        )

    if (!ids.length)
        return (
            <div className="py-12 text-center text-sm text-gray-500">
                Your cart is empty
            </div>
        )

    return (
        <div className="space-y-4">
            <AnimatePresence>
                {ids.map((id) => {
                    const p = products[id]
                    const qty = items[id]

                    if (!p) return null

                    return (
                        <motion.div
                            key={id}
                            layout
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex gap-4 rounded-xl border p-3"
                        >
                            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg relative bg-gray-100">
                                <Image
                                    src={p.image.url || '/raster/product.jpg'}
                                    alt={p.name} fill
                                    className="h-full w-full object-contain p-1"
                                />
                            </div>

                            <div className="flex flex-1 flex-col">
                                <p className="text-sm font-medium leading-tight">
                                    {p.name}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-sm font-semibold">
                                        <GetFinalPrice basePrice={p.basePrice} discountPercent={p.discountPercent} />
                                    </span>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => removeOne(id)}
                                            aria-label="Decrease quantity"
                                            className="flex h-7 w-7 items-center justify-center rounded-md border transition hover:bg-gray-100 active:scale-95"
                                        >
                                            <Minus
                                                size={14}
                                                strokeWidth={2}
                                                className={qty === 1 ? "text-red-500" : undefined}
                                            />
                                        </button>

                                        <span className="min-w-5 text-center text-sm font-medium">
                                            {qty}
                                        </span>

                                        <button
                                            onClick={() => addOne(id)}
                                            aria-label="Increase quantity"
                                            className="flex h-7 w-7 items-center justify-center rounded-md border transition hover:bg-gray-100 active:scale-95"
                                        >
                                            <Plus size={14} strokeWidth={2} />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}