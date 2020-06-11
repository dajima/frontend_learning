# 中断说明
最近偷懒了，只看了资料没有做笔记和demo，今天接着css box model接着做笔记，坚持！

# 块级盒子（Block box） 和 内联盒子（Inline box）
	一个被定义成块级的（block）盒子会表现出以下行为:

	盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
	每个盒子都会换行
	width 和 height 属性可以发挥作用
	内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”
	除非特殊指定，诸如标题(<h1>等)和段落(<p>)默认情况下都是块级的盒子。

	如果一个盒子对外显示为 inline，那么他的行为如下:

	盒子不会产生换行。
	 width 和 height 属性将不起作用。
	垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
	水平方向的内边距、外边距以及边框会被应用而且也会把其他处于 inline 状态的盒子推开。
	我们通过对盒子display 属性的设置，比如 inline 或者 block ，来控制盒子的外部显示类型。
# 盒模型的各个部分
	 CSS中组成一个块级盒子需要:
	Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
	Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
	Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。
	Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。

# 标准盒模型
	在标准模型中，如果你给盒设置 width 和 height，实际设置的是 content box。 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。 见下图。

	假设定义了 width, height, margin, border, and padding:

	.box {
	  width: 350px;
	  height: 150px;
	  margin: 25px;
	  padding: 25px;
	  border: 5px solid black;
	}
# 外边距，内边距，边框
	外边距
	外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。 外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

	我们可以使用margin属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制：

	margin-top
	margin-right
	margin-bottom
	margin-left
# 边框
	边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。
	为边框设置样式时，有大量的属性可以使用——有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。

	可以使用border属性一次设置所有四个边框的宽度、颜色和样式。

	分别设置每边的宽度、颜色和样式，可以使用：

	border-top
	border-right
	border-bottom
	border-left
	设置所有边的颜色、样式或宽度，请使用以下属性：

	border-width
	border-style
	border-color
	设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一：

	border-top-width
	border-top-style
	border-top-color
	border-right-width
	border-right-style
	border-right-color
	border-bottom-width
	border-bottom-style
	border-bottom-color
	border-left-width
	border-left-style
	border-left-color
# 内边距
	内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是0或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。

	内边距为负值等同于为0的效果
	我们可以使用padding简写属性控制元素所有边，或者每边单独使用等价的普通属性：

	padding-top
	padding-right
	padding-bottom
	padding-left
# 盒子模型和内联盒子
	以上所有的方法都完全适用于块级盒子。有些属性也可以应用于内联盒子，例如由<span>元素创建的那些内联盒子。
	在下面的示例中，我们在一个段落中使用了<span>，并对其应用了宽度、高度、边距、边框和内边距。可以看到，宽度和高度被忽略了。外边距、内边距和边框是生效的，但它们不会改变其他内容与内联盒子的关系，因此内边距和边框会与段落中的其他单词重叠。

# 使用display: inline-block
	display有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用:您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。
	一个元素使用 display: inline-block，实现我们需要的块级的部分效果：

	设置width 和height 属性会生效。
	padding, margin, 以及border 会推开其他元素。
	但是，它不会跳转到新行，如果显式添加width 和height 属性，它只会变得比其内容更大。

	在下一个示例中，我们将display: inline-block添加到<span>元素中。尝试将此更改为display: block 或完全删除行，以查看显示模型中的差异。
