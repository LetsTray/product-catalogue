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
  padding: 0.5rem 0.5rem;
  font-weight: 700;
  font-size: larger;
  position: sticky;
}

.product-catalogue {
  text-decoration: none;
  color: black;
}

.cart {
  text-decoration: none;
  color: black;
}
</style>
