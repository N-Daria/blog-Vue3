<template>
  <div>
    <header class="header">
      <NuxtLink class="logo" to="/">
        <img src="../assets/img/Qtim.svg" alt="header__logo" />
      </NuxtLink>

      <nav>
        <ul class="header__nav">
          <li><NuxtLink class="header__link" to="/works">Works</NuxtLink></li>
          <li><NuxtLink class="header__link" to="/about">About</NuxtLink></li>
        </ul>
      </nav>

      <div class="header__buttons">
        <button class="header__language" @click="changeLanguage">
          <img src="../assets/img/unitedKingdom.svg" alt="" />
        </button>
        <button class="header__popup-button" @click="openPopup">
          Let’s work
        </button>
      </div>
    </header>

    <div>
      <slot />
    </div>

    <div>
      <footer>footer</footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const changeLanguage = () => {};
const openPopup = () => {};
</script>

<style scoped lang="scss">
.header {
  margin: 0 auto;
  padding: 35px 40px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  width: 100%;
  max-width: 84px;
  display: block;
  max-height: 25px;
}

nav {
  flex-basis: 150px;
  margin: 0 10%;
  flex-grow: 2;
}

.header__nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.router-link-exact-active {
  text-decoration: underline;
}

.header__nav li {
  margin-right: 10%;
}

.header__nav li:last-child {
  margin-right: 0;
}

.header__link {
  font-size: 20px;
  line-height: 100%;
}

.header__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-basis: 210px;
}

.header__language {
  width: 52px;
  height: 52px;
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__language img {
  width: 24px;
  height: 24px;
}

.header__popup-button {
  border-radius: 999px;
  padding: 16px 32px;
  color: white;
  font-size: 20px;
  line-height: 100%;
  background-color: $black;
}
</style>
