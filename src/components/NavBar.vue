<style>
@import url('https://fonts.googleapis.com/css2?family=Bytesized&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': scrolled }" aria-label="Main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="logo-link" aria-label="Home" tabindex="0">
          <div class="logo quirky-logo" tabindex="-1">
            <div class="logo-icon">
              <IconLogoGamepad />
            </div>
            <span class="logo-text">Kraken</span>
          </div>
        </router-link>
      </div>
      <button
        class="hamburger"
        :aria-expanded="mobileMenuOpen.toString()"
        aria-label="Toggle menu"
        @click="toggleMobileMenu"
      >
        <IconHamburgerOpen v-if="!mobileMenuOpen" />
        <IconHamburgerClose v-else />
      </button>
      <div :class="['navbar-menu', { open: mobileMenuOpen }]" @click.self="closeMobileMenu">
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="navbar-item"
          :aria-label="item.label"
          :aria-current="$route.path === item.link ? 'page' : undefined"
          @click="closeMobileMenu"
        >
          <span class="navbar-icon" v-if="item.icon">
            <component :is="item.icon" />
          </span>
          <span class="navbar-item-content">{{ item.label }}</span>
          <span class="navbar-item-underline"></span>
        </router-link>
        <div class="navbar-actions-mobile">
          <button class="search-button" aria-label="Search">
            <IconSearch />
          </button>
          <button class="sign-up-button" aria-label="Sign Up">
            <span class="sign-up-icon" aria-hidden="true">
              <IconSignUp />
            </span>
            <span>Sign Up</span>
          </button>
          <span class="sign-up-button-effect"></span>
        </div>
      </div>
      <div class="navbar-end">
        <button class="search-button" aria-label="Search">
          <IconSearch />
        </button>
        <button class="sign-up-button" aria-label="Sign Up">
          <span>Sign Up</span>
          <span class="sign-up-button-effect"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconHome from './icons/IconHome.vue'
import IconShop from './icons/IconShop.vue'
import IconCart from './icons/IconCart.vue'
import IconGiftCards from './icons/IconGiftCards.vue'
import IconSupport from './icons/IconSupport.vue'
import IconCheckout from './icons/IconCheckout.vue'
// New Icon Imports
import IconLogoGamepad from './icons/IconLogoGamepad.vue'
import IconHamburgerOpen from './icons/IconHamburgerOpen.vue'
import IconHamburgerClose from './icons/IconHamburgerClose.vue'
import IconSearch from './icons/IconSearch.vue'
import IconSignUp from './icons/IconSignUp.vue'

const menuItems = [
  {
    label: 'Home',
    link: '/',
    icon: IconHome,
  },
  {
    label: 'Shop',
    link: '/shop',
    icon: IconShop,
  },
  {
    label: 'Cart',
    link: '/cart',
    icon: IconCart,
  },
  {
    label: 'Gift Cards',
    link: '/gift-cards',
    icon: IconGiftCards,
  },
  {
    label: 'Support',
    link: '/support',
    icon: IconSupport,
  },
  {
    label: 'Checkout',
    link: '/checkout',
    icon: IconCheckout,
  },
]

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const handleScroll = () => {
  scrolled.value = window.scrollY > 35
}
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
:root {
  --radius: 8px;
  --primary-rgb: 0, 255, 198;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.6rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: black;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar-scrolled {
  padding: 0.3rem 0;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.25);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.2rem;
  background: transparent;
  width: 100%;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  outline: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 1.35rem;
  color: white;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 1px;
}

.logo:hover {
  transform: scale(1.07) rotate(-2deg);
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover .logo-icon {
  transform: rotate(15deg) scale(1.1);
}

.logo-text {
  position: relative;
  font-family: 'Bytesized', sans-serif;
  font-size: 1.6em;
  font-weight: 600;
  font-style: normal;

  text-shadow: 0 2px 8px #1a103d;
}

.logo-text::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #00ffc6 0%, #ff00ea 100%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo:hover .logo-text::after {
  width: 100%;
}

