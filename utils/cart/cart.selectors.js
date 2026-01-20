import { getCart } from "./cart.core"

export function totalQty() {
  return getCart().reduce((sum, container) => {
    const containerQty = container.items.reduce((a, i) => Number(a) + Number(i.qty), 0)
    return Number(sum) + Number(containerQty)
  }, 0)
}

export function containerQty(containerId) {
  const container = getCart().find(c => c.id === containerId)
  if (!container) return 0
  return container.items.reduce((a, i) => a + i.qty, 0)
}

export function itemQty(containerId, productId) {
  const container = getCart().find(c => c.id === containerId)
  if (!container) return 0
  const item = container.items.find(i => i.id === productId)
  return item ? item.qty : 0
}
