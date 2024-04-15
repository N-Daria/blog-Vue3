<template>
  <ul class="pagination">
    <li>
      <button
        class="pagination__button pagination__arrow pagination__arrow_back"
        v-if="currentPage > 1"
        @click="step(-1)"
      ></button>
    </li>

    <li v-for="page in currentButtons">
      <button
        type="button"
        :class="
          page === currentPage
            ? 'pagination__button_active pagination__button'
            : 'pagination__button'
        "
        @click="changeCurrentPosts(page)"
      >
        {{ page }}
      </button>
    </li>

    <li>
      <button
        class="pagination__button pagination__arrow"
        v-if="currentPage < totalPages"
        @click="step(+1)"
      ></button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePostsStore } from "~/store/posts";

const store = usePostsStore();
const { changeCurrentPosts, step } = store;
const { totalPages, currentPage, currentButtons } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 8px;
  margin: 50px 0 140px;

  .pagination__button {
    border-radius: 12px;
    padding: 11px 17px;
    width: 44px;
    height: 44px;
    background-color: $lightGray;
    font-weight: 400;
    font-size: 16px;
    line-height: 50%;
    text-align: center;

    &:hover {
      background-color: $darkGray;
      opacity: 1;
    }
  }

  .pagination__button_active {
    background-color: $black;
    color: $white;
    opacity: 1;

    &:hover {
      background-color: $black;
    }
  }

  .pagination__arrow {
    background-image: url(../assets/img/icons.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
    outline: 1px solid $darkGray;
  }

  .pagination__arrow_back {
    transform: rotate(180deg);
  }
}
</style>
