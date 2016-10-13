# Javascript基础教程<sup>shine</sup>

## 第十四章表单脚本

### 14.1 表单的基础知识

在HTML中，表单是由\<form\>元素来表示的，而在JavaScript中，表单对应的则是HTMLFormElement类型。HTMLFormElement继承了HTMLElement，因而与其他HTML元素具有相同的默认属性。不过，HTMLFormElement也有它自己下列独有的属性和方法。

- （1）acceptCharset：服务器能够处理的字符集；等价于HTML中的accept-charset特性。
- （2）action：接收请求的URL；等价于HTML中的action属性。
- （3）elements：表单中所有控件的集合（HTMLCollection）。
- （4）enctype：请求的编码类型；等价于HTML中的enctype特性。
- （5）length：表单中控件的数量。
- （6）method：要发送的HTTP请求类型，等价于HTML的method特性。
- （7）name：表单的名称；等价于HTML的name特性。
- （8）reset()：将所有表单域重置为默认值。
- （9）submit()：提交表单。
- （10）target：用于发送请求和接收响应的窗口名称；等价于HTML的target特性。

#### 14.1.1 提交表单

用户单击提交按钮或图像按钮时，就会提交表单。

在JavaScript中，以编程方式调用submit()方法也可以提交表单。而且，这种方式无需表单包含提交按钮，任何时候都可以正常提交表单。

在以调用submit()方法的形式提交表单时，不会触发submit事件，因此要记得在调用此方法之前先验证表单数据。

解决重复提交表单问题的方法：在第一次提交表单后就禁用提交按钮，或者利用onsubmit事件处理程序取消后续的表单提交操作。
#### 14.1.2 重置表单

在用户单击重置按钮时，表单会被重置。

用户单击重置按钮重置表单时，会触发reset事件。

与调用submit()方法不同，调用reset()方法会像单击重置按钮一样触发reset事件。
#### 14.1.3 表单字段

可以像访问页面中的其他元素一样，使用原生DOM方法访问表单元素。此外，每个表单都有elements属性，该属性是表单中所有元素的集合。每个表单字段elements集合中的顺序，与它们出现在标记中的顺序相同，可以按照位置和name特性来访问它们。

1.共有的表单字段属性

除\<fieldset\>元素之外，所有表单字段都拥有相同的一组属性。由于\<input\>类型可以表示多种表单字段，因此有些属性只适用于某些字段，但还有一些属性是所有字段所共有的，表单字段共有的属性和方法如下：

- （1）disabled：布尔值，表示当前字段是否被禁用。
- （2）form：指向当前字段所属表单的指针；只读。
- （3）name：当前字段的名称。
- （4）readOnly：布尔值，表示当前字段是否只读。
- （5）tabIndex：表示当前字段的切换（tab）序号
- （6）type：当前字段的类型，如“checkbox”、“radio”等等。
- （7）value：当前字段将被提交给服务器的值。对文件字段来说，这个属性是只读的，包含着文件在计算机中的路径。

2.共有的表单字段方法

每个表单字段都有两个方法：focus()和blur()。其中，focus()方法用于将浏览器的焦点设置到表单字段，即激活表单字段，使其可以响应键盘事件。

HTML5为表单字段新增了一个`autofocus`属性。在支持这个属性的浏览器中，只要设置这个属性，不用JavaScript就能自动把焦点移动到相应字段。因为autofocus是一个布尔值属性，所以在支持的浏览器中它的值应该是true。（在不支持的浏览器中，它的值是空字符串。）

与focus()方法相对的是blur()方法，它的作用是从元素中移走焦点。在调用blur()方法时，并不会把焦点转移到某个特定的元素上；仅仅是将焦点从调用这个方法的元素上面移走而已。

3.共有的表单字段事件

除了支持鼠标、键盘、更改和HTML事件之外，所有表单字段都支持下列三个事件。

- （1）blur：当前字段失去焦点时触发。
- （2）change：对于\<input>和\<textarea>元素，在它们失去焦点且value值改变时触发；对于\<select>元素，在其选项改变时触发。
- （3）focus：当字段获得焦点时触发。

