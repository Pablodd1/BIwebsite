"use client"

import { useEffect, useState } from "react"
import { totalQty } from "./cart.selectors"
import { subscribeCart } from "./cart.events"

export function useCartTotal() {
  const [total, setTotal] = useState(totalQty())

  useEffect(() => {
    return subscribeCart(() => {
      setTotal(totalQty())
    })
  }, [])

  return total
}
