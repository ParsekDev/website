import { defineConfig } from "vitepress"

export default defineConfig({
  srcDir: "src",

  lang: "en-US",
  title: "Parsek",
  description: "Rest API Build Structure for Kotlin",

  lastUpdated: true,

  head: [
    ["meta", { name: "theme-color", content: "#000000" }],
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
        content: "https://parsek.dev/images/banner.png"
      }
    ],
    ["meta", { name: "twitter:site", content: "@StatuAgency" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }]
  ],

  themeConfig: {
    search: {
      provider: "local"
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/StatuParsek" },
      { icon: "twitter", link: "https://twitter.com/StatuAgency" }
    ],
    footer: {
      copyright: `Copyright © 2023 - ${new Date().getFullYear()} Parsek`
    }
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          {
            text: "Guide",
            link: "/guide/what-is-parsek"
          },
          {
            text: "Reference",
            link: "/reference"
          },
          {
            text: "Modules",
            link: "/modules"
          }
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              { text: "What is Parsek?", link: "/guide/what-is-parsek" },
              { text: "Quick Start", link: "/guide/quick-start" },
              {
                text: "Features",
                items: [
                  { text: "Routing", link: "/guide/features/routing" },
                  { text: "Plugins", link: "/guide/features/plugins" },
                  { text: "Services", link: "/guide/features/services" },
                  { text: "Health Check System", link: "/guide/features/health-check-system" }
                ]
              },
              { text: "Configuration", link: "/guide/configuration" },
              { text: "Going Further", link: "/guide/going-further" },
              { text: "Examples", link: "/guide/examples" },
              { text: "Deployment", link: "/guide/deployment" }
            ]
          }
        ],
        editLink: {
          pattern: "https://github.com/StatuParsek/website/edit/main/:path",
          text: "Edit this page on GitHub"
        }
      }
    },
    tr: {
      label: "Turkish",
      lang: "tr",
      link: "/tr",
      themeConfig: {
        nav: [
          {
            text: "Kılavuz",
            link: "/tr/guide/what-is-parsek"
          },
          {
            text: "Referans",
            link: "/tr/reference"
          },
          {
            text: "Modüller",
            link: "/tr/modules"
          }
        ],
        sidebar: [
          {
            text: "Kılavuz",
            items: [
              { text: "Parsek Nedir?", link: "/tr/guide/what-is-parsek" },
              { text: "Hızlı Başlangıç", link: "/tr/guide/quick-start" },
              {
                text: "Özellikler",
                items: [
                  { text: "Yönlendirme", link: "/tr/guide/features/routing" },
                  { text: "Eklentiler", link: "/tr/guide/features/plugins" },
                  { text: "Servisler", link: "/tr/guide/features/services" },
                  { text: "Sağlık Kontrol Sistemi", link: "/tr/guide/features/health-check-system" }
                ]
              },
              { text: "Yapılandırma", link: "/tr/guide/configuration" },
              { text: "Daha İleri Git", link: "/tr/guide/going-further" },
              { text: "Örnekler", link: "/tr/guide/examples" },
              { text: "Dağıtım", link: "/tr/guide/deployment" }
            ]
          }
        ],
        editLink: {
          pattern: "https://github.com/StatuParsek/website/edit/main/:path",
          text: "Bu sayfayı GitHub'da düzenle"
        }
      }
    }
  },

  markdown: {
    theme: "github-dark",
    config(md) {}
  },

  cleanUrls: true,

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    json: {
      stringify: true
    }
  }
})
