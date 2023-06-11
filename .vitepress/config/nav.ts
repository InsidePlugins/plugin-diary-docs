/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
  { text: "主页", link: "/" },
  {
    text: "教程",
    activeMatch: "/docs/",
    link: "/docs/README.md",
  },
  { text: "开发常见失误", link: "/docs/md/EG-1.md" },
  {
    text: "关于",
    items: [
      { text: "日志", link: "/docs/about/changelog" },
      { text: "团队", link: "/docs/about/team" },
    ],
  },
];
