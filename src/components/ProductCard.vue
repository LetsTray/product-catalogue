<script>
export default {
  props: {
    id: Number,
    name: String,
    price: Number,
    image: String,
  },
};
</script>
<template>
  <div
    class="flex flex-col w-80 p-6 bg-white rounded-3xl text-center gap-4 border-2 border-black"
  >
    <img :src="image" alt="product image" />
    <div class="flex flex-row items-center justify-between">
      <h1 class="text-xl font-extrabold text-left">{{ name }}</h1>
      <p class="font-medium text-lg">
        $<span>{{ price }}</span>
      </p>
    </div>
    <button class="bg-black text-white font-medium p-2" @click="$emit('add-to-cart', product)">Add To Cart</button>
    <router-link
      class="decoration-0 text-base text-black font-semibold"
      :to="`/product/${id}`"
      >See details</router-link
    >
  </div>
</template>
