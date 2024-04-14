<template>
  <div class="articles">
    <h1 class="articles__header">Articles</h1>

    <ul class="articles__list">
      <li v-for="p in posts">
        <PostCard :post="p" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch(
  "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts"
);
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "not found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped>
.articles {
  @include mainBlock;

  .articles__header {
    @include mainHeader;
  }

  .articles__list {
    margin: 60px 0 70px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    gap: 40px 32px;
  }
}
</style>
