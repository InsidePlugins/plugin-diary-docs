import { defineConfig } from 'vitepress'
import { nav } from "./nav";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  titleTemplate: ':title - 补订《插件开发日记》',
  description: "补订《插件开发日记》",
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
    docFooter: {
      prev: 'this.prevPage();',
      next: 'this.nextPage();'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/InsidePlugins/plugin-diary-docs' }
    ],
    lastUpdatedText: '本页更新于：',
    siteTitle: 'PluginDiary'
  },
  rewrites: {
    'docs/src/Volume:number/:name.md': 'Volume:number/:name.md',
    'docs/about/:name.md': 'about/:name.md'
  }
})
