<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <div class="navbar-brand">
        <div class="logo">
          <div class="logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-gamepad-2"
            >
              <line x1="6" x2="10" y1="11" y2="11" />
              <line x1="8" x2="8" y1="9" y2="13" />
              <line x1="15" x2="15.01" y1="12" y2="12" />
              <line x1="18" x2="18.01" y1="10" y2="10" />
              <path
                d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z"
              />
            </svg>
          </div>
          <span>GameVault</span>
        </div>
      </div>
      <div class="navbar-menu">
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="navbar-item"
        >
          {{ item.label }}
        </router-link>
      </div>
      <div class="navbar-end">
        <button class="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
        <button class="sign-up-button">Sign Up</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Shop', link: '/shop' },
  { label: 'Cart', link: '/cart' },
  { label: 'Checkout', link: '/checkout' },
  { label: 'Gift Cards', link: '/gift-cards' },
  { label: 'Support', link: '/support' },
]

const scrolled = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background-color: #1a103d;
}
.navbar-scrolled {
  background-color: #1a103d;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;
}
.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a103d;
}
.navbar-brand {
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
}
.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}
.navbar-menu {
  display: none;
}
@media (min-width: 768px) {
  .navbar-menu {
    display: flex;
    gap: 1.5rem;
  }
}
.navbar-item {
  color: white;
  font-weight: 500;
  transition: color 0.2s ease;
}
.navbar-item:hover {
  color: var(--primary);
}
.navbar-end {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search-button {
  background: transparent;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-up-button {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}
.sign-up-button:hover {
  background-color: var(--primary-dark);
}
</style>
