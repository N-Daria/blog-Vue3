// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/var.scss" as *;',
        },
      },
    },
  },

  css: ["~/assets/styles/main.scss"],

  modules: ["@pinia/nuxt"],
});
