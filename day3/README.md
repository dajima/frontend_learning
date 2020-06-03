# javascript
## 介绍
	JavaScript（缩写：JS）是一门完备的 动态编程语言。当应用于 HTML 文档时，可为网站提供动态交互特性。由布兰登·艾克（ Brendan Eich，Mozilla 项目、Mozilla 基金会和 Mozilla 公司的联合创始人）发明。

## 变量（Variable）
	变量 是存储值的容器。要声明一个变量，先输入关键字 let 或 var，然后输入合适的名称：
	let myVariable
	String  字符串（一串文本）。字符串的值必须用引号（单双均可，必须成对）扩起来。  let myVariable = '李雷';
	Number  数字。无需引号。        let myVariable = 10;
	Boolean 布尔值（真 / 假）。 true/false 是 JS 里的特殊关键字，无需引号。 let myVariable = true;
	Array   数组，用于在单一引用中存储多个值的结构。        let myVariable = [1, '李雷', '韩梅梅', 10];
	元素引用方法：myVariable[0], myVariable[1] ……
	Object  对象，JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。 let myVariable = document.querySelector('h1');
	以及上面所有示例都是对象。
## 注释
	多行注释
	/*
	这里的所有内容
	都是注释。
	*/
	单行注释
	// 这是一条注释。
## 运算符
	>运算符	解释	符号	示例
	加	将两个数字相加，或拼接两个字符串。	+	6 + 9;
	"Hello " + "world!";
	减、乘、除	这些运算符操作与基础算术一致。只是乘法写作星号，除法写作斜杠。	-, *, /	9 - 3;
	8 * 2; //乘法在JS中是一个星号
	9 / 3;
	赋值运算符	为变量赋值（你之前已经见过这个符号了）	=	let myVariable = '李雷';
	等于	测试两个值是否相等，并返回一个 true/false （布尔）值。	===	let myVariable = 3;
	myVariable === 4; // false
	不等于	和等于运算符相反，测试两个值是否不相等，并返回一个 true/false （布尔）值。	!==	let myVariable = 3;
	myVariable !== 3; // false
	取非	返回逻辑相反的值，比如当前值为真，则返回 false。	!	原式为真，但经取非后值为 false：
	let myVariable = 3;
	!(myVariable === 3); // false
## 条件语句
	let iceCream = 'chocolate';
	if (iceCream === 'chocolate') {
	  alert('我最喜欢巧克力冰激淋了。');    
	} else {
	  alert('但是巧克力才是我的最爱呀……');    
	}
## 函数（Function）
	定义函数
	function multiply(num1, num2) {
	  let result = num1 * num2;
	  return result;
	}
## 事件
	事件能为网页添加真实的交互能力。它可以捕捉浏览器操作并运行一些代码做为响应。最简单的事件是 点击事件，鼠标的点击操作会触发该事件。 可尝试将下面的代码输入到控制台，然后点击页面的任意位置：
	//这个demo比较有意思，哈哈
	document.querySelector('html').onclick = function() {
 	   alert('别戳我，我怕疼。');
	}
	等价于
	let myHTML = document.querySelector('html');
	myHTML.onclick = function() {};

# 发布网站
## 获取主机服务和域名
	获取主机服务和域名
	使用在线工具如 GitHub 或 Google App Engine
	使用像 Thimble 的基于 Web 的集成开发环境
## 通过GitHub发布
现在，让我们通过Github页面告诉你公布的你的代码是如此的简单。
首先， 注册一个GitHub账号， 并确认你的邮箱地址。
接下来，你需要创建一个新的资源库( repository )来存放你的文件。
在这个页面上，在 Repository name 输入框里输入  username.github.io，username 是你的用户名。比如，我们的朋友 bobsmith 会输入  bobsmith.github.io。同时勾选  Initialize this repository with a README ，然后点击 Create repository。
然后，将你的网站文件夹里的内容拖拽到你的资源库( repository )，再点击 Commit changes 。
提示: 确保你的文件夹有一个 index.html 文件.
现在将你的浏览器转到 username.github.io 来在线查看你的网站。比如，如果用户名为chrisdavidmills, 请转到 chrisdavidmills.github.io。
提示: 你的网站可能需要几分钟的时间才能投入使用。 如果它不能立即工作，你可能需要等待几分钟，然后再试一次。

# html介绍
## html 入门
### HTML标签不区分大小写
	标签<em>和</em> 是文字内容变为斜体
	你也可以把元素放到其它元素之中——这被称作嵌套。如果我们想要表明我们的小猫脾气很暴躁，可以将“爆”嵌套在<strong> 中，意味着这个单词被着重强调:
