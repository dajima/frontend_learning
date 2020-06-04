# HTML元数据
## title
	 <title>，它可以用来给 html 文档添加一个标题，收藏和搜索时都会用到

## 元数据：<meta>元素
	指定编码<meta charset="utf-8">
	添加作者和描述
	许多<meta> 元素包含了name 和 content 特性：
	name 指定了meta 元素的类型； 说明该元素包含了什么类型的信息。
	content 指定了实际的元数据内容。
	这两个meta 元素对于定义你的页面的作者和提供页面的简要描述是很有用的 。让我们看一个例子：

	<meta name="author" content="Chris Mills">
	<meta name="description" content="The MDN Learning Area aims to provide
	complete beginners to the Web with all they need to know to get
	started with developing web sites and applications.">
	指定作者在某些情况下是很有用的：如果你需要联系页面的作者，问一些关于页面内容的问题。 一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。

	指定包含关于页面内容的关键字的页面内容的描述是很有用的，因为它可能或让你的页面在搜索引擎的相关的搜索出现得更多
	其他的原数据
	比如facebook twitter的原数据等~，对应的软件可以识别特殊内容

### 在HTML中应用CSS和JavaScript
	<link> 元素经常位于文档的头部。这个link元素有2个属性，rel="stylesheet"表明这是文档的样式表，而 href包含了样式表文件的路径：

	<link rel="stylesheet" href="my-css-file.css">
	<script> 部分没必要非要放在文档头部；实际上，把它放在文档的尾部（在 </body>标签之前）是一个更好的选择，这样可以确保在加载脚本之前浏览器已经解析了HTML内容（如果脚本加载某个不存在的元素，浏览器会报错）。

	<script src="my-js-file.js"></script>
	注意： <script>元素看起来像一个空元素，但它并不是，因此需要一个结束标记。您还可以选择将脚本放入<script>元素中，而不是指向外部脚本文件。

### 为文档设定主语言
	<html lang="en-US">
	这在很多方面都很有用。如果你的HTML文档的语言设置好了，那么你的HTML文档就会被搜索引擎更有效地索引 (例如，允许它在特定于语言的结果中正确显示)，对于那些使用屏幕阅读器的视障人士也很有用(比如， 法语和英语中都有“six”这个单词，但是发音却完全不同)。

	你还可以将文档的分段设置为不同的语言。例如，我们可以把日语部分设置为日语，如下所示：

	<p>Japanese example: <span lang="jp">ご飯が熱い。</span>.</p>

# HTML 文字处理基础
## 标题和段落
	内容结构化会使读者的阅读体验更轻松，更愉快。

	>在HTML中，每个段落是通过 <p> 元素标签进行定义的, 比如下面这样：

	<p>我是一个段落，千真万确。</p>
	每个标题（Heading）是通过“标题标签”进行定义的：

	<h1>我是文章的标题</h1>
	这里有六个标题元素标签 —— <h1>、<h2>、<h3>、<h4>、<h5>、<h6>。每个元素代表文档中不同级别的内容; <h1> 表示主标题（the main heading），<h2> 表示二级子标题（subheadings），<h3> 表示三级子标题（sub-subheadings），等等。
## 编辑结构层次
	>您应该最好只对每个页面使用一次<h1> — 这是顶级标题，所有其他标题位于层次结构中的下方。
	请确保在层次结构中以正确的顺序使用标题。不要使用<h3>来表示副标题，后面跟<h2>来表示副副标题 - 这是没有意义的，会导致奇怪的结果。
	在可用的六个标题级别中，您应该旨在每页使用不超过三个，除非您认为有必要使用更多。具有许多级别的文档（即，较深的标题层次结构）变得难以操作并且难以导航。在这种情况下，如果可能，建议将内容分散在多个页面上。

## 列表 Lists
### 无序 Unordered
### 有序 Ordered
### 嵌套列表 Nesting lists
	<ol>
	  <li>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</li>
	  <li>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</li>
	  <li>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</li>
	  <li>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
	    <ul>
	      <li>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</li>
	      <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
	    </ul>
	  </li>
	</ol>

## 重点强调
### 强调
	在HTML中我们用<em>（emphasis）元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为斜体，但你不应该纯粹使用这个标签来获得斜体风格，为了获得斜体风格，你应该使用<span>元素和一些CSS，或者是<i>元素（见下文）。
