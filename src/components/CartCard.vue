<script>
export default {
  props: {
    product: Object,
  }
}
</script>
<template>
  <div
    class="flex flex-row justify-between flex-wrap items-center border-2 border-black rounded-2xl p-6"
  >
    <div class="flex items-center gap-16">
      <p class="text-xl font-semibold">{{ product.name }}</p>
    </div>
    <p class="text-lg font-medium">$<span>{{ product.price }}</span></p>
    <button
      class="font-medium bg-red-600 text-white border-2 rounded-2xl px-5 py-2"
    >
      X
    </button>
  </div>
</template>

<!--<script>
export default {
  
  methods: {
    getImageURL(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="cart-card">
    <div class="cart-info">
      <img :src="getImageURL(image)" alt="product image" />
      <p class="cart-name"></p>
    </div>
    <p class="cart-price">$<span></span></p>
    <button class="delete-product">X</button>
  </div>
</template>
<style scoped>
.cart-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border: black 2px solid;
  border-radius: 35px;
  padding: 1.5rem;
}

.cart-card img {
  width: 10%;
  height: auto;
}

.cart-info {
  display: flex;
  align-items: center;
  gap: 4rem;
}
.cart-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.cart-price {
  font-size: 1.1rem;
  font-weight: 500;
}

button.delete-product {
  width: 3rem;
  padding: 0.5rem;
  font-size: 1.1rem;
}
</style>-->
