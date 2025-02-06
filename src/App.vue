<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>