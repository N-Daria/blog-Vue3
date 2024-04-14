<template>
  <div class="card">
    <NuxtLink :to="`/articles/${post.id}`">
      <img class="card__image" :src="`${post.image}`" :alt="`${post.title}`" />

      <p class="card__description">{{ post.description }}</p>

      <p class="card__link">Read more</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { post } = defineProps(["post"]);
</script>

<style lang="scss" scoped>
.card {
  max-width: 280px;
  overflow: hidden;
  transition: transform 0.4s ease;

  .card__image {
    background-color: $purple;
    cursor: pointer;
    height: 280px;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    display: block;
  }

  .card__description {
    font-size: 20px;
    line-height: 120%;
    margin: 24px 0 0;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__link {
    visibility: hidden;
    color: $purple;
    margin: 12px 0 0;
    font-size: 20px;
    line-height: 120%;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-20px);

    .card__link {
      visibility: visible;
    }
  }
}
</style>
