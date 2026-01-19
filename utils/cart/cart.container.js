export function addContainer(container) {
  cart.containers[container.id] = {
    id: container.id,
    meta: container.meta,
    items: {}
  }
  persist()
}

export function removeContainer(containerId) {
  delete cart.containers[containerId]
  persist()
}
