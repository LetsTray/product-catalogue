<script>
import CartCard from "@/components/CartCard.vue";
import { cartStore } from "@/store/cart.js";

export default {
  components: { CartCard },
  computed: {
    cart() {
      return cartStore.items;
    },
  },
};
</script>
<template>
  <CartCard v-for="(item, index) in cart" :key="index" :product="item" />
</template>
