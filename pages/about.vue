<template>
  <div class="about">
    <h1 class="about__message">about</h1>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .about__message {
    @include mainHeader;
    display: block;
    text-align: center;
    text-transform: capitalize;
    margin: 120px auto;
  }
}
</style>
