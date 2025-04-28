<template>
  <div class="app">
    <!-- Navigation Bar -->
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
            :to="getRouteForMenuItem(item)"
            class="navbar-item"
          >
            {{ item }}
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

    <!-- Hero Section with Carousel -->
    <section class="hero-section">
      <div class="container">
        <Transition name="fade" mode="out-in">
          <div class="hero-slide" :key="currentSlide">
            <div class="hero-content">
              <h1>{{ slides[currentSlide].title }}</h1>
              <p>{{ slides[currentSlide].description }}</p>
              <button class="cta-button">{{ slides[currentSlide].cta }}</button>
            </div>
            <div class="hero-image">
              <img :src="slides[currentSlide].image" :alt="slides[currentSlide].title" />
            </div>
          </div>
        </Transition>
        <div class="carousel-indicators">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="currentSlide = index"
            :class="{ active: currentSlide === index }"
            class="indicator-dot"
          ></button>
        </div>
      </div>
    </section>

    <!-- Featured Categories Section (Non-linear layout) -->
    <section class="categories-section">
      <div class="container">
        <h2 class="section-title" :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
          Featured Categories
        </h2>
        <div class="categories-grid">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="category-card"
            :class="category.size"
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="index * 100"
          >
            <div class="category-content">
              <h3>{{ category.name }}</h3>
              <p>{{ category.description }}</p>
            </div>
            <div class="category-image">
              <img :src="category.image" :alt="category.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Games Section (Staggered Grid) -->
    <section class="popular-section">
      <div class="container">
        <h2 class="section-title" :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
          Popular Games
        </h2>
        <div class="games-grid">
          <div
            v-for="(game, index) in popularGames"
            :key="index"
            class="game-card"
            :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="index * 100"
            @mouseenter="hoveredGame = index"
            @mouseleave="hoveredGame = null"
          >
            <div class="game-image">
              <img :src="game.image" :alt="game.title" />
              <div class="game-overlay" :class="{ active: hoveredGame === index }">
                <button class="buy-button">Buy Now</button>
              </div>
            </div>
            <div class="game-info">
              <h3>{{ game.title }}</h3>
              <div class="game-price">{{ game.price }}</div>
            </div>
          </div>
        </div>
        <div class="view-all">
          <button class="view-all-button">View All Games</button>
        </div>
      </div>
    </section>

    <!-- Features Section (Zigzag Layout) -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title" :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
          Why Choose GameVault?
        </h2>
        <div class="features-container">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-item"
            :class="{ reverse: index % 2 !== 0 }"
            :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }"
            :visible="{ opacity: 1, x: 0 }"
          >
            <div class="feature-icon">
              <component :is="feature.icon" />
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section
      class="newsletter-section"
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible="{ opacity: 1, scale: 1 }"
    >
      <div class="container">
        <div class="newsletter-container">
          <div class="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive deals and gaming news</p>
          </div>
          <div class="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button class="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
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
            <p>The fastest & easiest way to buy game credits</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h3>For Gamers</h3>
              <a href="#">How to Buy</a>
              <a href="#">Payment Methods</a>
              <a href="#">FAQs</a>
              <a href="#">Contact Support</a>
            </div>
            <div class="footer-column">
              <h3>For Publishers</h3>
              <a href="#">List your title</a>
              <a href="#">Become an Affiliate</a>
              <a href="#">Developer Portal</a>
              <a href="#">Analytics</a>
            </div>
            <div class="footer-column">
              <h3>Legal</h3>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Copyright</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 GameVault. All rights reserved.</p>
          <div class="social-links">
            <a href="#" class="social-link">
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
                class="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" class="social-link">
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
                class="lucide lucide-twitter"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
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
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" class="social-link">
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
                class="lucide lucide-youtube"
              >
                <path
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Navigation menu items
const menuItems = ref(['Home', 'Shop', 'Cart', 'Checkout', 'Gift Cards', 'Support'])

// Function to get route path for menu items
const getRouteForMenuItem = (item) => {
  switch(item) {
    case 'Home': return '/';
    case 'Shop': return '/shop';
    case 'Cart': return '/cart';
    case 'Checkout': return '/checkout';
    case 'Gift Cards': return '/gift-cards';
    case 'Support': return '/support';
    default: return '/';
  }
}

// Scroll state for navbar
const scrolled = ref(false)

// Hero carousel
const slides = ref([
  {
    title: 'Get More Value on Daily Boosters',
    description: 'Exclusive deals on game credits and in-game items',
    cta: 'Shop Now',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'New Releases Available',
    description: 'Be the first to play the hottest new titles',
    cta: 'Explore Games',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Digital Gift Cards',
    description: 'The perfect gift for gamers - instant delivery',
    cta: 'Buy Gift Cards',
    image: '/placeholder.svg?height=400&width=600',
  },
])
const currentSlide = ref(0)

