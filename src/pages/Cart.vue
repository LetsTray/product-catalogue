<script>
import CartCard from "@/components/CartCard.vue";

export default {
  components: { CartCard },
  data() {
    return {
      cart: [],
    };
  },
};
</script>
<template>
  <CartCard v-for="(item, index) in cart" :key="index" :product="item" />
</template>
