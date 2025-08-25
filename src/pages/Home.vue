<script>
import ProductCard from "@/components/ProductCard.vue";
import product from "../data/product.json";
import { getImageURL } from "@/utils/getImageURL";

export default {
  components: { ProductCard },
  data() {
    return {
      products: product,
    };
  },
  methods: {
    getImageURL,
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
      :product="{ ...item, image: getImageURL(item.image) }"
    />
  </div>
</template>