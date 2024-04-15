<template>
  <div class="articles">
    <h1 class="articles__header">Articles</h1>

    <ul class="articles__list">
      <li v-for="p in currentPosts">
        <PostCard :post="p" />
      </li>
    </ul>

    <Pagination />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { usePostsStore } from "~/store/posts";

const store = usePostsStore();
const { fetchPosts, showCurrentPosts } = store;
const { posts, currentPosts, totalPages } = storeToRefs(store);

await fetchPosts();
</script>

<style lang="scss" scoped>
.articles {
  @include mainBlock;

  .articles__header {
    @include mainHeader;
  }

  .articles__list {
    margin: 60px 0 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: space-between;
    align-content: space-between;
    width: 100%;
    gap: 40px 32px;
  }
}
</style>
