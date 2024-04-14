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
    font-size: 112px;
    line-height: 100%;
    font-weight: 400;
    width: 100%;
    text-align: center;
    display: block;
    margin: 100px auto;
  }
}
</style>
