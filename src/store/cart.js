import { reactive } from "vue";

export const cartStore = reactive({
  items: [],
  addItem(product) {
    if (!product || typeof product !== "object") return;
    this.items.push(product);
  },
  removeItemById(productId) {
    const indexToRemove = this.items.findIndex((p) => p && p.id === productId);
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  },
  clear() {
    this.items.length = 0;
  },
});