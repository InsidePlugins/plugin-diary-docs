# ? ? ? 首页

欢迎阅读本教程，本教程旨在介绍基于 Bukkit API 的 Minecraft 服务端插件开发方法。

::: tip <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1028 1024' transform='scale(0.6)' fill='%23fff'%3E%3Cpath d='M1018.319924 112.117535q4.093748 9.210934 6.652341 21.492179t2.558593 25.585928-5.117186 26.609365-16.374994 25.585928q-12.281245 12.281245-22.003898 21.492179t-16.886712 16.374994q-8.187497 8.187497-15.351557 14.32812l-191.382739-191.382739q12.281245-11.257808 29.167958-27.121083t28.144521-25.074209q14.32812-11.257808 29.679676-15.863275t30.191395-4.093748 28.656239 4.605467 24.050772 9.210934q21.492179 11.257808 47.589826 39.402329t40.425766 58.847634zM221.062416 611.554845q6.140623-6.140623 28.656239-29.167958t56.289041-56.80076l74.710909-74.710909 82.898406-82.898406 220.038979-220.038979 191.382739 192.406177-220.038979 220.038979-81.874969 82.898406q-40.937484 39.914047-73.687472 73.175753t-54.242167 54.753885-25.585928 24.562491q-10.234371 9.210934-23.539054 19.445305t-27.632802 16.374994q-14.32812 7.16406-41.960921 17.398431t-57.824197 19.957024-57.312478 16.886712-40.425766 9.210934q-27.632802 3.070311-36.843736-8.187497t-5.117186-37.867173q2.046874-14.32812 9.722653-41.449203t16.374994-56.289041 16.886712-53.730448 13.304682-33.773425q6.140623-14.32812 13.816401-26.097646t22.003898-26.097646z'/%3E%3C/svg%3E" style="background-color:#057E3D; clip-path: circle();" width="24px" height="24px"> **编者注**
:::

---

## 编写本教程的目的

笔者一开始编写插件是看 `MCBBS` 中的早期教程，然而那时候的教程无一例外使用的都是 `Eclipse`。对于笔者而言，曾经用 `Eclipse` 写 `Mod` 的痛苦还记忆犹新，因此笔者采用了 IDEA 进行开发。后来笔者又阅读了几份较新的教程，但发现有些部分它们并没有涵盖到（大致从本教程的 `第 4 章` 开始）。

笔者一度在 `反射` 和 `MySQL` 那里遇到困难，因此想与其在问答版回答问题还不如写成教程，于是便编写了这样一份教程。

## 关于本教程中部分内容的说明

