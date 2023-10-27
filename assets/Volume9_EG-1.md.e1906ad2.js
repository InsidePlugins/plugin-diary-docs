import{_ as e,o,c as l,S as c}from"./chunks/framework.7f03344f.js";const _=JSON.parse('{"title":"EG-1 插件开发常见失误","description":"","frontmatter":{},"headers":[],"relativePath":"Volume9/EG-1.md","filePath":"docs/Volume9/EG-1.md","lastUpdated":1698403164000}'),d={name:"Volume9/EG-1.md"},t=c('<h1 id="eg-1-插件开发常见失误" tabindex="-1">EG-1 插件开发常见失误 <a class="header-anchor" href="#eg-1-插件开发常见失误" aria-label="Permalink to &quot;EG-1 插件开发常见失误&quot;">​</a></h1><p>笔者在这里总结了一些插件开发时常见的失误，有些失误看上去永远都不会犯，但实际上它们经常出现。</p><ul><li><p>如果使用了事件处理器，<strong>记得注册事件处理器</strong>。</p><ul><li>可以在 <code>onEnable</code> 中注册，也可以设置单独的方法，但一定要记得注册。</li></ul></li><li><p>如果使用 <code>getConfig</code>，一定要记得<strong>创建 <code>config.yml</code> 与</strong> <code>saveDefaultConfig</code>。</p></li><li><p>记得写 <code>plugin.yml</code>，<code>main</code>、<code>name</code>、<code>version</code> 不能少。</p><ul><li><code>api-version</code> 也应当填写。</li></ul></li><li><p>异步事件监听中<strong>禁止使用</strong> <code>Bukkit.XXX</code>。</p></li><li><p>如果采用自定义的方法读取文件，<strong>记得保存</strong>。</p></li><li><p>如果不确定你依赖的插件需不需要加载，<strong>不要写在 <code>depend</code> 中</strong>。</p></li><li><p>不能确定线程安全的地方<strong>使用 <code>Vector</code>、<code>ConcurrentHashMap</code> 或 <code>HashTable</code> 进行同步</strong>。</p></li><li><p>在和数据库进行交互之前，<strong>先检查能否连接到数据库</strong>。</p></li><li><p>使用其它库之前，<strong>请先看看它们的许可证</strong>。</p></li><li><p>敏感信息<strong>必须加密</strong>。</p></li><li><p>使用反射时，请一定要注意加载的类的名字。</p><ul><li>经常出现 <code>packageName + &quot;ItemStack&quot;</code>，最终结果为 <code>net.minecraft.server.v1_16_R3ItemStack</code>，导致 <code>ClassNotFoundException</code>。</li></ul></li><li><p><strong>绝不要</strong>进行未经检查的强制类型转换。</p></li><li><p>不要用 <code>throw new XXXException</code> 和 <code>try/catch</code> 的方法来代替本该由 <code>if</code> 完成的工作。</p><ul><li>捕捉错误需要的开销远大于 <code>if</code>，<code>if</code> 只需要一条 <code>JMP</code>（<code>JNE</code>、<code>JE</code>） 指令，而捕捉异常需要创建新的对象，记录出错信息，麻烦得很。</li></ul></li><li><p><code>PlayerEvent</code> 无法监听。</p><ul><li>与此类似的还有 <code>InventoryEvent</code>、<code>EntityEvent</code> 等。</li></ul></li><li><p>自定义事件时不要忘了编写 <code>public static HandlerList getHandlerList()</code> 方法。</p></li><li><p>如果重写了 <code>equals</code> 方法，必须重写 <code>hashCode</code> 方法，使得 <code>equals</code> 的对象得到相同的 <code>hashCode</code>。</p></li><li><p>禁止频繁 <code>new</code> 对象，否则会给垃圾回收器带来极大的负担。</p></li><li><p>数组（<code>XXX[]</code>）的操作速度远高于 <code>List&lt;XXX&gt;</code>，请慎重选择，如果能力允许，请尽量使用数组。</p></li><li><p>减少 <code>Map&lt;UUID, Map&lt;String, Map&lt;Integer, Map&lt;String, Boolean&gt;&gt;&gt;&gt;</code> 这种大型嵌套 <code>Map</code>，消耗性能并且还容易出错。</p></li><li><p>有红线的代码（IDEA 标记错误）是无法通过编译的。</p></li><li><p>将依赖库**「Extract Into Output Root」**，而不是双击直接添加。</p><ul><li>后者将那个 Jar 直接包括到你的 Jar 中，那是无法运行的。</li></ul></li><li><p>导入类（自动补全）时，一定要看清楚你在导入哪个包。</p></li><li><p>NMS（OBC）功能必须进行反射，否则你的代码就只能在当前版本的服务端中运行。</p></li><li><p><code>OutputStream</code>、<code>Connection</code>、<code>ResultSet</code>、<code>PreparedStatement</code> 使用后记得关闭。</p></li><li><p><code>@Nonnull</code> 和 <code>@NotNull</code> 是不一样的，一般我们使用前者以获得更好的兼容性。</p><ul><li><code>javax.annotation.Nonnull</code> 和 <code>org.jetbrains.annotation.NotNull</code>，一看便知。</li></ul></li><li><p>事件监听要打 <code>@EventHandler</code> 注解。</p></li><li><p>严禁使用 <code>@SuppressWarnings</code>，除非你明确知道为什么你要压制这个警告（如 <code>deprecation</code> 和 <code>unused</code>）。</p><ul><li>你压制了警告，就减少了查出错误的机会。</li></ul></li><li><p>禁止 <code>return null</code>。</p><ul><li>除了 <code>onTabComplete</code> 方法中可以。如果你经常返回 <code>null</code>，等待你的只有两种结果：大量的 <code>requireNonNullElse</code> 或者 <code>NullPointerException</code>。</li></ul></li><li><p>使用 <code>return</code> 来结束处理时，确保在每个不符合要求的 <code>if</code> 语句中皆 <code>return</code>。</p></li><li><p><code>ItemMeta</code> 是就地修改，而 <code>ShapedRecipe</code> 是复制。</p><ul><li>典型错误如 <code>item.setItemMeta(item.getItemMeta().setLore(...))</code>，会编译错误。</li></ul></li><li><p><code>int</code>、<code>float</code>、<code>double</code>、<code>boolean</code>、<code>long</code> 这样的基本类型<strong>不能被赋值为</strong> <code>null</code>。</p><ul><li>最好的办法就是根本不要赋值 <code>null</code>。</li></ul></li><li><p>Maven 项目中，非 Java 代码文件需要放在 <code>resources</code> 下。</p><ul><li>否则 Maven 会忽略它们。</li></ul></li><li><p>修改了代码后，如果你没有设置自动编译，记得手动构建。</p></li></ul><hr><p>大致就是这些，当然这和全部比起来肯定只是很少一部分，具体的错误，需要你自己记录。</p>',5),i=[t];function n(p,a,r,s,u,g){return o(),l("div",null,i)}const E=e(d,[["render",n]]);export{_ as __pageData,E as default};