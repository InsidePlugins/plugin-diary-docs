import { defineConfig } from 'vitepress'
import { nav } from "./nav";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "补订《插件开发日记》",
  titleTemplate: ':title - 补订《插件开发日记》',
  themeConfig: {
    nav,
    sidebar,
    aside: false,
    docFooter: {
      prev: 'this.prevPage();',
      next: 'this.nextPage();'
    },
    editLink: {
      pattern: 'https://github.com/InsidePlugins/plugin-diary-docs/edit/master/:path',
      text: '编辑本页内容'
    },
    lastUpdatedText: '本页更新于',
    outline: false,
    siteTitle: 'PluginDiary',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/InsidePlugins/plugin-diary-docs' },
      { icon: 'discord', link: 'https://discord.gg/Z7ptUFH7b' }
    ]
  },
  appearance: false,
  lastUpdated: true,
  markdown: {
    theme: 'css-variables'
  },
  rewrites: {
    'docs/Volume:number/:name.md': 'Volume:number/:name.md',
    'docs/Postface/:name.md': 'Postface/:name.md'
  }
})
