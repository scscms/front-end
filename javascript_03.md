# Javascript基础教程<sup>shine</sup>

## 第九章客户端检测

先设计最通用的方案，然后在使用特定于浏览器的技术增强该方案。
### 9.1 能力检测

能力检测的目标不是识别特定的浏览器，而是识别浏览器的能力。采用这种方式不必估计特定的浏览器如何如何，只要确定浏览器支持特定的能力，就可以给出解决方案。
#### 9.1.1 更可靠的能力检测

能力检测对于想知道某个特性是否会按照适当的方式行事（而不仅仅是某个特性存在）非常有用。
#### 9.1.2 能力检测，不是浏览器检测

检测某个或某几个特性并不能够确定浏览器。
### 9.2 怪癖检测

与能力检测类似，怪癖检测（quirks detection）的目标是识别浏览器的特殊行为。但与能力检测确认浏览器支持什么能力不同，怪癖检测是想要知道浏览器存在什么缺陷。
### 9.3 用户代理检测

用户代理检测通过检测用户代理字符串来确定实际使用的浏览器。

所谓点击欺骗（spoofing），就是指浏览器通过在自己的用户代理字符串中加入一些错误或误导性信息，来达到欺骗服务器的目的。
#### 9.3.1 用户代理字符串的历史

Gecko是FireFox的呈现引擎。

很多时候，检测特定的浏览器还不如搞清楚它是否基于Gecko更重要。
#### 9.3.2 用户代理字符串检测技术

1.识别呈现引擎

确切知道浏览器的名字和版本号不如确切知道它使用的是什么呈现引擎。
#### 9.3.3 完整的代码
#### 9.3.4 使用方法

用户代理检测室客户端检测的最后一个选择。只要可能，都应该优先采用能力检测和怪癖检测。用户代理检测一般适用于如下情形：

- （1）不能直接准确地使用能力检测或怪癖检测。
- （2）同一款浏览器在不同平台下具备不同的能力。
- （3）为了跟踪分析等目的需要知道确切的浏览器

## 第九章 DOM

DOM（文档对象模型）是针对HTML和XML文档的一个API（应用程序编程接口）。DOM描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。

注意，IE中的所有DOM对象都是以COM对象的形式实现的。这意味着IE中的DOM对象与原生JavaScript对象的行为或活动特点并不一致。
### 10.1 节点层次

文档节点是每个文档的根节点。在HTML页面中，文档元素始终都是<html>元素。

每一段标记都可以通过树中的一个节点来表示：HTML元素通过元素节点表示，特性（attribute）通过特性节点表示，文档类型通过文档节点表示，而注释则通过注释节点表示。
#### 10.1.1 Node类型

DOM1级定义了一个Node接口，该接口将由DOM中的所有节点类型实现。这个Node接口在JavaScript中是作为Node类型实现的；除了IE之外，在其他所有浏览器中都可以访问到这个类型。JavaScript中的所有节点类型都继承自Node类型，因此所有节点类型都共享着相同的基本属性和方法。
#### 10.1.2 Document类型

JavaScript通过Document类型表示文档。在浏览器中，document对象是HTMLDocument（继承自Document）的一个实例，表示整个HTML页面。

- 1)document对象有一个body属性，直接指向\<body\>元素。
- 2)document.title包含\<title\>元素中的文本。
- 3)document.URL包含页面完整的URL（即地址栏中显示的URL）
- 4)document.domain属性中只包含页面的域名。
- 5)document.referrer保存这链接到当前页面的那个页面的URL
- 6)document.anchors包含文档中所有带name属性的\<a\>元素
- 7)document.applets包含文档中所有的\<applet\>元素
- 8)document.forms包含文档中所有的\<form\>元素
- 9)document.images包含文档中所有的\<img\>元素
- 10)document.links包含文档中所有带href特性的\<a>元素

#### 10.1.3 Element类型

Element类型用于表现XML或HTML元素，提供了对元素标签名、子节点及特性的访问。
#### 10.1.4 Text类型

