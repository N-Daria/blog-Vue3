<template>
  <div class="article">
    <h1 class="article__header">{{ post.title }}</h1>

    <img class="article__image" :src="`${post.image}`" :alt="`${post.title}`" />

    <p class="article__about">About</p>

    <p class="article__description">{{ post.description }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`;
const { data: post } = await useFetch(uri, { key: id });

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "not found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped>
.article {
  @include mainBlock;
  margin: 120px auto 80px;

  .article__header {
    @include mainHeader;
  }

  .article__image {
    display: block;
    margin: 70px auto 80px;
    max-height: 700px;
    max-width: 100%;
  }

  .article__about {
    font-size: 16px;
    line-height: 100%;
    margin: 0 0 32px;
  }

  .article__description {
    font-size: 36px;
    line-height: 124%;
    margin: 0;
  }
}
</style>
