<template>
  <div class="shop">
    <h1>Shop Gift Cards</h1>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import products from '../data/products.js';
import ProductCard from '../components/ProductCard.vue';
import { useCartStore } from '../stores/cartStore';

const cart = useCartStore();

function addToCart(product) {
  cart.addItem(product);
  alert(`Added ${product.name} to cart!`);
}
</script>

<style scoped>
.shop {
  padding: 1rem;
}

h1 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>