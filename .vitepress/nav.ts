/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
  { text: "概览", link: "/" },
  { text: "卷首", link: "/docs/src/Volume0/HomePage_Original.md" },
  {
    text: "目次",
    items: [
      { text: "卷一", link: "/docs/src/Volume1/1.md" },
      { text: "卷二", link: "/docs/src/Volume2/2.md" },
      { text: "卷三", link: "/docs/src/Volume3/3.md" },
      { text: "卷四", link: "/docs/src/Volume4/4.md" },
      { text: "卷五", link: "/docs/src/Volume5/5.md" },
      { text: "卷六", link: "/docs/src/Volume6/6.md" },
      { text: "卷七", link: "/docs/src/Volume7/7.md" },
      { text: "卷八", link: "/docs/src/Volume8/8.md" },
    ],
  },
  {
    text: "后序", link: "/docs/src/Volume9/END-8-1.md"
  },
];
