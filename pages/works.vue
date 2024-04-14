<template>
  <div class="works">
    <h1 class="works__message">works</h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.works {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .works__message {
    @include mainHeader;
    display: block;
    text-align: center;
    text-transform: capitalize;
    margin: 120px auto;
  }
}
</style>
