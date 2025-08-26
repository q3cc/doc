---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "StarCity"
  text: "多平台空岛生存"
  tagline: 奇变偶不变，符号看象限。
  image:
    light: /logo/logo_light.svg
    dark: /logo/logo_dark.svg
    alt: logo
  actions:
    - theme: brand
      text: Play
      link: minecraft:?addExternalServer=StarCity%20Ink|starcity.ink:19132
    - theme: alt
      text: 入群
      link: https://qm.qq.com/q/FIfmpscUk8
    - theme: alt
      text: 更多
      link: /more

---
<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1410077438&s=640',
    name: '大猫 BigCat',
    title: '团队创始人 服主',
    description: '服务器玩法主要制作及维护者',
    links: [
      { icon: 'github', link: 'https://github.com/6app' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2249381656&s=640',
    name: '_abcccc',
    title: '服主',
    description: '偶尔处理服务器相关事宜',
    links: [
      { icon: 'github', link: 'https://github.com/aboci-abcccc' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3631969173&s=640',
    name: '熊殷',
    title: '服主',
    description: '处理服务器相关事宜', 
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1013287608&s=640',
    name: 'Q3CC',
    title: '技术支持',
    description: '负责服务器搭建、维护及其他网络工作',
    links: [
      { icon: 'github', link: 'https://github.com/Q3CC' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members />