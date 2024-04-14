<template>
  <div class="body">
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

    <div class="main">
      <slot />
    </div>

    <footer class="footer">
      <div class="footer__content">
        <div class="footer__block">
          <p>Is there a project?</p>
          <p class="footer__header">Let’s work together</p>
        </div>

        <ul class="footer__block footer__block_info">
          <li>
            <p class="footer__title">For all questions</p>
            <p><a href="tel:+79202780068">+7 (920) 278—00—68</a></p>
            <p><a href="mailto:qtim@agency.com">qtim@agency.com</a></p>
          </li>

          <li>
            <p class="footer__title">Office in Russia</p>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
            <a href="#" target="_blank" class="footer__social"></a>
          </li>

          <li>
            <p class="footer__title">Office in Dubai</p>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
            <a href="#" target="_blank" class="footer__social"></a>
          </li>
        </ul>

        <ul class="footer__links">
          <li><a href="#" target="_blank" class="footer__link">Facebook</a></li>
          <li>
            <a href="#" target="_blank" class="footer__link">Instagram</a>
          </li>
          <li><a href="#" target="_blank" class="footer__link">Telegram</a></li>

          <li class="footer__link-block"><p class="footer__go">Go</p></li>

          <li><a href="#" target="_blank" class="footer__link">Behance</a></li>
          <li><a href="#" target="_blank" class="footer__link">Linkedn</a></li>
          <li>
            <a href="#" target="_blank" class="footer__link">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const changeLanguage = () => {};
const openPopup = () => {};
</script>

<style scoped lang="scss">
.body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.header {
  margin: 0 auto;
  padding: 35px 40px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
}

.footer {
  background-color: $purple;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  p {
    margin: 0;
  }

  .footer__content {
    max-width: 1277px;
    width: 100%;
    margin: 0 auto;
    padding: 140px 30px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
  }

  .footer__link-block {
    margin: 0 20%;
  }

  .footer__go {
    color: $lightGray;
    background-color: $black;
    width: 358px;
    height: 358px;
    border-radius: 100%;
    font-size: 32px;
    text-align: center;
    line-height: 290px;

    position: absolute;
    bottom: -179px;
    left: 50%;
    transform: translateX(-50%);
  }

  .footer__block {
    max-width: 50%;
  }

  .footer__block_info {
    margin: 62px auto 273px;

    li {
      margin-bottom: 36px;
      max-width: 152px;
    }
  }

  .footer__header {
    font-weight: 400;
    font-size: 112px;
    line-height: 100%;
    text-decoration: underline 2px;
    margin-top: 56px;
  }

  .footer__title {
    margin-bottom: 12px;
  }

  .footer__social {
    background-image: url("../assets/img/button location.svg");
    background-repeat: no-repeat;
    border-radius: 999px;
    padding: 8px 16px;
    width: 32px;
    height: 32px;
    display: block;
    margin-top: 8px;
  }

  .footer__links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 0;
  }

  .footer__link::after {
    content: "";
    width: 100%;
    height: 0.5px;
    display: block;
    background-color: $black;
  }
}
</style>
