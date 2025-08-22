<script>
import ProductCard from "@/components/ProductCard.vue";
import product from "../data/product.json";
import { cartStore } from "@/store/cart.js";

export default {
  components: { ProductCard },
  data() {
    return {
      products: product,
    };
  },
  methods: {
    getImageURL(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
    addToCart(product) {
      cartStore.addItem(product);
    },
  },
};
</script>
<template>
  <div
    v-if="products.length"
    class="flex flex-wrap justify-evenly items-stretch gap-x-4 gap-y-8 content-center my-9"
  >
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :image="getImageURL(item.image)"
      @add-to-cart="addToCart"
    />
  </div>
</template>
