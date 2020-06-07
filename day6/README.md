# HTML表单
	HTML表单是用户和web站点或应用程序之间交互的主要内容之一。它们允许用户将数据发送到web站点。大多数情况下，数据被发送到web服务器，但是web页面也可以自己拦截它并使用它。
	HTML表单是由一个或多个小部件组成的。这些小部件可以是文本字段(单行或多行)、选择框、按钮、复选框或单选按钮。大多数情况下，这些小部件与描述其目的的标签配对——正确实现的标签能够清楚地指示视力正常的用户和盲人用户输入表单所需的内容。
	HTML表单和常规HTML文档的主要区别在于，大多数情况下，表单收集的数据被发送到web服务器。在这种情况下，您需要设置一个web服务器来接收和处理数据。
	要记住：表单越大，失去用户的风险就越大。保持简单，保持专注:只要求必要的数据。
## 设计表单
### <form> 元素
	所有HTML表单都以一个<form>元素开始：

	<form action="/my-handling-form-page" method="post">

	</form>
	这个元素正式定义了一个表单。就像<div>元素或<p>元素，它是一个容器元素，但它也支持一些特定的属性来配置表单的行为方式。它的所有属性都是可选的，但实践中最好至少要设置action属性和method属性。
	action 属性定义了在提交表单时,应该把所收集的数据送给谁(/那个模块)(URL)去处理。.
	 method 属性定义了发送数据的HTTP方法(它可以是“get”或“post”).
	  <form> 元素
###  <input> <textarea>
	 <input> 标签是一个空元素，这意味着它不需要关闭标签。相反， <textarea>不是一个空元素，因此必须使用适当的结束标记来关闭它。这对HTML表单的特定特性有影响:定义默认值的方式。要定义<input>的默认值，你必须使用value 属性，如下所示：
	<input type="text" value="by default this element is filled with this text" />
	相反，如果您想定义<textarea>的默认值，您只需在<textarea>元素的开始和结束标记之间放置默认值，就像这样:

	<textarea>by default this element is filled with this text</textarea>
### <button> 元素
	我们的表格已经快准备好了，我们只需要再添加一个按钮，让用户在填写完表单后发送他们的数据。这是通过使用 <button> 元素完成的。在 </form>这个结束标签上方添加以下内容：

	<div class="button">
	  <button type="submit">Send your message</button>
	</div>
	您会看到<button>元素也接受一个 type属性，它接受submit, reset或者 button 三个值中的任一个。

	单击 type 属性定义为 submit 值(也是默认值)的按钮会发送表单的数据到<form>元素的action 属性所定义的网页。
	单击 type 属性定义为 reset 值的按钮 将所有表单小部件重新设置为它们的默认值。从用户体验的角度来看，这被认为是一种糟糕的做法。
	单击 type 属性定义为 button 值的按钮……不会发生任何事！这听起来很傻，但是用JavaScript构建定制按钮非常有用。 
	注意：您还可以使用相应类型的 <input>元素来生成一个按钮，如 <input type="submit">。<button>元素的主要优点是， <input>元素只允许纯文本作为其标签，而<button>元素允许完整的HTML内容，允许更复杂、更有创意的按钮文本。

### 提交表单
	最后一部分，也许是最棘手的部分，是在服务器端处理表单数据。如前所述，大多数时候HTML表单是向用户请求数据并将其发送到web服务器的一种方便的方式。

		<form> 元素将定义如何通过action 属性和 method属性来发送数据的位置和方式。

	但这还不够。我们还需要为我们的数据提供一个名称。这些名字对双方都很重要：在浏览器端，它告诉浏览器给数据各自哪个名称，在服务器端，它允许服务器按名称处理每个数据块。

	要将数据命名为表单，您需要在每个表单小部件上使用 name 属性来收集特定的数据块。让我们再来看看我们的表单代码:

	<form action="/my-handling-form-page" method="post"> 
	  <div>
	    <label for="name">Name:</label>
	    <input type="text" id="name" name="user_name">
	  </div>
	  <div>
	    <label for="mail">E-mail:</label>
	    <input type="email" id="mail" name="user_email">
	  </div>
	  <div>
	    <label for="msg">Message:</label>
	    <textarea id="msg" name="user_message"></textarea>
	  </div>

	  ...
	在我们的例子中，表单会发送三个已命名的数据块 "user_name", "user_email", 和 "user_message"。这些数据将用使用HTTP POST 方法,把信息发送到URL为 "/my-handling-form-page"目录下。
	
### <fieldset> 和 <legend> 元素
	<fieldset>元素是一种方便的用于创建具有相同目的的小部件组的方式，出于样式和语义目的。 你可以在<fieldset>开口标签后加上一个 <legend>元素来给<fieldset> 标上标签。 <legend>的文本内容正式地描述了<fieldset>里所含有部件的用途。

	许多辅助技术将使用<legend> 元素，就好像它是相应的 <fieldset> 元素里每个部件的标签的一部分。例如，在说出每个小部件的标签之前，像Jaws或NVDA这样的屏幕阅读器会朗读出legend的内容。

	这里有一个小例子:

	<form>
	  <fieldset>
	    <legend>Fruit juice size</legend>
	    <p>
	      <input type="radio" name="size" id="size_1" value="small">
	      <label for="size_1">Small</label>
	    </p>
	    <p>
	      <input type="radio" name="size" id="size_2" value="medium">
	      <label for="size_2">Medium</label>
	    </p>
	    <p>
	      <input type="radio" name="size" id="size_3" value="large">
	      <label for="size_3">Large</label>
	    </p>
	  </fieldset>
	</form>