文本节点由Text类型表示，包含的是可以照字面解释的纯文本内容。纯文本中可以包含转义后的HTML字符，但不能包含HTML代码。
#### 10.1.5 Comment类型

注释在DOM中是通过Comment类型来表示的。
#### 10.1.6 CDATASection类型

CDATASection类型只针对基于XML的文档，表示的是CDATA区域。
#### 10.1.7 DocumentType类型

DocumentType类型在Web浏览器中并不常用，仅有Firefox、Safari和Opra支持它。DocumentType包含着与文档的doctype有关的信息。
#### 10.1.8 DocumentFragment类型

在所有的节点类型中，只有DocumentFragment在文档中没有对应的标记。DOM规定文档片段（document fragment）是一种“轻量级”的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源。
#### 10.1.9 Attr类型

元素的特性在DOM中以Attr类型表示。在所有浏览器中都可以访问Attr类型的构造函数和原型。

Attr对象有3个属性：name、value和specified。其中，name是特性名称（与nodeName的值相同），value是特性的值（与nodeValue的值相同），而specified是一个布尔值，用以区别特性是在代码中指定的，还是默认的。
### 10.2 DOM操作技术

#### 10.2.1 动态脚本

跟操作HTML元素一样，创建动态脚本也有两种方式：插入外部文件和直接插入JavaScript代码。
#### 10.2.2 动态样式

能够把CSS样式包含到HTML页面中的元素有两个。其中，\<link\>元素用于包含来自外部的文件，而\<style\>元素用于指定嵌入的样式。与动态脚本类似，所谓的动态样式是指在页面刚加载时不存在的样式；动态样式是在页面加载完成后动态添加到页面中的。

#### 10.2.3 操作表格

#### 10.2.4 使用NodeList

理解NodeList及其“近亲”NamedNodeMap和HTMLCollection，是从整体上透彻理解DOM的关键所在。这三个集合都是“动态的”；换句话说，每当文档结构发生变化时，它们都会得到更新。因此，它们始终都会保存着最新、最准确的信息。

### 10.3 小结

DOM是语言中立的API，用于访问和操作HTML和XML文档。DOM1级将HTML和XML文档形象地看作一个层次化的节点树，可以使用JavaScript来操作这个节点树，进而改变底层文档的外观和结构。

## 第十一章 DOM扩展

对DOM的两个主要的扩展是Selectors API(选择符API)和HTML5。
### 11.1 选择符API

Selectors API是由W3C发起制定的一个标准，致力于让浏览器原生支持CSS查询。所有实现这一功能的JavaScript库都会写一个基础的CSS解析器，然后再使用已有的DOM方法查询文档并找到匹配的节点。
#### 11.1.1 querySelector()方法

querySelector方法接收一个CSS选择符，返回与该模式匹配的第一个元素，如果没有找到匹配的元素，返回null。
#### 11.1.2 querySelectorAll()方法

querySelectorAll()方法接收的参数与querySelector()方法是一样，都是一个CSS选择符，但返回的是所有匹配的元素而不仅仅是一个元素。这个方法返回的是一个NodeList的实例。

只要传给querySelectorAll()方法的CSS选择符有效，该方法都会返回一个NodeList对象，而不管找到多少匹配的元素。如果没有找到匹配的元素，NodeList就是空的。

与querySelector()类似，能够调用querySelectorAll()方法的类型包括Document、DocumentFragment和Element。
#### 11.1.3 matchesSelector()方法

Selectors API Level 2规范为Element类型新增了一个方法matchesSelector()。这个方法接收一个参数，即CSS选择符，如果调用元素与该选择符匹配，则返回true；否则返回false。
### 11.2 元素遍历

Element Traversal API为DOM元素添加了以下5个属性。

- （1）childElementCount：返回子元素（不包括文本节点和注释）的个数。
- （2）firstElementChild：指向第一个子元素；
- （3）lastElementChild：指向最后一个子元素；
- （4）previousElementSibling：指向前一个同辈元素；
- （5）nextElementSibling：指向后一个同辈元素；
### 11.3 HTML5
#### 11.3.1 与类相关的扩充

