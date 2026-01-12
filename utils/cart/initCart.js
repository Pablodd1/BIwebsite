"use client"

import { useEffect } from "react"
import { initCart } from "./cart.core"
import { emitCart } from "./cart.events"

export default function CartInit() {
  useEffect(() => {
    initCart()
    emitCart()
  }, [])

  return null
}
