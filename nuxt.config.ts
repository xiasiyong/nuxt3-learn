import { defineNuxtConfig } from "nuxt";

const isDev = process.env.NODE_ENV === "development";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: isDev ? "vite" : "webpack",
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
});
