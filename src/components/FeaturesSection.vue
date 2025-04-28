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
</style>