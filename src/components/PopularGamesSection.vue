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
    title: "Baldur's Gate 3",
    price: '$15.99',
    image: '/placeholder.svg?height=200&width=150',
  },
])
const hoveredGame = ref(null)
</script>

<style scoped>
@import '../assets/styles/components.css';

.popular-section {
  margin-top: 60px; /* Space below navbar, matches hero/categories */
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.game-card {
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(44, 62, 80, 0.08),
    0 1.5px 6px rgba(44, 62, 80, 0.04);
  overflow: hidden;
  background: #fff;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  display: flex;
  flex-direction: column;
}

.game-card:hover {
  box-shadow:
    0 12px 40px rgba(44, 62, 80, 0.12),
    0 2px 8px rgba(44, 62, 80, 0.06);
  transform: translateY(-4px) scale(1.03);
}

.game-image img {
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.game-info {
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.game-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.game-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ff2222;
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s;
  pointer-events: none;
}

.game-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.buy-button {
  padding: 0.7em 2em;
  font-size: 1.1em;
  font-weight: 800;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #ff2222 0%, #1a1a1a 100%);
  color: #fff;
  box-shadow:
    0 2px 18px 0 rgba(255, 34, 34, 0.22),
    0 1.5px 8px 0 #1a1a1a;
  cursor: pointer;
  transition:
    background 0.18s,
    box-shadow 0.18s,
    transform 0.13s;
}

.buy-button:hover,
.buy-button:focus-visible {
  background: linear-gradient(90deg, #ff2222 0%, #ff4444 100%);
  box-shadow:
    0 4px 24px 0 rgba(255, 34, 34, 0.33),
    0 2px 12px 0 #1a1a1a;
  color: #fff;
  transform: scale(1.07) rotate(-2deg);
  outline: none;
}

.view-all {
  margin-top: 2.5rem;
  text-align: center;
}

.view-all-button {
  padding: 0.7em 2.2em;
  font-size: 1.1em;
  font-weight: 800;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #ff2222 0%, #1a1a1a 100%);
  color: #fff;
  box-shadow:
    0 2px 18px 0 rgba(255, 34, 34, 0.22),
    0 1.5px 8px 0 #1a1a1a;
  cursor: pointer;
  transition:
    background 0.18s,
    box-shadow 0.18s,
    transform 0.13s;
}

.view-all-button:hover,
.view-all-button:focus-visible {
  background: linear-gradient(90deg, #ff2222 0%, #ff4444 100%);
  box-shadow:
    0 4px 24px 0 rgba(255, 34, 34, 0.33),
    0 2px 12px 0 #1a1a1a;
  color: #fff;
  transform: scale(1.07) rotate(-2deg);
  outline: none;
}

@media (max-width: 768px) {
  .popular-section {
    margin-top: 40px;
    width: 98%;
  }
  .game-image img {
    height: 120px;
  }
}
</style>
