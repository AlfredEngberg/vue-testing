<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
</script>

<template>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <component :is="currentView" />
</template>