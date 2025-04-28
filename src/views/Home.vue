<script setup>
import HeroSection from '@/components/HeroSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import PopularGamesSection from '@/components/PopularGamesSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="app">
    <HeroSection />
    <CategoriesSection />
    <PopularGamesSection />
    <FeaturesSection />
    <NewsletterSection />
    <FooterSection />
  </div>
</template>

<style>
/* Base styles */
:root {
  --primary: #9333ea;
  --primary-dark: #7e22ce;
  --secondary: #f0abfc;
  --accent: #f472b6;
  --background: #ffffff;
  --foreground: #27272a;
  --muted: #f4f4f5;
  --muted-foreground: #71717a;
  --card: #ffffff;
  --card-foreground: #27272a;
  --border: #e4e4e7;
  --input: #e4e4e7;
  --ring: #9333ea;
  --radius: 0.5rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  color: var(--foreground);
  background-color: var(--background);
  line-height: 1.5;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
