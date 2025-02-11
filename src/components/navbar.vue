<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <RouterLink class="btn" to="/">Hem</RouterLink>
        <RouterLink class="btn" to="/about">Om</RouterLink>
        <RouterLink class="btn" to="/contact">Kontakt</RouterLink>
        <RouterLink class="btn" to="/products">Produkter</RouterLink>
        <component :is="currentView" />
    </nav>
</template>