// Categories with different sizes for visual interest
const categories = ref([
  {
    name: 'Mobile Games',
    description: 'Top-up for your favorite mobile games',
    image: '/placeholder.svg?height=300&width=300',
    size: 'large',
  },
  {
    name: 'PC Games',
    description: 'Steam, Epic, and more',
    image: '/placeholder.svg?height=200&width=200',
    size: 'medium',
  },
  {
    name: 'Console',
    description: 'PlayStation, Xbox, Nintendo',
    image: '/placeholder.svg?height=200&width=200',
    size: 'medium',
  },
  {
    name: 'Gift Cards',
    description: 'Digital gift cards for all platforms',
    image: '/placeholder.svg?height=150&width=150',
    size: 'small',
  },
  {
    name: 'Subscriptions',
    description: 'Game passes and memberships',
    image: '/placeholder.svg?height=150&width=150',
    size: 'small',
  },
])

// Popular games
const popularGames = ref([
  {
    title: 'Battle Legends',
    price: '$19.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Racing Evolution',
    price: '$24.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Tactical Heroes',
    price: '$14.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Space Explorer',
    price: '$29.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Fantasy Quest',
    price: '$19.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Zombie Survival',
    price: '$15.99',
    image: '/placeholder.svg?height=200&width=150',
  },
])
const hoveredGame = ref(null)

// Features with icons
const features = ref([
  {
    title: 'Fast and Secure',
    description: 'It takes just a few seconds to complete a purchase on GameVault.',
    icon: 'div',
  },
  {
    title: 'Instant Delivery',
    description:
      'When you top-up on GameVault, your purchase is delivered directly to your game account in seconds.',
    icon: 'div',
  },
  {
    title: 'Multiple Payment Methods',
    description: 'We have partnered with the most popular providers for your convenience.',
    icon: 'div',
  },
  {
    title: '24/7 Customer Support',
    description: 'Our friendly customer support team is always available to assist you.',
    icon: 'div',
  },
])

// Handle scroll events for navbar
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Automatic carousel
let carouselInterval = null
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startCarousel()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearInterval(carouselInterval)
})
</script>

<style>
/* Base styles */
:root {
  --primary: #9333ea;
  --primary-dark: #7e22ce;
  --secondary: #f0abfc;
  --accent: #f472b6;
  --background: #ffffff;
  --foreground: #27272a;
  --muted: #f4f4f5;
  --muted-foreground: #71717a;
  --card: #ffffff;
  --card-foreground: #27272a;
  --border: #e4e4e7;
  --input: #e4e4e7;
  --ring: #9333ea;
  --radius: 0.5rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: var(--foreground);
  background-color: var(--background);
  line-height: 1.5;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Navbar styles */
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

/* Hero section */
.hero-section {
  background: linear-gradient(135deg, #2e1065 0%, #4c1d95 100%);
  color: white;
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero-slide {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .hero-slide {
    flex-direction: row;
    align-items: center;
  }
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: var(--radius);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  transition: background-color 0.2s ease;
}

.indicator-dot.active {
  background-color: white;
}

/* Categories section */
.categories-section {
  padding: 5rem 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: 0.25rem;
  background-color: var(--primary);
  border-radius: 1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(150px, auto);
  }
}

.category-card {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background-color: var(--card);
  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@media (min-width: 1024px) {
  .category-card.large {
    grid-column: span 2;
    grid-row: span 2;
  }

  .category-card.medium {
    grid-column: span 1;
    grid-row: span 2;
  }

  .category-card.small {
    grid-column: span 1;
    grid-row: span 1;
  }
}

.category-content {
  padding: 1.5rem;
  z-index: 10;
}

.category-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.category-content p {
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

.category-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Popular games section */
.popular-section {
  padding: 5rem 0;
  background-color: var(--muted);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.game-card {
  background-color: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-overlay.active {
  opacity: 1;
}

.buy-button {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-weight: 500;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.game-overlay.active .buy-button {
  transform: translateY(0);
}

.game-info {
  padding: 1rem;
}

.game-info h3 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.game-price {
  font-weight: 700;
  color: var(--primary);
}

.view-all {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.view-all-button {
  background-color: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: var(--radius);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.view-all-button:hover {
  background-color: var(--primary);
  color: white;
}

/* Features section */
.features-section {
  padding: 5rem 0;
}

.features-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .feature-item {
    flex-direction: row;
    align-items: center;
  }

  .feature-item.reverse {
    flex-direction: row-reverse;
  }
}

.feature-icon {
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.feature-content {
  flex: 1;
}

.feature-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-content p {
  color: var(--muted-foreground);
}

/* Newsletter section */
.newsletter-section {
  padding: 5rem 0;
  background-color: var(--muted);
}

.newsletter-container {
  background-color: var(--primary);
  border-radius: var(--radius);
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .newsletter-container {
    flex-direction: row;
    align-items: center;
  }
}

.newsletter-content {
  flex: 1;
}

.newsletter-content h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

@media (min-width: 768px) {
  .newsletter-form {
    flex-direction: row;
    width: 50%;
  }
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: var(--radius);
  font-size: 1rem;
}

.subscribe-button {
  background-color: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.subscribe-button:hover {
  background-color: #e11d48;
}

/* Footer */
.footer {
  background-color: #1a103d;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-brand p {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .footer-links {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-column h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.footer-column a {
  display: block;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.footer-column a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