当用户改变了当前字段的焦点，或者我们调用了blur()或focus()方法时，都可以触发blur和focus事件。这两个事件在所有表单字段中都是相同的。但是，change事件在不同表单控件中触发的次数会有所不同。

### 14.2 文本框脚本
#### 14.2.1 选择文本

两种文本框都支持select()方法，用于选择文本框中的所有文本。

#### 14.2.2 过滤输入

1.屏蔽字符

可通过阻止keypress事件的默认行为来屏蔽此类字符。

2.操作剪贴板

下列就是6个剪贴板事件：

- （1）beforecopy：在复制操作前触发。
- （2）copy：在发生复制操作时触发。
- （3）beforecut：在发生剪切操作前触发。
- （4）cut：在发生剪切操作时触发。
- （5）beforepaste：在发生粘贴操作前触发。
- （6）paste：在发生粘贴操作时触发。

#### 14.2.3 自动切换焦点
#### 14.2.4 HTML5约束验证API

1.必填字段

	在表单中指定了required属性。

2.其他输入类型

3.数值范围

4.输入模式

HTML5为文本字段新增了pattern属性，这个属性的值是一个正则表达式，用于匹配文本框中的值。

5.检测有效性

使用checkValidity()方法可以检测表单中的某个字段是否有效。所有表单字段都有个方法，如果字段的值有效，这个方法返回true，否则返回false。

6.禁用验证

通过设置novalidate属性，可以告诉表单不进行验证。

#### 14.3 选择框脚本

选择框是通过\<select\>和\<option\>元素创建的。为了方便与这个控件进行交互，除了所有表单字段共有的属性和方法外，HTMLSelectElement类型还提供了下列属性和方法。

- （1）add(newOption,relOption)：向控件中插入新\<option>元素，其位置在相关项（relOption）之前。
- （2）multiple：布尔值，表示是否允许多项选择；等价于HTML中的multiple特性。
- （3）options：控件中所有\<option\>元素的HTMLCollection。
- （4）remove（index）：移除给定位置的选项。
- （5）selectedIndex：基于0的选中项的索引，如果没有选中项，则值为-1.对于支持多选的控件，只保存选中项中第一项的索引。
- （6）size：选择框中可见的行数；等价于HTML中的size特性。

选择框的type属性不是“select-one”，就是“select-multiple”，这取决于HTML代码中有没有multiple特性。选择框的value属性由当前选中项决定，相应规则如下。

- （1）如果没有选中的项，则选择框的value属性保存空字符串。
- （2）如果有一个选中项，而且该项的value特性已在HTML中指定，则选择框的value属性腾云选中的value特性，即使value特性的值是空字符串，也同样遵循此条规则。
- （3）如果有一个选中项，但该项的value特性在HTML中未指定，则选择框的value属性等于该项的文本。
- （4）如果有多个选中项，则选择框的value属性将依据前两条规则取得第一个选中项的值。

在DOM中，每个\<option\>元素都有一个HTMLOptionElement对象表示。为了便于访问数据，HTMLOptionElement对象添加了下列属性：

- （1）index：当前选项在options集合中的索引。
- （2）label：当前选项的标签；等价于HTML的label属性。
- （3）selected：布尔值，表示当前选项是否被选中。将这个属性设置为true可以选中当前选项。
- （4）text：选择的文本。
- （5）value：选项的值（等价于HTML中的value属性）

#### 14.3.1 选择选项
#### 14.3.2 添加选项

- （1）DOM 的appendChild()方法。
- （2）使用Option构造函数来创建新选项。
- （3）使用选择框的add()方法。

#### 14.3.3 移除选项

首先可以使用DOM的removeChild()方法，其次可以使用选择框的remove()方法。

#### 14.3.4 移动和重排选项

DOM的appendChild()方法及insertBefore()方法。

### 14.4 表单序列化
### 14.5 富文本编辑

富文本编辑，又称为WYSIWYG（What You See Is What You Get，所见即所得）。

