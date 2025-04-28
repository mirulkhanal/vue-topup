<template>
  <section class="popular-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        Popular Games
      </h2>
      <div class="games-grid">
        <div
          v-for="(game, index) in popularGames"
          :key="index"
          class="game-card"
          v-motion
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
</template>

<script setup>
import { ref } from 'vue'

// Popular games for the grid
const popularGames = ref([
  {
    title: 'Cyberpunk 2077',
    price: '$59.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Elden Ring',
    price: '$49.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'God of War Ragnarök',
    price: '$69.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Horizon Forbidden West',
    price: '$39.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Starfield',
    price: '$59.99',
    image: '/placeholder.svg?height=200&width=150',
  },
  {
    title: 'Baldur\'s Gate 3',
    price: '$15.99',
    image: '/placeholder.svg?height=200&width=150',
  },
])
const hoveredGame = ref(null)
</script>

<style scoped>
@import '../assets/styles/components.css';
</style>