###  <label> 元素
	正如我们在前一篇文章中看到的， <label> 元素是为HTML表单小部件定义标签的正式方法。如果你想构建可访问的表单，这是最重要的元素——当实现的恰当时，屏幕阅读器会连同有关的说明和表单元素的标签一起朗读。以我们在上一篇文章中看到的例子为例:

	<label for="name">Name:</label> <input type="text" id="name" name="user_name">
	<label> 标签与 <input> 通过他们各自的for 属性和 id 属性正确相关联（label的for属性和它对应的小部件的id属性），这样，屏幕阅读器会读出诸如“Name, edit text”之类的东西。
### 点击标签
	正确设置标签的另一个好处是可以在所有浏览器中单击标签来激活相应的小部件。这对于像文本输入这样的例子很有用，这样你可以通过点击标签，和点击输入区效果一样，来聚焦于它，这对于单选按钮和复选框尤其有用——这种控件的可点击区域可能非常小，设置标签来使它们可点击区域变大是非常有用的。

	举个例子：

	<form>
	  <p>
	    <label for="taste_1">I like cherry</label>
	    <input type="checkbox" id="taste_1" name="taste_cherry" value="1">
	  </p>
	  <p>
	    <label for="taste_2">I like banana</label>
	    <input type="checkbox" id="taste_2" name="taste_banana" value="2">
	  </p>
	</form>
## 原生表单部件
### 通用属性
	大部分用来定义表单小部件的元素都有一些他们自己的属性。然而，在所有表单元素中都有一组通用属性，它们可以对这些小部件进行控制。下面是这些通用属性的列表:

	属性名称	默认值	描述
	autofocus	(false)	这个布尔属性允许您指定当页面加载时元素应该自动具有输入焦点，除非用户覆盖它，例如通过键入不同的控件。文档中只有一个与表单相关的元素可以指定这个属性。
	disabled	(false)	
	这个布尔属性表示用户不能与元素交互。如果没有指定这个属性，元素将从包含它的元素继承设置，例如<fieldset>;如果没有包含在设定了disabled属性的元素里，那么这个元素就是可用的。

	form		
	小部件与之相关联的表单元素。属性值必需是同个文档中的<form> 元素的 id属性。理论上，它允许您在<form>元素之外设置一个表单小部件。然而，在实践中，没有任何支持该特性的浏览器。

	name		元素的名称;这是跟表单数据一起提交的。
	value		元素的初始值。
### 单行文本框
	使用type属性值被设置为text 的<input>元素创建一个单行文本框（同样的，如果你不提供type属性，text 是默认值）。在你指定的type属性的值在浏览器中是未知的情况下（比如你指定 type="date"，但是浏览器不支持原生日期选择器），属性值text也是备用值。

	这是一个基本的单行文本框示例：

	<input type="text" id="comment" name="comment" value="I'm a text field">

### E-mail 地址框
	该类型的框将 type属性设置为  email 值：

	<input type="email" id="email" name="email" multiple>

### 密码框
	通过设置type 属性值为password来设置该类型框：

	<input type="password" id="pwd" name="pwd">

### 电话号码栏：
	通过 type属性的 tel 值设置该类型框：

	<input type="tel" id="tel" name="tel">
	由于世界范围内各种各样的电话号码格式，这种类型的字段不会对用户输入的值执行任何限制(包括字母，等等)。这主要是在语义上的区分，尽管在一些设备上(特别是在移动设备上)，可能会出现一个不同的虚拟键盘，更适合输入电话号码。

### URL 栏
	通过type属性的url 值设置该类型框：

	<input type="url" id="url" name="url">
### 多行文本框
	多行文本框专指使用 <textarea>元素，而不是使用<input> 元素。

	<textarea cols="30" rows="10"></textarea>
## 下拉内容
	选择框
	一个选择框是用<select>元素创建的，其中有一个或多个<option>元素作为子元素，每个元素都指定了其中一个可能的值。

	<select id="simple" name="simple">
	  <option>Banana</option>
	  <option>Cherry</option>
	  <option>Lemon</option>
	</select>
	多选选择框
	默认情况下，选择框只允许用户选择一个值。通过将multiple属性添加到<select>元素，您可以允许用户通过操作系统提供的默认机制来选择几个值。 (如， 同时按下 Cmd/Ctrl 并点击多个值).

	注意：在多个选项选择框的情况下，选择框不再显示值为下拉内容——相反，它们都显示在一个列表中。

	<select multiple id="multi" name="multi">
	  <option>Banana</option>
	  <option>Cherry</option>
	  <option>Lemon</option>
	</select>
	自动补全输入框
	您可以使用<datalist>元素来为表单小部件提供建议的、自动完成的值，并使用一些<option>子元素来指定要显示的值。

	然后使用list属性将数据列表绑定到一个文本框(通常是一个 <input> 元素)。

	一旦数据列表与表单小部件相关联，它的选项用于自动完成用户输入的文本;通常，这是作为一个下拉框提供给用户的，匹配在输入框中输入了的内容。

	<label for="myFruit">What's your favorite fruit?</label>
	<input type="text" name="myFruit" id="myFruit" list="mySuggestion">
	<datalist id="mySuggestion">
	  <option>Apple</option>
	  <option>Banana</option>
	  <option>Blackberry</option>
	  <option>Blueberry</option>
	  <option>Lemon</option>
	  <option>Lychee</option>
	  <option>Peach</option>
	  <option>Pear</option>
	</datalist>
### 复选框
	使用type属性值为checkbox的 <input>元素来创建一个复选框。

	<input type="checkbox" checked id="carrots" name="carrots" value="carrots">
### 单选按钮
	使用type属性值为radio的 <input>元素来创建一个单选按钮。

	<input type="radio" checked id="soup" name="meal">

## 发送表单数据
	