#### 14.5.1 使用contenteditable属性

可以把contenteditable属性应用给页面中的任何元素，然后用户立即就可以编辑该元素。

contenteditable属性有三个可能的值：“true”表示打开、“false”表示关闭，“inserit”表示从父元素那里继承。

#### 14.5.2 操作富文本

与富文本编辑器交互的主要方式，就是使用document.execCommand()。这个方法可以对文档执行预定义的命令，而且可以应用大多数格式。可以为document.execCommand()方法传递三个参数：要执行的命令名称、表示浏览器是否应该为当前命令提供用户界面的一个布尔值和执行该命令必须的一个值（如果不需要，则为null）。为了确保跨浏览器的兼容性，第二个参数应该始终设置为fasle，因为Firefox会在该参数为true时抛出错误。

queryCommandEnable()方法可用于检测是否可以针对当前选择的文本，或者当前插入字符所在位置执行某个命令。这个方法接收一个参数，即要检测的命令。如果当前编辑区域运行执行传入的命令，则返回true，否则返回false。

queryCommandState()方法用于确定是否已将指定命令应用到了选择的文本。

queryCommandValue()方法用于取得执行命令是传入的值。
#### 14.5.3 富文本选区

在富文本编辑器中，使用框架（iframe）的getSelection()方法，可以确定实际选择的文本。这个方法是window对象和document对象的属性，调用它会返回一个表示当前选择文本的Selection对象。每个Selection对象都有下列属性。

- （1）anchorNode：选区的起点所在的节点。
- （2）anchorOffset：在到达选区起点的位置之前跳过的anchorNode中的字符数量。
- （3）focusNode：选区终点所在的节点。
- （4）focusOffset：focusNode中包含在选区之内的字符数量。
- （5）isCollapsed：布尔值，表示选区的起点和终点是否重合。
- （6）rangeCount：选区中包含的DOM范围的数量。

Selection对象的方法：

- （1）addRange(range)：将指定的DOM范围添加到选区中。
- （2）collapse(node,offset)：将选区折叠到指定节点中的相应的文本偏移位置。
- （3）collapseToEnd()：将选区折叠到终点位置。
- （4）collapseToStart()：将选区折叠到起点位置。
- （5）containsNode(node)：确定指定的节点是否包含在选区之中。
- （6）deleteFromDocument()：从问道中删除选区中的文本
- （7）extend(node,offset)：通过将focusNode 和offsetOffset移动到指定的值来扩展选区。
- （8）getRangeAt(index)：返回索引对应的选区中的DOM范围。
- （9）removeAllRanges()：从选区中移除所有的DOM范围。实际上，这样会移除选区，因为选区中至少要有一个范围。
- （10）removeRange(range)：从选区中移除指定的DOM范围。
- （11）selectAllChildren(node)：清除选区并选择指定节点的所有子节点。

## 第十五章　使用Canvas绘图
### 15.1 基本用法

使用toDataURL()方法，可以导出在\<canvas\>元素上绘制的图像。这个方法接受一个参数，即图像的MIME类型格式，而且适合于创建图像的任何上下文。

注意：如果绘制到画布上的图像源自不同的域，toDataURL()方法会抛出错误。

### 15.2 2D上下文

2D上下文的两种基本绘图操作是填充和描边。填充，就是用指定的样式（颜色、渐变或图像）填充图形；描边，说是只在图形的边缘画线。

### 15.3 WebGL

WebGL是针对Canvas的3D上下文。与其他Web技术不同，WebGL并不是W3C制定的标准，而是由Khronos Group制定的。

#### 15.3.1 类型化数组

类型化数组也是数组，只不过其元素被设置为特定类型的值。

类型化数组的核心就是一个名为ArrayBuffer的类型。每个ArrayBuffer对象表示的只是内存中指定的字节数，但不会指定这些字节用于保存什么类型的数据。通过ArrayBuffer能做的，就是为了将来使用而分配一定数量的字节。

##### 1.视图

