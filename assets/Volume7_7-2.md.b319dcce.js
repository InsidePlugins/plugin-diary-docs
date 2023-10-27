import{_ as s,o as n,c as o,S as a}from"./chunks/framework.7f03344f.js";const d=JSON.parse('{"title":"7-2 自定义事件","description":"","frontmatter":{},"headers":[],"relativePath":"Volume7/7-2.md","filePath":"docs/Volume7/7-2.md","lastUpdated":1698403164000}'),t={name:"Volume7/7-2.md"},e=a(`<h1 id="_7-2-自定义事件" tabindex="-1">7-2 自定义事件 <a class="header-anchor" href="#_7-2-自定义事件" aria-label="Permalink to &quot;7-2 自定义事件&quot;">​</a></h1><p>Bukkit 为我们提供了一些事件，虽然对于原版而言是够用了，但对于插件的二次开发，这还是不够用的，举个例子，在登录插件中，玩家登录成功事件，怎么监听？如果采用各自定义的 API，就会使得开发变得极其麻烦。</p><p>有鉴于此，插件开发社区达成了一个共识：<strong>对于插件内有价值的事件，采用自定义事件进行触发</strong>。</p><p>自定义事件实际上和药水效果很像，都是通过「暴力地」直接继承某个 Bukkit 的对象。</p><h2 id="创建事件类" tabindex="-1">创建事件类 <a class="header-anchor" href="#创建事件类" aria-label="Permalink to &quot;创建事件类&quot;">​</a></h2><p>如果你忘了事件处理的相关内容，请重新看一看 2-2。</p><p>所有的事件都继承了 <code>Event</code> 类，<code>Event</code> 类下还有 <code>PlayerEvent</code>、<code>InventoryEvent</code> 等抽象类和 <code>PlayerInteractEvent</code> 这样的具体可监听的类。</p><p>要进行自定义事件，我们需要找一个<strong>最近似的类</strong>进行继承。比如，如果你的事件与玩家有关，那就继承 <code>PlayerEvent</code>，更进一步，如果你的事件与玩家登录都有关，那就继承 <code>PlayerLoginEvent</code>。</p><p>下面我们就以 HarmonyAuth SMART 中的「登录成功」事件为例，演示自定义事件的方法。</p><p>首先创建一个类用于描述这个事件，虽然这个事件叫做「登录成功」，但它和 <code>PlayerLoginEvent</code> 却没什么关联，因此我们不继承它，而只继承 <code>PlayerEvent</code> 这个抽象类。</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">package</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">rarityeg</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">harmonyauthsmart</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">org</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">entity</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">Player</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">org</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">event</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">Cancellable</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">org</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">event</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">HandlerList</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">org</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">event</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">player</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">PlayerEvent</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">javax</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">annotation</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">Nonnull</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HASPlayerLoginEvent</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">PlayerEvent</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">implements</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">Cancellable</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 是个可取消事件，需要实现 Cancellable</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">private</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">static</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">final</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">HandlerList</span><span style="color:var(--shiki-color-text);"> handlers </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HandlerList()</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// handlers 是与这个类挂钩的处理器们</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">private</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">boolean</span><span style="color:var(--shiki-color-text);"> isCancelled </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">false</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 是否取消标志位</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">protected</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">final</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">boolean</span><span style="color:var(--shiki-color-text);"> isAutoLogin;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 我们自己实现的功能——是否是自动登录</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">    @</span><span style="color:var(--shiki-token-keyword);">Override</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    @</span><span style="color:var(--shiki-token-keyword);">Nonnull</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">HandlerList</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">getHandlers</span><span style="color:var(--shiki-color-text);">() {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// 事件对象的「获取处理器」方法</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);"> handlers;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">static</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">HandlerList</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">getHandlerList</span><span style="color:var(--shiki-color-text);">() {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// 事件类的「获取处理器」方法</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);"> handlers;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HASPlayerLoginEvent</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-keyword);">Player</span><span style="color:var(--shiki-color-text);"> p) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// 构造方法</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        super(p</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">true</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">    @</span><span style="color:var(--shiki-token-keyword);">Override</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">boolean</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">isCancelled</span><span style="color:var(--shiki-color-text);">() {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// Cancellable 需要</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);"> isCancelled;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-color-text);">    @</span><span style="color:var(--shiki-token-keyword);">Override</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">void</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">setCancelled</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-keyword);">boolean</span><span style="color:var(--shiki-color-text);"> b) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// Cancellable 需要</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        isCancelled </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> b;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">boolean</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">isAutoLogin</span><span style="color:var(--shiki-color-text);">() {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// 自己添加的功能</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);"> isAutoLogin;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><p>这里的 <code>HandlerList</code> 需要进行一些说明。</p><p><code>getHandlers</code>，<code>getHandlerList</code>（静态）是<strong>必不可少</strong>的方法，Bukkit 利用这个表来记录这个事件类有哪些处理器。<code>getHandlers</code> 是成员方法，用于在事件实例上获取这张表，而 <code>getHandlerList</code> 是静态方法，用于从这个类本身获取这张表。</p><p>另外请记住，<strong>有 <code>getHandlerList</code> 这个静态方法的类才可以被监听</strong>。</p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>到底怎么回事</strong>？</p><p>当有事件发生时，Bukkit 或者插件会创建这个事件的一个实例，之后 Bukkit 看着 <code>getHandlers</code> 方法决定要将这个事件实例分配给哪些处理器，这就是 <code>getHandlers</code> 的由来。</p><p>那为什么需要 <code>getHandlerList</code> 这个静态方法呢？</p><p>回想一下我们监听事件时，我对事件处理函数的描述：「（事件处理函数的）函数名不重要，重要的是<strong>参数类型</strong>」。</p><p>在注册事件处理器时，<strong>事件实例还没有出现</strong>（因为事件还没有发生），但是此时事件处理器急着要注册，Bukkit 必须找个地方记录那些处理函数，Bukkit 的选择就是<strong>在事件所属的类中进行记录</strong>，对应的方法就是 <code>getHandlerList</code>。</p><p>由于「该变量（<code>handlers</code>）<strong>不属于哪个对象，属于整个类共有</strong>」（参见 2-1），因此所有的该类事件实例都<strong>共享这个表</strong>，那么它们自然就具有了<strong>相同的事件处理器</strong>（即，每个事件都被公平对待）。</p><p>这样就很明白啦，有 <code>getHandlerList</code> 方法的类，Bukkit 可以将事件处理函数写在其中，那也就是<strong>可以监听</strong>嘛，反之，如果没有这个方法，那 Bukkit 没办法记住这个类有哪些处理函数，那不就是<strong>不可监听</strong>嘛。</p></div><p>如果看不懂以上内容也没关系，总之，记住，<strong>要自定义事件，<code>getHandlers</code> 和 <code>getHandlerList</code> 是必须的</strong>，当作固定格式来写就好啦。</p><p>另外，事件的取消并不是在事件中完成的，而是由事件的分发者查看<strong>取消标志</strong>来决定后续的处理，下面就会看到。</p><p>我们还为这个事件添加了属于我们的一些功能，例如 <code>isAutoLogin</code> 来查看这次登录是否是自动登录。自定义自定义嘛，有额外的功能也很重要。</p><h2 id="分发事件和取消事件" tabindex="-1">分发事件和取消事件 <a class="header-anchor" href="#分发事件和取消事件" aria-label="Permalink to &quot;分发事件和取消事件&quot;">​</a></h2><p>接下来我们需要在我们的代码中考虑什么时候触发这个事件。想一想，我们的插件中，哪个时机适合触发「登录成功」事件？自然是玩家切实登录成功的适合嘛。</p><p><em>触发事件时一定要遵循实事求是的原则。</em></p><p>HarmonyAuth SMART 中只有三个地方判定玩家切实登录，一个是登录命令，一个是注册命令，还有一个是自动登录。我们的修改如下：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// 登录命令节选</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-color-text);"> (</span><span style="color:var(--shiki-token-constant);">idm</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getPasswordHash</span><span style="color:var(--shiki-color-text);">(id)</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">equals</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">Util</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">calculateMD5</span><span style="color:var(--shiki-color-text);">(args[</span><span style="color:var(--shiki-token-constant);">0</span><span style="color:var(--shiki-color-text);">]))) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 当玩家密码正确时，登录</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">HASPlayerLoginEvent</span><span style="color:var(--shiki-color-text);"> event </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HASPlayerLoginEvent(player</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-token-function);"> </span><span style="color:var(--shiki-token-constant);">false</span><span style="color:var(--shiki-token-function);">)</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 创建事件实例，不是自动登录，填 false</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-constant);">Bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getPluginManager</span><span style="color:var(--shiki-color-text);">()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">callEvent</span><span style="color:var(--shiki-color-text);">(event);</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 让 Bukkit 分发事件</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-color-text);"> (</span><span style="color:var(--shiki-token-constant);">event</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">isCancelled</span><span style="color:var(--shiki-color-text);">()) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-comment);">// 看看，如果这个事件被取消了，就不执行后面的玩家登录操作</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-function);">sti(id)</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 后略</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// 注册命令节选</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-color-text);"> (</span><span style="color:var(--shiki-token-constant);">args</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">length</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">&lt;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">2</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">||</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">!</span><span style="color:var(--shiki-color-text);">args[</span><span style="color:var(--shiki-token-constant);">0</span><span style="color:var(--shiki-color-text);">]</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">equals</span><span style="color:var(--shiki-color-text);">(args[</span><span style="color:var(--shiki-token-constant);">1</span><span style="color:var(--shiki-color-text);">])) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-constant);">player</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">sendMessage</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-constant);">Util</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getAndTranslate</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;msg.register-failed&quot;</span><span style="color:var(--shiki-color-text);">));</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-function);">sti(id)</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span>
<span class="line"><span style="color:var(--shiki-token-comment);">// 密码一致，注册成功</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">HASPlayerLoginEvent</span><span style="color:var(--shiki-color-text);"> event </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HASPlayerLoginEvent(player</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-token-function);"> </span><span style="color:var(--shiki-token-constant);">false</span><span style="color:var(--shiki-token-function);">)</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-token-constant);">Bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getPluginManager</span><span style="color:var(--shiki-color-text);">()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">callEvent</span><span style="color:var(--shiki-color-text);">(event);</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-color-text);"> (</span><span style="color:var(--shiki-token-constant);">event</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">isCancelled</span><span style="color:var(--shiki-color-text);">()) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-function);">sti(id)</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// 自动登录的处理</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-color-text);"> (seconds </span><span style="color:var(--shiki-token-keyword);">&lt;=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">HarmonyAuthSMART</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-constant);">instance</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getConfig</span><span style="color:var(--shiki-color-text);">()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getInt</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;auto-login&quot;</span><span style="color:var(--shiki-color-text);">)) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">HASPlayerLoginEvent</span><span style="color:var(--shiki-color-text);"> event </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">new</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HASPlayerLoginEvent(</span><span style="color:var(--shiki-token-constant);">e</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getPlayer()</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-token-function);"> </span><span style="color:var(--shiki-token-constant);">true</span><span style="color:var(--shiki-token-function);">)</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// 这次是自动登录</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-constant);">Bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">getPluginManager</span><span style="color:var(--shiki-color-text);">()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">callEvent</span><span style="color:var(--shiki-color-text);">(event);</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">if</span><span style="color:var(--shiki-color-text);"> (</span><span style="color:var(--shiki-token-constant);">event</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">isCancelled</span><span style="color:var(--shiki-color-text);">()) {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-keyword);">return</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-comment);">// ... 后略</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><p>这样我们的自定义事件就做好啦！以后就可以通过 <code>@EventHandler</code> 来监听它了啦~</p><p>要注意的一点是，<code>callEvent</code> 方法应当<strong>尽可能的开新线程处理</strong>（<code>runTask</code>），对于不可取消事件（即丢出去就不用再管的）更是应当如此。</p><p>因为谁也不知道这个事件上面挂了些什么处理函数，要是有一个函数阻塞了（如等待数据库），你的 <code>callEvent</code> 就可能会卡在那里，虽然 Bukkit 具有识别这种情况的能力，但这个风险还是尽量避免。</p><p>那上面的例子中为什么没有这样做呢？是因为「查询数据库」这一操作本来就已经在异步执行了，并且我们还需要判断事件有没有取消来决定让不让玩家登录，因此我们只好等等。</p><p><em>异步处理的本质就像「你慢慢弄，我来不及了，我先走了，一会再见」，而同步处理就像「快点快点，我等着你在」。在上面的例子中，如果要取消玩家的登录，就必须等待事件处理完成后查看有没有被取消，用异步实现就没有必要了。</em></p><h2 id="api-打包方法" tabindex="-1">API 打包方法 <a class="header-anchor" href="#api-打包方法" aria-label="Permalink to &quot;API 打包方法&quot;">​</a></h2><p>通常情况下我们希望能够让其它开发者能够使用我们的事件，因此我们希望将它包括到 API 中。</p><p>不过这个事件是一个类，不是接口啊，看上去也不好注册什么服务，怎么打包呢？</p><p><strong>直接将这个类移动到 API 中（本体中需要删除，然后以 API 为依赖，重新导入这个类），编译即可</strong>。</p><p>不需要注册服务，不需要进行任何其它的操作。</p><p>为什么呢？</p><p>首先，我们创建了这个事件，这个类<strong>没有使用本体中的类</strong>（仅仅调用了 Bukkit API）。</p><p>然后，这个事件在 HarmonyAuth SMART 将来的开发中，相当一段时间内都不会改变。</p><p>因此，我们可以直接将这个类打包到 API 中，因为监听事件本质上也不需要知道这个事件怎么触发，只需要知道这个事件的类就行了，我们就将它提供给开发者。</p><p>再说说服务和接口的意义吧，AC-2 中的 API 实际上本质就是<strong>通过接口和服务将「不变的部分」从「可变的部分」中「解放」出来</strong>，既然这个类<strong>本身就是「不变的」</strong>，并且也和「可变的部分」没有什么关联，那么我们也<strong>不需要「解放」</strong>，直接打包就可以了。</p><p>当然，如果你的事件类中包含了本体中其它的类（或者乃至其它插件的 API），那么那些类中「可变的」部分需要和 AC-2 中一样，抽象成接口，用本体实现，注册服务等等；「不变的」自然也可以直接打包。</p><p><em>实际上也就是「要解放我，先解放我依赖的那些」，就像移植树木需要先把根挖出来一样。</em></p><hr><p>这就是自定义事件的方法了，在后面的插件开发中我们还会见到它的。</p>`,44),l=[e];function r(p,i,c,k,y,v){return n(),o("div",null,l)}const u=s(t,[["render",r]]);export{d as __pageData,u as default};
