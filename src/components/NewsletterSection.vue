<template>
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
</template>

<script setup>
// No data needed for this component
</script>

<style scoped>
@import '../assets/styles/components.css';

.newsletter-section {
  margin-top: 60px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-container {
  background: #fff;
  border-radius: 24px;
  box-shadow:
    0 8px 32px rgba(44, 62, 80, 0.08),
    0 1.5px 6px rgba(44, 62, 80, 0.04);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.newsletter-content h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #ff2222;
  margin-bottom: 0.5rem;
}

.newsletter-content p {
  font-size: 1.1rem;
  color: #222;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 420px;
}

.newsletter-form input[type='email'] {
  flex: 1;
  padding: 0.8em 1.2em;
  border-radius: 999px;
  border: 1.5px solid #eee;
  font-size: 1.1em;
  outline: none;
  transition: border 0.2s;
}

.newsletter-form input[type='email']:focus {
  border: 1.5px solid #ff2222;
}

.subscribe-button {
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

.subscribe-button:hover,
.subscribe-button:focus-visible {
  background: linear-gradient(90deg, #ff2222 0%, #ff4444 100%);
  box-shadow:
    0 4px 24px 0 rgba(255, 34, 34, 0.33),
    0 2px 12px 0 #1a1a1a;
  color: #fff;
  transform: scale(1.07) rotate(-2deg);
  outline: none;
}

@media (max-width: 768px) {
  .newsletter-section {
    margin-top: 40px;
    width: 98%;
  }
  .newsletter-container {
    padding: 1.5rem 0.7rem;
  }
  .newsletter-form {
    flex-direction: column;
    gap: 0.7rem;
    max-width: 100%;
  }
}
</style>
