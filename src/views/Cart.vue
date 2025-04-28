<template>
  <div class="cart">
    <h1>Shopping Cart</h1>

    <div v-if="cart.items.length === 0" class="empty-cart">Your cart is empty.</div>

    <div v-else class="cart-items">
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <div class="item-info">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.game }}</p>
            <p>${{ item.price.toFixed(2) }} × {{ item.quantity }}</p>
          </div>
        </div>
        <button @click="cart.removeItem(item.id)" class="remove-button">Remove</button>
      </div>

      <div class="cart-total">
        <span>Total:</span>
        <span>${{ total }}</span>
      </div>

      <div class="cart-actions">
        <router-link to="/shop" class="continue-button"> Continue Shopping </router-link>
        <router-link v-if="cart.items.length" to="/checkout" class="checkout-button">
          Proceed to Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()
const total = computed(() => cart.totalPrice.toFixed(2))
</script>

<style scoped>
.cart {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1.5rem;
}

.empty-cart {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.item-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.remove-button {
  padding: 0.5rem;
  background-color: transparent;
  color: #e53e3e;
  border: none;
  cursor: pointer;
}

.remove-button:hover {
  text-decoration: underline;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid #eee;
}

.cart-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.continue-button,
.checkout-button {
  padding: 0.75rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}

.continue-button {
  background-color: #f3f4f6;
  color: #333;
}

.checkout-button {
  background-color: #10b981;
  color: white;
}

.checkout-button:hover {
  background-color: #059669;
}
</style>