### 非常重要
	为了强调重要的词，在口语方面我们往往用重音强调，在文字方面则是用粗体字来达到强调的效果。例如下面这段:

	This liquid is highly toxic.

	I am counting on you. Do not be late!

	在HTML中我们用<strong> (strong importance) 元素来标记这样的请况。这样做既可以让文档更加地有用，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为粗体，但你不应该纯粹使用这个标签来获得粗体风格，为了获得粗体风格，你应该使用<span>元素和一些CSS，或者是 <b> 元素 (见下文)。

	<p>This liquid is <strong>highly toxic</strong>.</p>

	<p>I am counting on you. <strong>Do not</strong> be late!</p>
	如有需要你可以将strong元素和em元素嵌套在其他的标签中：

	<p>This liquid is <strong>highly toxic</strong> —
	if you drink it, <strong>you may <em>die</em></strong>.</p>

## 斜体字、粗体字、下划线...
	<i> 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……
	<b> 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……
	<u> 被用来传达传统上用下划线表达的意义：专有名词，拼写错误…
# 建立超链接
## 使用title属性添加支持信息
	您可能要添加到您的链接的另一个属性是标题；这旨在包含关于链接的补充有用信息，例如页面包含什么样的信息或需要注意的事情。 例如：

	<p>I'm creating a link to
	<a href="https://www.mozilla.org/en-US/"
	   title="The best place to find more information about Mozilla's
		  mission and how to contribute">the Mozilla homepage</a>.
	</p>
	结果如下（当鼠标指针悬停在链接上时，标题将作为提示信息出现）：
## 块级链接
	如上所述，你可以将一些内容转换为链接，甚至是块级元素。例如你想要将一个图像转换为链接，你只需把图像元素放到<a></a>标签中间。

	<a href="https://www.mozilla.org/en-US/">
	  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
	</a>
## 文档片段
	>超链接除了可以链接到文档外，也可以链接到HTML文档的特定部分（被称为文档片段）。要做到这一点，你必须首先给要链接到的元素分配一个id属性。例如，如果你想链接到一个特定的标题，可以这样做：

	<h2 id="Mailing_address">Mailing address</h2>
	然后链接到那个特定的id，您可以在URL的结尾使用一个井号指向它，例如：
	连接到另一个Html文件
	<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
	你甚至可以在同一份文档下，通过链接文档片段，来链接到同一份文档的另一部分：
	连接到当前Html文件片段
	<p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>
## 尽可能使用相对链接
相对连接比较短、减少DNS解析次数
## 链接到非HTML资源 ——留下清晰的指示
	当链接到一个需要下载的资源（如PDF或Word文档）或流媒体（如视频或音频）或有另一个潜在的意想不到的效果（打开一个弹出窗口，或加载Flash电影），你应该添加明确的措辞，以减少任何混乱。如下的例子会让人反感：
	如果你是在低带宽连接，点击一个链接，然后就开始下载大文件。
	如果你没有安装Flash播放器，点击一个链接，然后突然被带到一个需要Flash的页面。
	让我们看看一些例子，看看在这里可以使用什么样的文本：

	<p><a href="http://www.example.com/large-report.pdf">
	  下载销售报告（PDF, 10MB）
	</a></p>

	<p><a href="http://www.example.com/video-stream/">
	  观看视频（将在新标签页中播放, HD画质）
	</a></p>

	<p><a href="http://www.example.com/car-game">
	  进入汽车游戏（需要Flash插件）
	</a></p>
## 在下载链接时使用 download 属性
	当您链接到要下载的资源而不是在浏览器中打开时，您可以使用 download 属性来提供一个默认的保存文件名（译注：此属性仅适用于同源URL）。下面是一个下载链接到Firefox 的 Windows最新版本的示例：
	<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
	   download="firefox-latest-64bit-installer.exe">
	  Download Latest Firefox for Windows (64-bit) (English, US)
	</a>
## 电子邮件链接
	当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，这种情况是可能做到的。这样做是使用<a>元素和mailto：URL的方案。
	其最基本和最常用的使用形式为一个mailto:link （链接），链接简单说明收件人的电子邮件地址。例如:

	<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
	这会创建一个链接，看起来像这样： Send email to nowhere.

	实际上，邮件地址甚至是可选的。如果你忘记了（也就是说，你的href仅仅只是简单的"mailto:"），一个新的发送电子邮件的窗口也会被用户的邮件客户端打开，只是没有收件人的地址信息，这通常在“分享”链接是很有用的，用户可以发送给他们选择的地址邮件
