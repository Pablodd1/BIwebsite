import { getCart, setQty } from "./cart.core"
import { emitCart } from "./cart.events"

export function updateQty(productId, qty) {
  setQty(productId, qty)
  emitCart()
}

export function addOne(productId) {
  const current = getCart().items[productId] || 0
  updateQty(productId, current + 1)
}

export function removeOne(productId) {
  const current = getCart().items[productId] || 0
  updateQty(productId, current - 1)
}
