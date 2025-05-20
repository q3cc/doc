// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    logo: {
      light: '/images/logo-light.png', // 浅色主题 Logo 路径
      dark: '/images/logo-dark.png', // 深色主题 Logo 路径
    },
    // 其他主题配置...
    siteTitle: 'Your Site'
  },
})