* 1.getElementsByClassName()方法

getElementsByClassName()方法接收一个参数，即一个包含一或多个类名的字符串，返回带有指定类的所有元素的NodeList。传入多个类名时，类名的先后顺序不重要。

* 2.classList属性

HTML5为所有元素添加classList属性。这个classList属性是新集合类型DOMTokenList的实例。与其他DOM集合类似，DOMTokenList有一个表示自己包含多少元素的length属性，而要取得每个元素可以使用item()方法，也可以使用方括号语法。此外，这个新类型还定义如下方法：

- （1）add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
- （2）contains(value)：表示列表中是否存在给定的值，如果存在则返回true，否则false；
- （3）remove(value)：从列表中删除给定的字符串。
- （4）toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。
#### 11.3.2 焦点管理

HTML5也添加了辅助管理DOM焦点功能。首先就是document.activeElement属性，这个属性始终会引用DOM中当前获得了焦点的元素。元素获得焦点的方式有页面加载、用户输入（通常是通过按Tab键）和在代码中调用focus()方法。

默认情况下，文档刚刚加载完成时，document.activeElement中保存的是document.body元素的引用。文档加载期间，document.activeElement的值为null。

另外就是新增了document.hasFocus()方法，这个方法用于确定文档是否获得了焦点。通过检测文档是否获得了焦点，可以知道用户是不是正在与页面交互。

### 11.3.3 HTMLDocument的变化

- 1.readyState属性
Document的readyState属性有两个可能的值：

      （1）loading，正在加载文档；
      （2）complete，已经加载完文档。

- 2.兼容模式
- 3.head属性
#### 11.3.4 字符集属性

HTML5新增了几个与文档字符集有关的属性。其中，charset属性表示文档中实际使用的字符集，也可以用来指定新字符集。默认情况下，这个属性的值为“UTF-16”，但可以通过\<meta\>元素、响应头部或直接设置charset属性修改这个值。
#### 11.3.5 自定义数据属性

HTML5规定可以为元素添加非标准的属性，但要添加前缀data-，目的是为元素提供与渲染无关的信息，或者提供语义信息。这些属性可以任意添加、随便命名，只要以data-开头即可。

添加了自定义属性之后，可以通过元素的dataset属性来访问自定义属性的值。dataset属性的值是DOMStringMap的一个实例，也就是一个名值对儿的映射。在这个映射中，每个data-name形式的属性都会有一个对应的属性，只不过属性名没有data-前缀。

#### 11.3.6 插入笔记

- 1.innerHTML属性

在读模式下，innerHTML属性返回与调用元素的所有子节点（包括元素、注释和文本节点）对应的HTML标记。在写模式下，innerHTML会根据指定的值创建新的DOM树，然后用这个DOM树完全替换调用元素原先的所有子节点。

- 2.outerHTML属性

在读模式下，outerHTML返回调用它的元素及所有子节点的HTML标签。在写模式下，outerHTML会根据指定的HTML字符串创建新的DOM子树，然后用这个DOM子树完全替换调用元素。

- 3.insertAdjacentHTML()方法

插入标记的最后一个新增方式是insertAdjacentHTML()方法。这个方法最早也是在IE中出现的，它接收两个参数：插入位置和要插入的HTML文本。第一个参数必须是下列值之一：

* （1）“beforebegin”，在当前元素之前插入一个紧邻的同辈元素；
* （2）“afterbegin”，在当前元素之下插入一个新的子元素或在第一个元素之前再插入新的子元素；
* （3）“beforeend”，在当前元素之下插入一个新的子元素或在最后一个子元素之后在插入新的子元素；
* （4）“afterend”，在当前元素之后插入一个紧邻的同辈元素；

注意，这些值都必须是小写形式。第二个参数是一个HTML字符串（与innerHTML和outerHTML的值相同），如果浏览器无法解析该字符串，就会抛出错误。

