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
  <div v-if="product" class="content">
    <img :src="getImageURL(product.image)" alt="product image" />
    <div class="content-body">
      <h1>{{ product.name }}</h1>
      <p class="content-description">
        {{ product.description }}
      </p>
      <p class="content-price">
        $<span>{{ product.price }}</span>
      </p>

      <button class="add-to-cart" @click="">Add To Cart</button>
    </div>
  </div>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-radius: 25px;
  padding: 2rem;
  align-content: center;
  justify-content: space-evenly;
  gap: 2rem;
  margin: 2rem;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.content img {
  width: 43%;
  height: auto;
}

.content-price {
  font-size: 1.2rem;
  font-weight: 500;
}

.content-description {
  font-size: 1rem;
}

button.add-to-cart {
  background-color: black;
  color: white;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
}
</style>