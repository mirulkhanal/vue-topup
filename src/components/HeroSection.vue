<template>
  <section class="hero-container">
    <div class="hero-carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
          <img :src="slide.image" :alt="slide.title" class="slide-image" />
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <button @click="prevSlide" class="control-arrow prev" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button @click="nextSlide" class="control-arrow next" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Sample slides data - replace with your actual data
const slides = ref([
  {
    title: 'Welcome to KraKen',
    description: 'Your One Stop Shop  for In-App Purchases',
    image: 'src/assets/hero/hero.jpg',
  },
  {
    title: 'Make your pick',
    description: 'Instantly make In-App Purchases for all your games',
    image: 'src/assets/hero/mlbb.webp',
  },
  {
    title: 'Enjoy Gaming 24/7 x 365',
    description:
      'Fully automated purchase flow so you dont miss out on thos important in-game events',
    image: 'src/assets/hero/pubg.jpg',
  },
])

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

// Set up autoplay
onMounted(() => {
  autoplayInterval.value = setInterval(nextSlide, 5000)
})

// Clean up on component unmount
onBeforeUnmount(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
})
</script>

<style scoped>
.hero-container {
  width: 90%;
  /* border: 5px solid red; */
  margin: 0 auto;
  margin-top: 60px; /* Increased from 40px to 80px to clear the navbar */
  position: relative;
  overflow: hidden;
  height: 60vh; /* Adjust height as needed */
}

.hero-carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px; /* Increased from 12px to 24px for more rounding */
}

.carousel-inner {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  border-radius: 12px;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 12px;
}

.slide-content h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.slide-content p {
  font-size: 1.2rem;
}

.carousel-controls {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.control-arrow {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
}

.control-arrow:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.control-arrow svg {
  width: 24px;
  height: 24px;
}

/* Animation for slide content */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-content h2,
.slide-content p {
  animation: fadeIn 0.8s ease-out forwards;
}

.slide-content p {
  animation-delay: 0.2s;
}
</style>
