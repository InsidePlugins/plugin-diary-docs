# 重梓《日记》纪事

本教程为 [ThatRarityEG](https://www.mcbbs.net/home.php?mod=space&uid=3281025) 道席所著。谨按，作者最后一次更新系二〇二二年十二月十八日之事，故本站以 [Commit#554c33c](https://github.com/Andy-K-Sparklight/PluginDiary/commit/554c33c477e24974f77cf4cfa44d9bdaf5eb62a0) 为底本，芟荑校勘，成《补订<插件开发日记>》。《补订》既成，即需架设网站，以替代原 Cloudflare Pages 之过时页面。故此，记录重梓以来二三事，供后来者参览。

## 2023-6

六月十日旰，William_Shi 提出 [Issue#8](https://github.com/Andy-K-Sparklight/PluginDiary/issues/8) 以讨论《PluginDiary 插件开发教程》维护事宜。

十一日旰，William_Shi 建立 [InsidePlugins](https://github.com/InsidePlugins) 小组。组名系在 TalexDreamSoul 所建言之 InPlugin 基础上修改而成。

十二日晨，TalexDreamSoul 建立 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) 仓库，以 Vitepress 构建页面。Moe_Miner 部署页面至一香港服务器上，并启用域名 [docs.pvpin.org](https://docs.pvpin.org) 以供访问。

十五日晨，Moe_Miner 调试 Github Actions 毕。自是，更新 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) 仓库后，[https://docs.pvpin.org/plugin-diary/](https://docs.pvpin.org/plugin-diary/) 上内容随之而变。

十六日晨，Moe_Miner 改域名作 [plugindiary.pvpin.org](https://plugindiary.pvpin.org/)，仍同步 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) 仓库，一应推送流程不变。

十七日晚，William_Shi 修改 CSS 文件，俾使 Blockquote 引文渲染后类似 docsify 引文。

十八日晨，William_Shi 修改 CSS 文件，俾使 Vitepress 所支持的 Markdown-It 格式中以 ::: 包裹的自定义容器渲染后类似 docsify 中 !> 和 ?> 容器。夜，William_Shi 修改 CSS 文件，俾使代码高亮颜色近于 docsify 所用之 Prism 高亮系统，并调整代码块背景颜色、复制按钮颜色。又复原「事件模拟」及「确认行动结束」两功能。至斯，页面样式大备，与原站难分真假。

二十六日晨，服务商迁移机器，致使服务器 IP 生变，域名解析至错误地址上。晚，Moe_Miner 修改域名解析地址，网站恢复正常。

## 2023-7

七月七日旰，Moe_Miner 和 William_Shi 二人重绘图片告竣。教程内容全齐。晚，William_Shi 拟在 MCBBS 编程开发版发帖，用于宣传《补订<日记>》，并由管理组在 ThatRarityEG 原帖内删去失效域名，添加《补订<日记>》相关信息。私信呈请于编程开发版主 tdiant 后，获准。

八日午后，William_Shi 将草稿帖发出，即[《补订 RarityEG's Plugin Dev Tutorial 插件开发日记》](https://www.mcbbs.net/thread-1454134-1-1.html)。又于 MCBBS 反馈版发布主题[《申请维护 RarityEG's Plugin Dev Tutorial》](https://www.mcbbs.net/thread-1454189-1-1.html)，请求版主在原帖内标注「xuogroup.top」域名为「失效入口」，并提供指向《补订<日记>》的链接。tdiant 版主乙览，批准申请，并将图标、图章、高亮移至新帖。

二十一日中午，Freeze_Dolphin 编写了一节 Adventure API 教程。按，Paper 团队对原有 API 作了众多颠覆性调整，将许多常用方法标记为过时，很可能令 Spigot 插件开发者无所适从。而 ThatRarityEG 在 EX-2-1 中建议读者使用 Paper API，故应当另起一节，专门论述这些过时方法的替代品。又，原教程第五卷主要介绍前文中所未提及的一部分 Bukkit API 内的方法，故将 Adventure API 教程置于第五卷内。该卷原先只有七节，5-7 为「自定义进度」，现于 5-6 和 5-7 之间插入一节 Adventure API 教程，将「自定义进度」移至 5-8。之所以不将新写的教程附在卷末，是因为「自定义进度」这一节有结束语，对第五卷内容作了总结，必须置尾。

二十五日中午，CaveNightingale 对原有的 AC-1-3 节内容作了扩充修正。按，原教程中异步调用了 setWalkSpeed 方法，但该方法并不线程安全。又如，真实服务器环境中，玩家上线时的位置可能处于下界传送门内，因而无法登录。种种问题此处不具。原「调试 HarmonyAuth SMART」篇幅仅有一节，即 AC-1-3。现在将 AC-1-3 命名为「调试 HarmonyAuth SMART Part I」，新增 AC-1-4，命名为「调试 HarmonyAuth SMART Part II」。

二十五日晚，GitHub 仓库与网站内容不再同步。修改 GitHub 仓库内的文件后，网站内容仍为原样。按 Moe_Miner 称，莱云的 cPanel 许可证又坏了，本教程网站的自动部署藉由 cPanel 的 Git 功能来同步，受其影响，不能工作。

二十七日晚，cPanel 相关许可证已经恢复。Moe_Miner 手动触发了 Web Hook，网站内容与 GitHub 仓库同步。

## 2023-8

八月一日旰，多位读者反映网站无法访问。原因未知。无何，网站自行恢复。

十二日午后，ThatRarityEG 道席登录了自己的 GitHub 账号，并为本教程仓库 [plugin-diary-docs](https://github.com/InsidePlugins/plugin-diary-docs) 点了 Star。我等编修人员不胜诚欢诚幸之至。

二十六日旰，

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