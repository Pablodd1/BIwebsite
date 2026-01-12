import { getCart } from "./cart.core"

export function totalQty() {
  return Object.values(getCart().items).reduce((a, b) => a + b, 0)
}

export function itemQty(id) {
  return getCart().items[id] || 0
}
