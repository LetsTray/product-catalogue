<script>
import { useCartStore } from "@/stores/cartStores";

export default {
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
};
</script>
<template>
  <nav
    class="flex flex-row justify-between px-2 py-4 font-bold text-2xl sticky top-0 bg-black"
  >
    <router-link class="decoration-0 text-white" to="/"
      >Product Catalogue</router-link
    >
    <router-link class="decoration-0 text-white flex gap-3" to="/cart">
      Cart
      
      <p class="text-white font-semibold text-sm bg-red-600 rounded-4xl p-2">
        {{ cartStore.cartCount }}
      </p>
    </router-link>
  </nav>
</template>
