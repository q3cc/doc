import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarCity",
  description: "StarCity | 多平台空岛服务器",
  cleanUrls: true, // 生成清洁URL（如将`.html`后缀隐藏）
  appearance: true, // 启用主题切换（浅色/深色模式）
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'index', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    logo: {
      light: '/public/logo_light.png', // 浅色主题 Logo 路径
      dark: '/public/logo_dark.png', // 深色主题 Logo 路径
    },

    footer: {
      message: '萌ICP备20234616号',
      copyright: 'Copyright © 2022-2025 StarCity'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'More', link: '/more'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})


