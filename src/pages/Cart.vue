<script>
import CartCard from "@/components/CartCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import product from "../data/product.json";

export default {
  components: { ProductCard, CartCard },
  data() {
    return {
      product,
      cart: [],
    };
  },
  methods: {
    tambahKeCart(product) {
      this.cart.push(product);
    },
  },
};
</script>
<template>
  <div class="cart-list">
    <CartCard
      v-for="(item, index) in cart"
      :key="index"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :image="item.image"
      @add-to-cart="tambahKeCart"
      :product="item"
    />
  </div>
</template>
<style scoped>
.cart-list {
  margin: 2rem;
}
</style>

<!--<script>
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
</style>-->
