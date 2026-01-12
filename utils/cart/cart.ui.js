const emitter =
  typeof window !== "undefined" ? new EventTarget() : null

export function openCart() {
  emitter?.dispatchEvent(new Event("cart:open"))
}

export function closeCart() {
  emitter?.dispatchEvent(new Event("cart:close"))
}

export function subscribeCartUI(onOpen, onClose) {
  if (!emitter) return () => {}

  emitter.addEventListener("cart:open", onOpen)
  emitter.addEventListener("cart:close", onClose)

  return () => {
    emitter.removeEventListener("cart:open", onOpen)
    emitter.removeEventListener("cart:close", onClose)
  }
}
