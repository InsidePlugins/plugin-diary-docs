import { defineConfig } from 'vitepress'
import { nav } from "./nav";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PluginDiary",
  description: "补订《插件开发日记》",
  themeConfig: {
    nav,
    sidebar,
  },
  rewrites: {
    'docs/src/Volume:number/:name.md': 'Volume:number/:name.md',
    'docs/about/:name.md': 'about/:name.md'
  }
})
