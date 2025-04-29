<template>
  <div class="shop">
    <h1 class="shop-title">Shop Games</h1>
    <div class="shop-controls">
      <input v-model="search" type="text" placeholder="Search games..." class="shop-search" />
      <select v-model="selectedGenre" class="shop-filter">
        <option value="">All Genres</option>
        <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
      </select>
    </div>
    <div class="games-grid">
      <div
        v-for="game in paginatedGames"
        :key="game.id"
        class="game-card"
        @click="goToGame(game.id)"
      >
        <div class="game-image">
          <img :src="game.image" :alt="game.title" />
        </div>
        <div class="game-info">
          <h3>{{ game.title }}</h3>
          <p>{{ game.genre }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Prev</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')
const selectedGenre = ref('')
const page = ref(1)
const pageSize = 6

// Only include games from homepage's PopularGamesSection.vue
const games = [
  {
    id: 1,
    title: 'Mobile Legends: Bang Bang',
    genre: 'MOBA',
    image: '/src/assets/games/mlbb-g.jpeg',
  },
  {
    id: 2,
    title: 'PUBG Mobile',
    genre: 'Battle Royale',
    image: '/src/assets/games/pubg-g.jpeg',
  },
  {
    id: 3,
    title: 'Garena Free Fire',
    genre: 'Battle Royale',
    image: '/src/assets/games/free_fire-g.jpeg',
  },
  {
    id: 4,
    title: 'Candy Crush',
    genre: 'Puzzle',
    image: '/src/assets/games/candy_crush-g.jpeg',
  },
  {
    id: 5,
    title: 'Honor of Kings',
    genre: 'MOBA',
    image: '/src/assets/games/hok-g.jpeg',
  },
]

const genres = [...new Set(games.map((g) => g.genre))]

const filteredGames = computed(() => {
  let filtered = games
  if (search.value) {
    filtered = filtered.filter((game) =>
      game.title.toLowerCase().includes(search.value.toLowerCase()),
    )
  }
  if (selectedGenre.value) {
    filtered = filtered.filter((game) => game.genre === selectedGenre.value)
  }
  return filtered
})

const totalPages = computed(() => Math.ceil(filteredGames.value.length / pageSize))

const paginatedGames = computed(() => {
  const start = (page.value - 1) * pageSize
  return filteredGames.value.slice(start, start + pageSize)
})

function goToGame(id) {
  router.push(`/game/${id}`)
}

function prevPage() {
  if (page.value > 1) page.value--
}
function nextPage() {
  if (page.value < totalPages.value) page.value++
}
</script>

<style scoped>
.shop {
  padding: 2.5rem 0 4rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInShop 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.shop-title {
  padding: 1.2em 0 1rem 0;
  margin: 0;
  color: white;
  font-size: 3em;
}

.shop-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
}

.shop-search,
.shop-filter {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #333;
  background: #181818;
  color: #fff;
  font-size: 1rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  animation: fadeInGrid 1.1s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 640px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.game-card {
  background: #181818;
  border-radius: 1.25rem;
  box-shadow:
    0 8px 32px rgba(44, 62, 80, 0.18),
    0 1.5px 6px rgba(44, 62, 80, 0.04);
  transition:
    box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-card:hover {
  box-shadow:
    0 16px 48px rgba(255, 34, 34, 0.28),
    0 4px 16px rgba(44, 62, 80, 0.18);
  transform: translateY(-6px) scale(1.025) rotate(-1deg);
  z-index: 2;
}

.game-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 2px solid #ff2222;
}

.game-info {
  padding: 1.2rem 1rem 1.5rem 1rem;
  width: 100%;
  text-align: center;
}

.game-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.game-info p {
  color: #ff2222;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  opacity: 0.85;
}

.pagination {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.pagination button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background: #ff2222;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.pagination button:disabled {
  background: #333;
  cursor: not-allowed;
}
</style>
