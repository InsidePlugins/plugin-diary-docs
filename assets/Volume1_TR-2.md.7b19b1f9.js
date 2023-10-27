import{_ as o,o as s,c as a,S as e,k as n}from"./chunks/framework.7f03344f.js";const u=JSON.parse('{"title":"TR-2 究竟做了些什么","description":"","frontmatter":{},"headers":[],"relativePath":"Volume1/TR-2.md","filePath":"docs/Volume1/TR-2.md","lastUpdated":1698403164000}'),t={name:"Volume1/TR-2.md"},l=e(`<h1 id="tr-2-究竟做了些什么" tabindex="-1">TR-2 究竟做了些什么 <a class="header-anchor" href="#tr-2-究竟做了些什么" aria-label="Permalink to &quot;TR-2 究竟做了些什么&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>该部分内容适合新手</strong></p><p>如果你发现其中内容过于简单，请考虑<strong>跳过以 TR 标识的章节</strong>。</p></div><p>我们一步步分析，看看前面两节，你都做了哪些伟大的事情。</p><h2 id="创建了一个包" tabindex="-1">创建了一个包 <a class="header-anchor" href="#创建了一个包" aria-label="Permalink to &quot;创建了一个包&quot;">​</a></h2><p>首先，你点击「New」、「Package」，这是在告诉 IDEA：「帮我创建一个包！」。</p><p>IDEA 当然愿意帮你，但是它需要知道你的<strong>包名</strong>（Package Name）是什么。</p><p>建立包就是在 Java 的世界中申请了一个空间，因此你需要给包提供名字。不然 Java 分不清哪个是哪个，那可就乱套了。</p><p>你输入的是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">rarityeg.helloworld</span></span></code></pre></div><p>这段文字可以被看作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">&lt;名字&gt;.&lt;名字&gt;</span></span></code></pre></div><p>每个「名字」都是一个包。所以这个标题应该改成「创建了两个包」，我们实际上是先创建了一个名为 <code>rarityeg</code> 的包，又在其中创建了一个名为 <code>helloworld</code> 的包。</p><p>那么包到底有什么用呢？它可以使得我们编写的类被合理地放到各个地方去，便于查找。例如，<code>helloworld</code> 这个包，别人一看就知道里面包含着「Hello World」的代码，如果不使用包，或者改名为 <code>asu7fg35a435w43f</code> 这样的名字，就乱成一团啦！</p><p>点（<code>.</code>）用来分隔各个包。</p><h2 id="创建了一个类" tabindex="-1">创建了一个类 <a class="header-anchor" href="#创建了一个类" aria-label="Permalink to &quot;创建了一个类&quot;">​</a></h2><p><strong>类</strong>（Class）是存放信息的地方。是 Java 代码运行的地方。</p><p>你通过「New」、「Java Class」指示 IDEA 创建一个类，它为你做了，按照你输入的名字 <code>HelloWorld</code>。这是<strong>类名</strong>（Class Name），类名遵循 <strong>Java 标识符规范</strong>：</p><ul><li>只能由大小写字母，数字，<code>$</code> （美元符）和 <code>_</code>（下划线） 构成，其中数字不能用于开头</li><li>不能使用<strong>关键字</strong>（Keyword）</li></ul><p>但是，为了使名字看上去易懂，我们采用<strong>帕斯卡命名法</strong>：</p><ul><li>所有的单词的首字母大写，其余字母小写</li></ul><p>这样就给类取了名字。</p><p>那到底什么是类呢？</p><p><em>此处内容引用自 <a href="https://www.runoob.com/java/java-basic-syntax.html" target="_blank" rel="noreferrer">RUNOOB Java 教程</a>。</em></p><blockquote><p>一个 Java 程序可以认为是一系列对象的集合，而这些对象通过<strong>调用</strong>（Call）彼此的方法来协同工作。</p><ul><li><strong>对象</strong>（Object）：对象是类的一个实例，有状态和行为。例如，一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。</li><li><strong>类</strong>（Class）：类是一个模板，它描述一类对象的行为和状态。</li><li><strong>方法</strong>（Method）：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。</li><li><strong>实例变量</strong>（Instance Variable）：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。</li></ul></blockquote><p>Minecraft 里面有很多东西，如果把它们全都理解为对象，再按照上面的办法处理，是不是就显得很轻松了呢？</p><p>那我们这里创建的 <code>HelloWorld</code> 类代表的又是什么呢？</p><p>是<strong>插件本身</strong>。</p><p><code>HelloWorld</code> 代表了我们这个插件，我们画出了一张蓝图（类），把插件的信息全部写在上面，然后交给了 Java 和 Bukkit。Bukkit 按照我们的蓝图，盖了个房子（对象），然后开始处理。</p><p>请记住：在 Java 中，我们只能画蓝图（定义类），这叫<strong>开发</strong>（Development），盖房子（创建对象）这样的工作我们在开发时没法做，那是 Java 在<strong>运行时</strong>（Runtime）要做的事情。</p><p>接下来我们继续往下看。</p><p>创建类时，IDEA 为我们自动补全了如下内容：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">package</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">rarityeg</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">helloworld</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HelloWorld</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><p>代码是一行一行写出来的，我们也要一行一行读。</p><p>第一个是 <code>package</code> 语句。</p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>什么是语句</strong>？</p><p>从上一个分号开始，到下一个分号为止，是一个语句。以大括号括起来的部分作为一个整体，和其它部分放在一起，即使后面没有分号，也是一个语句。</p><p>例如：<code>int i = 5;</code> 是一个语句，<code>if (a == 6){语句;语句;}</code> 中虽然含有多个语句，但 <code>{}</code> 将它们括在一起，与前面的 <code>if</code> 等部分一起，这是一个语句。</p><p>对了！语句的最后必须有一个分号（<code>;</code>），Java 用分号来识别一般语句的结束，所以一般不能省略分号，只有 <code>}</code> 作为语句的结尾时才可以省略分号。<s>这种事情多写写代码就知道了</s></p></div><p><code>package</code> 语句用于指定这个类属于哪个包。这就像房子在那里，你住进去后还要改写户口本一样。</p><p>接下来的 <code>public class HelloWorld {}</code> 整体是一个语句。这表示「定义类」，<code>class</code> 是用于定义类的<strong>关键字</strong>（Keyword），<code>public</code> 是访问修饰符，<code>HelloWorld</code> 是类的<strong>标识符</strong>（Identifier），大括号内是类的内容。</p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>什么是关键字</strong>？</p><p>关键字是用于实现指定功能而约定好的字符，它们有各自的功能。这里的 <code>class</code> 关键字的作用就是「定义一个类」，编译器看到它，就知道：「哦，要定义一个类了，应该怎么怎么样……」</p></div><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>什么是访问修饰符</strong>？</p><p>在 Java 中，类的有些数据是只给自己用的，有些是公开的，为了保证数据安全，Java 设计了<strong>访问修饰符</strong>。<code>public</code> 表示「公共」，意思就是：「<code>HelloWorld</code> 这个类是公开的，大家随意使用哈~」</p></div><p>此外，你还会发现顶部的标题栏中写着 <code>HelloWorld.java</code>，为什么这和类的名字一样呢？</p><p><strong>因为这是 Java 的规范</strong>。类的名字和文件名<strong>必须相同</strong>，想想也是，如果我在家门口挂上混乱的名字，那就是撒谎造假，万万不能容忍！除此之外，一山不容二虎，一份文件中<strong>绝不能有两个公共类</strong>，不然 Java 就疯掉啦！</p><h2 id="继承了-javaplugin" tabindex="-1">继承了 <code>JavaPlugin</code> <a class="header-anchor" href="#继承了-javaplugin" aria-label="Permalink to &quot;继承了 \`JavaPlugin\`&quot;">​</a></h2><p>到目前为止，代码都是由工具生成的，下面才是我们自己输入的第一份。</p><p>改动后的代码像这样：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">package</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">rarityeg</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">helloworld</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">org</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">bukkit</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">plugin</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">java</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-keyword);">JavaPlugin</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">class</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">HelloWorld</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">extends</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">JavaPlugin</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    @</span><span style="color:var(--shiki-token-keyword);">Override</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">void</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">onEnable</span><span style="color:var(--shiki-color-text);">() {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">        </span><span style="color:var(--shiki-token-function);">getLogger()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;Hello, world!&quot;</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><p>首先大家把目光放到 <code>import</code> 上。还记得吗？我们说过有些代码已经由别人为我们写好了，那叫什么？对，那是<strong>轮子</strong>，<code>import</code> 的意思是「导入」，也就是告诉 Java：「我们现在要用这个 <code>JavaPlugin</code> 啦，请你帮我们找一下。」</p><p>这里我们给出的是完整的类路径。因为我们要导入的这个类并不在我们自己的空间中，Bukkit 的开发人员使用了名为 <code>org.bukkit</code> 的包，Bukkit 的分类工作很仔细，开发者们精心地将我们需要的类放在了 <code>org.bukkit.plugin.java</code> 下。</p><p>接下来我们来看 <code>extends</code> 关键字。这表示「继承」。什么是继承呢？</p><p><em>此处内容引用自 <a href="https://www.runoob.com/java/java-basic-syntax.html" target="_blank" rel="noreferrer">RUNOOB Java 教程</a>。</em></p><p><img src="https://www.runoob.com/wp-content/uploads/2013/12/14B0951E-FC75-47A3-B611-4E1883887339.jpg" alt="EXTENDS.jpg"></p><p>「食草动物」继承了「动物」，「食肉动物」也继承了「动物」，它们都具有和「动物」类一样的方法。</p><blockquote><p>继承需要符合的关系是：子类 is a 父类，父类更通用，子类更具体。</p><p>虽然食草动物和食肉动物都是属于动物，但是两者的属性和行为上有差别，所以子类会具有父类的一般特性也会具有自身的特性。</p></blockquote><p>这里就相当于，<code>JavaPlugin</code> 是一幅蓝图，已经画好了插件的基本结构，我们把它 Copy 过来，在上面进行一些自定义的修改。我们不用操心插件是怎么被 Bukkit 加载的，因为 <code>JavaPlugin</code> 中已经为我们写好了。</p><p>那你应该知道后面的 <code>JavaPlugin</code> 是什么了吧？这又是一个标识符。为什么这里不需要写长长的 <code>org.bukkit.plugin.java</code> 呢？Java 很聪明，已经导入的内容，它会帮我们「记住」。这就像你去朋友家玩，第一次需要知道哪个区哪条道几单元几零几，第二次还需要那么麻烦吗？</p><h2 id="定义了方法" tabindex="-1">定义了方法 <a class="header-anchor" href="#定义了方法" aria-label="Permalink to &quot;定义了方法&quot;">​</a></h2><p>再往下看，大家先忽略 <code>@Override</code> 注解，看看这个部分：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">public</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">void</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">onEnable()</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    </span><span style="color:var(--shiki-token-function);">getLogger()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;Hello, world!&quot;</span><span style="color:var(--shiki-color-text);">);</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span></code></pre></div><p>这就是定义了方法。那这里为什么没有像 <code>public method onEnable</code> 这样的 <code>method</code> 关键字呢？</p><p><strong>不需要</strong>。有且仅有方法的名字后面有一对小括号 <code>()</code>，既然这样就可以识别出来，那为什么还要多一个关键字呢？浪费空间吗？所以，没有 <code>method</code> 关键字。</p><p><em>方法有时也被称为<strong>函数</strong>（Function），它们是一样的。我会尽可能按 Java 规范使用「方法」一词，但如果我说「函数」，你要知道我说的就是「方法」。</em></p><p><code>public</code> 表示「<code>onEnable</code> 方法是公共的，可以被随意使用哦~」</p><p><code>void</code> 是一个新词汇。这是啥东西？</p><p>这是<strong>返回值</strong>（Return Value）的类型。想想你在初中数学中学到的函数，它是不是进行了一系列计算最后得出一个结果呢？结果就叫返回值。<code>void</code> 表示「这个函数的返回值为空」或「这个函数不需要返回值」。如果这里不是 <code>void</code>，这里应当填写返回值所属的类（返回值也是一个对象啊）。</p><p><em>现在你应该能够隐隐约约感受到面向对象的感觉了吧？任何东西都可以使用对象来表示，并用抽象的类来描述。</em></p><p>小括号内是<strong>参数</strong>（Argument），参数可以有一个，可以没有，也可以有很多。不同于返回值，这里如果没有参数，不写就可以了，没必要写一个 <code>void</code>。</p><p>紧接着小括号后面的是一对大括号 <code>{}</code>，大括号里面的内容就是<strong>方法体</strong>（Method Body）。方法体中含有一堆语句，当这个方法被调用时，Java 就会自动执行其中的每条语句。</p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>什么是调用</strong>？</p><p><strong>调用</strong>（Call）表示「使用」。这个方法好不容易写好了，以后可以在各种地方使用了，使用方法就被称为<strong>调用</strong>，与此相对的，我们现在正在做的就是<strong>定义</strong>（Define）方法。</p></div><p>那么我们再看看大括号里面的内容：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-function);">getLogger()</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;Hello, world!&quot;</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p>这条语句实际上可以被拆成两个部分：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-function);">getLogger()</span></span></code></pre></div><p>和</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">&lt;</span><span style="color:var(--shiki-color-text);">上面那个方法的返回值</span><span style="color:var(--shiki-token-keyword);">&gt;</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;Hello, world!&quot;</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p>第一部分是一个方法调用，调用了 <code>getLogger</code> 方法。等一下，这个方法在哪里？我怎么没见到它？</p><p><code>getLogger</code> 实际上是 <code>JavaPlugin</code> 的一个方法。由于我们已经继承了 <code>JavaPlugin</code>，Java 会认为：「这已经是一家人了，就请随意使用吧。」于是我们就可以使用 <code>getLogger</code> 了。</p><p>那这为什么就表示「调用」呢？因为我们在 <code>getLogger</code> 后面加了一对括号 <code>()</code>。看到括号，Java 就认为：「需要的东西都准备好啦，不这个时候开始，什么时候开始？」于是就调用了这个方法。</p><p>这个方法执行后返回一个 <code>Logger</code> 的实例，也就是一个日志记录器。</p><p><em>这里再次体现了面向对象的思想。</em></p><p>那么我们做一个等量代换，把刚刚的第二部分：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">&lt;</span><span style="color:var(--shiki-color-text);">上面那个方法的返回值</span><span style="color:var(--shiki-token-keyword);">&gt;</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;Hello, world!&quot;</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p>里面 <code>&lt;上面那个方法的返回值&gt;</code> 换成 <code>&lt;一个日志记录器&gt;</code>：</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">&lt;</span><span style="color:var(--shiki-color-text);">一个日志记录器</span><span style="color:var(--shiki-token-keyword);">&gt;</span><span style="color:var(--shiki-token-punctuation);">.</span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-color-text);">(</span><span style="color:var(--shiki-token-string-expression);">&quot;Hello, world&quot;</span><span style="color:var(--shiki-color-text);">);</span></span></code></pre></div><p>哦！这就很明白啦，我们使用了获得的日志记录器中的 <code>info</code> 方法。</p><div class="info custom-block"><p class="custom-block-title"><img src="data:image/svg+xml,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39; transform=&#39;scale(0.6)&#39; fill=&#39;%23fff&#39;%3E%3Cpath d=&#39;M9.1 0C10.2 0 10.7 0.7 10.7 1.6 10.7 2.6 9.8 3.6 8.6 3.6 7.6 3.6 7 3 7 2 7 1.1 7.7 0 9.1 0Z&#39;/%3E%3Cpath d=&#39;M5.8 16C5 16 4.4 15.5 5 13.2L5.9 9.1C6.1 8.5 6.1 8.2 5.9 8.2 5.7 8.2 4.6 8.6 3.9 9.1L3.5 8.4C5.6 6.6 7.9 5.6 8.9 5.6 9.8 5.6 9.9 6.6 9.5 8.2L8.4 12.5C8.2 13.2 8.3 13.5 8.5 13.5 8.7 13.5 9.6 13.2 10.4 12.5L10.9 13.2C8.9 15.2 6.7 16 5.8 16Z&#39;/%3E%3C/svg%3E" style="background-color:#0B87DA;clip-path:circle();" width="24px" height="24px"> <strong>这个点是什么</strong>？</p><p><code>.</code> 在 Java 中表示「的」。把 <code>&lt;一个日志记录器&gt;.info</code> 翻译过来就是：一个日志记录器「的」<code>info</code> 方法。不是你的，不是我的，不是随便一个日志记录器的，而是<strong>那个</strong>日志记录器「的」。</p></div><p>再往下看。</p><p><code>info</code> 方法后同样有一对 <code>()</code>，这也表示「调用」。那为什么 <code>()</code> 里面还放进了奇怪的东西呢？</p><p>这是<strong>参数</strong>。<code>info</code> 方法在定义时就规定好了需要一个 <code>String</code> 类型的参数。也就是这个意思：「要我来帮忙？可以，但是，你要给我东西。」</p><p><code>info</code> 只需要一个 <code>String</code> 就可以运行了。等等，哪里有 <code>String</code> 啊？</p><p><code>String</code> 实际上是一个 <strong>Java 内置类型</strong>，简单说来就像论坛的元老们一样。内置类型和 Java 的关系很铁，Java 一直都认识它。<code>String</code> 用于描述一个<strong>字符串</strong>，那么按照 Java 规范，用引号 <code>&quot;&quot;</code> 夹在两侧就可以使得文字成为字符串。所以这里 <code>&quot;Hello, world!&quot;</code> 就是一个字符串。我们相当于提供了一个 <code>String</code> 给 <code>info</code>。好啦，这样 <code>info</code> 就愉快地完成了交易，开始干活了。</p><p>对了！一个语句的末尾需要有分号，所以千万不要忘掉了分号哦！</p><h2 id="重写标记" tabindex="-1">重写标记 <a class="header-anchor" href="#重写标记" aria-label="Permalink to &quot;重写标记&quot;">​</a></h2><p>现在我们回过头看 <code>@Override</code> 注解。这是啥子意思？</p><p><code>@Override</code> 表示「覆盖」。还是举蓝图的例子。我们复制了这份蓝图，可以在上面加自己喜欢的东西。但是我突然看到蓝图上面有一点画得不好，这可怎么办啊，要是能自己来画就好了。</p><p>Java 为我们提供了这一功能，它叫<strong>重写</strong>（Override）。重写的作用就是允许子类重新定义父类的方法。</p><p>要使用重写很简单：</p><ol><li>在子类中编写相同的方法，访问修饰符要兼容，返回值要一样，名字（标识符）要一样，参数的顺序和类型也要一样。（要做修改，你要告诉我改哪里啊）</li><li>在方法的定义的前面，加上 <code>@Override</code> 注解。注解可以认为是「可以自己定义的关键字」。和关键字的功能差不多。<code>@Override</code> 注解表示「这里要重写函数了，各位，注意一下！」</li></ol><p>至于 Java 到底是怎么帮我们「擦掉」原来的方法，又是怎么「画上」新的方法，我们不需要在意。这项工作是 Java 来完成的。</p><p>那为什么这里我们能够改写 <code>onEnable</code> 呢？你可能已经知道了——定义在 <code>JavaPlugin</code> 里面了嘛！</p><h2 id="plugin-yml" tabindex="-1"><code>plugin.yml</code> <a class="header-anchor" href="#plugin-yml" aria-label="Permalink to &quot;\`plugin.yml\`&quot;">​</a></h2><p><code>plugin.yml</code> 是一个数据文件，这也意味着它不是 Java 管理的，所以大家可以松一口气了。这种以 <code>.yml</code> 结尾的文件叫做 YAML 文件，设计它的目的是存储和描述数据。</p><p>YAML 像字典一样。左边是<strong>键</strong>（Key），右边是<strong>值</strong>（Value），中间用冒号和一个空格分开。</p><p>因此再来看我们的文件，不难理解了吧？</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">name</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">HelloWorld</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">main</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">rarityeg.helloworld.HelloWorld</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">version</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">1.0</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">api-version</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">1.16</span></span></code></pre></div><p>Bukkit 在读取我们的插件时，会在这部字典里面查找 <code>name</code>、<code>main</code> 等信息。我们需要把这些告诉 Bukkit。因此我们填写了这些数据。</p><p><code>main</code> 指向的是一个类，和上面 <code>import</code> 时一样需要详细的路径，因为 Bukkit 并不知道我们的家在哪里，所以我们要把地址给它。</p><p><code>version</code> 指定了插件的版本，一个插件发布后可能有更新，Bukkit 依照这个来判断插件是否有更新的版本。</p><p><code>api-version</code> 是 Bukkit API 的版本。这主要是为了兼容而设计的。我们的插件最终可能不是在最合适的版本中运行，其它版本的 Bukkit 会根据 <code>api-version</code> 决定如何加载这个插件。</p><h2 id="战后总结" tabindex="-1">战后总结 <a class="header-anchor" href="#战后总结" aria-label="Permalink to &quot;战后总结&quot;">​</a></h2><p>哇！这一节我们讲了好多东西！你学到了这些：</p><ul><li>什么是包，如何创建包</li><li>什么是类，如何创建类</li><li>什么是方法，如何定义方法</li><li>什么是继承，如何进行继承</li><li>什么是调用，如何进行调用</li><li>什么是重写，如何进行重写</li><li>什么是类路径，为什么需要类路径</li></ul><p>当然，最最重要的，还是你的成果：一个插件！</p><p>我建议你把这里的代码删掉，重新自己敲一遍，看看你有没有真正理解上面的内容。</p><p>好啦，按照我的习惯，每一章结束时，我都要放一首歌，这次也不例外，请听一听，这会给你带来不一样的感受的……</p>`,113),r=n("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"100%",height:"86",src:"//music.163.com/outchain/player?type=2&id=430297476&auto=0&height=66"},null,-1),p=[l,r];function c(i,d,k,v,g,h){return s(),a("div",null,p)}const m=o(t,[["render",c]]);export{u as __pageData,m as default};
