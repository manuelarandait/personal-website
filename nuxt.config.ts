export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    '@nuxt/ui'
  ],
  components: {
    dirs: ['components']
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
