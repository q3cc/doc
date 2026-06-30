// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    logo: {
      light: '/images/logo-light.png', // 浅色主题 Logo 路径
      dark: '/images/logo-dark.png', // 深色主题 Logo 路径
    },
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">津ICP备2026004483号</a> | <a href="https://icp.gov.moe/?keyword=20234616" target="_blank" rel="noopener noreferrer">萌ICP备20234616号</a>'
    },
    // 其他主题配置...
    siteTitle: 'Your Site'
  },
})
