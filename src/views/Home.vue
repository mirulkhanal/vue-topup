<script setup>
import HeroSection from '@/components/HeroSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import PopularGamesSection from '@/components/PopularGamesSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import SectionSeparator from '@/components/SectionSeparator.vue'
</script>

<template>
  <div class="app">
    <HeroSection />
    <SectionSeparator />
    <CategoriesSection />
    <SectionSeparator />
    <PopularGamesSection />
    <SectionSeparator />
    <FeaturesSection />
    <SectionSeparator />
    <NewsletterSection />
    <FooterSection />
  </div>
</template>