### 块级元素和内联元素
	块级元素在页面中以块的形式展现 —— 相对于其前面的内容它会出现在新的一行，其后的内容也会被挤到下一行展现。块级元素通常用于展示页面上结构化的内容，例如段落、列表、导航菜单、页脚等等。一个以block形式展现的块级元素不会被嵌套进内联元素中，但可以嵌套在其它块级元素中。
	https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
	内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行：它通常出现在一堆文字之间例如超链接元素<a>或者强调元素<em>和 <strong>。
	https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

### 空元素
	不是所有元素都拥有开始标签，内容，结束标签。一些元素只有一个标签，通常用来在此元素所在位置插入/嵌入一些东西。例如：元素<img>是用来在元素<img>所在位置插入一张指定的图片。例子如下：
	<img src="https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site/images/firefox-icon.png">
	 空元素（Empty elements） 有时也被叫作 void elements.
### 属性
	元素也可以拥有属性，如下：
	属性包含元素的额外信息，这些信息不会出现在实际的内容中。在上述例子中，这个class属性给元素赋了一个识别的名字（id），这个名字此后可以被用来识别此元素的样式信息和其他信息。

	一个属性必须包含如下内容：

	一个空格，在属性和元素名称之间。(如果已经有一个或多个属性，就与前一个属性之间有一个空格。)
	属性名称，后面跟着一个等于号。
	一个属性值，由一对引号“ ”引起来。
### 布尔属性
	有时你会看到没有值的属性，它是合法的。这些属性被称为布尔属性，他们只能有跟它的属性名一样的属性值。例如disabled 属性，他们可以标记表单输入使之变为不可用(变灰色)，此时用户不能向他们输入任何数据。

	<input type="text" disabled="disabled">
	方便起见，我们完全可以将其写成以下形式(我们还提供了一个非禁止输入的表单元素供您参考，以作为对比)：

	<!-- 使用disabled属性来防止终端用户输入文本到输入框中 -->
	<input type="text" disabled>

	<!-- 下面这个输入框没有disabled属性，所以用户可以向其中输入 -->
	<input type="text">
### 省略包围属性值的引号
	当你浏览那些粗糙的web网站，你将会看见各种各样奇怪的标记风格，其中就有不给属性值添加引号。在某些情况下它是被允许的，但是其他情况下会破坏你的标记。例如，我们可以写一个只拥有一个href属性的链接，如下：

	<a href=https://www.mozilla.org/>收藏页面</a>
	然而，当我们再添加一个title属性时就会出错，如下：

	<a href=https://www.mozilla.org/ title=The Mozilla homepage>收藏页面</a>
	我们建议始终添加引号——这样可以避免很多问题，并且使代码更易读。
### 单引号或者双引号？
	在目前为止，本章内容所有的属性都是由双引号来包裹。也许在一些HTML中，你以前也见过单引号。这只是风格的问题，你可以从中选择一个你喜欢的。以下两种情况都可以：

	<a href="http://www.example.com">示例站点链接</a>

	<a href='http://www.example.com'>示例站点链接</a>
	但你应该注意单引号和双引号不能在一个属性值里面混用。下面的语法是错误的：

	<a href="http://www.example.com'>示例站点链接</a>
	在一个HTML中已使用一种引号，你可以在此引号中嵌套另外一种引号：

	<a href="http://www.example.com" title="你觉得'好玩吗'？">示例站点链接</a>

### HTML中的空白
	在上面的例子中，你可能已经注意到了在代码中包含了很多的空格——这是没有必要的；下面的两个代码片段是等价的：

	<p>狗 狗 很 呆 萌。</p>

	<p>狗 狗        很
		 呆 萌。</p>
	无论你在HTML元素的内容中使用多少空格(包括空白字符，包括换行)，当渲染这些代码的时候，HTML解释器会将连续出现的空白字符减少为一个单独的空格符。

	那么为什么我们会在HTML元素的嵌套中使用那么多的空白呢? 答案就是为了可读性 —— 如果你的代码被很好地进行格式化，那么就很容易理解你的代码是怎么回事，反之就只有聚做一团的混乱.。在我们的HTML代码中，我们让每一个嵌套的元素以两个空格缩进。 你使用什么风格来格式化你的代码取决于你 (比如所对于每层缩进使用多少个空格)，但是你应该坚持使用某种风格。
### 实体引用： 在HTML中包含特殊字符
 	在HTML中，字符 <, >,",' 和 & 是特殊字符. 它们是HTML语法自身的一部分, 那么你如何将这些字符包含进你的文本中呢, 比如说如果你真的想要在文本中使用符号&或者小于号, 而不想让它们被浏览器视为代码并被解释?

	我们必须使用字符引用 —— 表示字符的特殊编码, 它们可以在那些情况下使用. 每个字符引用以符号&开始, 以分号(;)结束.

	原义字符	等价字符引用
	<	&lt;
	>	&gt;
	"	&quot;
	'	&apos;
	&	&amp;
### HTML注释
	<!-- <p>我在注释内！</p> -->
