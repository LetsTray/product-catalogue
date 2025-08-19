<script>
import CartCard from "@/components/CartCard.vue";
import product from "../data/product.json";

export default {
  components: { CartCard },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    showCart(data) {
      this.result = data;
    },
  },
};
</script>
<template>
  <div class="cart-list">
    <CartCard />
    <p @showCart="getData($event)">
      <h4>Result : {{ result }}</h4>
    </p>
  </div>
</template>
<style>
.cart-list {
  margin: 2rem;
}
</style>
