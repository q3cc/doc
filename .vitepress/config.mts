import { defineConfig } from 'vitepress'
import vitepressProtectPlugin from "vitepress-protect-plugin"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarCity",
  description: "StarCity | 多平台空岛服务器",
  cleanUrls: true, // 生成清洁URL（如将`.html`后缀隐藏）
  appearance: true, // 启用主题切换（浅色/深色模式）
  lastUpdated: true,
  vite: {
    plugins: [
      vitepressProtectPlugin({
        disableF12: true, // 禁用F12开发者模式
        disableCopy: false, // 禁用文本复制
        disableSelect: false, // 禁用文本选择
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '更多', link: '/more' }
    ],
    
    search: {
      provider: 'local'
    },

    logo: {
      light: '/public/logo/logo_light.svg', // 浅色主题 Logo 路径
      dark: '/public/logo/logo_dark.svg', // 深色主题 Logo 路径
    },

    footer: {
      message: '<a href="https://icp.gov.moe/?keyword=20234616" target="_blank">萌ICP备20234616号</a>',
      copyright: 'Copyright © 2022-2025 StarCity'
    },

    sidebar: [
      {
        text: '更多',
        items: [
          { text: '服务器信息', link: '/more'},
          { text: 'FAQ', link: '/faq'},
          { text: '团队页', link: '/team'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