.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  z-index: 1100;
  transition: background 0.2s;
  border-radius: 6px;
  padding: 0.3rem;
}
.hamburger:focus-visible {
  outline: 2px solid #00ffc6;
}

@media (min-width: 900px) {
  .hamburger {
    display: none;
  }
}

.navbar-menu {
  display: none;
  flex-direction: column;
  position: fixed;
  top: 56px;
  left: 0;
  width: 100vw;
  background: var(--navbar-gradient);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
  padding: 1.5rem 1.2rem 1rem 1.2rem;
  gap: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1050;
}
.navbar-menu.open {
  display: flex;
  animation: fadeInMenu 0.3s;
}
@keyframes fadeInMenu {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (min-width: 900px) {
  .navbar-menu {
    display: flex !important;
    flex-direction: row;
    position: static;
    background: none;
    box-shadow: none;
    padding: 0;
    gap: 1.2rem;
    width: auto;
    animation: none !important;
  }
}

.navbar-item {
  position: relative;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  padding: 0.4rem 0.7rem;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    background 0.2s,
    color 0.2s;
}
.navbar-item .navbar-icon {
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
}
.navbar-item-content {
  position: relative;
  z-index: 1;
  transition: color 0.3s;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}
.navbar-item-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.5px;
  background: #ff2222;
  transform: translateX(-100%);
  transition: transform 0.3s;
}
.navbar-item:hover,
.navbar-item:focus-visible {
  background: rgba(0, 255, 198, 0.08);
  color: #ff2222;
}
.navbar-item:hover .navbar-item-content,
.navbar-item:focus-visible .navbar-item-content {
  color: #ff2222;
}
.navbar-item.router-link-active,
.navbar-item[aria-current='page'] {
  background: linear-gradient(90deg, rgba(0, 255, 198, 0.18) 0%, rgba(255, 0, 234, 0.13) 100%);
  color: #ff2222;
  box-shadow: 0 2px 8px 0 rgba(0, 255, 198, 0.1);
}
.navbar-item.router-link-active .navbar-item-content,
.navbar-item[aria-current='page'] .navbar-item-content {
  color: #ff2222;
}
.navbar-item.router-link-active .navbar-item-underline,
.navbar-item[aria-current='page'] .navbar-item-underline {
  transform: translateX(0);
  background: #ff2222;
}
.logo-link.router-link-active,
.logo-link[aria-current='page'] {
  background: none !important;
  box-shadow: none !important;
}
.navbar-end {
  display: none;
}
@media (min-width: 900px) {
  .navbar-end {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
.navbar-actions-mobile {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}
@media (min-width: 900px) {
  .navbar-actions-mobile {
    display: none;
  }
}
.search-button {
  background: transparent;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem;
  border-radius: 50%;
  transition:
    background 0.2s,
    transform 0.2s;
  cursor: pointer;
}
.search-button:hover,
.search-button:focus-visible {
  background: rgba(0, 255, 198, 0.12);
  transform: scale(1.1);
  outline: none;
}
.sign-up-button {
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.65em 1.7em;
  font-family: 'Montserrat', 'Bytesized', sans-serif;
  font-size: 1.13em;
  font-weight: 800;
  letter-spacing: 0.04em;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #ff2222 0%, #1a1a1a 100%);
  color: #fff;
  box-shadow:
    0 2px 18px 0 rgba(255, 34, 34, 0.22),
    0 1.5px 8px 0 #1a1a1a;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.13s cubic-bezier(0.4, 0, 0.2, 1);
}

.sign-up-button:hover,
.sign-up-button:focus-visible {
  background: linear-gradient(90deg, #ff2222 0%, #ff4444 100%);
  box-shadow:
    0 4px 24px 0 rgba(255, 34, 34, 0.33),
    0 2px 12px 0 #1a1a1a;
  color: #fff;
  transform: scale(1.07) rotate(-2deg);
  outline: none;
}

.sign-up-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 6px #ff2222);
  margin-right: 0.2em;
}

.sign-up-button-effect {
  display: none;
}
</style>
