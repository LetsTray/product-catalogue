<script>
import ProductCard from "@/components/ProductCard.vue";
import product from "@/data/product.json";

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
  },
  mounted() {
    if (!this.products.length) {
      console.error("Products data is empty.");
    }
  },
};
</script>

<template>
  <div v-if="products.length" class="list">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :image="getImageURL(item.image)"
    />
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 3.5rem 1rem;
  margin: 2rem;
  place-content: center;
}
</style>