- 4.内存与性能问题
#### 11.3.7 scrollIntoView()方法
scrollIntoView()可以在所有HTML元素上调用，通过滚动浏览器窗口或某个容器元素，调用元素就可以出现在视口中。如果给这个方法传入true作为参数，或者不传入任何参数，那么窗口滚动之后会让调用元素的顶部与视口顶部尽可能平齐。如果传入false作为参数，调用元素会尽可能全部出现在视口中，（可能的话，调用元素的底部会与视口顶部平齐。）不过顶部不一定平齐。

### 11.4 专有扩展
#### 11.4.1 文档模式

IE8引入了一个新的概念叫“文档模式”（document mode）。页面的文档模式决定了可以使用什么功能。换句话说，文档模式决定了你可以使用哪个级别的CSS，可以在JavaScript中使用哪些API，以及如何对待文档类型（doctype）。
#### 11.4.2 children属性

children属性是HTMLCollection的实例，只包含元素中同样还是元素的子节点。除此之外，children属性与childNodes没有什么区别，即在元素只包含元素子节点时，这两个属性的值相同。
#### 11.4.3 contains()方法

调用contains()方法的应该是祖先节点，也就是搜索开始的节点，这个方法接收一个参数，即要检测的后代节点。如果被检测的节点是后代节点，该方法返回true；否则返回false。
#### 11.4.4 插入文本

- 1.innerText属性

通过innerText属性可以操作元素中包含的所有文本内容，包括子文档书中的文本。在通过innerText读取值时，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来。在通过innerText写入值时，结果会删除元素的所有子节点，插入包含相应文本值的文本节点。

- 2.outerText属性

除了作用范围扩大到了包含调用它的节点之外，outerText与innerText基本上没有多大区别。在读取文本值时，outerText与innerText的结果完全一样。但在写模式下，outerText就完全不同了：outerText不只是替换调用它的子节点，而是会替换整个元素（包括子节点）。
#### 11.4.5 滚动

以下几个方法都是对HTMLElement类型的扩展，因此在所有元素中都可以调用。以下方法均在Safari和Chrome中实现。

* （1）scrollIntoViewIfNeeded(alignCenter)：只在当前元素在视口中不可见的情况下，才滚动浏览器窗口或容器元素，最终让它可见。如果当前元素在视口中可见，这个方法什么也不做。如果将可选的alignCenter参数设置为true，则表示尽量将元素显示在视口中部（垂直方向）。
* （2）scrollByLines(lineCount)：将元素的内容滚动指定的行高，lineCount值可以是正值也可以是负值。
* （3）scrollByPages(pageCount)：将元素的内容滚动指定的页面高度，具体高度由元素的高度决定。

注意：scrollIntoView()和scrollIntoViewIfNeed()的作用对象是元素的容器，而scrollByLines()和scrollByPages()影响的则是元素自身。

## 第十二章 DOM2和DOM3

DOM1级主要定义的是HTML和XML文档的底层结构。DOM2和DOM3级则在这个结构的基础上引入了更多的交互能力，也支持了更高级的XML特性。
### 12.1 DOM变化
#### 12.1.1 针对XML命名空间的变化

命名空间要使用xmlns特性来指定。XHTML的命名空间是http://www.w3.org/1999/xhtml，在任何格式良好的XHTML页面中，都应该将其包含在\<html\>元素中。

- 1.Node类型的变化

在DOM2级中，Node类型包含下列特定于命名空间的属性。

* （1）localName：不带命名空间前缀的节点名称。
* （2）namespaceURI：命名空间URI或者（在未指定的情况下是）null。
* （3）prefix：命名空间前缀或者（在未指定的情况下是）null。

DOM3级在此基础上更进一步，又引入了下列与命名空间有关的方法。

* （1）isDefaultNamespace(namespaceURI)：在指定的namespaceURI是当前节点的默认命名空间的情况下返回true。
* （2）lookupNamespaceURI(prefix)：返回指定prefix的命名空间。
* （3）lookupPrefix(namespaceURI)：返回给定namespaceURI的前缀、

- 2.Doumnet类型的变化
- 3.Element类型变化
- 4.NameedNodeMap类型的变化

