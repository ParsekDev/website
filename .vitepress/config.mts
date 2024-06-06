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
      { text: "Guide", link: "/guide/what-is-parsek" },
      { text: "Reference", link: "/reference" },
      { text: "Modules", link: "/modules" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "What is Parsek?", link: "/guide/what-is-parsek" },
          { text: "Quickstart", link: "/guide/getting-started" }
        ]
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/StatuParsek" }],

    search: {
      provider: "local"
    }
  }
})
