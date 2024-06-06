import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Parsek",
  description: "Open-source modular back-end written in Kotlin",

  locales: {
    root: {
      label: "English",
      lang: "en"
    },
    fr: {
      label: "Turkish",
      lang: "tr",
      link: "/tr"
    }
  },

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" }
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/StatuParsek" }],

    search: {
      provider: "local"
    }
  }
})
