<script></script>
<template>
  <nav>
    <router-link class="product-catalogue" to="/"
      >Product Catalogue</router-link
    >
    <!--<router-link to="/product">Product Detail</router-link>|-->
    <router-link class="cart" to="/cart">Cart</router-link>
  </nav>
  <!--<router-view />-->
</template>
<style>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1rem;
  font-weight: 700;
  font-size: larger;
  position: sticky;
  background-color: black;
  font-size: 1.5rem;
}

.product-catalogue {
  text-decoration: none;
  color: white;
}

.cart {
  text-decoration: none;
  color: white;
}
</style>
