module.exports = {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Super Mega Quiz" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ],
  },
  loading: { color: "#000000" },
  router: {
    base: "/"
  },
  build: {
    optimizeCSS: true
  },
  mode: "spa",
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  },
  plugins: [
    "~/plugins/slider.js"
  ]
}
