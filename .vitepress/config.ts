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
            text: "Plugins",
            link: "/plugins"
          },
          {
            text: "Plugin Development",
            link: "/plugin-development"
          },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [
              {
                text: "Introduction",
                link: "/guide/what-is-parsek"
              },
              { text: "Quick Start", link: "/guide/quick-start" },
              { text: "Features", link: "/guide/features"},
              { text: "Configuration", link: "/guide/configuration" },
              {
                text: "Plugins",
                link: "/guide/plugins",
                collapsed: true,
                items: [
                  {
                    text: "Official",
                    link: "/guide/plugins/"
                  },
                  {
                    text: "Unofficial",
                    link: "/guide/plugins/unofficial"
                  }
                ]
              },
              { text: "Examples", link: "/guide/examples" },
              { text: "Deployment", link: "/guide/deployment" }
            ]
          },
          {
            text: "Plugin Development",
            items: [

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
