import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // fix loading error in feb 2022: https://github.com/nuxt/framework/issues/3393#issuecomment-1052405158
  components: {
    global: true,
    dirs: ['~/components']
  }
})