1. 作者在编写时尽最大努力使内容真实有效，但无任何保证。
2. 对自然人的称呼中，使用某一特定的性别表述仅是为编写方便，并无任何象征或指代意义。
3. 如无特殊说明，本教程中的代码部分，作者授予您使用、复制、修改、再分发以及相关的权利，无需署名或申请额外的许可。**仅仅代码部分才如此**！部分代码不适用本条，它们拥有特别的许可协议。文本内容采用 CC-BY-3.0 协议许可，[见此](https://plugindiary.pvpin.org/Postface/Postface.html#版权信息)。
4. 教程中引用的所有文本内容均得到作者的或者该作品许可中的授权，效果截图来自作者计算机。
5. 音乐全部引用自 [网易云音乐](https://music.163.com)，本站点未存储任何文件。

## 技术信息

本教程站点是基于 [Vitepress](https://vitepress.dev/) 构建的，笔者自行编写了数个 CSS 文件，使其外观接近 [docsify](https://docsify.js.org/#/) 所渲染的站点。

主要字体采用 [FiraCode](https://github.com/tonsky/FiraCode)，剧情模拟和行动确认是由笔者的 Vue SFC 完成的。

本教程原是 ThatRarityEG 所著，自她去故离尘以后，InsidePlugins 小组维护本站点。技术信息详见[《跋辞》](https://plugindiary.pvpin.org/Postface/Postface.html)、[《重梓<日记>纪事》](https://plugindiary.pvpin.org/Postface/Log.html)。

:::details 旧技术信息（现已失效）
本教程站点是基于 [docsify](https://docsify.js.org/#/) 构建的，采用了 [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/) 进行渲染。

主要字体采用 [FiraCode](https://github.com/tonsky/FiraCode)，按钮部分来自 [Bootstrap](https://getbootstrap.com/)，剧情模拟和行动确认是由笔者的 `build.js` 和 `log.js` 完成的。

保证页面正常运作的代码由 [jsDelivr](https://www.jsdelivr.com/) 为您加速。

[Cloudflare Pages](https://pages.cloudflare.com/) 托管了本站点。
:::

---

侧边栏展现了整个教程的结构，单击即可跳转到对应章节。

## 法律信息

本教程原是 ThatRarityEG 所著，自她去故离尘以后，InsidePlugins 小组维护本站点，此处所言的部分法律信息已经过时。出于尊重原作者之故，仍然保留旧有法律信息的原文，但全部按失效处理。本教程法律信息详见[《跋辞》](https://plugindiary.pvpin.org/Postface/Postface.html#版权信息)。

:::details 旧法律信息（现已失效）
「本教程」指 https://plgdev.xuogroup.top/ 网站下的全部 HTML 页面以及 https://github.com/Andy-K-Sparklight/PluginDiary/ 所表示的 Git 仓库下的所有 Markdown 文件。链接到上述 HTML 页面中的样式表、字体、JavaScript 脚本等内容和上述 Git 仓库中非 Markdown 文件不属于「本教程」，它们适用单独的许可条款。「本站点」指 https://plgdev.xuogroup.top/ 网站下的全部 HTML 页面。

以下信息对「本教程」中所有内容适用。

本教程文字部分使用 [知识共享署名 3.0 中国大陆许可协议](https://creativecommons.org/licenses/by/3.0/cn/) 进行许可。对于不适用该许可的部分，将适用其单独的许可条款。

![CC-BY-3.0.svg](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg)

本教程中少量游戏截图来自于游戏 《Minecraft: Java Edition》（《我的世界：Java 版》），根据其开发公司 Mojang Studios AB 在许可条款中的 [相应说明](https://account.mojang.com/terms?ref=ft#brand)，我们拥有将这些图片上传到第三方图片网站并链接到本站点的权利，截图由本教程作者制作。

Minecraft® 是瑞典 Mojang Studios AB 公司的商标。本教程不是 Minecraft 官方产品，不是来自 Minecraft 并且未经 Minecraft 认可。本教程与 Mojang Studios AB  没有关联，也不是来自 Mojang Studios AB。本教程与美国 Microsoft（微软）公司没有关联。

本教程与 GitHub 公司没有关联。

My Little Pony®、Friendship Is Magic™ 和 Equestria Girls™ 是美国 Hasbro（孩之宝）公司的商标或注册商标。本教程与 Hasbro 公司没有关联。

Java™ 是美国 Oracle（甲骨文）公司的商标。本教程与 Oracle 公司没有关联。

Eclipse® 是 Eclipse Foundation 的商标。本教程与 Eclipse Foundation 没有关联。

本教程与 JetBrains s.r.o. 没有关联。

本教程仅用于学习交流，其中任何内容均未被也不将被用于盈利。

「网易云音乐」服务是广州网易计算机系统有限公司提供的。该服务属于广州网易计算机系统有限公司。本教程的作者不能亦不会保证该服务的正常运行。

Spigot 服务端分发/下载服务是由 [GetBukkit 组织](https://getbukkit.org/) 提供的。

本教程中提供的开发工具 AdoptOpenJDK、IntelliJ IDEA Community 以及使用到的软件 MySQL Community 等均是自由软件或在其许可条款中允许了我们将其链接到本站点。所有的链接都指向原始站点，**本站点没有分发或存储任何相关文件**。

部分内容出于教学目的选自网络，现在此注明出处：

- [RUNOOB 菜鸟教程](https://www.runoob.com)，已在 [此处](https://www.runoob.com/disclaimer) 得到了普适的授权。
- [Bukkit Development Note](https://bdn.tdiant.net)，其许可协议已附在其首页。
- [Paper-API JavaDocs](https://papermc.io/javadocs/paper/1.16/overview-summary.html)，该网站的内容采用 MIT 许可证进行授权，见 [此处](https://github.com/PaperMC/papermc.io/blob/master/LICENSE)。
- [Hanbing‘s Blog](https://hanbings.github.io/2020/08/17/%E7%A5%9E%E5%A5%87%E7%9A%84Bukkit%E7%AC%94%E8%AE%B0-%E6%8F%92%E4%BB%B6%E5%AF%B9%E5%85%B6%E4%BB%96%E6%8F%92%E4%BB%B6%E7%9A%84%E8%BD%AF%E4%BE%9D%E8%B5%96/)，由于没有任何版权声明，我们仅以学习目的引用少量内容，且均注明了出处。
- [中文 Minecraft Wiki 镜像](https://wiki.biligame.com/mc/Minecraft_Wiki)，由于要求相同方式共享，与我们的许可不兼容，因此仅链接到本站而不进行任何引用。
- [GNU 官方站点](https://www.gnu.org)，该站点使用 [CC-BY-ND 4.0 知识共享许可证](https://creativecommons.org/licenses/by-nd/4.0/) 授权。
:::