使用ArrayBuffer（数组缓冲器类型）的一种特别的方式就是用它来创建数组缓冲器视图。其中，最常见的视图是DataView，通过它可以选择ArrayBuffer中的一小段字节。为此，可在创建DataView实例的时候传入一个ArrayBuffer、一个可选的字节偏移量（从该字节开始选择）和一个可选的要选择的字节数。

##### 2.类型化视图

类型化视图一般也被称为类型化数组，因为它们除了元素必须是某种特定的数据类型外，与常规的数组无异。类型化视图也分几种，而且它们都继承了DataView。

- （1）Int8Array：表示8为二补整数。
- （2）Unit8Array：表示8位无符号整数。
- （3）Int16Array：表示16位二补整数。
- （4）Unit16Array：表示16位无符号整数。
- （5）Int32Array：表示32为二补整数。
- （6）Unit32Array：表示32位无符号整数。
- （7）Float32Array：表示32位IEEE浮点值。
- （8）Float64Array：表示64位IEEE浮点值。

每个视图构造函数都有一个名为BYTES_PER_ELEMENT的属性，表示类型化数组的每个元素需要多少字节。
#### 15.3.2 WebGL上下文

目前，在支持的浏览器中，WebGL的名字叫做“experimental-webgl”，这是因为WebGL规范仍然未制定完成。制定完成后，这个上下文的名字就会变成简单的“webgl”。如果浏览器不支持WebGL，那么取得该上下文时会返回null。

通过给getContext()传递第二个参数，可以为WebGL上下文设置一些选项。这个参数本身是一个对象，可以包含下列属性。

- （1）alpha：值为true，表示为上下文创建一个Alpha通道缓冲区；默认值为true；
- （2）depth：值为true，表示可以使用16位深缓冲区；默认值为true；
- （3）stencil：值为true，表示可以使用8位模板缓冲区；默认值为false；
- （4）antialias：值为true，表示将使用默认机制执行抗锯齿操作；默认值为true。
- （5）premultipliedAlpha：值为true，表示绘图缓冲区有预乘Alpha值；默认为true;
- （6）preserveDrawingBuffer：值为true；表示在绘图完成后保留绘图缓冲区；默认值为false。

##### 1.常量

在WebGL中，保存在上下文对象中的这些常量都没有GL_前缀。

##### 2.方法命名

##### 3.准备绘图

在实际操作WebGL上下文之前，一般都要使用某种实色清除\<canvas\>，为绘图做好准备。为此，首先必须使用clearColor()方法来指定要使用的颜色值，这个方法接收4个参数：红、绿、蓝和透明度。每个参数必须是一个0到1之间的数值，表示每种分量在最终颜色中的强度。

##### 4.视口与坐标

开始绘图之前，通常要先定义WebGL的视口（viewport）。默认情况下，视口可以使用整个\<canavs\>区域。要改变视口大小，可以调用viewport()方法并传入4个参数：（视口相对于\<canvas\>元素的）x、y坐标、宽度和高度。

视口坐标的原点(0,0)在\<canvas>元素的左下角，x轴和y轴的正方向分别是向右和向上，可以定义为(width-1,height-1)。

视口内部的坐标系与定义视口的坐标系也不一样。在视口内部，坐标原点(0,0)是视口的中心点，因此视口左下角坐标为(-1,-1)，而右上角坐标为(1,1)。

##### 5.缓冲区

顶点信息保存在JavaScript的类型化数组中，使用之前必须转换到WebGL的缓冲区。要创建缓冲区，可以调用gl.createBuffer()，然后使用gl.bindBuffer()绑定到WebGL上下文。这两步做完以后，就可以用数据来填充缓冲区了。

在包含缓冲区的页面重载之前，缓冲区始终保留在内存中。如果你不想要某个缓冲区了，可以直接调用gl.deleteBuffer()释放内存。

##### 6.错误

JavaScript与WebGL之间的一个最大区别在于，WebGL操作一般不会抛出错误。为了知道是否有错误发生，必须在调用某个可能出错的方法后，手工调用gl.getError()方法。这个方法返回一个表示错误类型的常量。可能的错误常量如下。

