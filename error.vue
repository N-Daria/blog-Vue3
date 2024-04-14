<template>
  <div class="error">
    <h1 class="error__message">Something went wrong</h1>

    <button class="error__button" @click="handleClearError">Go Home...</button>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);

const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped lang="scss">
.error {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .error__message {
    @include mainHeader;
    display: block;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    margin: 120px auto;
  }

  .error__button {
    border-radius: 999px;
    padding: 30px 50px;
    color: white;
    font-size: 30px;
    line-height: 60%;
    background-color: $black;
  }
}
</style>
