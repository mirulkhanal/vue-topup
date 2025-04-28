<template>
  <section
    class="newsletter-section"
    v-motion
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
</template>

<script setup>
// No data needed for this component
</script>

<style scoped>
@import '../assets/styles/components.css';
</style>