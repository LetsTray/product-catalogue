<script>
import product from "../data/product.json";

/*defineProps({
  name: String,
  description: String,
  category: String,
  price: Number,
  image: String,
});*/

export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.product = product.finds((product) => product.id == this.id);
  },
};
</script>
<template>
  <div v-if="product" class="content">
    <img :src="image" alt="product image" />
    <div class="content-body">
      <h1>{{ product.name }}</h1>
      <p class="product-price">
        $<span id="price">{{ product.price }} </span>
      </p>
      <p class="content-description">
        {{ product.description }}
      </p>
      <button class="add-to-cart">Add To Cart</button>
    </div>
  </div>

  <!--<div>
      <div class="content-detail">
        <h3>Size</h3>
         <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
      </div>
    </div>
  </div>-->
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

button.add-to-cart {
  background-color: black;
  color: white;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
}
</style>
