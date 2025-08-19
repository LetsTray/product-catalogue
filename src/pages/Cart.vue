<script></script>
<template>
  <div class="cart-list">
    <div class="cart-card">
      <div class="cart-info">
        <img src="../assets/asset12.jpeg" />
        <p class="cart-name">Performance Basketball Shoes</p>
      </div>
      <p class="cart-price">$<span>133.99</span></p>
      <button class="delete-product">X</button>
    </div>
  </div>
</template>
<style>
.cart-list {
  margin: 2rem;
}

.cart-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border: black 2px solid;
  border-radius: 35px;
  padding: 1.2rem;
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
</style>
