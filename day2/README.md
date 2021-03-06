# CSS
## CSS介绍
	和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言
	链接CSS文件代码<link href="styles/style.css" rel="stylesheet">
	p {
 	 color: red;
	}
	整个结构称为规则集
	p- 选择器,HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 p 元素）。要给不同元素添加样式只需要更改选择器就行了。
	声明（Declaration）,一个单独的规则，如 color: red; 用来指定添加样式元素的属性。
	属性（Properties）
	改变 HTML 元素样式的途径。（本例中 color 就是 <p> 元素的属性。）CSS 中，由编写人员决定修改哪个属性以改变规则。
	属性的值（Property value）
	在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值（我们除了 red 之外还有很多属性值可以用于 color ）
	每个规则集（除了选择器的部分）都应该包含在成对的大括号里（{}）。
	在每个声明里要用冒号（:）将属性与属性值分隔开。
	每个规则集里要用分号（;）将各个声明分隔开。
### 常见的选择器
	元素选择器/标签选择器：所有指定(该)类型的 HTML 元素 p选择 <p>
	ID选择器：具有特定 ID 的元素（单一 HTML 页面中，每个 ID 只对应一个元素，一个元素只对应一个 ID）	#my-id 选择 <p id="my-id"> 或 <a id="my-id">
	类选择器: 具有特定类的元素（单一页面中，一个类可以有多个实例）	.my-class 选择 <p class="my-class"> 和 <a class="my-class">
	属性选择器：拥有特定属性的元素	img[src] 选择 <img src="myimage.png"> 而不是 <img>
	伪（Pseudo）类选择器：	特定状态下的特定元素（比如鼠标指针悬停）	a:hover仅在鼠标指针悬停在链接上时选择 <a>。
	以上为常见的选择器举例，实际不止这些.

### CSS注释
	/* */，不接受嵌套和//


## CSS盒子模型
	CSS布局主要就是基于盒模型的。每个占据页面空间的块都有这样的属性：
	boarder边框
	margin 外部边距
	padding 内边距（边框和文本的距离）
	------------
	|  margin  |
	| -------  |
	| |  -- |boarder  |
	| |  padding

	其他常见的属性
        width ：元素的宽度
	background-color ：元素内容和内边距底下的颜色
	color ：元素内容（通常是文本）的颜色
	text-shadow ：为元素内的文本设置阴影
	display ：设置元素的显示模式（暂略）
	举例
	1、修改背景颜色，HTML是根，应该是CSS最大的盒子了
	更改页面颜色
	html {
	  background-color: #00539F;
	}
	2、文档字体设置，Body 用于显示的
	body {
	  width: 600px;
	  margin: 0 auto;
	  background-color: #FF9500;
	  padding: 0 20px 20px 20px;
	  border: 5px solid black;
	}
	width 宽度
	margin 四个值代表上下左右， auto代表水平对齐, 两个值的话 一个代表上下， 一个代表左右
	padding同margin
	border 5px宽度 solid实线 black黑色
	3、定位页面主标题并添加样式
	h1 {
	  margin: 0;
	  padding: 20px 0;    
	  color: #00539F;
	  text-shadow: 3px 3px 1px black;
	}
	你可能发现了页面顶部有一个难看的间隙。那是因为浏览器会没有任何 CSS 的情况下 给 <h1> 等元素设置一些默认样式。但这并不是个好主意，但是我们希望一个没有任何样式的网页也有基本的可读性。为了去掉那个间隙，我们通过设置 margin: 0; 覆盖掉默认样式。

	至此，我们已经把标题的上下内边距设置为 20 像素，并且将标题文本与 HTML 的背景颜色设为一致。

	需要注意的是，这里使用了一个 text-shadow 属性，它可以为元素中的文本提供阴影。四个值含义如下：

	第一个值设置水平偏移值 —— 即阴影右移的像素数（负值左移）。
	第二个值设置垂直偏移值 —— 即阴影下移的像素数（负值上移）。
	第三个值设置阴影的模糊半径 —— 值越大产生的阴影越模糊。
	第四个值设置阴影的基色。
	不妨尝试不同的值看看能得出什么结果。
	4、图像居中
	img {
	  display: block;
	  margin: 0 auto;
	}
	最后，我们把图像居中来使页面更美观。可以复用 body 的 margin: 0 auto ，但是需要一点点调整。 <body> 元素是块级元素，意味着它占据了页面的空间并且能够赋予外边距和其他改变间距的值。而图片是内联元素，不具备块级元素的一些功能。所以为了使图像有外边距，我们必须使用 display: block 给予其块级行为。

# 总结
学完了CSS的初步介绍，可以先个简单的页面，还是要多实践才能学会。
结果
![image](https://github.com/dajima/frontend_learning/blob/master/day2/project/images/day2.png)

