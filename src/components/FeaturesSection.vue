<template>
  <section class="features-section">
    <div class="container">
      <h2
        class="section-title"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
      >
        Why Choose GameVault?
      </h2>
      <div class="features-container">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-item"
          :class="{ reverse: index % 2 !== 0 }"
          v-motion
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
</template>

<script setup>
import { ref } from 'vue'

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
</script>

<style scoped>
@import '../assets/styles/components.css';

.features-section {
  margin-top: 60px; /* Space below navbar, matches other sections */
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #fff;
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(44, 62, 80, 0.08),
    0 1.5px 6px rgba(44, 62, 80, 0.04);
  padding: 2rem 1.5rem;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  position: relative;
  overflow: hidden;
}

.feature-item:hover {
  box-shadow:
    0 12px 40px rgba(44, 62, 80, 0.12),
    0 2px 8px rgba(44, 62, 80, 0.06);
  transform: translateY(-4px) scale(1.03);
}

.feature-icon {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff2222 0%, #1a1a1a 100%);
  border-radius: 16px;
  color: #fff;
  font-size: 2.2rem;
  box-shadow: 0 2px 12px 0 rgba(255, 34, 34, 0.13);
}

.feature-content h3 {
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #ff2222;
}

.feature-content p {
  font-size: 1.1rem;
  color: #222;
}

@media (max-width: 768px) {
  .features-section {
    margin-top: 40px;
    width: 98%;
  }
  .features-container {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  .feature-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 1rem;
  }
  .feature-icon {
    margin-bottom: 0.7rem;
  }
}
</style>
