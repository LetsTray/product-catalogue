import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartCount: (state) => state.cart.length,
  },
  actions: {
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
    clearCart() {
      this.cart = [];
    },
  },
});

/*<script>
import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartCount: (state) => state.cart.length,
  },
  actions: {
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
    clearCart() {
      this.cart = [];
    },
  },
});
</script>
<template></template>
<style></style>*/
