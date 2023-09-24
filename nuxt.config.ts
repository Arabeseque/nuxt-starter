// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  /**
   * Defines the route rules for the Nuxt.js application.
   * 
   * The route rules specify how each route should be handled by the application.
   * For example, whether a route should be pre-rendered at build time, generated on-demand,
   * or redirected to another page.
   * 
   * @see https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
   */
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: 3600 },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' }
  },

  // Nuxt modules are now build-time-only, and the buildModules property used in Nuxt 2 is deprecated in favor of modules.
  // 类似在 main.ts 中全局导入
  modules: [
    '@formkit/auto-animate/nuxt',
  ],

  // https://nuxt.com/docs/api/configuration/nuxt-config
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css']
})


