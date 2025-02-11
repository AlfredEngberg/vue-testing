<template>
    <div class="container">
        <h1>Hej och välkommen Products.vue</h1>

        <article class="products-flow">
            <div class="product-card">
                <img src="https://picsum.photos/300/300" alt="produktbild">
                <h2>Produkt 1</h2>
                <p>Detta är en produkt</p>
                <router-link to="#" class="btn">Läs mer</router-link>
            </div>
            <div class="product-card">
                <img src="https://picsum.photos/300/300" alt="produktbild">
                <h2>Produkt 2</h2>
                <p>Detta är en produkt</p>
                <router-link to="#" class="btn">Läs mer</router-link>
            </div>
            <div class="product-card">
                <img src="https://picsum.photos/300/300" alt="produktbild">
                <h2>Produkt 3</h2>
                <p>Detta är en produkt</p>
                <router-link to="#" class="btn">Läs mer</router-link>
            </div>

        </article>

    </div>
</template>