## 具体细节
	除了电子邮件地址，您还可以提供其他信息。事实上，任何标准的邮件头字段可以被添加到你提供的邮件URL。 其中最常用的是主题(subject)、抄送(cc)和主体(body) (这不是一个真正的头字段，但允许您为新邮件指定一个短内容消息)。 每个字段及其值被指定为查询项。

	下面是一个包含cc、bcc、主题和主体的示例：

	<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
	  Send mail with cc, bcc, subject and body
	</a>
	注意: 每个字段的值必须是URL编码的。 也就是说，不能有非打印字符（不可见字符比如制表符、换行符、分页符）和空格 percent-escaped. 同时注意使用问号（?）来分隔主URL与参数值，以及使用&符来分隔mailto:中的各个参数。 这是标准的URL查询标记方法。阅读 The GET method 以了解哪种URL查询标记方法是更常用的。

# 高阶文字排版
## 描述列表(description list)
	描述列表使用与其他列表类型不同的闭合标签— <dl>; 此外，每一项都用 <dt> (description term) 元素闭合。每个描述都用 <dd> (description description) 元素闭合。让我们来完成下面的标记例子:

	<dl>
	  <dt>内心独白</dt>
	    <dd>戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。</dd>
	  <dt>语言独白</dt>
	    <dd>戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。</dd>
	  <dt>旁白</dt>
	    <dd>戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。</dd>
	</dl>

## 块引用
	块引用
	如果一个块级内容（一个段落、多个段落、一个列表等）从其他地方被引用，你应该把它用<blockquote>元素包裹起来表示，并且在cite属性里用URL来指向引用的资源。例如，下面的例子就是引用的MDN的<blockquote>元素页面：

	<p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
	Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
	要把这些转换为块引用，我们要这样做：

	<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
	<p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
	Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
	</blockquote>
	浏览器在渲染块引用时默认会增加缩进，作为引用的一个指示符；MDN是这样做的，但是也增加了额外的样式：
## 行内引用
## 引文
	cite属性内容不会被浏览器显示、屏幕阅读器阅读，需使用 JavaScript 或 CSS，浏览器才会显示cite的内容。如果你想要确保引用的来源在页面上是可显示的，更好的方法使用<cite>元素：
## 缩略语
	另一个你在web上看到的相当常见的元素是<abbr>——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释（包含在title属性中）。让我们看看下面两个例子：

	<p>我们使用 <abbr title="超文本标记语言（Hypertext Markup Language）">HTML</abbr> 来组织网页文档。</p>

	<p>第 33 届 <abbr title="夏季奥林匹克运动会">奥运会</abbr> 将于 2024 年 8 月在法国巴黎举行。</p>
	这些代码的显示效果如下（当光标移动到项目上时会出现提示）：

	我们使用 HTML 来组织网页文档。

	第 33 届 奥运会 将于 2024 年 8 月在法国巴黎举行。i
## 标记联系方式
	HTML有个用于标记联系方式的元素——<address>。它仅仅包含你的联系方式，例如：

	<address>
	  <p>Chris Mills, Manchester, The Grim North, UK</p>
	</address>
	但要记住的一点是，<address>元素是为了标记编写HTML文档的人的联系方式，而不是任何其他的内容。因此，如果这是Chris写的文档，上面的内容将会很好。注意，下面的内容也是可以的：

	<address>
	  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
	</address>
## 上标sup下标sub
	当你使用日期、化学方程式、和数学方程式时会偶尔使用上标和下标。 <sup> 和<sub>元素可以解决这样的问题。例如：

	<p>咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。</p>
	<p>如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。</p>
	这些代码输出的结果是：

	咖啡因的化学方程式是 C8H10N4O2。

	如果 x2 的值为 9，那么 x 的值必为 3 或 -3。
## 展示计算机代码
	有大量的HTML元素可以来标记计算机代码：

	<code>: 用于标记计算机通用代码。
	<pre>: 用于保留空白字符（通常用于代码块）——如果您在文本中使用缩进或多余的空白，浏览器将忽略它，您将不会在呈现的页面上看到它。但是，如果您将文本包含在<pre></pre>标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
	<var>: 用于标记具体变量名。
	<kbd>: 用于标记输入电脑的键盘（或其他类型）输入。
	<samp>: 用于标记计算机程序的输出。
