<template>
  <section class="categories-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        Featured Categories
      </h2>
      <div class="categories-grid">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="category-card"
          :class="category.size"
          v-motion
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
</template>

<script setup>
import { ref } from 'vue'

// Categories with different sizes for non-linear layout
const categories = ref([
  {
    name: 'Action Games',
    description: 'Fast-paced games with emphasis on challenges',
    image: '/placeholder.svg?height=300&width=400',
    size: 'large',
  },
  {
    name: 'RPG',
    description: 'Immersive role-playing adventures',
    image: '/placeholder.svg?height=200&width=300',
    size: 'medium',
  },
  {
    name: 'Strategy',
    description: 'Test your tactical skills',
    image: '/placeholder.svg?height=200&width=300',
    size: 'medium',
  },
  {
    name: 'Sports',
    description: 'Competitive sports simulations',
    image: '/placeholder.svg?height=150&width=200',
    size: 'small',
  },
  {
    name: 'Casual',
    description: 'Easy to play, fun for everyone',
    image: '/placeholder.svg?height=150&width=200',
    size: 'small',
  },
])
</script>

<style scoped>
@import '../assets/styles/components.css';

.categories-section {
  margin-top: 60px; /* Space below navbar, matches hero section */
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.category-card {
  border-radius: 20px; /* More pronounced rounding */
  box-shadow:
    0 8px 32px rgba(44, 62, 80, 0.08),
    0 1.5px 6px rgba(44, 62, 80, 0.04);
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s;
}

.category-card:hover {
  box-shadow:
    0 12px 40px rgba(44, 62, 80, 0.12),
    0 2px 8px rgba(44, 62, 80, 0.06);
}

.category-image img {
  border-radius: 16px;
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center;
  display: block;
}

@media (max-width: 768px) {
  .categories-section {
    margin-top: 40px;
    width: 98%;
  }
  .category-image img {
    height: 120px;
  }
}
</style>
