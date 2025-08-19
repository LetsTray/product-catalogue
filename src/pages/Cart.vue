<script></script>
<template>
  <div class="cart-list">
    <div class="cart-card">
      <div class="cart-info">
        <img src="../assets/asset12.jpeg" />
        <p>Performance Basketball Shoes</p>
      </div>
      <p class="cart-price">$<span id="price">133.99</span></p>
      <button class="delete-product">X</button>
    </div>
    <div class="cart-card">
      <div class="cart-info">
        <img src="../assets/asset12.jpeg" />
        <p>Performance Basketball Shoes</p>
      </div>
      <p class="cart-price">$<span id="price">133.99</span></p>
      <button class="delete-product">X</button>
    </div>
  </div>
</template>
<style>
.cart-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 2rem;
  gap: 1rem;
}

.cart-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid black 2px;
  border-radius: 25px;
  padding: 1.5rem;
  justify-content: space-between;
  gap: 3rem;
}

.cart-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.cart-price {
  font-weight: 500;
  font-size: 1.2rem;
}

img {
  width: 8%;
  height: auto;
}

.cart-info p {
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
