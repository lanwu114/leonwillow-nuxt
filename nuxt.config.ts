// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    debug: false,
    devtools: {enabled: true},
    modules: [
      '@nuxt/ui',
      '@nuxt/devtools',
      '@nuxt/eslint',
      '@nuxt/fonts',
      'nuxt-authorization'
    ],
    eslint: {},
    css: ['~/assets/css/main.css','~/assets/css/tailwind.css'],
})