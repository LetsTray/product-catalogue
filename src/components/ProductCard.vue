<script setup>
defineProps({
  id: Number,
  name: String,
  price: Number,
  image: String,
});
</script>

<template>
  <div class="card">
    <img :src="image" alt="product image" />
    <div class="product-content">
      <h1 class="product-name">{{ name }}</h1>
      <p class="product-price">
        $<span class="price">{{ price }}</span>
      </p>
    </div>

    <button class="add-to-cart">Add To Cart</button>
    <router-link :to="`/product/${id}`">See details</router-link>
  </div>
</template>
<style>
.card {
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  gap: 0.5rem;
  border: 2px solid black;
}

.card img {
  width: 100%;
  height: auto;
}

.product-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 800;
  text-align: left;
}

.price {
  font-size: 1.1rem;
  font-weight: 500;
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
