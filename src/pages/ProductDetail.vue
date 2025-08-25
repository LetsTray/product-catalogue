<script>
import product from "../data/product.json";

export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  methods: {
    getImageURL(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
  mounted() {
    //this.product = product.finds((product) => product.id == this.id);
    const numId = Number(this.id);
    this.product = product.find((p) => p.id === numId);
  },
};
</script>
<template>
  <div
    v-if="product"
    class="flex flex-row border-2 border-black rounded-3xl p-8 items-center justify-evenly gap-8 m-8"
  >
    <img :src="getImageURL(product.image)" class="w-2xl" />
    <div class="flex flex-col gap-4">
      <h1 class="font-bold text-3xl">{{ product.name }}</h1>
      <p class="text-xl">{{ product.description }}</p>
      <p class="text-xl font-medium">
        $<span>{{ product.price }}</span>
      </p>
    </div>
  </div>
</template>

