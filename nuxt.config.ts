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
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Manuel Aranda — Software Engineer · Analista Full-Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Ingeniero de software con enfoque en análisis y diseño de soluciones. Diseño y desarrollo de aplicaciones web, APIs y sistemas escalables. De requisitos a producción. Disponible para proyectos freelance.'
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Manuel Aranda — Software Engineer · Analista Full-Stack' },
        {
          property: 'og:description',
          content: 'Ingeniero de software con enfoque en análisis y diseño de soluciones. Aplicaciones web, APIs y sistemas escalables. Disponible para proyectos freelance.'
        },
        { property: 'og:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