## 标记时间和日期
	HTML 还支持将时间和日期标记为可供机器识别的格式的 <time> 元素。例如：
	为什么需要这样做？因为世界上有许多种书写日期的格式，上边的日期可能被写成：

	20 January 2016
	20th January 2016
	Jan 20 2016
	20/06/16
	06/20/16
	The 20th of next month
	20e Janvier 2016
	2016年1月20日
	And so on
	但是这些不同的格式不容易被电脑识别 — 假如你想自动抓取页面上所有事件的日期并将它们插入到日历中，<time> 元素允许你附上清晰的、可被机器识别的 时间/日期来实现这种需求。

	上述基本的例子仅仅提供了一种简单的可被机器识别的日期格式，这里还有许多其他支持的格式，例如：
		time datetime="2016-01-20">2016年1月20日</time>
		<!-- 标准简单日期 -->
	<time datetime="2016-01-20">20 January 2016</time>
	<!-- 只包含年份和月份-->
	<time datetime="2016-01">January 2016</time>
	<!-- 只包含月份和日期 -->
	<time datetime="01-20">20 January</time>
	<!-- 只包含时间，小时和分钟数 -->
	<time datetime="19:30">19:30</time>
	<!-- 还可包含秒和毫秒 -->
	<time datetime="19:30:01.856">19:30:01.856</time>
	<!-- 日期和时间 -->
	<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
	<!-- 含有时区偏移值的日期时间 -->
	<time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
	<!-- 调用特定的周 -->
	<time datetime="2016-W04">The fourth week of 2016</time>

# 文档与网站架构
## 文档的基本组成部分
	页眉
	常横跨于整个页面顶部有一个大标题 和/或 一个标志。 这是网站的主要一般信息，通常存在于所有网页。
	导航栏
	指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是标题栏的一部分，而不是独立的组件，但这并非绝对；还有人认为，两者独立可以提供更好的 无障碍访问特性，因为屏幕阅读器可以更清晰地分辨二者。
	主内容
	中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。
	侧边栏
	一些外围信息、链接、引用、广告等。通常与主内容相关（例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接），还可能存在其他的重复元素，如辅助导航系统。
	页脚
	横跨页面底部的狭长区域。和标题一样，页脚是放置公共信息（比如版权声明或联系方式）的，一般使用较小字体，且通常为次要内容。 还可以通过提供快速访问链接来进行 SEO。
## 用于构建内容的 HTML
	为了实现语义化标记，HTML 提供了明确这些区段的专用标签，例如：

	<header>：页眉。
	<nav>：导航栏。
	<main>：主内容。主内容中还可以有各种子内容区段，可用<article>、<section> 和 <div> 等元素表示。
	<aside>：侧边栏，经常嵌套在 <main> 中。
	<footer>：页脚。
	<main> 存放每个页面独有的内容。每个页面上只能用一次 <main>，且直接位于 <body> 中。最好不要把它嵌套进其它元素。
	<article> 包围的内容即一篇文章，与页面其它部分无关（比如一篇博文）。
	<section> 与 <article> 类似，但 <section> 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 标题 作为开头；也可以把一篇 <article> 分成若干部分并分别置于不同的 <section> 中，也可以把一个区段 <section> 分成若干部分并分别置于不同的 <article> 中，取决于上下文。
	<aside> 包含一些间接信息（术语条目、作者简介、相关链接，等等）。
	<header> 是简介形式的内容。如果它是 <body> 的子元素，那么就是网站的全局页眉。如果它是 <article> 或<section> 的子元素，那么它是这些部分特有的页眉（此 <header> 非彼 标题）。
	<nav> 包含页面主导航功能。其中不应包含二级链接等内容。
	<footer> 包含了页面的页脚部分。
## 无语义元素
	<span> 是一个内联的（inline）无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。例如：
	<div> 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。

## 换行与水平分割线
	有时会用到 <br> 和 <hr> 两个元素，需要介绍一下。
	<br> 可在段落中进行换行；<br> 是唯一能够生成多个短行结构（例如邮寄地址或诗歌）的元素。比如：

	<p>从前有个人叫小高<br>
	他说写 HTML 感觉最好<br>
	但他写的代码结构语义一团糟<br>
	他写的标签谁也懂不了。</p>
	没有 <br> 元素，这段会直接显示在长长的一行中（如前文所讲，HTML会忽略大部分空格）；使用 <br> 元素，才使得诗看上去像诗：

	从前有个人叫小高
	他说写 HTML 感觉最好
	但他写的代码结构语义一团糟
	他写的标签谁也懂不了。

	<hr> 元素在文档中生成一条水平分割线，表示文本中主题的变化（例如话题或场景的改变）。一般就是一条水平的直线。例如：

