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
  <CartCard class="flex flex-wrap gap-x-4 gap-y-8 content-center my-9 mx-9" v-for="item in cartStores.cart" :key="item.id" :product="item" />
</template>
