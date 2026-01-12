const emitter =
  typeof window !== "undefined" ? new EventTarget() : null

export function emitCart() {
  emitter?.dispatchEvent(new Event("cart:update"))
}

export function subscribeCart(cb) {
  if (!emitter) return () => {}
  emitter.addEventListener("cart:update", cb)
  return () => emitter.removeEventListener("cart:update", cb)
}
