<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/RainEffect.png',
    name: 'Rain_Effect',
    title: '监理',
    links: [
      { icon: 'github', link: 'https://github.com/RainEffect' }
    ]
  },
  {
    avatar: 'https://github.com/gryphs.png',
    name: 'Gryph',
    title: '收掌',
    links: [
      { icon: 'github', link: 'https://github.com/gryphs' }
    ]
  },
  {
    avatar: 'https://github.com/TalexDreamSoul.png',
    name: 'TalexDreamSoul',
    title: '收掌',
    links: [
      { icon: 'github', link: 'https://github.com/TalexDreamSoul' }
    ]
  },
  {
    avatar: 'https://github.com/William-Shi233.png',
    name: 'William_Shi',
    title: '总纂',
    links: [
      { icon: 'github', link: 'https://github.com/William-Shi233' }
    ]
  },
  {
    avatar: 'https://github.com/RawDiamondMC.png',
    name: 'RawDiamondMC',
    title: '纂修',
    links: [
      { icon: 'github', link: 'https://github.com/RawDiamondMC' }
    ]
  },
  {
    avatar: 'https://github.com/katorly.png',
    name: 'Katorly',
    title: '纂修',
    links: [
      { icon: 'github', link: 'https://github.com/katorly' }
    ]
  },
  {
    avatar: 'https://github.com/nanmenyangde.png',
    name: 'NanMenYangDe',
    title: '纂修',
    links: [
      { icon: 'github', link: 'https://github.com/nanmenyangde' }
    ]
  },
  {
    avatar: 'https://github.com/Super-XiaoNian.png',
    name: 'Anvil',
    title: '总校',
    links: [
      { icon: 'github', link: 'https://github.com/Super-XiaoNian' }
    ]
  },
  {
    avatar: 'https://github.com/Deer403.png',
    name: 'Deer403',
    title: '校对',
    links: [
      { icon: 'github', link: 'https://github.com/Deer403' }
    ]
  },
  {
    avatar: 'https://github.com/KouyouX.png',
    name: 'Mochizuki Haruka',
    title: '校对',
    links: [
      { icon: 'github', link: 'https://github.com/KouyouX' }
    ]
  },
  {
    avatar: 'https://github.com/yinghaoting.png',
    name: 'YingHaoTing',
    title: '校对',
    links: [
      { icon: 'github', link: 'https://github.com/yinghaoting' }
    ]
  },
]
</script>

# PluginDiary 补订者职名

探元珠于赤水，甲令星悬；扫落叶于青山，寅衷冰惕。

<VPTeamMembers size="small" :members="members" />