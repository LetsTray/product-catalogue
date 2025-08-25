<script>
import CartCard from "@/components/CartCard.vue";
import { useCartStore } from "@/stores/cartStores";

export default {
  components: { CartCard },
  setup() {
    const cartStores = useCartStore();
    return { cartStores };
  },
};
</script>
<template>
  <CartCard v-for="item in cartStores.cart" :key="item.id" :product="item" />
</template>
