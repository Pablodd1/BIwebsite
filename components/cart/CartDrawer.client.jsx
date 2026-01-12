"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { subscribeCartUI, closeCart } from "lib/cart/cart.ui"
import { totalQty } from "lib/cart/cart.selectors"
import { getCart } from "lib/cart/cart.core"
import RenderItemsList from "./renderItems"

export default function CartDrawer() {
  const [open, setOpen] = useState(false)
  const [qty, setQty] = useState(0);
  const { items } = getCart()
  
  useEffect(() => {
    return subscribeCartUI(
      () => setOpen(true),
      () => setOpen(false)
    )
  }, [])

  useEffect(() => {
    setQty(totalQty())
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">
                Cart ({qty})
              </h2>
              <button
                onClick={closeCart}
                className="text-sm opacity-70 hover:opacity-100"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4">
              {
                items ? <RenderItemsList list={items} />
                  :
                  <p className="text-sm text-gray-500">
                    Cart items go here
                  </p>
              }

            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <button className="w-full bg-black text-white py-2 rounded-md">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
