<template>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

// Automatic carousel
let carouselInterval = null
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
}

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  clearInterval(carouselInterval)
})
</script>

<style scoped>
@import '../assets/styles/components.css';
</style>