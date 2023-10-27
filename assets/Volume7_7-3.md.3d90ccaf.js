import{_ as s,o,c as a,S as n}from"./chunks/framework.7f03344f.js";const y=JSON.parse('{"title":"7-3 记分板显示","description":"","frontmatter":{},"headers":[],"relativePath":"Volume7/7-3.md","filePath":"docs/Volume7/7-3.md","lastUpdated":1698403164000}'),t={name:"Volume7/7-3.md"},e=n(`<h1 id="_7-3-记分板显示" tabindex="-1">7-3 记分板显示 <a class="header-anchor" href="#_7-3-记分板显示" aria-label="Permalink to &quot;7-3 记分板显示&quot;">​</a></h1><p><s><em>图片选自网络。</em></s></p><p><img src="https://s2.loli.net/2022/04/15/pEkFN7zZ9bXvCxL.png" alt="SCB.png"></p><div class="tip custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 1028 1024&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M1018.319924 112.117535q4.093748 9.210934 6.652341 21.492179t2.558593 25.585928-5.117186 26.609365-16.374994 25.585928q-12.281245 12.281245-22.003898 21.492179t-16.886712 16.374994q-8.187497 8.187497-15.351557 14.32812l-191.382739-191.382739q12.281245-11.257808 29.167958-27.121083t28.144521-25.074209q14.32812-11.257808 29.679676-15.863275t30.191395-4.093748 28.656239 4.605467 24.050772 9.210934q21.492179 11.257808 47.589826 39.402329t40.425766 58.847634zM221.062416 611.554845q6.140623-6.140623 28.656239-29.167958t56.289041-56.80076l74.710909-74.710909 82.898406-82.898406 220.038979-220.038979 191.382739 192.406177-220.038979 220.038979-81.874969 82.898406q-40.937484 39.914047-73.687472 73.175753t-54.242167 54.753885-25.585928 24.562491q-10.234371 9.210934-23.539054 19.445305t-27.632802 16.374994q-14.32812 7.16406-41.960921 17.398431t-57.824197 19.957024-57.312478 16.886712-40.425766 9.210934q-27.632802 3.070311-36.843736-8.187497t-5.117186-37.867173q2.046874-14.32812 9.722653-41.449203t16.374994-56.289041 16.886712-53.730448 13.304682-33.773425q6.140623-14.32812 13.816401-26.097646t22.003898-26.097646z&#39;/%3E%3C/svg%3E" style="background-color:#057E3D;clip-path:circle();" width="24px" height="24px"> <strong>编者注</strong></p><p>有鉴于图床失效、原图丢失，上图系定稿后再行修补，并非「选自网络」。</p></div><p>这就是记分板，在单人游戏中几乎看不到（除非有意创建），能够显示玩家的分数，在原版中也可以通过命令进行修改。</p><blockquote><p>能够显示玩家的分数。</p></blockquote><p>上面这个说法具有误导性，正确的说法是：</p><blockquote><p>能够显示有样式的文本和数字。</p></blockquote><p>记分板中不支持 <code>BaseComponent</code> 的部分功能（包括最重要的 <code>setClickEvent</code>），因此记分板通常只被用来显示数据，而不被用来制作 GUI。要制作 GUI，可以考虑使用之前提到过的<strong>聊天栏原始 JSON 文本（<code>BaseComponent</code>）<strong>或者物品栏 GUI。由于 <code>BaseComponent</code> 可以用在</strong>成书</strong>中，也可以考虑在书本中写入 <code>BaseComponent</code> 来制作可点击的书页等等。</p><p>这里我们只介绍如何用记分板显示内容。</p><hr><p>Bukkit 中有关记分板的内容都位于 <code>org.bukkit.scoreboard</code> 包下。</p><p>首先我们来了解一下记分板的结构。</p><ul><li>一个玩家只能拥有一个<strong>记分板</strong>（<code>Scoreboard</code>），这是一个抽象的概念，玩家看不到</li><li>一个记分板中包含了许多「块」（<code>Objective</code>），「块」是真正显示在屏幕上的那个矩形</li><li>一个记分板中含有许多「项」（<code>Score</code>）</li><li>一个「项」由名称和分数组成</li></ul><p>大致就是这样的原理。</p><p>要创建记分板，首先我们需要获取<strong>记分板管理器</strong>（<code>ScoreboardManager</code>），这可以通过 <code>Bukkit.getScoreboardManager</code> 获得。</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">ScoreboardManager</span><span style="color:var(--shiki-color-text);"> manager </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">Bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getScoreboardManager</span><span style="color:var(--shiki-color-text);">();</span></span></code></pre></div><p>然后利用 <code>getNewScoreboard</code> 方法创建一个新的记分板：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">Scoreboard</span><span style="color:var(--shiki-color-text);"> scb </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">manager</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getNewScoreboard</span><span style="color:var(--shiki-color-text);">();</span></span></code></pre></div><p>这个记分板还是空的，里面没有「块」，我们来添加一个：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">Objective</span><span style="color:var(--shiki-color-text);"> obj </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">scb</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">registerNewObjective</span><span style="color:var(--shiki-color-text);">(</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-string-expression);">&quot;ID&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-string-expression);">&quot;dummy&quot;</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-constant);">ChatColor</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">GOLD</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;&quot;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">ChatColor</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">BOLD</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;闪亮的名字&quot;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p>这里有三个参数，第一个是<strong>内部名称</strong>，也就是代码中识别该「块」的名字，不会给玩家显示。</p><p>第二个是<strong>记分类型</strong>，Minecraft 提供了大量的类型用于进行各种自动记分，但<strong>那是针对原版的</strong>，现在我们有了 Java，还要这东西干啥？<code>dummy</code> 就是「不自动记分」，关闭这个功能。</p><p>第三个是「块」的标题，这里只能使用 <code>org.bukkit.ChatColor</code> 进行一些点缀，似乎并不能设置点击事件。记住，<strong>颜色放在格式前面，更改颜色时要再写一次格式（即使格式没有变化）</strong>！</p><p>然后我们为这个「块」设置显示位置：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-constant);">obj</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">setDisplaySlot</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">DisplaySlot</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">SIDEBAR</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p>唯一的参数有三个选择：</p><ul><li><code>SIDEBAR</code>，给玩家自己看的，显示在屏幕右侧</li><li><code>BELOW_NAME</code>，给其它玩家看的，显示在其它玩家名字的下方（头的上方），在 NPC 制作中比较有用</li><li><code>PLAYER_LIST</code>，没多大用，在玩家列表中显示，<s>这个连记分项都没有的说……</s></li></ul><p>所以一般我们都使用 <code>SIDEBAR</code> 来向（第一人称）玩家显示一些信息，或者用 <code>BELOW_NAME</code> 来设置一些 NPC 头顶上的文字。不论哪种，后面的设置方法都是一样的。</p><p>接下来我们在「块」（<code>Objective</code>）中创建「项」（<code>Score</code>）。一个分数就是一项。</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">Score</span><span style="color:var(--shiki-color-text);"> sc </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">obj</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getScore</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">ChatColor</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">AQUA</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;文本内容&quot;</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">sc</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">setScore</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">999</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p><code>getScore</code> 获得指定名字对应的 <code>Score</code> 对象，如果没有，它就会创建对应的。</p><p><code>setScore</code> 设置后面的数字，是就地修改，并且修改会自动应用到 <code>Objective</code> 中。数字几乎没什么用（除非你是真的在显示「分数」），数字越大该项就越靠上，通常用于排序。</p><p>如果要显示不止一项，那就再来一次 <code>getScore</code> 和 <code>setScore</code> 就可以了。</p><p>最后向玩家打开这个 <code>Scoreboard</code>：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// 此处举的是从事件获取玩家</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">e</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getPlayer</span><span style="color:var(--shiki-color-text);">()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">setScoreboard</span><span style="color:var(--shiki-color-text);">(scb);</span></span></code></pre></div><p>这样记分板就设置好了。</p><p>效果大概是这样的：</p><p><img src="https://s2.loli.net/2022/04/15/pEkFN7zZ9bXvCxL.png" alt="FINAL.png"></p><p>设置记分板时有些注意事项：</p><ul><li>记分板的名称以及 <code>getScore</code> 的标签长度<strong>不能超过 40 个字符</strong>，否则会出错。</li><li>创建记分板的全过程都需要<strong>同步进行</strong>，如果你是在<strong>异步事件处理</strong>或者类似的可能不是同步的地方，<strong>必须</strong>使用 <code>new BukkitRunnable() {...}.runTask(插件主类名.instance)</code> 创建一个新的线程进行同步执行。</li><li>如果通过 <code>getNewScoreboard</code> 创建了新的记分板，最后<strong>一定要记得给玩家 <code>setScoreboard</code> 来使记分板生效</strong>！</li></ul><hr><p><code>getScore</code> 设置的分数项文本，一经设定是<strong>无法修改</strong>的。只有右边的数字可以修改（<code>setScore</code>）。</p><p>那如果真的需要修改呢？那就把原来的删掉，换个新的呗……演示代码：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-constant);">scb</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">resetScores</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">ChatColor</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">AQUA</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;文本内容&quot;</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"><span style="color:var(--shiki-token-comment);">// 调用的是 Scoreboard 的 resetScores，不是 Objective 的！</span></span>
<span class="line"><span style="color:var(--shiki-token-comment);">// 参数是 getScore 时用的文本内容，需要原封不动地传入，「有借有还，还的时候要和借来的时候一样」</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">Score</span><span style="color:var(--shiki-color-text);"> sc2 </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">obj</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getScore</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">ChatColor</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">RED</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;新的文本&quot;</span><span style="color:var(--shiki-color-text);">); </span><span style="color:var(--shiki-token-comment);">// 这里才是 Objective 的！</span></span></code></pre></div><p>这里唯一需要注意的就是，创建分数时是通过 <code>Objective</code> 的 <code>getScore</code> 方法完成的，而移除分数时则是通过<strong>调用 <code>Scoreboard</code> 的 <code>resetScores</code> 方法</strong>，向其中传入设置时的标题（包括样式）完成的。</p><p>如果要修改一个记分「块」的标题，可以这样做：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-constant);">obj</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">setDisplayName</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">ChatColor</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">BLUE</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">+</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&quot;新的名称&quot;</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p><em>虽然这里我只使用了一个颜色，但实际使用时可以为每一个字（或者连续一些字）设置颜色样式，也可以不使用样式。顺便说一下，<code>ChatColor.RESET</code> 用于恢复到默认样式。</em></p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>小技巧</strong></p><p>一般在设计 RPG 插件时，我们会创建两个 <code>Objective</code>，一个显示给玩家（<code>DisplaySlot.SIDEBAR</code>），一个显示在玩家头上给别人看（<code>DisplaySlot.BELOW_NAME</code>）。</p><p>如果仅仅想把记分板用作显示信息的工具，那就只需要显示给玩家的那一个。</p><p>那么头上的文字有什么用呢？显示玩家血量，显示玩家的「职业」（有些 RPG 中会涉及），显示称号等等……用处可大了！</p></div><hr><p>最后，要注销一个记分「块」（<code>Objective</code>）并移除其中的所有数据，可以使用：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-constant);">obj</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">unregister</span><span style="color:var(--shiki-color-text);">();</span></span></code></pre></div><p>这里调用的也是 <code>Objective</code> 对象的方法。</p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>一点小问题</strong></p><p>上面这些代码的运行都很正常，但如果你频繁刷新显示的名称（例如，将记分项用作计时器，每秒更新一次时间显示），记分板就会闪烁，这是一边擦除一边设置的结果。</p><p>这个问题实际上有解决方案，但是如果要细说，我们还要牵扯 <code>Team</code> 在内的一堆东西，本小马自己也不是很了解，为了避免误导各位，我就暂时不讲了。</p><p>不过大家别沮丧，我在 RarityCommons 中添加了这个问题的解决方案（这是我后来加上的，6-3 中还没有实现这个功能），这个方法来自 Spigot 论坛，我稍微进行了一些修改，你可以查看 <a href="https://github.com/Andy-K-Sparklight/PluginDiaryCode/tree/master/RarityCommons/src/main/java/rarityeg/commons" target="_blank" rel="noreferrer">RarityCommons 的源代码</a>，看看其中的 <code>ScoreHelper</code> 类。</p></div><p>这就是有关记分板的全部内容了，记分板是个有用的东西，值得好好利用。</p>`,56),r=[e];function c(l,p,i,k,v,d){return o(),a("div",null,r)}const u=s(t,[["render",c]]);export{y as __pageData,u as default};