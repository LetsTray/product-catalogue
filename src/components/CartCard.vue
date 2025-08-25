<script>
import { useCartStore } from "@/stores/cartStores";

export default {
  props: {
    product: Object,
  },
  setup(props) {
    const cartStores = useCartStore();

    function remove() {
      cartStores.removeFromCart(props.product.id);
    }

    function getImageURL(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    }

    return { cartStores, remove, getImageURL };
  },
};
</script>
<template>
  <div
    class="flex flex-row justify-between flex-wrap items-center border-2 border-black rounded-2xl p-6"
  >
    <img
      :src="getImageURL(product.image)"
      alt="product image"
      class="w-8 h-auto"
    />
    <div class="flex items-center gap-8">
      <p class="text-xl font-semibold">{{ product.name }}</p>
    </div>
    <p class="text-lg font-medium">
      $<span>{{ product.price }}</span>
    </p>
    <button
      class="font-medium bg-red-600 text-white border-2 rounded-2xl px-5 py-2"
      @click="remove"
    >
      X
    </button>
  </div>
</template>

