/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */

export const sidebar = [
  {
    text: "卷首",
    items: [
      { text: "主页", link: "/Volume0/HomePage_Original.md" },
      { text: "引言", link: "/Volume0/Preface_Original.md" },
    ],
  },
  {
    text: "卷一：基础之基础",
    link: "/Volume1/1.md",
    items: [
      { text: "1-1 插件的工作理论", link: "/Volume1/1-1.md" },
      { text: "1-2 Bukkit 的二次呼吸", link: "/Volume1/1-2.md" },
      { text: "TR-1 最简单的开发环境", link: "/Volume1/TR-1.md" },
      { text: "EX-0-1 Hello World?", link: "/Volume1/EX-0-1.md" },
      { text: "EX-0-2 Hello World!", link: "/Volume1/EX-0-2.md" },
      { text: "TR-2 究竟做了些什么", link: "/Volume1/TR-2.md" },
    ],
  },
  {
    text: "卷二：基础之提升",
    link: "/Volume2/2.md",
    items: [
      { text: "2-1 配置文件与 JavaDocs", link: "/Volume2/2-1.md" },
      { text: "2-2 事件系统概述", link: "/Volume2/2-2.md" },
      { text: "2-3 注意安全", link: "/Volume2/2-3.md" },
      { text: "2-4 命令处理器", link: "/Volume2/2-4.md" },
      { text: "EX-1-1 登录插件", link: "/Volume2/EX-1-1.md" },
      { text: "EX-1-2 调试登录插件", link: "/Volume2/EX-1-2.md" },
    ],
  },
  {
    text: "卷三：继续深入",
    link: "/Volume3/3.md",
    items: [
      { text: "3-1 经典 GUI", link: "/Volume3/3-1.md" },
      { text: "3-2 奇怪的物品", link: "/Volume3/3-2.md" },
      { text: "3-3 深入研究玩家", link: "/Volume3/3-3.md" },
      { text: "EX-2-1 编写菜单插件", link: "/Volume3/EX-2-1.md" },
      { text: "EX-2-2 调试菜单插件", link: "/Volume3/EX-2-2.md" },
    ],
  },
  {
    text: "卷四：请求支援",
    link: "/Volume4/4.md",
    items: [
      { text: "4-1 NMS 与反射", link: "/Volume4/4-1.md" },
      { text: "4-2 MySQL 与 JDBC", link: "/Volume4/4-2.md" },
      { text: "4-3 JavaMail", link: "/Volume4/4-3.md" },
      { text: "AC-1-1 HarmonyAuth SMART Part 1", link: "/Volume4/AC-1-1.md" },
      { text: "AC-1-2 HarmonyAuth SMART Part 2", link: "/Volume4/AC-1-2.md" },
      { text: "AC-1-3 调试 HarmonyAuth SMART Part 1", link: "/Volume4/AC-1-3.md" },
      { text: "AC-1-4 调试 HarmonyAuth SMART Part 2", link: "/Volume4/AC-1-4.md" },
    ],
  },
  {
    text: "卷五：终极之开端",
    link: "/Volume5/5.md",
    items: [
      { text: "5-1 自定义合成表", link: "/Volume5/5-1.md" },
      { text: "5-2 进度条", link: "/Volume5/5-2.md" },
      { text: "5-3 粒子效果", link: "/Volume5/5-3.md" },
      { text: "5-4 药水效果", link: "/Volume5/5-4.md" },
      { text: "5-5 音效", link: "/Volume5/5-5.md" },
      { text: "5-6 原始 JSON 文本", link: "/Volume5/5-6.md" },
      { text: "5-7 Adventure API", link: "/Volume5/5-7.md" },
      { text: "5-8 自定义进度", link: "/Volume5/5-8.md" },
    ],
  },
  {
    text: "卷六：锻造升级",
    link: "/Volume6/6.md",
    items: [
      { text: "6-1 Java 中的一些工具类", link: "/Volume6/6-1.md" },
      { text: "6-2 使用其它插件的 API", link: "/Volume6/6-2.md" },
      { text: "6-3 为更好的自己", link: "/Volume6/6-3.md" },
      { text: "AC-2 向其它插件提供 API", link: "/Volume6/AC-2.md" },
    ],
  },
  {
    text: "卷七：培养技能",
    link: "/Volume7/7.md",
    items: [
      { text: "7-1 命令补全器", link: "/Volume7/7-1.md" },
      { text: "7-2 自定义事件", link: "/Volume7/7-2.md" },
      { text: "7-3 记分板显示", link: "/Volume7/7-3.md" },
      { text: "7-4 线程安全性", link: "/Volume7/7-4.md" },
      { text: "7-5 附魔、耐久与属性修改", link: "/Volume7/7-5.md" },
    ],
  },
  {
    text: "卷八：终极之终极",
    link: "/Volume8/8.md",
    items: [
      { text: "8-1 世界生成器", link: "/Volume8/8-1.md" },
      { text: "AC-3-1 CuteCoin Part 1", link: "/Volume8/AC-3-1.md" },
      { text: "AC-3-2 CuteCoin Part 2", link: "/Volume8/AC-3-2.md" },
      { text: "AC-3-3 CuteCoin Part 3", link: "/Volume8/AC-3-3.md" },
    ],
  },
  {
    text: "卷九：后序并附录",
    items: [
      { text: "END-8-1 结束了？", link: "/Volume9/END-8-1.md" },
      { text: "END-8-2 鸣谢与后记", link: "/Volume9/END-8-2.md" },
      { text: "EG-1 插件开发常见失误", link: "/Volume9/EG-1.md" },
    ],
  },
  {
    text: "跋辞",
    items: [
      { text: "补订《日记》跋", link: "/Postface/Postface.md" },
      { text: "重梓《日记》纪事", link: "/Postface/Log.md" },
      { text: "编校人员职名", link: "/Postface/TeamPage.md" },
    ],
  },
];
