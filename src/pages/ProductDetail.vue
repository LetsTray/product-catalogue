<script setup>
import Dropdown from "primevue/dropdown";

defineProps({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String,
});
</script>
<template>
  <div class="content">
    <img src="../assets/asset3.jpeg" />
    <div class="content-body">
      <h1>LOREM IPSUM</h1>
      <p class="product-price">$<span id="price">139.99 </span></p>
      <p class="content-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, esse.
        Perferendis nemo ea quod aliquam illo cupiditate odio vero, placeat
        possimus libero minima vel quae eveniet dolores quisquam adipisci
        voluptas!
      </p>
      <div class="content-detail">
        <h3>Size</h3>
        <!-- <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />-->
      </div>
      <Button> Add To Cart </Button>
    </div>
  </div>
</template>
<style>
.content {
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  border-radius: 25px;
  padding: 2rem;
}

.content-body {
  display: flex;
  flex-direction: column;
}
img {
  width: 48%;
  height: auto;
}

.product-price {
  font-size: 1.2rem;
  font-weight: 500;
}

.content-description {
  font-size: 1rem;
}

Button {
  background-color: black;
  color: white;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
}
</style>
