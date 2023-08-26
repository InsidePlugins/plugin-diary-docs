import { defineConfig } from "vitepress";
import { nav } from "./nav.mjs";
import { sidebar } from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  description: "补订《插件开发日记》",
  titleTemplate: ":title - 补订《插件开发日记》",
  themeConfig: {
    nav,
    sidebar,
    aside: true,
    docFooter: {
      prev: "this.prevPage();",
      next: "this.nextPage();",
    },
    editLink: {
      pattern:
        "https://github.com/InsidePlugins/plugin-diary-docs/edit/master/:path",
      text: "编辑本页内容",
    },
    lastUpdatedText: "本页更新于",
    outline: 'deep',
    siteTitle: "PluginDiary",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/InsidePlugins/plugin-diary-docs",
      },
      { icon: "discord", link: "https://discord.gg/7jS7RsMBda" },
      {
        icon: {
          svg: '<svg class="icon" style="width: 1.5em;height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1286"><path d="M515.193347 419.392931l295.91684-114.960499c17.031185-6.386694 19.160083-31.933472 2.128898-38.320166-353.397089-168.182952-255.467775-170.31185-608.864865-6.386694-17.031185 8.515593-17.031185 31.933472 0 38.320166l293.787942 121.347193h17.031185zM451.326403 489.64657L383.201663 461.970894c-14.902287-6.386694-29.804574 4.257796-29.804574 19.160083v61.738046c0 55.351351-85.155925 55.351351-85.155925 0v-114.960499c0-8.515593-4.257796-17.031185-12.773389-19.160083l-106.444906-44.706861c-14.902287-6.386694-29.804574 4.257796-29.804574 19.160083-2.128898 404.490644-51.093555 319.334719 310.819127 485.388774 14.902287 6.386694 29.804574-4.257796 29.804574-19.160084l2.128898-340.6237c2.128898-6.386694-2.128898-14.902287-10.644491-19.160083zM549.255717 510.935551l-2.128898 338.494802c0 14.902287 17.031185 25.546778 29.804574 19.160084 355.525988-166.054054 312.948025-70.253638 310.819127-472.615385 0-14.902287-14.902287-25.546778-29.804574-19.160083l-295.91684 114.960499c-6.386694 2.128898-12.773389 10.644491-12.773389 19.160083z" p-id="1287"></path></svg>',
        },
        link: "https://www.mcbbs.net/thread-1454134-1-1.html",
      },
    ],
  },
  appearance: true,
  lastUpdated: true,
  markdown: {
    theme: "css-variables",
  },
  rewrites: {
    "docs/Volume:number/:name.md": "Volume:number/:name.md",
    "docs/Postface/:name.md": "Postface/:name.md",
  },
});