#### 12.1.2其他方面的变化

- 1.DocumentType类型的变化

DocumentType类型新增了3个属性：publicId、systemId和internalSubset。

- 2.Document类型的变化

Document类型的变化中唯一与命名空间无关的方法是importNode()。用于从一个文档中取得一个节点，然后将其导入到另一个文档，使其成为这个文档结构的一部分。该方法接收两个参数：要复制的节点和一个表示是否复制子节点的布尔值。

- 3.Node类型的变化

Node类型中唯一与命名空间无关的变化，就是添加了isSupported()方法。与DOM1级为document.implementation引入的hasFeature()方法类似，isSupported()方法用于确定当前节点具有什么能力。这个方法也接受相同的两个参数：特性名和特性版本号。如果浏览器实现了相应特性，而且能够基于给定节点执行该特性，isSupported()就返回true。

- 4.框架的变化

框架和内嵌框架分别用HTMLFrameElement和HTMLFrameElement表示，它们在DOM2级中都有一个新属性，名叫contentDocument。这个属性包含一个指针，指向表示框架内容的文档对象。
### 12.2 样式

在HTML中定义样式的方式有3中：通过\<link/\>元素包含外部样式表文件、使用\<style/\>元素定义嵌入式样式，以及使用style特性定义针对特定元素的样式。
#### 12.2.1 访问元素的样式

任何支持style特性的HTML元素在JavaScript中都有一个对应的style属性。这个style对象是CSSStyleDeclaration的实例，包含这通过HTML的style特性指定的样式信息，但不包括与外部样式表或嵌入式样式表经层叠而来的样式。在style特性中指定的任何CSS属性都将表现为style的相应属性。对于使用短划线（分隔不同的词汇，例如background-image）的CSS属性名，必须将其转换成驼峰大小写形式，才能通过JavaScript来访问。

- 1.DOM样式属性和方法

“DOM2级样式”规范还为style对象定义了一些属性和方法。这些属性和方法在提供元素的style特性值的同事，也可以修改样式。

通过cssText属性可以访问style特性中的CSS代码。在读取模式下，cssText返回浏览器对style特性中CSS代码的内部表示。在写入模式下，赋给cssText的值会重写整个style特性的值；也就是说，以前通过style特性指定的样式信息都将丢失。

要从元素的样式中移除某个CSS属性，需要使用removeProperty()方法。使用这个方法移除一个属性，意味着将会为该属性应用默认的样式（从其他样式表经层叠而来）。

- 2.计算的样式

虽然style对象能够提供支持style特性的任何元素的样式信息，但它不包含那些从其他样式表层叠而来并影响到当前元素的样式信息。
#### 12.2.2 操作样式表

CSSStyleSheet类型表示的是样式表，包括通过\<link\>元素包含的样式表和在\<style\>元素中定义的样式表。这两个元素本身粉笔是由HTMLLineElement和HTMLStyleElement类型表示的。

- 1.CSS规则

CSSRule对象表示样式表中的每一条规则。实际上，CSSRule是一个供其他多种类型继承的基类型，其中最常见的就是CSSStyleRule类型，表示样式信息（其他规则还有@import、@font-face、@page和@charset，但是这些规则很少有必要通过脚本来访问）。

- 2.创建规则

DOM规定，要向现有的样式表中添加新规则，需要使用insertRule方法。这个方法接受两个参数：规则文本和表示在哪里插入规则的索引。

- 3.删除规则

从样式表中删除规则的方法是deleteRule()，这个方法接受一个参数：要删除的规则的位置。

#### 12.2.3 元素大小

DOM中没有规定如何确定页面中元素的大小。IE为此率先引入了一些属性，以便开发人员使用。目前，所有主要的浏览器都已经支持这些属性。

- 1.偏移量

通过以下4个属性可以取得元素的偏移量。

* （1）offsetHeight：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。
* （2）offsetWidth：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。
* （3）offsetLeft：元素的左外边框至包含元素的左内边框之间的像素距离。
* （4）offsetTop：元素的上外边框至包含元素的上内边框之间的像素距离。