- （1）gl.NO_ERROR：上一次操作没有发生错误（值为0）。
- （2）gl.INVALID_ENUM：应该给方法传入WebGL常量，但却传错了参数。
- （3）gl.INVALID_VALUE：在需要无符号数的地方传入了负值。
- （4）gl.INVALID_OPERATION：在当前状态下不能完成操作。
- （5）gl.OUT_OF_MEMORY：没有足够的内存完成操作。
- （6）gl.CONTEXT_LOST_WEBGL：由于外部事件（如设备断电）干扰丢失了当前WebGL的上下文。

##### 7.着色器

着色器（shader）是OpenGL 中的另一个概念。WebGL中有两种着色器：定点着色器和片段（或像素）着色器。顶点着色器用于将3D顶点转换为需要渲染的2D点。片段着色器用于准确计算要绘制的每个像素的颜色。WebGL的着色器是使用GLSL（OpenGL Shading Language，OpenGL着色器）写的，GLSL是一种与C和JavaScript完全不同的语言。

##### 8.编写着色器

GLSL是一种类C语言，专门用于编写OpenGL着色器。因为WebGL是OpenGL ES 2.0的实现，所以OpenGL中使用的着色器可以直接在WebGL中使用。

每个着色器都有一个main()方法，该方法在绘图期间会重复执行。为着色器传递数据的方式有两种：Attribute和Uniform。通过Attribute可以向顶点着色器传入顶点信息，通过Uniform可以向任何着色器传入常量值。Attribute和Uniform在main()方法外部定义，分别使用关键字attribute和uniform。

##### 9.编写着色器程序

浏览器不能理解GLSL程序，因此必须准备好字符串形式的GLSL程序，以便编译并链接到着色器程序。

##### 10.为着色器传入值

前面定义的着色器必须接收一个值才能工作。为了给着色器传入这个值，必须先找到要接收这个值的变量。

##### 11.调试着色器和程序

与着色器的其他操作一样，着色器操作也可能会失败，而且也是静默失败。如果你想找到着色器或程序执行中是否发生了错误，必须亲自询问WebGL上下文。

##### 12.绘图

WebGL只能绘制三种形状：点、线和三角。其他所有形状都是由这三种基本形状合成之后，再绘制到三维空间中的。执行绘图操作要调用gl.drawArrays()或gl.drawElements()方法，前者用于数组缓冲区，后置用于元素数组缓冲区。

##### 13.纹理

WebGL的纹理可以使用DOM中的图像。要创建一个新纹理，可以调用gl.createTexture()，然后再将一副图像绑定到该纹理。如果图像尚未加载到内存中，可能需要创建一个Image对象的实例，以便动态加载图像。图像加载完成之前，纹理不会初始化，因此，必须在load事件触发后才能设置纹理。

##### 14.读取像素

与2D上下文类似，通过WebGL上下文也能读取像素值。读取像素值的方法readPixels()与OpenGL中的同名方法只有一点不同，即最后一个参数必须是类型化数组。像素信息是从帧缓冲区读取的，然后保存在类型化数组中。readPixels()方法的参数有：x、y、宽度、高度、图像格式、数据类型和类型化数组。前4个参数指定读取哪个区域中的像素。图像格式参数几乎总是gl.RGBA。数据类型用于指定保存在类型化数组中的数据类型，但有以下限制。

- （1）如果类型是gl.UNSIGNED_BYTE，则类型化数组必须是Unit8Array。
- （2）如果类型是gl.UNSIGNED_SHORT_5_6_5、gl.UNSIGNED_SHORT_4_4_4_4、或gl.UNSIGNED_SHORT_5_5_5_1，则类型化数组必须是Unit16Array。

#### 15.3.3 支持

Firefox4+和Chrome都实现了WebGL API。Safari5.1也实现了WebGL，但默认是禁用的。理程序。

[返回上一篇](javascript_04.md)
[继续下一篇](javascript_06.md)