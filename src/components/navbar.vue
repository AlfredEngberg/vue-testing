<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink class="btn" to="/about">About</RouterLink>
        <RouterLink class="btn" to="/contact">Contact</RouterLink>
        <RouterLink class="btn" to="/products">Products</RouterLink>
        <component :is="currentView" />
    </nav>
</template>