module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Holodule',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Holodule, Time scheduler for Hololive talents. Inspired by Roboco-San' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://unpkg.com/bootstrap/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css" },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    "modules/typescript.ts",
    ["bootstrap-vue/nuxt", { css: false, bvCSS: false }],
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
    }
  },
  generate: {
    routes(callback) {
      const routes = [];
      require("./assets/talents.json").forEach((w) => {
        routes.push(`/talents/${w.id}`);
      });
      callback(null, routes);
    }
  }
}
