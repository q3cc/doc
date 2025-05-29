---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "StarCity"
  text: "多平台空岛服务器"
  tagline: 奇变偶不变，符号看象限。
  image:
    src: /logo/logo_light.svg
    alt: logo
  actions:
    - theme: brand
      text: Play
      link: minecraft:?addExternalServer=StarCity%20Ink|starcity.ink:19132
    - theme: alt
      text: 入群
      link: https://qm.qq.com/q/NIJ2twMkEw
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
    title: '服主',
    description: '由于学业原因目前不处理与服务器相关的事情',
    links: [
      { icon: 'github', link: 'https://github.com/6app' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2249381656&s=640',
    name: '_abcccc',
    title: '服主',
    description: '偶尔处理与服务器相关的事情',
    links: [
      { icon: 'github', link: 'https://github.com/aboci-abcccc' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3631969173&s=640',
    name: '熊殷',
    title: '服主',
    description: '目前由他处理与服务器相关的事情', 
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1013287608&s=640',
    name: 'Q3CC',
    title: '技术支持',
    description: '负责服务器网络以及部分其它方面的工作',
    links: [
      { icon: 'github', link: 'https://github.com/Q3CC' }
    ]
  }
]
</script>

<VPTeamMembers size="small" :members />