/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */

const docs = [
  { text: "写在前面的话", link: "/docs/md/0.md" },
  {
    text: "基础之基础",
    link: "/docs/md/1.md",
    items: [
      { text: "插件的工作理论", link: "/docs/md/1-1.md" },
      { text: "Bukkit 的二次呼吸", link: "/docs/md/1-2.md" },
      { text: "最简单的开发环境", link: "/docs/md/TR-1.md" },
      { text: "Hello World?", link: "/docs/md/EX-0-1.md" },
      { text: "Hello World!", link: "/docs/md/EX-0-2.md" },
      { text: "究竟做了些什么", link: "/docs/md/TR-2.md" },
    ],
  },
  {
    text: "基础之提升",
    link: "/docs/md/2.md",
    items: [
      { text: "配置文件与 JavaDocs", link: "/docs/md/2-1.md" },
      { text: "事件系统概述", link: "/docs/md/2-2.md" },
      { text: "注意安全", link: "/docs/md/2-3.md" },
      { text: "命令处理器", link: "/docs/md/2-4.md" },
      { text: "登录插件", link: "/docs/md/EX-1-1.md" },
      { text: "调试登录插件", link: "/docs/md/EX-1-2.md" },
    ],
  },
  {
    text: "继续深入",
    link: "/docs/md/3.md",
    items: [
      { text: "经典 GUI", link: "/docs/md/3-1.md" },
      { text: "奇怪的物品", link: "/docs/md/3-2.md" },
      { text: "深入研究玩家", link: "/docs/md/3-3.md" },
      { text: "编写菜单插件", link: "/docs/md/EX-2-1.md" },
      { text: "调试菜单插件", link: "/docs/md/EX-2-2.md" },
    ],
  },
  {
    text: "请求支援",
    link: "/docs/md/4.md",
    items: [
      { text: "NMS 与反射", link: "/docs/md/4-1.md" },
      { text: "MySQL 与 JDBC", link: "/docs/md/4-2.md" },
      { text: "JavaMail", link: "/docs/md/4-3.md" },
      { text: "HarmonyAuth SMART Part 1", link: "/docs/md/AC-1-1.md" },
      { text: "HarmonyAuth SMART Part 2", link: "/docs/md/AC-1-2.md" },
      { text: "调试 HarmonyAuth SMART", link: "/docs/md/AC-1-3.md" },
    ],
  },
  {
    text: "终极之开端",
    link: "/docs/md/5.md",
    items: [
      { text: "自定义合成表", link: "/docs/md/5-1.md" },
      { text: "进度条", link: "/docs/md/5-2.md" },
      { text: "粒子效果", link: "/docs/md/5-3.md" },
      { text: "药水效果", link: "/docs/md/5-4.md" },
      { text: "音效", link: "/docs/md/5-5.md" },
      { text: "原始 JSON 文本", link: "/docs/md/5-6.md" },
      { text: "自定义进度", link: "/docs/md/5-7.md" },
    ],
  },
  {
    text: "锻造升级",
    link: "/docs/md/6.md",
    items: [
      { text: "Java 中的一些工具类", link: "/docs/md/6-1.md" },
      { text: "使用其它插件的 API", link: "/docs/md/6-2.md" },
      { text: "为更好的自己", link: "/docs/md/6-3.md" },
      { text: "向其它插件提供 API", link: "/docs/md/AC-2.md" },
    ],
  },
  {
    text: "培养技能",
    link: "/docs/md/7.md",
    items: [
      { text: "命令补全器", link: "/docs/md/7-1.md" },
      { text: "自定义事件", link: "/docs/md/7-2.md" },
      { text: "记分板显示", link: "/docs/md/7-3.md" },
      { text: "线程安全性", link: "/docs/md/7-4.md" },
      { text: "附魔、耐久与属性修改", link: "/docs/md/7-5.md" },
    ],
  },
  {
    text: "终极之终极",
    link: "/docs/md/8.md",
    items: [
      { text: "世界生成器", link: "/docs/md/8-1.md" },
      { text: "CuteCoin Part 1", link: "/docs/md/AC-3-1.md" },
      { text: "CuteCoin Part 2", link: "/docs/md/AC-3-2.md" },
      { text: "CuteCoin Part 3", link: "/docs/md/AC-3-3.md" },
    ],
  },
  { text: "结束了？", link: "/docs/md/END-8-1.md" },
  { text: "鸣谢与后记", link: "/docs/md/END-8-2.md" },
];

export const sidebar = [
  {
    text: "导引",
    collapsible: true,
    link: "/docs/README.md"
  },
  ...docs,
  {
    text: "关于",
    collapsible: true,
    link: "/docs/about/changelog",
    items: [
      { text: "日志", link: "/docs/about/changelog" },
      { text: "团队", link: "/docs/about/team" },
    ],
  },
];
