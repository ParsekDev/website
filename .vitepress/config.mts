import { defineConfig } from "vitepress"

const nav = [
  {
    text: "Guide",
    link: "/guide"
  },
  {
    text: "Reference",
    link: "/reference"
  },
  {
    text: "Modules",
    link: "/modules"
  }
]

export const sidebar = {}

export default defineConfig({
  lang: "en-US",
  title: "Parsek",
  description: "Rest API Build Structure for Kotlin",
  srcDir: "src",

  head: [
    ["meta", { name: "theme-color", content: "#3c8772" }],
    ["meta", { property: "og:url", content: "https://parsek.dev/" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Parsek" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Rest API Build Structure for Kotlin"
      }
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://parsek.dev/parsek-social-card.png"
      }
    ],
    ["meta", { name: "twitter:site", content: "@StatuAgency" }],
    ["meta", { name: "twitter:card", content: "summary" }]
  ],

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/StatuParsek" },
      { icon: "twitter", link: "https://twitter.com/StatuAgency" }
    ],

    search: {
      provider: "local"
    },

    footer: {
      copyright: `Copyright © 2023 - ${new Date().getFullYear()} Parsek`
    }
  },

  markdown: {
    theme: "github-dark",
    config(md) {}
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    json: {
      stringify: true
    }
  }
})
