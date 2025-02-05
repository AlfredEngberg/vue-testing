<script setup>
import { ref, computed } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import navbar from './components/navbar.vue'
import footer from './components/footer.vue'

const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <navbar />
  <component :is="currentView" />
  <footer />
</template>