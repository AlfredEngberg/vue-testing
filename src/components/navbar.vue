<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <component :is="currentView" />
    </nav>
</template>