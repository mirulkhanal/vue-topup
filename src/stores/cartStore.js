import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);
  
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  });
  
  function addItem(product) {
    const existingItem = items.value.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.value.push({
        ...product,
        quantity: 1
      });
    }
  }
  
  function removeItem(productId) {
    const index = items.value.findIndex(item => item.id === productId);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }
  
  function clearCart() {
    items.value = [];
  }
  
  return { 
    items, 
    totalPrice, 
    addItem, 
    removeItem, 
    clearCart 
  };
});