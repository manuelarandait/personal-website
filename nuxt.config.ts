export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    '@nuxt/ui',
    '@nuxt/image'
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
      title: 'Manuel Aranda — Desarrollo software de gestión a medida',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Desarrollo ERPs, CRMs y plataformas internas a medida para empresas que han crecido y necesitan herramientas propias. Análisis funcional, diseño técnico y desarrollo end-to-end. Freelance senior en Madrid.'
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://manuelaranda.dev' },
        { property: 'og:title', content: 'Manuel Aranda — Desarrollo software de gestión a medida' },
        {
          property: 'og:description',
          content: 'Desarrollo ERPs, CRMs y plataformas internas a medida para empresas que han crecido y necesitan herramientas propias. Freelance senior en Madrid.'
        },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Manuel Aranda — Desarrollo software de gestión a medida' },
        {
          name: 'twitter:description',
          content: 'Desarrollo ERPs, CRMs y plataformas internas a medida para empresas que han crecido y necesitan herramientas propias. Freelance senior en Madrid.'
        },
        { name: 'twitter:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})