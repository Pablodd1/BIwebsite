const CART_KEY = "__cart__"

let cart = { items: {} }

export function initCart() {
  if (typeof window === "undefined") return

  try {
    const stored = sessionStorage.getItem(CART_KEY)
    cart = stored ? JSON.parse(stored) : { items: {} }
  } catch {
    cart = { items: {} }
  }
}

function persist() {
  sessionStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export function getCart() {
  return cart
}

export function setQty(productId, qty) {
  if (qty <= 0) delete cart.items[productId]
  else cart.items[productId] = qty

  persist()
}
