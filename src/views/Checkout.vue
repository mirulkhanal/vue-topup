<template>
  <div class="checkout">
    <h1>Checkout</h1>
    
    <div v-if="cart.items.length === 0" class="empty-checkout">
      <p>Your cart is empty. Please add items before checkout.</p>
      <router-link to="/shop" class="shop-button">Go to Shop</router-link>
    </div>
    
    <div v-else class="checkout-content">
      <div class="order-summary">
        <h2>Order Summary</h2>
        <div v-for="item in cart.items" :key="item.id" class="summary-item">
          <span>{{ item.name }} × {{ item.quantity }}</span>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>
        <div class="summary-total">
          <span>Total:</span>
          <span>${{ total }}</span>
        </div>
      </div>
      
      <button @click="completeOrder" class="complete-button">
        Complete Purchase
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';
import { useRouter } from 'vue-router';

const cart = useCartStore();
const router = useRouter();
const total = computed(() => cart.totalPrice.toFixed(2));

function completeOrder() {
  alert('Thank you for your purchase!');
  cart.clearCart();
  router.push('/');
}
</script>

<style scoped>
.checkout {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1.5rem;
}

h2 {
  margin-bottom: 1rem;
}

.empty-checkout {
  text-align: center;
  padding: 2rem;
}

.shop-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #4a6cf7;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.checkout-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.order-summary {
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.complete-button {
  padding: 1rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.complete-button:hover {
  background-color: #059669;
}
</style>