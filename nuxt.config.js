export default {
  mode: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Gideon Ogunkola | UX Designer | Frontend Developer",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#27AAE1" },
      {
        hid: "description",
        name: "description",
        content:
          "Gideon Ogunkola is a professional UX Designer and Frontend Developer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      // {
      //   rel: "stylesheet",
      //   type: "text/css",
      //   href:
      //     "//db.onlinewebfonts.com/c/22e08e9cd2a72d3d02589e3033a3178e?family=Begum"
      // }
    ],
    script: [{ src: "https://code.iconify.design/1/1.0.7/iconify.min.js" }]
  },

  loadingIndicator: {
    name: "circle",
    color: "#000"
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
    "@nuxtjs/color-mode"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["emailjs-com"]
  }

  // transition:{
  //   name:'page',
  //   mode:'in'
  // }
};