注意：所有这些偏移量的属性都是只读的，而且每次访问它们都需要重新计算。因此，应该尽量避免重复访问这些属性；如果需要重复使用其中的某些属性的值，可以将它们保存在局部变量中，以提高性能。

- 2.客户区大小

元素的客户区大小（client dimension），指的是元素内容及其内边距所占据的空间大小。有关客户区大小的属性有两个：clientWidth和clientHeight。其中clientWidth在属性是元素内容区宽度加上左右内边距的宽度；clientHeight属性是元素内容区高度加上上下内边距的高度。

- 3.滚动大小

滚动大小（scroll dimension），指的是包含滚动内容的元素的大小。

以下是4个与滚动大小相关的属性。
* （1）scrollHeight：在没有滚动条的情况下，元素内容的总高度。
* （2）scrollWidth：在没有滚动条的情况下，元素内容的总宽度。
* （3）scrollLeft：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置。
* （4）scrollTop：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置。
- 4.确定元素的大小

IE、Firefox3+、Safari4+、Opera9.5及Chrome为每个元素都提供一个`getBoundingClientRect()`方法。这个方法返回一个矩形对象，包含4个属性：left、top、right和bottom。这个属性给出了元素在页面中相对于视口的位置。

### 12.3 遍历

“DOM2级遍历和范围”模块定义了两个用于辅助完成顺序遍历DOM结构的类型：NodeIterator和TreeWalker。这两个类型能够基于给定的起点对DOM结构执行深度优先（depth-first）的遍历操作。
#### 12.3.1 NodeIterator

NodeIterator类型是两者中比较简单的一个，可以使用document.createNodeIterator()方法创建它的新实例。这个方法接受下列4个参数。
* （1）root：想要作为搜索起点的树中的节点。
* （2）whatToShow：表示要访问哪些节点的数字代码。
* （3）filter:是一个NodeFilter对象，或者一个表示应该接受还是拒绝某种特定节点的函数。
* （4）entityReferenceExpansion：布尔值，表示是否要扩展实体引用。这个参数在HTML页面中没有用，因为其中的实体引用不能扩展。

NodeIterator类型的两个主要方法是nextNode()和previousNode()。顾名思义，在深度优先的DOM子树遍历中，nextNode()方法用于向前前进一步，而previousNode()用于向后后退一步。
#### 12.3.2 TreeWalker

TreeWalker是NodeIterator的一个更高级的版本。除了包括nextNode()和previousNode()在内的相同的功能之外，这个类型还提供了下列用于在不同方向上遍历DOM结构的方法，

* （1）parentNode()：遍历到当前节点的父节点。
* （2）firstChild()：遍历到当前节点的第一个子节点。
* （3）lastChild()：遍历到当前节点的最后一个节点。
* （4）nextSibling()：遍历到当前节点的下一个同辈节点。
* （5）previousSibling()：遍历到当前节点的上一个同辈节点。

[深入理解TreeWalker](TreeWalker.md)

### 12.4 范围

为了让开发人员更方便第控制页面，“DOM2级遍历和范围”模块定义了“范围”(range)接口。通过范围可以选择文档中的一个区域，而不必考虑节点的界限（选择在后台完成，对用户是不可见的）。
#### 12.4.1 DOM中的范围

DOM2级在Document类型中定义了createRange()方法。在兼容DOM的浏览器中，这个方法属于document对象。使用hasFeature()或者直接检测该方法，都可以确定浏览器是否支持范围。
#### 12.4.2 IE8及更早版本中的范围

虽然IE9支持DOM范围，但IE8及之前版本不支持DOM范围。不过，IE8及早期版本支持一种类似的概念，即文本范围（text range）。文本范围是IE专有的特性，其他浏览器都不支持。顾名思义，文本范围处理的主要是文本（不一定是DOM节点）。通过\<body\>、\<button\>、\<input\>、和\<textarea\>等这几个元素，可以调用createTextRange()方法来创建文本范围。

[返回上一篇](javascript_02.md)
[继续下一篇](javascript_04.md)