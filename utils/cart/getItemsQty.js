"use client"

import { useEffect, useState } from "react"
import { itemQty } from "./cart.selectors"
import { subscribeCart } from "./cart.events"

export function useCartItemQty(productId) {
  const [qty, setQty] = useState(() => itemQty(productId))

  useEffect(() => {
    return subscribeCart(() => {
      setQty(itemQty(productId))
    })
  }, [productId])

  return qty
}
