import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'en-US',
  description: 'A kernel-based root solution for Android GKI devices.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: 'last Updated',

    sidebar: {
      '/guide/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tiann/KernelSU' }
    ],

    footer: {
        message: 'Released under the GPL3 License.',
        copyright: 'Copyright © 2022-present KernelSU Developers'
    },

    editLink: {
        pattern: 'https://github.com/tiann/KernelSU/edit/main/website/docs/:path',
        text: 'Edit this page on GitHub'
    }
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-kernelsu' },
    { text: 'Github', link: 'https://github.com/tiann/KernelSU' }
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Guide',
        items: [
          { text: 'What is KernelSU?', link: '/guide/what-is-kernelsu' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'How to build?', link: '/guide/how-to-build' },
          { text: 'Intergrate for non-GKI devices', link: '/guide/how-to-integrate-for-non-gki'},
          { text: 'FAQ', link: '/guide/faq' },
        ]
    }
  ]
}