export default {
  mode: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Gideon Ogunkola | UX Designer based in Nigeria",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#090C10" },
      {
        hid: "description",
        name: "description",
        content:
          "Gideon Ogunkola is a professional UX Designer and Frontend Developer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-02.png" }
    ],
    script: [{ src: "https://code.iconify.design/1/1.0.7/iconify.min.js" }]
  },

  loadingIndicator: {
    name: "circle",
    color: "#27AAE1"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/typewriter.js", mode: "client", ssr: false },
    { src: "~/plugins/emailjs.js", mode: "client", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-analytics",

  ],
  googleAnalytics: {
    id: "277994064"
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", '@nuxt/image'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["emailjs-com"]
  },
  purgeCSS: {
    whitelist: ["dark-mode"]
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
};
