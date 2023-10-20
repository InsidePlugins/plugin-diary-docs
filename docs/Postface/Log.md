# 重梓《日记》纪事

本教程为 [ThatRarityEG](https://www.mcbbs.net/home.php?mod=space&username=ARSpark) 道席所著。谨按，作者最后一次更新系二〇二二年十二月十八日之事，故本站以 [Commit#554c33c](https://github.com/Andy-K-Sparklight/PluginDiary/commit/554c33c477e24974f77cf4cfa44d9bdaf5eb62a0) 为底本，芟荑校勘，成《补订<插件开发日记>》。《补订》既成，即需架设网站，以替代原 Cloudflare Pages 之过时页面。故此，记录重梓以来二三事，供后来者参览。

## 2023-6

十日晚，William_Shi 提出 [Issue#8](https://github.com/Andy-K-Sparklight/PluginDiary/issues/8) 以讨论《PluginDiary 插件开发教程》维护事宜。

十一日晚，William_Shi 建立 [InsidePlugins](https://github.com/InsidePlugins) 小组。先前，TalexDreamSoul 曾建议将小组定名为「InPlugin」，在此基础上修改成「InsidePlugins」。

十二日晨，TalexDreamSoul 建立 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) GitHub 仓库，以 [Vitepress](https://vitepress.dev/) 渲染文档。Moe_Miner 部署页面至一台洛莱云香港服务器上，并准备将 [docs.pvpin.org](https://docs.pvpin.org) 设为教程域名。

十五日晨，Moe_Miner 配置 Github Actions 完成。当有人向 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) GitHub 仓库推送 Commit 时，GitHub Action 工作流程就会被触发。构建后的页面会被推送至远端 Git 服务。[https://docs.pvpin.org/plugin-diary/](https://docs.pvpin.org/plugin-diary/) 网站内容随之而变，确保与 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) GitHub 仓库中的最新代码保持同步。

十六日晨，Moe_Miner 改域名作 [plugindiary.pvpin.org](https://plugindiary.pvpin.org/)，仍同步 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) 仓库内容，一应推送流程不变。

十七、十八日，William_Shi 编写多个 CSS 文件，使 [Vitepress](https://vitepress.dev/) 渲染出的页面与 [docsify](https://docsify.js.org/#/) 大致类似。又用 Vue SFC 复原「事件模拟」及「确认行动结束」等功能。页面样式大备，与原站难分真假。

二十六日晨，服务商洛莱云迁移机器，致使服务器 IP 生变，域名解析至错误地址上。晚间，Moe_Miner 修改域名解析地址，网站恢复正常。

## 2023-7

七日晚，Moe_Miner 和 William_Shi 二人重绘图片告竣。教程内容全齐。于是二人拟在 MCBBS 编程开发版发帖，用于宣传《补订<日记>》，并由论坛管理组在 [ThatRarityEG 原帖](https://www.mcbbs.net/thread-1163259-1-1.html)内删去失效域名，添加《补订<日记>》相关信息。私信呈请于[编程开发版 tdiant 版主](https://www.mcbbs.net/home.php?mod=space&username=tdiant)后，获准。

八日午后，William_Shi 将草稿帖发出，即[《补订 RarityEG's Plugin Dev Tutorial 插件开发日记》](https://www.mcbbs.net/thread-1454134-1-1.html)。又在 MCBBS 反馈版发布主题[《申请维护 RarityEG's Plugin Dev Tutorial》](https://www.mcbbs.net/thread-1454189-1-1.html)，请求版主在原帖内标注旧有的 [xuogroup.top](https://xuogroup.top/) 域名为「失效入口」，并提供指向《补订<日记>》的链接。敬承版主 tdiant 之恩，许破旧格，敕准申请，亲自移动原帖的精华图标、图章、高亮至新帖。不胜感激之至。

二十一日中午，Freeze_Dolphin 编写了一节 Adventure API 教程。按，Adventure API 系属 Paper 团队引入服务端中，以便插件开发者编辑富文本。5-6 所介绍的 BungeeCord Chat API，就是 Spigot 服务端中的富文本 API。但这套 API 主要供插件修改书本物品堆内容以及给玩家发送聊天消息，像物品堆 Lore、物品堆 Display Name 等处，虽说 Minecraft 本身支持富文本，Spigot 服务端却都用 `java.lang.String`，而不允许开发者使用 `BaseComponent`。因而 Paper 纳入新的类库，并修改 `ItemStack` 等类，添加一些以富文本为参数的方法。至于那些以 `String` 为参数的旧方法，则统统标作过时。这很可能令 Spigot 插件开发者无所适从，以至误以为 Paper 服务端中不能修改物品堆 Lore，甚至是不能给玩家发送聊天消息。既然 ThatRarityEG 在 EX-2-1 中建议读者使用 Paper API 以替代 Spigot API，故必须另起一节，专门论述这些过时方法的替代品。经讨论，决定于原先的 5-6「原始 JSON 文本」和 5-7「自定义进度」之间插入这篇 Adventure API 教程，将「自定义进度」移至 5-8。这样安排位置，原因有三。第一，教程第五卷主要介绍前文中所未提及的一部分 Bukkit API 内的方法，章节合适。第二，5-6 介绍了 Spigot API 中的富文本类库，5-7 再介绍 Paper API 中的富文本类库，主题顺承。第三，「自定义进度」这一节有结束语，对第五卷内容作了扼要总结，必须置尾，故不宜将新篇附在卷末。

二十五日中午，CaveNightingale 对原有的 AC-1-3 节内容作了扩充修正。按，原教程中异步调用了 `setWalkSpeed` 方法，但该方法并不线程安全。又如，真实服务器环境中，玩家上线时的位置可能处于下界传送门内，因而无法登录。种种问题此处不具。原「调试 HarmonyAuth SMART」篇幅仅有一节，即 AC-1-3。现在将 AC-1-3 命名为「调试 HarmonyAuth SMART Part I」，新增 AC-1-4，命名为「调试 HarmonyAuth SMART Part II」。

二十五日晚，GitHub 仓库与网站内容不再同步。修改 GitHub 仓库内的文件后，网站内容仍为原样。按 Moe_Miner 称，莱云的 cPanel 许可证又坏了，本教程网站的自动部署藉由 cPanel 的 Git 功能来同步，受其影响，不能工作。

二十七日晚，cPanel 相关许可证已经恢复。Moe_Miner 手动触发了 Web Hook，网站内容与 GitHub 仓库同步。

## 2023-8

一日晚，多位读者反映网站无法访问。原因未知。无何，网站自行恢复。

十二日午后，ThatRarityEG 道席登录了自己的 GitHub 账号，并为本教程仓库 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) 点了 Star。所愧蒲编校订未成，注文舛错颇多。恭承指示，必遵睿训，惟望无损于原文之风雅，未敢奢求增益。我等编修人员不胜诚惧诚幸，踊跃欢忭之至！

二十六日晚，TalexDreamSoul 对网站界面作了修改。首页对不同分辨率的设备作了自适应，又重新添加了 Dark Mode。页面内容又用多个 CSS 作了美化。旧的首页背景图片是 William_Shi 所截取，在游戏内生成一个假人并套上 ThatRarityEG 的正版账号皮肤。现改用 SkinView3D 展示 ThatRarityEG 的人物模型。[Vitepress](https://vitepress.dev/) 版本升级至 1.0.0-rc.4。

## 2023-9

十五日中午，据多位读者反馈，访问网站时被浏览器警告「您的连接不是私密连接」。HopeLight 指出该警告系 SSH 证书问题导致。傍晚，Moe_Miner 称自动续订没续上，并解决了证书问题。 

十七日下午，网站无法访问。Moe_Miner 猜想是被攻击的情况增多了。不多时，网站自行恢复。

![](data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAkAAAEALAAAAAABAAEAAAICTAEAOw==)

<!-- 用一个 1x1 像素的图片占位，让距离不那么逼仄，图片用 Base64 编码 -->

# 链接会录

《补订<日记>》的入口：[https://plugindiary.pvpin.org](https://plugindiary.pvpin.org)

《补订<日记>》的发布帖：[https://www.mcbbs.net/thread-1454134-1-1.html](https://www.mcbbs.net/thread-1454134-1-1.html)

修改 PluginDiary 的申请帖：[https://www.mcbbs.net/thread-1454189-1-1.html](https://www.mcbbs.net/thread-1454189-1-1.html)

《补订<日记>》的 GitHub 仓库：[https://github.com/InsidePlugins/plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs)

ThatRarityEG 的个人主页：[https://www.mcbbs.net/home.php?mod=space&uid=3281025](https://www.mcbbs.net/home.php?mod=space&uid=3281025)

PluginDiary 的旧入口（曾被小马推荐，但域名已到期）：[https://plgdev.xuogroup.top](https://plgdev.xuogroup.top)

PluginDiary 的旧入口（今日尚且有效，但内容已失修）：[https://plugin-diary.pages.dev](https://plugin-diary.pages.dev)

PluginDiary 的发布帖：[https://www.mcbbs.net/thread-1163259-1-1.html](https://www.mcbbs.net/thread-1163259-1-1.html)

PluginDiary 的旧 GitHub 仓库（教程正文部分）：[https://github.com/Andy-K-Sparklight/PluginDiary](https://github.com/Andy-K-Sparklight/PluginDiary)

PluginDiary 的旧 GitHub 仓库（代码示例部分）：[https://github.com/Andy-K-Sparklight/PluginDiaryCode](https://github.com/Andy-K-Sparklight/PluginDiaryCode)