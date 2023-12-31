# END-8-1 结束了？

<iframe frameborder="no" border="0" marginwidth="0" marginheight="20px" width="100%" height="86" src="//music.163.com/outchain/player?type=2&id=430297478&auto=0&height=66"></iframe>

## 结束了？

到目前为止，本教程的内容就正式进入尾声了，一路上，你应该经历了很多，从最初的「Hello World」，漏洞百出的「HarmonyAuth」到努力奋斗的「HarmonyAuth SMART」，以及由你完成的「CuteCoin」，现在你应该已经可以自己设计并制造插件了。

## 学习清单

除了 Bukkit API，笔者还回顾了一下你学到的其它东西：

- IDEA，世界上最强大的 Java IDE
- Java 面向对象、泛型、线程安全、接口、反射等
- SQL 与数据库
- Maven 构建工具
- YAML 与文件读写
- 服务端的启动
- ……还有很多未列出

## 接下来做什么？

读完了本教程，你可以：

- 现在动手设计并制造一个插件，并将它托管在 GitHub 上
- 在 [MCBBS](https://www.mcbbs.net) 上阅读更高级的教程
- 在 [Bukkit 开发人员站点](http://dev.bukkit.org/) 上浏览
- 下载一个有名的插件的源代码，看看它的一些功能是如何实现的
- ……

::: tip <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1028 1024' transform='scale(0.6)' fill='%23fff'%3E%3Cpath d='M1018.319924 112.117535q4.093748 9.210934 6.652341 21.492179t2.558593 25.585928-5.117186 26.609365-16.374994 25.585928q-12.281245 12.281245-22.003898 21.492179t-16.886712 16.374994q-8.187497 8.187497-15.351557 14.32812l-191.382739-191.382739q12.281245-11.257808 29.167958-27.121083t28.144521-25.074209q14.32812-11.257808 29.679676-15.863275t30.191395-4.093748 28.656239 4.605467 24.050772 9.210934q21.492179 11.257808 47.589826 39.402329t40.425766 58.847634zM221.062416 611.554845q6.140623-6.140623 28.656239-29.167958t56.289041-56.80076l74.710909-74.710909 82.898406-82.898406 220.038979-220.038979 191.382739 192.406177-220.038979 220.038979-81.874969 82.898406q-40.937484 39.914047-73.687472 73.175753t-54.242167 54.753885-25.585928 24.562491q-10.234371 9.210934-23.539054 19.445305t-27.632802 16.374994q-14.32812 7.16406-41.960921 17.398431t-57.824197 19.957024-57.312478 16.886712-40.425766 9.210934q-27.632802 3.070311-36.843736-8.187497t-5.117186-37.867173q2.046874-14.32812 9.722653-41.449203t16.374994-56.289041 16.886712-53.730448 13.304682-33.773425q6.140623-14.32812 13.816401-26.097646t22.003898-26.097646z'/%3E%3C/svg%3E" style="background-color:#057E3D; clip-path: circle();" width="24px" height="24px"> **编者注**
ThatRarityEG 道席推荐的 Bukkit 插件开发人员站点是 dev.bukkit.org。但是随着 CraftBukkit 被 DMCA Takedown 取缔，该网站也日渐没落。目前最大的插件开发交流社区是 [Spigot 论坛](https://www.spigotmc.org/forums/spigot-plugin-development.52/)。只言旧站点而不言新站点，是小马提醒读者饮水思源、不忘初心。盖闻「椎轮为大辂之始」，良有以也。如果不是 CraftBukkit 打下了基础，又怎么会有今天的 Spigot、Paper 等服务端呢？
:::

## 自由软件

在教程的最后，我想抽一点位置说一下关于自由软件的事情。

RarityCommons 是自由软件，CuteCoin（我编写的部分）也是，那什么是自由软件呢？

*以下内容摘自 [GNU 官方网站](https://www.gnu.org)。*

> **自由软件意味着使用者有运行、复制、发布、研究、修改和改进该软件的自由。**
>
> 自由软件是权利问题，不是价格问题。要理解这个概念，你应该考虑「free」是「言论自由（free speech）」中的「自由」；而不是「免费啤酒（free beer）」中的「免费」。
>
> 更精确地说，自由软件赋予软件使用者四项基本自由：
>
> - 不论目的为何，有运行该软件的自由（自由之零）。
> - 有研究该软件如何工作以及按需改写该软件的自由（自由之一）。取得该软件源代码为达成此目的之前提。
> - 有重新发布拷贝的自由，这样你可以借此来敦亲睦邻（自由之二）。
> - 有向公众发布改进版软件的自由（自由之三），这样整个社群都可因此受惠。取得该软件源码为达成此目的之前提。

插件是 Minecraft 服务器中几乎不可或缺的一环，我很高兴许多插件开发人员将其所编写的插件以自由软件的形式发布，如 Vault（LGPL-3.0）、AuthMeReloaded（GPL-3.0）、Bukkit、Spigot、Paper 本身（GPL-3.0 与 MIT）、FastLogin（MIT）、ChestShop 3（LGPL-2.1）等等，数不胜数。正是有这样的人，搭建一个服务器才能够少花很多钱。（当然，好处可不止这些）

**然而**，我们也看到有些人用其所编写的插件盈利。虽说这可能并不违反什么规则，但我们一直都不希望开发人员社区变成一个商业化的地方。商业化的气息已经感染了整个服务器社区，我不希望插件社区成为下一个，这也是我编写本教程的原因之一。

当然，如果你坚持要拿你的插件收费，我也不能（也不会）阻止，那是你的自由，但我确实希望你能加入到自由软件这个大社区中来，你一定会喜欢上它的。

## 还是开始了？

笔者要说的话就到此为止了，接下来各位就是舞台上的主角，如果你写出了好的插件，可以把它发布到 MCBBS 或者 Spigot 网站，如果这篇教程帮到了你，我就很开心啦~

再见啦~希望和你在 MCBBS 的编程开发版再会！

---

<p style="text-align:center;font-size:3em;color:#df307f">THE END</p>

---